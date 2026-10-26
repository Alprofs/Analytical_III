const QuizController = {
    currentRoundQuestions: [],
    currentIndex: 0,
    currentRound: 1,
    lectureId: null,

    settings: {
        shuffle: true,
        retryWrong: true,
        timerVal: 0
    },
    timerInterval: null,
    timeLeft: 0,

    openSettings(lectureId) {
        this.lectureId = lectureId;
        document.getElementById('quiz-settings-overlay').style.display = 'flex';
    },

    applySettingsAndStart() {
        this.settings.shuffle = document.getElementById('setting-shuffle').checked;
        this.settings.retryWrong = document.getElementById('setting-retry').checked;
        this.settings.timerVal = parseInt(document.getElementById('setting-timer').value);

        document.getElementById('quiz-settings-overlay').style.display = 'none';
        this.startQuiz();
    },

    startQuiz() {
        const lecture = DataStore.getLectureById(this.lectureId);
        let fullBank = JSON.parse(JSON.stringify(lecture.quiz));

        if (this.settings.shuffle) {
            fullBank = fullBank.sort(() => Math.random() - 0.5);
        }

        this.prepareRound(fullBank);
        this.currentRound = 1;
        this.loadQuestion();
    },

    prepareRound(questionsArray) {
        this.currentRoundQuestions = questionsArray.map(q => {
            let cloned = JSON.parse(JSON.stringify(q));
            cloned.userAnswerIndex = null;
            cloned.revealed = false;

            if (cloned.type === 'tf') {
                cloned.shuffledIndices = Array.from(Array(cloned.options.length).keys());
            } else if (cloned.type === 'crash' || cloned.type === 'written' || cloned.type === 'essay') {
                cloned.correct = 1;
            } else if (cloned.options && Array.isArray(cloned.options)) {
                cloned.shuffledIndices = Array.from(Array(cloned.options.length).keys()).sort(() => Math.random() - 0.5);
            }
            return cloned;
        });
        this.currentIndex = 0;
    },

    // دوال نظام الاسترجاع النشط والتقييم الذاتي الجديد للأسئلة المقالية
    revealWrittenAnswer() {
        const qData = this.currentRoundQuestions[this.currentIndex];
        qData.revealed = true;
        this.clearTimer();
        UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
    },

    submitWrittenEvaluation(isCorrect) {
        const qData = this.currentRoundQuestions[this.currentIndex];
        qData.userAnswerIndex = isCorrect ? qData.correct : -1;
        UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
    },

    initCrashData(qData) {
        const isAr = (typeof UI !== 'undefined' && UI.isRTL);

        let rawBlanks;
        if (isAr && qData.blanksAr && qData.blanksAr.length > 0) {
            rawBlanks = qData.blanksAr;
        } else if (qData.blanks && qData.blanks.length > 0) {
            rawBlanks = qData.blanks;
        } else if (isAr && qData.answerChunksAr && qData.answerChunksAr.length > 0) {
            rawBlanks = qData.answerChunksAr;
        } else {
            rawBlanks = qData.answerChunks || [];
        }

        qData.words = rawBlanks.map(w => w.replace(/[()]/g, '').replace(/\s+/g, ' ').trim()).filter(Boolean);
        qData.currentWordIndex = 0;
        qData.completedWords = [];
        this.setupCurrentWord(qData);
    },

    setupCurrentWord(qData) {
        if (!qData.words || qData.currentWordIndex >= qData.words.length) {
            qData.userAnswerIndex = qData.correct;
            return;
        }

        const answer = qData.words[qData.currentWordIndex];
        const wordParts = answer.split(' ').filter(Boolean);

        qData.currentGroups = wordParts.map(w => Array.from(w).length);

        const chars = Array.from(wordParts.join(''));
        qData.currentSlots = Array(chars.length).fill(null);
        qData.currentPool = chars.map((ch, idx) => ({
            id: idx,
            char: ch,
            used: false
        })).sort(() => Math.random() - 0.5);
    },

    selectCrashLetter(tileId) {
        const qData = this.currentRoundQuestions[this.currentIndex];
        if (qData.userAnswerIndex !== null || !qData.currentSlots) return;

        const emptyIdx = qData.currentSlots.indexOf(null);
        if (emptyIdx === -1) return;

        const tile = qData.currentPool.find(t => t.id === tileId);
        if (!tile || tile.used) return;

        tile.used = true;
        qData.currentSlots[emptyIdx] = {
            tileId: tile.id,
            char: tile.char
        };

        if (!qData.currentSlots.includes(null)) {
            this.checkCurrentWord(qData);
        } else {
            UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
        }
    },

    removeCrashLetter(slotIndex) {
        const qData = this.currentRoundQuestions[this.currentIndex];
        if (qData.userAnswerIndex !== null || !qData.currentSlots) return;

        const slot = qData.currentSlots[slotIndex];
        if (!slot) return;

        const tile = qData.currentPool.find(t => t.id === slot.tileId);
        if (tile) tile.used = false;

        qData.currentSlots[slotIndex] = null;
        UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
    },

    checkCurrentWord(qData) {
        const fullAnswer = qData.words[qData.currentWordIndex];
        const targetLetters = fullAnswer.replace(/\s+/g, '');
        const userLetters = qData.currentSlots.map(s => s.char).join('');

        if (userLetters.toLowerCase() === targetLetters.toLowerCase()) {
            qData.completedWords.push(fullAnswer);
            qData.currentWordIndex++;

            if (qData.currentWordIndex >= qData.words.length) {
                qData.userAnswerIndex = qData.correct;
                this.clearTimer();
            } else {
                this.setupCurrentWord(qData);
            }
            UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
        } else {
            qData.crashWrong = true;
            UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
            setTimeout(() => {
                qData.crashWrong = false;
                if (qData.currentSlots) {
                    qData.currentSlots.forEach(s => {
                        if (s) {
                            const tile = qData.currentPool.find(t => t.id === s.tileId);
                            if (tile) tile.used = false;
                        }
                    });
                    qData.currentSlots.fill(null);
                }
                UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
            }, 600);
        }
    },

    loadQuestion() {
        this.clearTimer();
        const qData = this.currentRoundQuestions[this.currentIndex];
        if (qData.type === 'crash' && !qData.words) {
            this.initCrashData(qData);
        }
        UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);

        if (this.settings.timerVal > 0 && qData.userAnswerIndex === null) {
            this.startTimer();
        }
    },

    startTimer() {
        this.timeLeft = this.settings.timerVal;
        this.updateTimerUI();

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerUI();

            if (this.timeLeft <= 0) {
                this.clearTimer();
                this.selectOption(null, -1);
            }
        }, 1000);
    },

    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    updateTimerUI() {
        const timerDisplay = document.getElementById('quiz-timer-display');
        if (timerDisplay) {
            timerDisplay.innerHTML = `⏱️ ${this.timeLeft}s`;
            if (this.timeLeft <= 5) {
                timerDisplay.classList.add('warning');
            } else {
                timerDisplay.classList.remove('warning');
            }
        }
    },

    selectOption(selectedBtn, originalIdx) {
        this.clearTimer();
        const qData = this.currentRoundQuestions[this.currentIndex];
        qData.userAnswerIndex = originalIdx;
        UI.renderQuizQuestion(qData, this.currentIndex, this.currentRoundQuestions.length, this.currentRound);
    },

    nextQuestion() {
        if (this.currentIndex < this.currentRoundQuestions.length - 1) {
            this.currentIndex++;
            this.loadQuestion();
        } else {
            this.evaluateRoundEnd();
        }
    },

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.loadQuestion();
        }
    },

    evaluateRoundEnd() {
        let failedQuestions = this.currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

        if (failedQuestions.length > 0 && this.settings.retryWrong) {
            this.currentRound++;
            let cleanFailed = failedQuestions.map(q => {
                return {
                    type: q.type,
                    question: q.question,
                    questionAr: q.questionAr,
                    image: q.image,
                    options: q.options,
                    optionsAr: q.optionsAr,
                    answerChunks: q.answerChunks,
                    answerChunksAr: q.answerChunksAr,
                    blanks: q.blanks,
                    blanksAr: q.blanksAr,
                    correct: q.correct,
                    hint: q.hint,
                    hintAr: q.hintAr
                };
            });
            if (this.settings.shuffle) {
                cleanFailed = cleanFailed.sort(() => Math.random() - 0.5);
            }
            this.prepareRound(cleanFailed);
            this.loadQuestion();
        } else {
            UI.showWinOverlay();
        }
    },

    forceExit() {
        this.clearTimer();
        this.currentRoundQuestions = [];
    }
};

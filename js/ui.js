const UI = {
    container: document.getElementById('app-container'),
    backBtn: document.getElementById('back-btn'),
    appTitle: document.getElementById('app-title'),
    translateBtn: document.getElementById('floating-translate-btn'),
    currentLecture: null,
    isRTL: false,
    activeSection: null,

    init() {
        this.initTheme();
        this.isRTL = false;
        document.body.classList.remove('rtl-mode');
    },

    // معالج الكلمات المفتاحية: تلوين الكلمة فقط بدون خلفيات أو مربعات
    parseKeywords(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span class="highlight-keyword">$1</span>')
            .replace(/\*([^\*]+)\*/g, '<span class="highlight-keyword">$1</span>');
    },

    hideAllOverlays() {
        document.getElementById('win-overlay').style.display = 'none';
    },

    showWelcomeModal() {
        document.getElementById('welcome-overlay').style.display = 'flex';
    },

    closeWelcomeModal() {
        document.getElementById('welcome-overlay').style.display = 'none';
        localStorage.setItem('analyticalAppVisited_v2', 'true');
    },

    openSidebar() {
        document.getElementById('sidebar-overlay').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('sidebar').classList.add('open');
        }, 10);
    },

    closeSidebar(e) {
        if (e && e.target.id !== 'sidebar-overlay') return;
        document.getElementById('sidebar').classList.remove('open');
        setTimeout(() => {
            document.getElementById('sidebar-overlay').style.display = 'none';
        }, 300);
    },

    showPrivacy() {
        this.closeSidebar();
        setTimeout(() => {
            document.getElementById('privacy-overlay').style.display = 'flex';
        }, 300);
    },

    toggleTranslation() {
        const appContainer = document.getElementById('app-container');

        // 1. حفظ الكروت المفتوحة حالياً حتى لا تنغلق عند الترجمة
        const openBlockIds = [];
        if (appContainer) {
            appContainer.querySelectorAll('.kid-reveal-card.open, .oral-recall-card.open, .qna-recall-card.open').forEach(card => {
                const blockId = card.getAttribute('data-block-id');
                if (blockId !== null) openBlockIds.push(blockId);
            });
        }

        // 2. حفظ موضع الشاشة الحالي بدقة
        const currentScroll = appContainer ? appContainer.scrollTop : 0;

        // 3. تغيير اتجاه اللغة
        this.isRTL = !this.isRTL;
        const textSpan = document.getElementById('translate-text');

        if (this.isRTL) {
            document.body.classList.add('rtl-mode');
            if (textSpan) textSpan.innerText = "English ← Arabic";
        } else {
            document.body.classList.remove('rtl-mode');
            if (textSpan) textSpan.innerText = "English → Arabic";
        }

        // 4. إعادة بناء الشاشة مع الحفاظ على الفتح وموضع التمرير
        if (this.activeSection === 'summary' || this.activeSection === 'qna' || this.activeSection === 'oral') {
            this.openSection(this.activeSection, true);

            // إعادة فتح نفس الكروت التي كانت مفتوحة
            if (appContainer && openBlockIds.length > 0) {
                openBlockIds.forEach(id => {
                    const card = appContainer.querySelector(`[data-block-id="${id}"]`);
                    if (card) card.classList.add('open');
                });
            }

            // تثبيت موضع الصفحة في نفس المكان بدون القفز للأعلى
            requestAnimationFrame(() => {
                if (appContainer) {
                    appContainer.scrollTop = currentScroll;
                }
            });
        } else if (this.activeSection === 'quiz') {
            if (typeof QuizController !== 'undefined' && QuizController.currentRoundQuestions.length > 0) {
                QuizController.loadQuestion();
            } else {
                this.openSection('quiz');
            }
        }
    },

    // 1. الصفحة الرئيسية: كروت المحاضرات بالزر التفاعلي الجديد
    renderHome() {
        document.body.classList.remove('quiz-active');
        this.init();
        this.backBtn.classList.add('hidden');
        document.getElementById('menu-btn').classList.remove('hidden');
        this.translateBtn.classList.add('hidden');

        this.appTitle.innerHTML = `
            <svg viewBox="0 0 64 64" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
                <path d="M42 48l-8-18V16h4V10H26v6h4v14l-8 18c-1.5 3.5.5 8 5 8h10c4.5 0 6.5-4.5 5-8z" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M41 45.5L34.5 31h-5l-6.5 14.5c-.8 1.8.2 4.5 2.5 4.5h13c2.3 0 3.3-2.7 2.5-4.5z" fill="#2196F3"/>
                <ellipse cx="32" cy="31" rx="2.5" ry="1" fill="#64B5F6"/>
                <circle cx="29" cy="44" r="2.5" fill="#ffffff"/>
                <circle cx="34" cy="40" r="1.5" fill="#ffffff"/>
                <circle cx="31" cy="36" r="1.5" fill="#ffffff"/>
                <line x1="28" y1="20" x2="32" y2="20" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>
                <line x1="28" y1="24" x2="30" y2="24" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;

        let html = `<div class="screen"><div class="lecture-grid">`;

        DataStore.lectures.forEach(lecture => {
            const isCompleted = DataStore.userProgress.completedLectures.includes(lecture.id);
            const lockedClass = lecture.isPlaceholder ? "locked" : "";
            const onClickAttr = lecture.isPlaceholder ?
                `onclick="alert('Content to be added soon!')"` :
                `onclick="App.openLecture(${lecture.id})"`;

            const btnLabel = isCompleted ? "Review Lecture" : "Start Learning";
            const btnIcon = isCompleted 
                ? `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>`
                : `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;

            html += `
                <div class="lecture-card ${lockedClass}" ${onClickAttr}>
                    <div class="lecture-card-header">
                        <span class="lec-badge">Lecture ${lecture.id}</span>
                        ${isCompleted ? '<span class="lec-status-done">✓ Completed</span>' : ''}
                    </div>
                    <div class="lecture-title">${lecture.title}</div>
                    <div class="lecture-btn-wrapper">
                        <button type="button" class="lec-start-btn ${isCompleted ? 'completed-btn' : ''}">
                            ${btnIcon}
                            <span>${btnLabel}</span>
                        </button>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
        this.container.innerHTML = html;
    },

    renderLecture(lecture) {
        document.getElementById('app-container').scrollTop = 0;
        this.currentLecture = lecture;

        document.getElementById('menu-btn').classList.add('hidden');
        this.backBtn.classList.remove('hidden');
        this.translateBtn.classList.add('hidden');

        this.appTitle.innerHTML = `<span style="color: var(--secondary-blue-dark); font-weight: 900; font-size: 24px;">Lec ${lecture.id}</span>`;
        this.backBtn.onclick = () => this.renderHome();

        let gridHtml = `<div class="screen" id="lecture-menu"><div class="section-grid">`;
        if (lecture.summary) gridHtml += this.createSectionCard('summary', 'Summary', 'ملخص شامل لجميع أجزاء المحاضرة والقوانين');
        if (lecture.qna && lecture.qna.length > 0) gridHtml += this.createSectionCard('qna', 'Q&A', 'إجابات ونماذج أسئلة المحاضرة');
        if (lecture.oral && lecture.oral.length > 0) gridHtml += this.createSectionCard('oral', 'Oral Questions', 'أسئلة امتحان الشفوي بنظام الحفظ التفاعلي');
        if (lecture.quiz && lecture.quiz.length > 0) gridHtml += this.createSectionCard('quiz', 'QUIZ', 'اختبر نفسك بأسئلة تفاعلية ومقالية');

        gridHtml += `</div></div><div id="section-content"></div>`;
        this.container.innerHTML = gridHtml;
    },

    createSectionCard(id, title, desc) {
        return `
            <div class="section-card" onclick="UI.openSection('${id}')">
                <div class="section-title" style="font-family: 'Cairo', sans-serif;">${title}</div>
                <div class="section-desc" style="font-family: 'Cairo', sans-serif;">${desc}</div>
            </div>
        `;
    },

    // 2. فتح الأقسام وشاشات المحاضرة
    openSection(sectionId, preserveScroll = false) {
        if (!preserveScroll) {
            document.getElementById('app-container').scrollTop = 0;
        }
        this.activeSection = sectionId;
        document.getElementById('lecture-menu').style.display = 'none';
        const contentDiv = document.getElementById('section-content');
        contentDiv.style.display = 'block';

        if (sectionId === 'summary' || sectionId === 'qna' || sectionId === 'oral') {
            this.translateBtn.classList.remove('hidden');
        } else {
            this.translateBtn.classList.add('hidden');
        }

        this.backBtn.onclick = () => {
            this.init();
            contentDiv.style.display = 'none';
            document.getElementById('lecture-menu').style.display = 'block';
            this.translateBtn.classList.add('hidden');
            this.backBtn.onclick = () => this.renderHome();
        };

        const lec = this.currentLecture;
        let contentHtml = ``;

        // ==================== 1. قسم الشرح (بنفس استايل تطبيق Writing تماماً) ====================
        if (sectionId === 'summary') {
            let summaryData = (this.isRTL && lec.summaryAr && lec.summaryAr.length > 0) ? lec.summaryAr : lec.summary;
            let html = '';

            const darkColors = ['#E91E63', '#009688', '#FF9800', '#673AB7', '#2196F3'];
            const lightColors = ['#FCE4EC', '#E0F2F1', '#FFF3E0', '#EDE7F6', '#E3F2FD'];

            if (Array.isArray(summaryData)) {
                summaryData.forEach((block, index) => {
                    const primaryColor = darkColors[index % darkColors.length];
                    const bgColor = lightColors[index % lightColors.length];
                    let txt = block.content ? this.parseKeywords(block.content.replace(/\n/g, '<br>')) : '';

                    // أ) كرت القوانين والمعادلات الكيميائية
                    if (block.type === 'equation' || block.type === 'formula') {
                        let whereHtml = '';
                        if (block.where && Array.isArray(block.where)) {
                            whereHtml = `
                                <div class="eq-legend">
                                    <div class="eq-legend-title">${this.isRTL ? "دليل الرموز والمصطلحات:" : "Where:"}</div>
                                    <div class="eq-legend-grid">
                                        ${block.where.map(item => `
                                            <div class="eq-legend-item">
                                                <span class="eq-sym">${item.symbol}</span>
                                                <span class="eq-desc">${item.meaning}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }
                        let noteHtml = block.note ? `<div class="eq-note">💡 ${this.parseKeywords(block.note)}</div>` : '';

                        html += `
                            <div data-block-id="${index}" class="kid-section-card chem-equation-card">
                                <div class="kid-section-title" style="background: #1976D2;">${block.title || (this.isRTL ? "معادلة كيميائية / قانون" : "Formula / Law")}</div>
                                <div class="chem-eq-formula">${block.formula || txt}</div>
                                ${whereHtml}
                                ${noteHtml}
                            </div>
                        `;

                    // ب) كروت الاستكشاف المنسدلة النظيفة
                    } else if (block.type === 'reveal' || block.type === 'flip') {
                        html += `
                            <div data-block-id="${index}" class="kid-reveal-card" style="border-color: ${primaryColor};" onclick="this.classList.toggle('open')">
                                <div class="kid-reveal-header" style="background-color: ${bgColor}; color: ${primaryColor};">
                                    <span>${block.title || block.term || (this.isRTL ? "استكشف التفاصيل" : "Tap to explore")}</span>
                                    <span class="kid-reveal-icon" style="background: ${primaryColor}; color: white;">▾</span>
                                </div>
                                <div class="kid-reveal-body">
                                    ${txt}
                                </div>
                            </div>
                        `;

                    // ج) بطاقة سؤال الامتحان VIP
                    } else if (block.type === 'vip') {
                        html += `
                            <div data-block-id="${index}" class="kid-section-card" style="border-color: #EF5350; box-shadow: 0 6px 0 #EF5350;">
                                <div class="kid-section-title" style="background: #EF5350;">${block.title || (this.isRTL ? "سؤال امتحان هام ⭐" : "Exam Priority ⭐")}</div>
                                <div class="kid-info-box" style="border-inline-start: 6px solid #EF5350; background-color: #FFEBEE;">
                                    <div class="node-content">${txt}</div>
                                </div>
                            </div>
                        `;

                    // د) جدول المقارنة الثنائي الملون (Compare Table)
                    } else if (block.type === 'compare') {
                        let v1 = (block.val1 || '').replace(/\n/g, '<br>');
                        let v2 = (block.val2 || '').replace(/\n/g, '<br>');
                        html += `
                            <div data-block-id="${index}" class="kid-compare-table">
                                <div class="compare-col" style="background: #E3F2FD;">
                                    <div class="compare-header" style="color: #1976D2;">${block.title1}</div>
                                    <div class="compare-body">${this.parseKeywords(v1)}</div>
                                </div>
                                <div class="compare-col" style="background: #FCE4EC; border-inline-start: 2px solid #ccc;">
                                    <div class="compare-header" style="color: #C2185B;">${block.title2}</div>
                                    <div class="compare-body">${this.parseKeywords(v2)}</div>
                                </div>
                            </div>
                        `;

                    // هـ) كرت المعلومات الملونة (Info Box)
                    } else if (block.type === 'definition' || block.type === 'note' || block.type === 'tip') {
                        html += `
                            <div data-block-id="${index}" class="kid-info-box" style="border-inline-start: 6px solid ${primaryColor}; background-color: ${bgColor};">
                                <div class="node-title" style="color: ${primaryColor};">${block.term || block.title || 'Note'}</div>
                                <div class="node-content">${txt}</div>
                            </div>
                        `;

                    // و) الخطوات المتسلسلة (Steps)
                    } else if (block.type === 'steps') {
                        let stepsHtml = (block.items || []).map((s, idx) => `
                            <div class="compact-step">
                                <div class="compact-step-num" style="background: ${primaryColor};">${idx + 1}</div>
                                <div class="compact-step-text">${this.parseKeywords(s)}</div>
                            </div>
                        `).join('');

                        html += `
                            <div data-block-id="${index}" class="kid-steps-container">
                                <div class="node-title" style="color:${primaryColor};">${block.title || 'Steps'}</div>
                                <div class="compact-steps-wrapper">${stepsHtml}</div>
                            </div>
                        `;

                    // ز) الجداول التلخيصية
                    } else if (block.type === 'table') {
                        let headersHtml = block.headers.map(h => `<th>${h}</th>`).join('');
                        let rowsHtml = block.rows.map(r => `<tr>${r.map(d => `<td>${this.parseKeywords(d.replace(/\n/g, '<br>'))}</td>`).join('')}</tr>`).join('');
                        html += `<div data-block-id="${index}" class="summary-table-wrapper"><table class="summary-table"><thead><tr>${headersHtml}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`;
                    } else if (block.type === 'title') {
                        html += `<h3 data-block-id="${index}" style="color:var(--secondary-blue-dark); margin: 25px 0 10px; font-weight:900;">${txt}</h3>`;
                    } else if (block.type === 'text') {
                        html += `<p data-block-id="${index}" style="margin-bottom:12px; font-weight:700; line-height:1.7;">${txt}</p>`;
                    }
                });
                contentHtml = `<div class="screen summary-wrapper english-content">${html}</div>`;
            }

        // ==================== 2. قسم Q&A (نظام استرجاع نشط بلون تركواز زمردي مميز) ====================
        } else if (sectionId === 'qna') {
            let qnaData = (this.isRTL && lec.qnaAr && lec.qnaAr.length > 0) ? lec.qnaAr : lec.qna;
            let listHtml = '';
            if (Array.isArray(qnaData)) {
                listHtml = qnaData.map((item, idx) => `
                    <div data-block-id="${idx}" class="qna-recall-card" onclick="this.classList.toggle('open')">
                        <div class="qna-q-header">
                            <div class="qna-q-title-group">
                                <span class="qna-q-badge">Q${idx + 1}</span>
                                <span class="qna-q-text">📝 ${this.parseKeywords(item.q)}</span>
                            </div>
                            <span class="qna-toggle-arrow">▾</span>
                        </div>
                        <div class="qna-a-body">
                            <div class="qna-a-wrapper">
                                <div class="qna-a-label">${this.isRTL ? "الإجابة النموذجية:" : "Model Answer:"}</div>
                                <div class="qna-a-content">${this.parseKeywords(item.a ? item.a.replace(/\n/g, '<br>') : '')}</div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            contentHtml = `<div class="screen english-content" style="display:flex; flex-direction:column; gap:14px;">${listHtml}</div>`;

        // ==================== 3. قسم الشفوي Oral (نظيف وبدون أزرار علوية مزعجة) ====================
        } else if (sectionId === 'oral') {
            let oralData = (this.isRTL && lec.oralAr && lec.oralAr.length > 0) ? lec.oralAr : lec.oral;
            let listHtml = '';
            if (Array.isArray(oralData)) {
                listHtml = oralData.map((item, idx) => {
                    let answerHtml = '';
                    if (item.points && Array.isArray(item.points)) {
                        answerHtml = `
                            <div class="oral-points-list">
                                ${item.points.map((pt, pIdx) => `
                                    <div class="oral-point-branch">
                                        <span class="oral-point-num">${pIdx + 1}</span>
                                        <span class="oral-point-text">${this.parseKeywords(pt.replace(/\n/g, '<br>'))}</span>
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    } else if (item.a) {
                        const lines = item.a.split('\n').map(l => l.trim()).filter(Boolean);
                        if (lines.length > 1) {
                            answerHtml = `
                                <div class="oral-points-list">
                                    ${lines.map((line, pIdx) => `
                                        <div class="oral-point-branch">
                                            <span class="oral-point-num">${pIdx + 1}</span>
                                            <span class="oral-point-text">${this.parseKeywords(line.replace(/^[•\-\*]\s*/, ''))}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                        } else {
                            answerHtml = `<p class="oral-single-answer">${this.parseKeywords(item.a)}</p>`;
                        }
                    }

                    return `
                        <div data-block-id="${idx}" class="oral-recall-card" onclick="this.classList.toggle('open')">
                            <div class="oral-q-header">
                                <div class="oral-q-title-group">
                                    <span class="oral-q-badge">Q${idx + 1}</span>
                                    <span class="oral-q-text">🎤 ${this.parseKeywords(item.q)}</span>
                                </div>
                                <span class="oral-toggle-arrow">▾</span>
                            </div>
                            <div class="oral-a-body">
                                <div class="oral-a-wrapper">
                                    <div class="oral-a-label">${this.isRTL ? "الإجابة النموذجية:" : "Model Answer:"}</div>
                                    ${answerHtml}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }
            contentHtml = `<div class="screen english-content" style="display:flex; flex-direction:column; gap:14px;">${listHtml}</div>`;

        // ==================== 4. شاشة بدء الكويز ====================
        } else if (sectionId === 'quiz') {
            contentHtml = `
                <div class="screen" style="text-align:center; padding-top: 60px;">
                    <h2 style="margin-bottom: 25px; font-family: 'Cairo', sans-serif;">جاهز لاختبار فهمك؟</h2>
                    <button class="btn-main" style="width: 80%; max-width: 320px;" onclick="QuizController.openSettings(${lec.id})">ابدأ الاختبار الآن</button>
                </div>
            `;
            this.backBtn.classList.remove('hidden');
        }

        contentDiv.innerHTML = contentHtml;

        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    },

    // 3. شاشة الأسئلة التفاعلية (MCQ + T/F + الأسئلة المقالية الفلاش كارد)
    renderQuizQuestion(qData, currentIndex, totalNum, roundNum) {
        document.body.classList.add('quiz-active');
        this.activeSection = 'quiz';
        const contentDiv = document.getElementById('section-content');
        const progressPercent = ((currentIndex + 1) / totalNum) * 100;
        const isAnswered = qData.userAnswerIndex !== null;

        this.translateBtn.classList.remove('hidden');

        // استخراج ومعالجة نص السؤال بدون خلفيات
        let qText = (this.isRTL && qData.questionAr) ? qData.questionAr : qData.question;
        qText = this.parseKeywords(qText);

        if (qData.type === 'tf') {
            if (isAnswered && qData.correct === 1) {
                qText = qText.replace(/__(.*?)__/g, '<span style="text-decoration: underline 4px red; font-weight: 900; color: #D32F2F;">$1</span>');
            } else {
                qText = qText.replace(/__(.*?)__/g, '$1');
            }
        }

        let qOptions = (this.isRTL && qData.optionsAr && qData.optionsAr.length > 0) ? qData.optionsAr : qData.options;
        let qHint = (this.isRTL && qData.hintAr) ? qData.hintAr : qData.hint;
        if (qHint) {
            qHint = this.parseKeywords(qHint.replace(/\n/g, '<br>'));
        }

        let imageHtml = qData.image ? `<img src="${qData.image}" class="quiz-q-img" />` : '';
        let timerHtml = (QuizController.settings.timerVal > 0) ? `<div id="quiz-timer-display" class="quiz-timer">⏱️ ${QuizController.timeLeft || QuizController.settings.timerVal}s</div>` : '';

        let html = `
            <div class="quiz-wrapper">
                <div class="quiz-header">
                    <span class="close-btn" onclick="UI.exitQuiz()">
                        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                    <div class="quiz-progress-bar-bg">
                        <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                    ${timerHtml}
                    <div style="font-weight: 900; font-size: 16px; margin-left:10px; color: var(--text-main); direction: ltr;">${currentIndex + 1}/${totalNum}</div>
                </div>
                
                ${QuizController.settings.retryWrong ? `<div id="round-info">Round ${roundNum}</div>` : ''}
                
                ${imageHtml}
                <div class="quiz-question-box">${qText.replace(/\n/g, '<br>')}</div>
        `;

        // ================= أ) الأسئلة المقالية بنظام الفلاش كارد والتقييم الذاتي =================
        if (qData.type === 'crash' || qData.type === 'written' || qData.type === 'essay') {
            const isRevealed = qData.revealed || qData.userAnswerIndex !== null;

            let modelAnswerText = (this.isRTL && qData.answerAr) ? qData.answerAr : qData.answer;
            if (!modelAnswerText) {
                if (this.isRTL && qData.blanksAr) modelAnswerText = qData.blanksAr.join(' ');
                else if (qData.blanks) modelAnswerText = qData.blanks.join(' ');
                else if (qData.answerChunks) modelAnswerText = qData.answerChunks.join(' ');
            }
            modelAnswerText = this.parseKeywords(modelAnswerText ? modelAnswerText.replace(/\n/g, '<br>') : '');

            html += `<div class="written-question-container">`;

            if (!isRevealed) {
                html += `
                    <div class="written-prompt-box">
                        <p class="written-hint-txt">${this.isRTL ? "استحضر الإجابة في ذهنك أولاً، ثم اضغط للاطلاع على النموذج:" : "Think of your answer first, then reveal the model answer:"}</p>
                        <button type="button" class="btn-reveal-answer" onclick="QuizController.revealWrittenAnswer()">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <span>${this.isRTL ? "إظهار الإجابة النموذجية" : "Reveal Model Answer"}</span>
                        </button>
                    </div>
                `;
            } else {
                html += `
                    <div class="written-answer-card ${isAnswered ? (qData.userAnswerIndex === qData.correct ? 'evaluated-good' : 'evaluated-retry') : ''}">
                        <div class="written-answer-header">
                            <span>💡 ${this.isRTL ? "الإجابة النموذجية المعتمدة:" : "Official Model Answer:"}</span>
                        </div>
                        <div class="written-answer-content">
                            ${modelAnswerText}
                        </div>
                    </div>
                `;

                if (!isAnswered) {
                    html += `
                        <div class="written-eval-section">
                            <p class="eval-title">${this.isRTL ? "قيّم إجابتك بأمانة:" : "Evaluate your recall:"}</p>
                            <div class="written-eval-buttons">
                                <button type="button" class="eval-btn eval-success" onclick="QuizController.submitWrittenEvaluation(true)">
                                    <span>✓</span> ${this.isRTL ? "عرفت الإجابة تماماً" : "I Got It Right"}
                                </button>
                                <button type="button" class="eval-btn eval-danger" onclick="QuizController.submitWrittenEvaluation(false)">
                                    <span>✗</span> ${this.isRTL ? "لم أعرفها / محتاجة مراجعة" : "Needs More Review"}
                                </button>
                            </div>
                        </div>
                    `;
                } else {
                    const wasCorrect = qData.userAnswerIndex === qData.correct;
                    html += `
                        <div class="written-status-badge ${wasCorrect ? 'status-correct' : 'status-wrong'}">
                            ${wasCorrect 
                                ? (this.isRTL ? "✓ تم تسجيلها: إجابة متقنة ومحفوظة" : "✓ Marked as Mastered")
                                : (this.isRTL ? "⚠️ تم تسجيلها للمراجعة في الجولة القادمة" : "⚠️ Queued for Retry in Next Round")}
                        </div>
                    `;
                }
            }

            html += `</div>`;

        // ================= ب) أسئلة الاختيار من متعدد والصح والغلط =================
        } else {
            html += `<div class="options-container">`;
            qData.shuffledIndices.forEach(originalIdx => {
                let stateClass = "active-click";
                let clickAction = `onclick="QuizController.selectOption(this, ${originalIdx})"`;

                if (isAnswered) {
                    clickAction = "";
                    stateClass = "locked";
                    if (originalIdx === qData.correct) stateClass += " correct";
                    else if (originalIdx === qData.userAnswerIndex) stateClass += " wrong";
                }
                let optText = qOptions[originalIdx].replace(/\*\*/g, '').replace(/\n/g, '<br>');
                html += `<div class="option-btn ${stateClass}" ${clickAction}>${optText}</div>`;
            });
            html += `</div>`;
        }

        // ================= ج) صندوق التوضيح العلمي (Hint) =================
        if (isAnswered && qHint) {
            html += `
                <div class="quiz-hint-box">
                    <div class="hint-header">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>${this.isRTL ? "إضاءة وتوضيح علمي 💡" : "Key Scientific Explanation 💡"}</span>
                    </div>
                    <div class="hint-content">${qHint}</div>
                </div>
            `;
        }

        const backDisabled = currentIndex === 0 ? "disabled" : "";
        const nextDisabled = !isAnswered ? "disabled" : "";
        const nextText = (currentIndex === totalNum - 1 && isAnswered) 
            ? (this.isRTL ? "إنهاء الجولة 🏆" : "Finish Round 🏆") 
            : (this.isRTL ? "التالي" : "Next");

        html += `
                <div class="quiz-footer">
                
                    <button type="button" class="nav-btn prev" ${backDisabled} onclick="QuizController.prevQuestion()">${this.isRTL ? "السابق" : "Back"}</button>
                    <button type="button" class="nav-btn next" ${nextDisabled} onclick="QuizController.nextQuestion()">${nextText}</button>
                </div>
            </div>
        `;
        contentDiv.innerHTML = html;

        // تفعيل KaTeX داخل السؤال والخيارات والـ Hint
        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    },

    exitQuiz() {
        document.body.classList.remove('quiz-active');
        this.init();
        if (typeof QuizController !== 'undefined') QuizController.forceExit();
        document.getElementById('section-content').style.display = 'none';
        document.getElementById('lecture-menu').style.display = 'block';
        this.translateBtn.classList.add('hidden');
        this.backBtn.classList.remove('hidden');
        this.backBtn.onclick = () => this.renderHome();
    },

    showWinOverlay() {
        document.body.classList.remove('quiz-active');
        this.translateBtn.classList.add('hidden');
        document.getElementById('win-overlay').style.display = 'flex';
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#12D11E', '#2196F3', '#FFC107']
            });
        }
    },

    initTheme() {
        const savedTheme = localStorage.getItem('appTheme');
        const toggleInput = document.getElementById('dark-mode-toggle');

        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (toggleInput) toggleInput.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            if (toggleInput) toggleInput.checked = false;
        }
    },

    handleThemeToggle(isDark, save = true) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            if (save) localStorage.setItem('appTheme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            if (save) localStorage.setItem('appTheme', 'light');
        }
        const toggleInput = document.getElementById('dark-mode-toggle');
        if (toggleInput) toggleInput.checked = isDark;
    },

    showToast(message, actionText, actionCallback) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = `
            <div class="toast-text">${message}</div>
            <button class="toast-btn">${actionText}</button>
        `;

        toast.querySelector('.toast-btn').onclick = () => {
            actionCallback();
            removeToast(toast);
        };

        container.appendChild(toast);

        let timeout = setTimeout(() => removeToast(toast), 8000);
        let startX = 0, startY = 0, currentX = 0, currentY = 0;

        toast.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            toast.style.transition = 'none';
            clearTimeout(timeout);
        }, { passive: true });

        toast.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX - startX;
            currentY = e.touches[0].clientY - startY;
            toast.style.transform = `translate(${currentX}px, ${currentY}px)`;
            toast.style.opacity = Math.max(1 - (Math.abs(currentX) + Math.abs(currentY)) / 200, 0.3);
        }, { passive: true });

        toast.addEventListener('touchend', () => {
            toast.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

            if (Math.abs(currentX) > 60 || Math.abs(currentY) > 60) {
                removeToast(toast, currentX, currentY);
            } else {
                toast.style.transform = 'translate(0, 0)';
                toast.style.opacity = '1';
                timeout = setTimeout(() => removeToast(toast), 8000);
            }
        });

        function removeToast(el, dragX = 0, dragY = -30) {
            el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            let outX = dragX > 50 ? 150 : (dragX < -50 ? -150 : 0);
            let outY = dragY > 50 ? 150 : (dragY < -50 ? -150 : -50);

            if (dragX === 0 && dragY === -30) outY = -50;
            el.style.transform = `translate(${outX}px, ${outY}px)`;
            el.style.opacity = '0';
            setTimeout(() => {
                if (el.parentNode) el.remove();
            }, 300);
        }
    }
};
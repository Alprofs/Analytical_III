DataStore.lectures.push({
    id: 3,
    title: "Lec 3: Oxidation-Reduction Titrations (End Point Detection & Oxidizing Agents)",

    // =========================================================================
    // 1. ملخص المحاضرة والشرح المركز (Key Summaries, Comparisons & Scientific Terms)
    // =========================================================================
    summary: [
        {
            type: "vip",
            title: "⭐ [EXAM PRIORITY] Core Blackboard & Exam Focus Points",
            content: "1. *Self-Indicator Condition:* Must be intensely colored while its reduced form is *colorless* (e.g., $KMnO_4$). Its drawback: practical end point is slightly *higher* than the theoretical equivalence point.\n2. *Why K2Cr2O7 is NOT a self-indicator:* It is orange, but reduces to green ($Cr^{3+}$), causing visual interference.\n3. *Diphenylamine Titration Issue:* During $Fe^{2+}$ titration with dichromate, diphenylamine ($E^\\circ = +0.76\\text{ V}$) is oxidized before $Fe^{2+}$ ($E^\\circ = +0.77\\text{ V}$). *Fix:* Add $H_3PO_4$ (complexes $Fe^{3+}$, lowering $Fe^{3+}/Fe^{2+}$ potential) or use *N-phenylanthranilic acid* ($E^\\circ = +1.05\\text{ V}$).\n4. *Ferroin Indicator:* 1,10-phenanthroline ferrous chelate ($E^\\circ = 1.147\\text{ V}$, range: $1.088 - 1.206\\text{ V}$). Changes from *red* (reduced) to *pale blue* (oxidized).\n5. *Irreversible Indicators:* Methyl orange / Methyl red used in bromate titrations; destroyed irreversibly by free $Br_2$ to colorless.\n6. *Equivalent Weights of KMnO4:* Acid medium = $M.wt/5$; Neutral/weak alkaline = $M.wt/3$; Strongly alkaline = $M.wt/1$.\n7. *Copper Determination (Iodometry):* $SCN^-$ is added *near the end point* to displace adsorbed iodine from $Cu_2I_2$ precipitate, forming $Cu_2(SCN)_2$."
        },
        {
            type: "compare",
            title1: "Iodimetry (Direct Titration)",
            val1: "• *Definition:* Direct titration of reducing agents ($E^\\circ < +0.54\\text{ V}$) using standard Iodine.\n• *Titrant:* Standard $I_2$ solution.\n• *Titrand (Sample):* Reductants (e.g., $S_2O_3^{2-}$, $Sn^{2+}$, $AsO_3^{3-}$ in $NaHCO_3$).\n• *Indicator:* Starch added at the *beginning* of titration.\n• *End Point:* Appearance of permanent *blue color*.",
            title2: "Iodometry (Indirect Titration)",
            val2: "• *Definition:* Indirect titration of oxidizing agents ($E^\\circ > +0.54\\text{ V}$) with excess $I^-$, titrating liberated $I_2$.\n• *Titrant:* Standard Sodium Thiosulphate ($Na_2S_2O_3$).\n• *Titrand (Sample):* Oxidants (e.g., $MnO_4^-$, $Cr_2O_7^{2-}$, $Cu^{2+}$, $Fe^{3+}$).\n• *Indicator:* Starch added *near the end point* (straw yellow).\n• *End Point:* *Disappearance of blue color*."
        },
        {
            type: "compare",
            title1: "External Indicator (Spot Plate)",
            val1: "• *Principle:* Drops of titrated solution are tested outside the flask on a spot plate with an external reagent.\n• *Example:* Titration of $Fe^{2+}$ by $Cr_2O_7^{2-}$ using *Ferricyanide* $[Fe(CN)_6]^{3-}$; end point when blue color (ferrous ferricyanide) *fails to appear*.\n• *Drawbacks:* False end point and *loss of sample* during removal.",
            title2: "Internal Redox Indicator",
            val2: "• *Principle:* Added directly into the titration flask; responds to solution potential ($E$).\n• *Transition Range:* $E = E^\\circ_{\\text{In}} \\pm \\frac{0.0591}{n}$.\n• *Reversible:* Diphenylamine (colorless to violet), Ferroin (red to pale blue).\n• *Irreversible:* Methyl orange/red (irreversibly bleached by $Br_2$)."
        },
        {
            type: "table",
            headers: ["Oxidizing Agent", "Standard Type", "Equivalent Weight Formula", "Key Exam Characteristics"],
            rows: [
                ["Potassium Permanganate (KMnO4)", "Secondary (photosensitive, MnO2)", "Acid: M.wt/5\nNeutral: M.wt/3\nAlkaline: M.wt/1", "Strong oxidant; acts as self-indicator (violet -> colorless Mn2+)."],
                ["Potassium Dichromate (K2Cr2O7)", "Primary standard", "Acid: M.wt/6", "Moderate oxidant; used only in acidic medium; NOT a self-indicator (green Cr3+ interferes)."],
                ["Ceric Sulphate Ce(SO4)2", "Secondary standard (unstable)", "Acid: M.wt/1", "Acid added to prevent precipitation of CeO2.xH2O; Ferroin is preferred indicator."],
                ["Iodine (I2)", "Secondary standard (volatile/insoluble)", "Neutral/acid: M.wt/2", "Standardized against Na2S2O3 or KIO3; KI added to form soluble, non-volatile I3- complex."]
            ]
        },
        {
            type: "equation",
            title: "Effective Range of Internal Redox Indicator",
            formula: "$$E = E^\\circ_{\\text{In}} \\pm \\frac{0.0591}{n}$$",
            where: [
                { symbol: "E°_In", meaning: "Standard oxidation potential of the indicator" },
                { symbol: "n", meaning: "Number of electrons transferred in the indicator redox process" },
                { symbol: "Range ratio", meaning: "Visible transition occurs when [In_ox]/[In_red] changes between 1/10 and 10/1" }
            ],
            note: "For Diphenylamine (n=2, E°=0.76 V), Range = 0.73 - 0.79 V. For Ferroin (n=1, E°=1.147 V), Range = 1.088 - 1.206 V."
        },
        {
            type: "reveal",
            title: "⭐ Expected Scientific Terms (Click to Reveal)",
            content: "• Substance that indicates the titration end point by its own distinct color change without external addition: **[Self-indicator]**\n• Indicator tested outside the reaction vessel on a porcelain spot plate with sample drops: **[External indicator]**\n• Organic compound whose oxidized and reduced forms exhibit distinct, reversible colors depending on solution potential: **[Internal reversible redox indicator]**\n• 1,10-Phenanthroline-ferrous chelate complex used as a redox indicator: **[Ferroin]**\n• Indicator irreversibly destroyed and decolored by oxidation at the end point (e.g., bromate titrations): **[Irreversible redox indicator]**\n• Direct redox titration of reducing analytes using standard iodine solution: **[Iodimetry]**\n• Indirect redox titration where an oxidant liberates iodine from excess iodide, followed by thiosulfate titration: **[Iodometry]**\n• Soluble, non-volatile complex formed by dissolving iodine in concentrated potassium iodide: **[Triiodide complex (I3-)]**"
        }
    ],

    summaryAr: [
        {
            type: "vip",
            title: "⭐ [أهم نقاط الامتحان] الخلاصة وتركيزات الدكتور والسبورة",
            content: "١. *شرط الدليل الذاتي (Self-indicator):* أن يكون المحلول ملوناً ويختزل إلى صورة *عديمة اللون* (مثل $KMnO_4$). عيبه العملي: نقطة النهاية أعلى قليلاً من النقطة النظرية.\n٢. *علل: الدايكرومات لا يصلح كدليل ذاتي:* لأنه برتقالي ويختزل إلى أيون الكروميك الأخضر ($Cr^{3+}$) مما يسبب تداخلاً لونياً يمنع تمييز نقطة النهاية.\n٣. *مشكلة معايرة الحديدوز بالدايكرومات باستخدام ثنائي فينيل أمين:* جهد تأكسد الدليل ($0.76\\text{ V}$) يسبق جهد تأكسد الحديدوز ($0.77\\text{ V}$) فيتأكسد الدليل أولاً. *الحل:* إضافة حمض الفوسفوريك ($H_3PO_4$) لتقليل جهد الحديدوز، أو استخدام *N-phenylanthranilic acid*.\n٤. *دليل الفيروِين (Ferroin):* معقد 1,10-فينانثرولين مع الحديدوز ($E^\\circ = 1.147\\text{ V}$). لونه في الصورة المختزلة *أحمر* وفي الصورة المؤكسدة *أزرق باهت*.\n٥. *الأدلة غير العكسية (Irreversible):* مثل الميثيل البرتقالي والميثيل الأحمر في معايرات البرومات؛ حيث تتلف وتزول ألوانها نهائياً بفعل البروم الحر ($Br_2$).\n٦. *الوزن المكافئ لـ KMnO4:* في وسط حمضي = $M.wt/5$، وفي متعادل = $M.wt/3$، وفي قلوي قوي = $M.wt/1$.\n٧. *معايرة أملاح النحاس أيودومترياً:* يضاف الثيوسيانات ($SCN^-$) *قرب نقطة النهاية* لمنع امتزاز اليود على راسب $Cu_2I_2$ وتحويله إلى $Cu_2(SCN)_2$."
        },
        {
            type: "compare",
            title1: "الأيوديمتري Iodimetry (المعايرة المباشرة)",
            val1: "• *التعريف:* معايرة مباشرة للمواد المختزلة ($E^\\circ < +0.54\\text{ V}$) بواسطة محلول قياسي من اليود.\n• *المحلول القياسي (Titrant):* محلول اليود القياسي ($I_2$).\n• *العينة (Titrand):* مواد مختزلة (مثل الثيوكبريتات، القصديروز، الزرنيخيت في وسط بيكربونات).\n• *الدليل:* النشا يضاف من *بداية المعايرة*.\n• *نقطة النهاية:* ظهور *اللون الأزرق* الثابت.",
            title2: "الأيودومتري Iodometry (المعايرة غير المباشرة)",
            val2: "• *التعريف:* معايرة غير مباشرة للمؤكسدات ($E^\\circ > +0.54\\text{ V}$) بمفاعلتها مع زيادة من $I^-$ ثم معايرة اليود الناتج.\n• *المحلول القياسي (Titrant):* ثيوكبريتات الصوديوم ($Na_2S_2O_3$).\n• *العينة (Titrand):* مؤكسدات (مثل البرمنجانات، الدايكرومات، أملاح النحاسيك والحديديك).\n• *الدليل:* النشا يضاف *قرب نقطة النهاية* (عند تحول المحلول للون الأصفر القشي).\n• *نقطة النهاية:* *اختفاء اللون الأزرق* تماماً."
        },
        {
            type: "compare",
            title1: "الدليل الخارجي (External Indicator)",
            val1: "• *الفكرة:* يؤخذ جزء من محلول المعايرة ليختبر خارج دورق التفاعل على بلاطة سيراميك مع كاشف خارجي.\n• *مثال:* معايرة $Fe^{2+}$ بالدايكرومات باستخدام *فيريسيانيد البوتاسيوم*؛ نقطة النهاية عند *عدم ظهور اللون الأزرق*.\n• *العيوب:* نقطة نهاية خاطئة (False end point) و*فقد جزء من العينة* أثناء السحب.",
            title2: "الدليل الداخلي (Internal Redox Indicator)",
            val2: "• *الفكرة:* يضاف مباشرة داخل دورق المعايرة ويتغير لونه بتغير جهد المحلول.\n• *مدى التغير:* $E = E^\\circ_{\\text{In}} \\pm \\frac{0.0591}{n}$.\n• *أدلة عكسية:* ديفينيل أمين (عديم اللون إلى بنفسجي)، فيروين (أحمر إلى أزرق باهت).\n• *أدلة غير عكسية:* ميثيل برتقالي وميثيل أحمر (تتأكسد وتتكسر نهائياً بواسطة $Br_2$)."
        },
        {
            type: "table",
            headers: ["العامل المؤكسد", "نوع المحلول القياسي", "حساب الوزن المكافئ", "أهم الخصائص الامتحانية"],
            rows: [
                ["برمنجانات البوتاسيوم (KMnO4)", "قياسي ثانوي (حساس للضوء وبه MnO2)", "حمضي: M.wt/5\nمتعادل: M.wt/3\nقلوي: M.wt/1", "مؤكسد قوي جداً؛ يسلك كدليل ذاتي (بنفسجي يختزل إلى عديم اللون)."],
                ["دايكرومات البوتاسيوم (K2Cr2O7)", "قياسي أولي (Primary standard)", "حمضي: M.wt/6", "مؤكسد معتدل؛ يستخدم في وسط حمضي فقط؛ لا يصلح كدليل ذاتي (Cr3+ أخضر)."],
                ["كبريتات السيريوم Ce(SO4)2", "قياسي ثانوي (غير مستقر)", "حمضي: M.wt/1", "يحمض المحلول لمنع ترسيب أكسيد السيريوم المائي؛ الفيروِين هو الدليل المفضل."],
                ["اليود (I2)", "قياسي ثانوي (متطاير وشحيح الذوبان)", "متعادل/حمضي: M.wt/2", "يعاير ضد الثيوكبريتات أو الأيودات؛ يضاف له KI لتكوين معقد ثلاثي الأيوديد الذائب غير المتطاير."]
            ]
        },
        {
            type: "equation",
            title: "المدى الفعال لدليل الأكسدة والاختزال الداخلي",
            formula: "$$E = E^\\circ_{\\text{In}} \\pm \\frac{0.0591}{n}$$",
            where: [
                { symbol: "E°_In", meaning: "جهد التأكسد القياسي لمنظومة الدليل" },
                { symbol: "n", meaning: "عدد الإلكترونات المنقولة في تفاعل الدليل" },
                { symbol: "نسبة المدى", meaning: "يحدث التحول اللوني المرئي عندما تتغير النسبة بين [In_ox] و [In_red] بين 1/10 و 10/1" }
            ],
            note: "لدليل ثنائي فينيل أمين (n=2, E°=0.76 V) المدى = 0.73 - 0.79 V. ولدليل الفيروِين (n=1, E°=1.147 V) المدى = 1.088 - 1.206 V."
        },
        {
            type: "reveal",
            title: "⭐ المصطلحات العلمية المتوقعة في الامتحان (اضغط للإظهار)",
            content: "• مادة تعمل كدليل لتحديد نقطة النهاية بتغير لونها الذاتي دون الحاجة لإضافة كاشف خارجي: **[الدليل الذاتي (Self-indicator)]**\n• دليل كيميائي يتم اختباره خارج دورق المعايرة على بلاطة ذات تجاويف بواسطة قطرات من العينة: **[الدليل الخارجي (External indicator)]**\n• مركب عضوي يتميز باختلاف لونه بين الصورة المؤكسدة والمختزلة عكسياً وفقاً لجهد المحلول: **[دليل الأكسدة والاختزال العكسي الداخلي]**\n• معقد مخلبي بين 1,10-فينانثرولين وأيون الحديدوز يستخدم كدليل أكسدة واختزال: **[الفيروين (Ferroin)]**\n• كواشف عضوية ملونة تتلف وتتأكسد بشكل غير عكسي عند نقطة النهاية بواسطة المؤكسدات القوية: **[الأدلة غير العكسية (Irreversible redox indicators)]**\n• المعايرة المباشرة للمواد المختزلة باستخدام محلول قياسي من اليود: **[الأيوديمتري (Iodimetry)]**\n• المعايرة غير المباشرة للمواد المؤكسدة بمفاعلتها مع وفرة من الأيوديد ومعايرة اليود المنطلق بالثيوكبريتات: **[الأيودومتري (Iodometry)]**\n• معقد مائي ذائب وغير متطاير ينتج من إذابة اليود في محلول يوديد البوتاسيوم: **[معقد ثلاثي الأيوديد (Triiodide complex)]**"
        }
    ],

    // =========================================================================
    // 2. حل أسئلة نهاية المحاضرة كاملة بالتفصيل (Slides 20 & 21 Q&A Full Solutions)
    // =========================================================================
    qna: [
        {
            q: "What is the color change observed at the end point when using KMnO4 in acidic medium as a titrant? (Slide 20, Q1)",
            a: "Answer: *Colorless to pink* (Option A).\nExplanation: In acidic medium, purple KMnO4 is reduced to colorless Mn2+. As soon as all the reducing analyte is consumed, the first excess drop of unreacted MnO4- imparts a persistent light pink tint."
        },
        {
            q: "Which of the following indicators is suitable for titrating Fe2+ with Cr2O7 2-? (Slide 20, Q2)",
            a: "Answer: *N-phenylanthranilic acid* (Option C).\nExplanation: Diphenylamine cannot be used directly without H3PO4 because its potential (+0.76 V) is lower than Fe3+/Fe2+ (+0.77 V). N-phenylanthranilic acid has a higher transition potential (+1.05 V), so it undergoes oxidation only after the complete oxidation of iron."
        },
        {
            q: "What is the main drawback of using diphenylamine indicator with dichromate in titration? (Slide 20, Q3)",
            a: "Answer: *It is oxidized before the sample* (Option C).\nExplanation: The standard reduction potential of diphenylamine (E° = +0.76 V) is lower than that of Fe3+/Fe2+ (E° = +0.77 V), causing dichromate to oxidize the indicator prematurely."
        },
        {
            q: "Which of the following is a property of potassium dichromate? (Slide 20, Q4)",
            a: "Answer: *Primary standard* (Option C).\nExplanation: K2Cr2O7 can be obtained in high purity, is stable up to its melting point, non-hygroscopic, and does not require standardization before use."
        },
        {
            q: "What is the oxidation potential range of ferroin indicator? (Slide 20, Q5)",
            a: "Answer: *1.088 – 1.206 V* (Option C).\nExplanation: For ferroin, E° = 1.147 V and n = 1. Range = E° ± 0.0591/n = 1.147 ± 0.059 V = 1.088 to 1.206 V."
        },
        {
            q: "In iodometry, the oxidizing agent is usually titrated using: (Slide 20, Q6)",
            a: "Answer: *Sodium thiosulphate* (Option B).\nExplanation: In iodometry, the oxidizing analyte reacts with excess KI to liberate I2, which is then titrated using standard sodium thiosulphate (Na2S2O3)."
        },
        {
            q: "What is the function of starch in iodine titrations? (Slide 20, Q7)",
            a: "Answer: *Visual end-point detector* (Option C).\nExplanation: Starch forms an intensely colored dark blue adsorption complex with triiodide/iodine, acting as a visual end-point indicator."
        },
        {
            q: "Which of the following reactions describes iodimetry? (Slide 20, Q8)",
            a: "Answer: *Reductant + I2* (Option A).\nExplanation: Iodimetry is defined as the direct titration of a reducing agent (reductant) using a standard iodine solution."
        },
        {
            q: "Which of the following oxidizing agents is both a strong oxidizer and a self-indicator in acidic medium? (Slide 21, Q9)",
            a: "Answer: *Potassium permanganate* (Option D).\nExplanation: KMnO4 has a high redox potential (+1.51 V) and acts as a self-indicator due to its intense violet color fading to colorless Mn2+."
        },
        {
            q: "What is the major limitation of the external indicator method in redox titrations? (Slide 21, Q10)",
            a: "Answer: *It leads to false endpoints* (Option B) [as well as loss of sample].\nExplanation: Continually removing sample drops risks missing the exact equivalence point (false endpoint) and wastes analyte."
        },
        {
            q: "Which redox indicator changes from red (reduced) to pale blue (oxidized)? (Slide 21, Q11)",
            a: "Answer: *Ferroin* (Option B).\nExplanation: Ferroin contains [Fe(phen)3]2+ which is red, and oxidizes to ferrin [Fe(phen)3]3+ which is pale blue."
        },
        {
            q: "In iodometry, which of the following statements is true? (Slide 21, Q12)",
            a: "Answer: *Sodium thiosulfate is the titrant* (Option D).\nExplanation: In iodometry, standard sodium thiosulfate (Na2S2O3) is loaded into the burette to titrate liberated iodine."
        },
        {
            q: "Give reason: Potassium permanganate is a self-indicator standard. (Slide 21, II.1)",
            a: "Reason: Because KMnO4 is intensely colored violet, while its reduced product in acid (Mn2+) is colorless. Once the reducing sample is completely consumed, the first excess drop of KMnO4 imparts a distinct, permanent pink color without needing an added indicator."
        },
        {
            q: "Give reason: K2Cr2O7 is not a self-indicator. (Slide 21, II.2)",
            a: "Reason: Because potassium dichromate is orange, and upon reduction it produces Cr3+ ions which are green. The green color obscures visual detection of the orange excess, causing color interference."
        },
        {
            q: "Give reason: Ceric sulphate is a secondary standard. (Slide 21, II.3)",
            a: "Reason: Because it is unstable upon storage and tends to precipitate basic ceric salts (CeO2.xH2O) unless dissolved in strong acid; therefore, its exact concentration must be determined by standardization."
        },
        {
            q: "Give reason: Thiocyanate is used in the determination of copper sulphate iodometrically. (Slide 21, II.4)",
            a: "Reason: Iodine strongly adsorbs onto the surface of the Cu2I2 precipitate, causing inaccurate titers. Adding SCN- converts Cu2I2 into Cu2(SCN)2, which does not adsorb iodine and frees all trapped I2 for titration."
        },
        {
            q: "Give reason: Methyl red is used as an indicator upon determination using bromate. (Slide 21, II.5)",
            a: "Reason: It acts as an irreversible redox indicator. At the end point, the first excess drop of bromate reacts with bromide to produce free bromine (Br2), which irreversibly bleaches and destroys the red methyl red dye into colorless products."
        },
        {
            q: "Give reason: KI is added to Iodine. (Slide 21, II.6)",
            a: "Reason: Iodine is highly volatile and very poorly soluble in pure water. Adding KI forms the soluble, non-volatile triiodide complex (I3-), increasing solubility and eliminating volatilization losses."
        }
    ],

    qnaAr: [
        {
            q: "ما هو التغير في اللون الملاحظ عند نقطة النهاية عند استخدام KMnO4 في وسط حمضي؟ (سلايد 20، س1)",
            a: "الإجابة: *من عديم اللون إلى الوردي (Colorless to pink)* (الخيار A).\nالتفسير: يختزل البرمنجانات البنفسجي في الوسط الحمضي إلى أيون المنجنيزوز ($Mn^{2+}$) عديم اللون، وعند اكتمال الأكسدة تعطي أول نقطة زيادة لوناً وردياً باهتاً ثابتاً."
        },
        {
            q: "أي الأدلة الآتية مناسب لمعايرة Fe2+ باستخدام Cr2O7 2-؟ (سلايد 20، س2)",
            a: "الإجابة: *حمض إن-فينيل أنثرانيليك N-phenylanthranilic acid* (الخيار C).\nالتفسير: ديفينيل أمين لا يمكن استخدامه منفرداً لأن جهده ($0.76\\text{ V}$) أقل من جهد الحديدوز ($0.77\\text{ V}$)، بينما حمض N-phenylanthranilic acid جهده أعلى ($1.05\\text{ V}$) فيتأكسد بعد انتهاء أكسدة الحديدوز تماماً."
        },
        {
            q: "ما هو العيب الرئيسي لاستخدام دليل ثنائي فينيل أمين مع الدايكرومات في المعايرة؟ (سلايد 20، س3)",
            a: "الإجابة: *أنه يتأكسد قبل العينة It is oxidized before the sample* (الخيار C).\nالتفسير: جهد تأكسد الدليل ($+0.76\\text{ V}$) أقل من جهد منظومة الحديد ($+0.77\\text{ V}$)، مما يجعل الدايكرومات تؤكسد الدليل قبل أكسدة الحديدوز بالكامل."
        },
        {
            q: "أي مما يلي يعد من خصائص دايكرومات البوتاسيوم؟ (سلايد 20، س4)",
            a: "الإجابة: *محلول قياسي أولي Primary standard* (الخيار C).\nالتفسير: يمكن تحضيره بدرجة نقاوة عالية جداً وثابت حرارياً ولا يمتص الرطوبة ولا يحتاج إلى معايرة قبل استخدامه."
        },
        {
            q: "ما هو مدى جهد التأكسد لدليل الفيروين؟ (سلايد 20، س5)",
            a: "الإجابة: *1.088 – 1.206 V* (الخيار C).\nالتفسير: بالتعويض في القانون: $E = E^\\circ \\pm 0.0591/n = 1.147 \\pm 0.0591/1 = 1.088 - 1.206\\text{ V}$."
        },
        {
            q: "في الأيودومتري، تتم معايرة المادة المؤكسدة عادة باستخدام: (سلايد 20، س6)",
            a: "الإجابة: *ثيوكبريتات الصوديوم Sodium thiosulphate* (الخيار B).\nالتفسير: المادة المؤكسدة تفاعل مع وفرة من يوديد البوتاسيوم لتحرير اليود، ثم يعاير اليود المنطلق بواسطة ثيوكبريتات الصوديوم القياسية في السحاحة."
        },
        {
            q: "ما هي وظيفة النشا في معايرات اليود؟ (سلايد 20، س7)",
            a: "الإجابة: *كاشف بصري لتحديد نقطة النهاية Visual end-point detector* (الخيار C).\nالتفسير: يرتبط النشا بأيونات اليود/ثلاثي الأيوديد ليكون معقداً أزرق داكناً يحدد بدقة لحظة ظهور أو اختفاء اليود."
        },
        {
            q: "أي التفاعلات الآتية يصف الأيوديمتري؟ (سلايد 20، س8)",
            a: "الإجابة: *مادة مختزلة + اليود Reductant + I2* (الخيار A).\nالتفسير: الأيوديمتري هي معايرة مباشرة لمادة مختزلة (Reductant) بواسطة محلول اليود القياسي."
        },
        {
            q: "أي العوامل المؤكسدة الآتية مؤكسد قوي ودليل ذاتي في وسط حمضي؟ (سلايد 21، س9)",
            a: "الإجابة: *برمنجانات البوتاسيوم Potassium permanganate* (الخيار D).\nالتفسير: يتميز بجهد أكسدة مرتفع ($+1.51\\text{ V}$) ولونه بنفسجي يختزل إلى منجنيزوز عديم اللون."
        },
        {
            q: "ما هو العيب الأكبر لطريقة الدليل الخارجي في معايرات الأكسدة والاختزال؟ (سلايد 21، س10)",
            a: "الإجابة: *تؤدي إلى نقطة نهاية خاطئة وفقدان في العينة It leads to false endpoints and loss of sample* (الخيار B).\nالتفسير: أخذ قطرات متكررة من الدورق يؤدي لفقد جزء من المادة المعايرة وقد يتم تجاوز نقطة التكافؤ دون دقة."
        },
        {
            q: "أي دليل أكسدة واختزال يتغير لونه من الأحمر (مختزل) إلى الأزرق الباهت (مؤكسد)؟ (سلايد 21، س11)",
            a: "الإجابة: *الفيروين Ferroin* (الخيار B).\nالتفسير: معقد فيروين الحديدوز لونه أحمر، وعند تأكسده يتحول إلى فيرين الحديديك ولونه أزرق باهت."
        },
        {
            q: "في الأيودومتري، أي العبارات الآتية صحيحة؟ (سلايد 21، س12)",
            a: "الإجابة: *ثيوكبريتات الصوديوم هي المحلول القياسي Sodium thiosulfate is the titrant* (الخيار D).\nالتفسير: في الأيودومتري توضع الثيوكبريتات في السحاحة لمعايرة اليود الناتج بشكل غير مباشر."
        },
        {
            q: "علل: برمنجانات البوتاسيوم تعد دليلاً ذاتياً قياسياً. (سلايد 21، ثانياً.1)",
            a: "السبب: لأن البرمنجانات ذات لون بنفسجي داكن وتختزل في الوسط الحمضي إلى كاتيون المنجنيزوز عديم اللون، وعند نقطة التكافؤ تمنح أول قطرة زيادة لوناً وردياً ثابتاً دون الحاجة لإضافة دليل خارجي."
        },
        {
            q: "علل: دايكرومات البوتاسيوم لا تعمل كدليل ذاتي. (سلايد 21، ثانياً.2)",
            a: "السبب: لأن لونها برتقالي وتختزل إلى أيونات الكروم ($Cr^{3+}$) ذات اللون الأخضر، مما يسبب تداخلاً لونياً يمنع ملاحظة نقطة النهاية."
        },
        {
            q: "علل: كبريتات السيريوم تعد محلولاً قياسياً ثانوياً. (سلايد 21، ثانياً.3)",
            a: "السبب: لكونها غير مستقرة أثناء الحفظ وتميل للترسب على هيئة أملاح قاعدية ($CeO_2.xH_2O$) ما لم تحفظ في وسط حمضي قوي، ولذلك تتطلب معايرتها دائماً قبل الاستخدام."
        },
        {
            q: "علل: يضاف الثيوسيانات عند تقدير كبريتات النحاس أيودومترياً. (سلايد 21، ثانياً.4)",
            a: "السبب: لمنع امتزاز اليود على سطح راسب يوديد النحاسوز ($Cu_2I_2$)؛ حيث يتفاعل الثيوسيانات معه ليحوله إلى $Cu_2(SCN)_2$ الذي لا يمتز اليود، فتتحرر جزيئات اليود المحتبسة وتعاير بدقة."
        },
        {
            q: "علل: يستخدم الميثيل الأحمر كدليل عند التقدير بواسطة البرومات. (سلايد 21، ثانياً.5)",
            a: "السبب: لأنه يسلك كدليل غير عكسي؛ فعند نقطة النهاية تتفاعل أول قطرة زائدة من البرومات لتولد البروم الحر ($Br_2$) الذي يؤكسد صبغة الميثيل الأحمر ويدمر تركيبها نهائياً لتتحول إلى مركبات عديمة اللون."
        },
        {
            q: "علل: يضاف يوديد البوتاسيوم (KI) إلى محلول اليود. (سلايد 21، ثانياً.6)",
            a: "السبب: لتقليل تطاير اليود وزيادة ذوبانيته في الماء عبر تكوين معقد ثلاثي الأيوديد الذائب وغير المتطاير ($I_3^-$)."
        }
    ],

    // =========================================================================
    // 3. أسئلة الشفوي وملاحظات الدكتور (Oral Questions)
    // =========================================================================
    oral: [
        {
            q: "Why must phosphoric acid (H3PO4) be added during the titration of Fe2+ with dichromate using diphenylamine?",
            a: "H3PO4 forms a very stable, colorless complex with Fe3+ ions ([Fe(HPO4)]+), which drastically reduces the concentration of free Fe3+. According to the Nernst equation, this lowers the formal redox potential of the Fe3+/Fe2+ system from +0.77 V down to ~+0.60 V, ensuring that Fe2+ is completely oxidized BEFORE the diphenylamine indicator (E° = +0.76 V) starts to oxidize."
        },
        {
            q: "Why should starch indicator NEVER be added at the beginning of an iodometric titration?",
            a: "Because in the presence of high concentrations of free iodine (at the start of iodometry), starch forms an irreversible starch-iodine complex where iodine penetrates deep into the helical amylose core, making it very difficult for thiosulfate to reduce it, resulting in a delayed and inaccurate end point."
        },
        {
            q: "When exactly is thiocyanate added during copper determination, and why?",
            a: "Thiocyanate must be added *near the end point* (when the dark brown color fades to pale straw-yellow). If added at the beginning, high concentrations of iodine would oxidize thiocyanate to sulfate and cyanide, interfering with the stoichiometry."
        }
    ],

    oralAr: [
        {
            q: "لماذا يجب إضافة حمض الفوسفوريك (H3PO4) أثناء معايرة الحديدوز بالدايكرومات في وجود دليل ثنائي فينيل أمين؟",
            a: "لأن حمض الفوسفوريك يكون معقداً ثابتاً عديم اللون مع أيونات الحديديك ($Fe^{3+}$)، مما يقلل تركيز الحديديك الحر في المحلول. وفق معادلة نيرنست، ينخفض جهد منظومة الحديد من $+0.77\\text{ V}$ إلى حوالي $+0.60\\text{ V}$، مما يضمن أكسدة كل عينة الحديدوز أولاً قبل أن يبدأ الدليل ($+0.76\\text{ V}$) في التأكسد."
        },
        {
            q: "لماذا يحظر إضافة دليل النشا في بداية المعايرة الأيودومترية؟",
            a: "لأنه في وجود تركيزات عالية من اليود الحر في البداية، يرتبط النشا باليود ارتباطاً قوياً وغير عكسي داخل حلزون الأميلوز، مما يصعب على الثيوكبريتات اختزاله عند نقطة النهاية مسبباً خطأ كبيراً وتأخراً في تحديد نقطة النهاية."
        },
        {
            q: "متى يضاف الثيوسيانات تحديداً أثناء تعيين النحاس أيودومترياً ولماذا؟",
            a: "يضاف *قرب نقطة النهاية* (عندما يتحول اللون البني إلى الأصفر القشي الشاحب). لأنه لو أضيف في البداية لتأكسد الثيوسيانات نفسه بفعل التركيز العالي لليود متحولاً إلى كبريتات وسيانيد، مما يفسد نتائج المعايرة."
        }
    ],

    // =========================================================================
    // 4. بنك أسئلة الكويز الشامل (~30 سؤالاً على نمط الدكتور بدون تلميحات)
    // =========================================================================
    quiz: [
        // --- أسئلة نهاية المحاضرة النصية من السلايدات (1 to 12) ---
        {
            type: "mcq",
            question: "What is the **color change observed at the end point** when using KMnO4 in acidic medium as a titrant?",
            questionAr: "ما هو **التغير في اللون الملاحظ عند نقطة النهاية** عند استخدام KMnO4 في وسط حمضي كمحلول قياسي؟",
            options: ["Colorless to pink", "Pink to colorless", "Violet to pink", "Violet to colorless"],
            optionsAr: ["من عديم اللون إلى الوردي", "من الوردي إلى عديم اللون", "من البنفسجي إلى الوردي", "من البنفسجي إلى عديم اللون"],
            correct: 0,
            hint: "The titrand starts colorless, and the first drop of excess permanganate imparts a pink tint.",
            hintAr: "المحلول في الدورق يبدأ عديم اللون، وتكفي أول قطرة فائضة من البرمنجانات لإكسابه لوناً وردياً باهتاً."
        },
        {
            type: "mcq",
            question: "Which of the following **indicators is suitable** for titrating Fe2+ with Cr2O7 2-?",
            questionAr: "أي من **الأدلة الآتية مناسب** لمعايرة Fe2+ باستخدام Cr2O7 2-؟",
            options: ["Methyl orange", "Ferroin", "N-phenylanthranilic acid", "Phenolphthalein"],
            optionsAr: ["ميثيل برتقالي", "فيروين", "حمض إن-فينيل أنثرانيليك", "فينولفثالين"],
            correct: 2,
            hint: "Look for the internal indicator with E° = +1.05 V which is safely above the Fe3+/Fe2+ system.",
            hintAr: "ابحث عن الدليل الداخلي الذي يمتلك جهد تأكسد (+1.05 V) وهو أعلى من جهد منظومة الحديدوز/الحديديك."
        },
        {
            type: "mcq",
            question: "What is the **main drawback of using diphenylamine indicator** with dichromate in titration?",
            questionAr: "ما هو **العيب الرئيسي لاستخدام دليل ثنائي فينيل أمين** مع الدايكرومات في المعايرة؟",
            options: ["It reacts with Fe2+", "It is unstable in acid", "It is oxidized before the sample", "It does not change color"],
            optionsAr: ["يتفاعل مع Fe2+", "غير مستقر في الوسط الحمضي", "يتأكسد قبل العينة", "لا يتغير لونه"],
            correct: 2,
            hint: "Diphenylamine has E° = +0.76 V while Fe3+/Fe2+ has E° = +0.77 V.",
            hintAr: "جهد الدليل (+0.76 V) أقل قليلاً من جهد الحديدوز (+0.77 V) فيسبقه في التأكسد."
        },
        {
            type: "mcq",
            question: "Which of the following is a **property of potassium dichromate**?",
            questionAr: "أي مما يلي يعد من **خصائص دايكرومات البوتاسيوم**؟",
            options: ["Self-indicator", "Unstable in air", "Primary standard", "Used in basic medium only"],
            optionsAr: ["دليل ذاتي", "غير مستقر في الهواء", "محلول قياسي أولي", "يستخدم في الوسط القلوي فقط"],
            correct: 2,
            hint: "It can be weighed directly to prepare standard solutions without prior titration.",
            hintAr: "يمكن وزنه مباشرة وتحضير محلول عياري دقيق دون الحاجة لمعايرته مسبقاً."
        },
        {
            type: "mcq",
            question: "What is the **oxidation potential range of ferroin indicator**?",
            questionAr: "ما هو **مدى جهد التأكسد لدليل الفيروين**؟",
            options: ["0.73–0.79 V", "0.76–0.88 V", "1.088–1.206 V", "0.53–0.73 V"],
            optionsAr: ["0.73–0.79 فولت", "0.76–0.88 فولت", "1.088–1.206 فولت", "0.53–0.73 فولت"],
            correct: 2,
            hint: "E° = 1.147 V, n = 1, Range = 1.147 ± 0.0591 V.",
            hintAr: "الجهد القياسي 1.147 فولت وعدد الإلكترونات 1، المدى = 1.147 ± 0.0591 فولت."
        },
        {
            type: "mcq",
            question: "In **iodometry**, the oxidizing agent is usually titrated using:",
            questionAr: "في **الأيودومتري**، تتم معايرة العامل المؤكسد عادة باستخدام:",
            options: ["Iodine", "Sodium thiosulphate", "Potassium iodide", "Ferrous sulfate"],
            optionsAr: ["اليود", "ثيوكبريتات الصوديوم", "يوديد البوتاسيوم", "كبريتات الحديدوز"],
            correct: 1,
            hint: "The liberated iodine is titrated in the conical flask by adding this reagent from the burette.",
            hintAr: "يعاير اليود المتحرر في الدورق باستخدام هذا المحلول الموجود بالسحاحة."
        },
        {
            type: "mcq",
            question: "What is the **function of starch** in iodine titrations?",
            questionAr: "ما هي **وظيفة النشا** في معايرات اليود؟",
            options: ["Oxidizing agent", "Solubilizer", "Visual end-point detector", "Buffer"],
            optionsAr: ["عامل مؤكسد", "مذيب ومزيد للذوبانية", "كاشف بصري لنقطة النهاية", "محلول منظم"],
            correct: 2,
            hint: "It forms a distinct dark blue complex with iodine.",
            hintAr: "يكون معقداً أزرق داكناً يحدد بدقة لحظة انتهاء التفاعل."
        },
        {
            type: "mcq",
            question: "Which of the following reactions describes **iodimetry**?",
            questionAr: "أي التفاعلات الآتية يصف عملية **الأيوديمتري**؟",
            options: ["Reductant + I2", "Oxidant + I2", "Iodine + starch", "Fe3+ + I-"],
            optionsAr: ["مادة مختزلة + I2", "مادة مؤكسدة + I2", "اليود + النشا", "Fe3+ + I-"],
            correct: 0,
            hint: "Direct titration of a reducing species by standard iodine solution.",
            hintAr: "معايرة مباشرة لمادة مختزلة بواسطة محلول قياسي من اليود."
        },
        {
            type: "mcq",
            question: "Which of the following oxidizing agents is **both a strong oxidizer and a self-indicator** in acidic medium?",
            questionAr: "أي من العوامل المؤكسدة الآتية **مؤكسد قوي ودليل ذاتي معاً** في الوسط الحمضي؟",
            options: ["Potassium dichromate", "Potassium bromate", "Ceric sulfate", "Potassium permanganate"],
            optionsAr: ["دايكرومات البوتاسيوم", "برومات البوتاسيوم", "كبريتات السيريوم", "برمنجانات البوتاسيوم"],
            correct: 3,
            hint: "It has E° = +1.51 V and changes from intense violet to colorless.",
            hintAr: "يمتلك جهد أكسدة مرتفع (+1.51 V) ولونه بنفسجي يختزل إلى عديم اللون."
        },
        {
            type: "mcq",
            question: "What is the **major limitation of the external indicator method** in redox titrations?",
            questionAr: "ما هو **العيب الأكبر لطريقة الدليل الخارجي** في معايرات الأكسدة والاختزال؟",
            options: ["It requires special glassware", "It leads to false endpoints", "Indicators are hard to detect", "It consumes large volumes of titrant"],
            optionsAr: ["تتطلب أدوات زجاجية معقدة", "تؤدي إلى نقاط نهاية خاطئة وفقدان بالعينة", "صعوبة تمييز لون الدليل", "تستهلك حجماً كبيراً من المحلول القياسي"],
            correct: 1,
            hint: "Continuous withdrawal of test drops causes sample loss and false end point detection.",
            hintAr: "السحب المتكرر لقطرات الفحص يسبب فقدان العينة وتحديد نقطة تكافؤ خاطئة."
        },
        {
            type: "mcq",
            question: "Which redox indicator **changes from red (reduced) to pale blue (oxidized)**?",
            questionAr: "أي دليل أكسدة واختزال **يتغير لونه من الأحمر (مختزل) إلى الأزرق الباهت (مؤكسد)**؟",
            options: ["Diphenylamine", "Ferroin", "Methyl orange", "Tris(2,2'-bipyridine)ruthenium"],
            optionsAr: ["ديفينيل أمين", "فيروين", "ميثيل برتقالي", "تريس بيبيريدين روثينيوم"],
            correct: 1,
            hint: "1,10-Phenanthroline-ferrous chelate.",
            hintAr: "المعقد المخلبي لـ 1,10-فينانثرولين مع كاتيون الحديدوز."
        },
        {
            type: "mcq",
            question: "In **iodometry**, which of the following statements is true?",
            questionAr: "في عملية **الأيودومتري**، أي العبارات الآتية صحيحة؟",
            options: ["Iodine acts as a reducing agent", "The titrant is iodine", "The titrand is a reducing substance", "Sodium thiosulfate is the titrant"],
            optionsAr: ["اليود يسلك كعامل مختزل", "المحلول القياسي في السحاحة هو اليود", "العينة المعايرة مادة مختزلة", "ثيوكبريتات الصوديوم هي المحلول القياسي بالسوائل"],
            correct: 3,
            hint: "Sodium thiosulfate solution is loaded in the burette to titrate the liberated I2.",
            hintAr: "محلول ثيوكبريتات الصوديوم القياسي هو الذي يوضع في السحاحة لمعايرة اليود."
        },

        // --- أسئلة علل وصياغة محاكية لأسئلة الدكتور الإضافية (13 to 30) ---
        {
            type: "mcq",
            question: "Why is **potassium dichromate NOT used as a self-indicator** in titrations?",
            questionAr: "لماذا **لا يمكن استخدام دايكرومات البوتاسيوم كدليل ذاتي** في المعايرات؟",
            options: ["Because it is completely colorless in solution", "Because its reduced form is green, causing color interference", "Because it is a weak oxidizing agent", "Because it decomposes rapidly in acidic media"],
            optionsAr: ["لأنه عديم اللون تماماً في المحلول", "لأن ناتجه المختزل أخضر اللون فيسبب تداخلاً لونياً", "لأنه عامل مؤكسد ضعيف للغاية", "لأنه يتحلل بسرعة في الأوساط الحمضية"],
            correct: 1,
            hint: "Cr2O7 2- is orange, and Cr3+ is green.",
            hintAr: "أيون الدايكرومات برتقالي ويتحول بالهبوط إلى أيون الكروميك الأخضر."
        },
        {
            type: "mcq",
            question: "What is the **role of phosphoric acid (H3PO4)** added during ferrous titration with dichromate using diphenylamine?",
            questionAr: "ما هو **دور حمض الفوسفوريك (H3PO4)** المضاف أثناء معايرة الحديدوز بالدايكرومات في وجود ديفينيل أمين؟",
            options: ["Increases the potential of the Fe3+/Fe2+ system", "Complexes Fe3+ and decreases the potential of the Fe3+/Fe2+ system", "Oxidizes diphenylamine directly", "Acts as an external visual indicator"],
            optionsAr: ["يزيد من جهد منظومة Fe3+/Fe2+", "يرتبط بـ Fe3+ فيقلل جهد منظومة Fe3+/Fe2+", "يؤكسد الديفينيل أمين مباشرة", "يعمل كدليل بصري خارجي"],
            correct: 1,
            hint: "Lowering the potential below +0.76 V prevents premature oxidation of diphenylamine.",
            hintAr: "خفض الجهد إلى ما دون 0.76 فولت يمنع أكسدة الدليل قبل اكتمال أكسدة الحديدوز."
        },
        {
            type: "mcq",
            question: "Why is **potassium iodide (KI) added to iodine** solution preparation?",
            questionAr: "لماذا **يضاف يوديد البوتاسيوم (KI) إلى اليود** عند تحضير محاليله؟",
            options: ["To act as a primary standard oxidant", "To form a water-soluble and non-volatile triiodide complex", "To prevent the oxidation of starch", "To precipitate excess iodine"],
            optionsAr: ["ليعمل كمؤكسد قياسي أولي", "لتكوين معقد ثلاثي الأيوديد الذائب وغير المتطاير", "لمنع أكسدة كاشف النشا", "لترسيب اليود الزائد"],
            correct: 1,
            hint: "I2 + I- <=> I3-.",
            hintAr: "اليود شحيح الذوبان ومتطاير، ويتفاعل مع الأيوديد مكوناً I3- الذائب الثابت."
        },
        {
            type: "mcq",
            question: "What is the **equivalent weight of KMnO4 in strongly acidic medium**?",
            questionAr: "ما هو **الوزن المكافئ لبرمنجانات البوتاسيوم في الوسط الحمضي القوي**؟",
            options: ["M.wt / 1", "M.wt / 3", "M.wt / 5", "M.wt / 6"],
            optionsAr: ["الوزن الجزيئي / 1", "الوزن الجزيئي / 3", "الوزن الجزيئي / 5", "الوزن الجزيئي / 6"],
            correct: 2,
            hint: "MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O.",
            hintAr: "يكتسب المنجنيز 5 إلكترونات ليتحول من +7 إلى +2."
        },
        {
            type: "mcq",
            question: "What is the **equivalent weight of KMnO4 in neutral or weakly alkaline medium**?",
            questionAr: "ما هو **الوزن المكافئ لبرمنجانات البوتاسيوم في الوسط المتعادل أو القلوي الضعيف**؟",
            options: ["M.wt / 1", "M.wt / 3", "M.wt / 5", "M.wt / 6"],
            optionsAr: ["الوزن الجزيئي / 1", "الوزن الجزيئي / 3", "الوزن الجزيئي / 5", "الوزن الجزيئي / 6"],
            correct: 1,
            hint: "MnO4- + 3e- -> MnO2.",
            hintAr: "يكتسب 3 إلكترونات ويترسب ثاني أكسيد المنجنيز."
        },
        {
            type: "mcq",
            question: "What is the **equivalent weight of potassium dichromate (K2Cr2O7)** in acid medium?",
            questionAr: "ما هو **الوزن المكافئ لدايكرومات البوتاسيوم (K2Cr2O7)** في الوسط الحمضي؟",
            options: ["M.wt / 1", "M.wt / 3", "M.wt / 5", "M.wt / 6"],
            optionsAr: ["الوزن الجزيئي / 1", "الوزن الجزيئي / 3", "الوزن الجزيئي / 5", "الوزن الجزيئي / 6"],
            correct: 3,
            hint: "Cr2O7 2- + 14H+ + 6e- -> 2Cr3+ + 7H2O.",
            hintAr: "تكتسب ذرتا الكروم في جزيء الدايكرومات 6 إلكترونات لتتحولا إلى 2Cr3+."
        },
        {
            type: "mcq",
            question: "Why is **ceric sulphate solution rendered acidic** during its preparation?",
            questionAr: "لماذا **يحمض محلول كبريتات السيريوم** أثناء تحضيره؟",
            options: ["To prevent evaporation of cerium", "To prevent precipitation of basic ceric salts (CeO2.xH2O)", "To reduce Ce4+ to Ce3+", "To increase its volatility"],
            optionsAr: ["لمنع تبخر السيريوم", "لمنع ترسيب أملاح السيريوم القاعدية (CeO2.xH2O)", "لاختزال السيريوميك إلى سيريوز", "لزيادة تطاير المحلول"],
            correct: 1,
            hint: "In neutral solution, ceric ions hydrolyze and precipitate as hydrated oxides.",
            hintAr: "بدون حمض قوي، يتحلل السيريوميك مائياً ويترسب على هيئة أكسيد مائي CeO2.xH2O."
        },
        {
            type: "mcq",
            question: "Why is **potassium permanganate classified as a secondary standard**?",
            questionAr: "لماذا **تصنف برمنجانات البوتاسيوم كمحلول قياسي ثانوي**؟",
            options: ["Because it is highly hygroscopic", "Because it is photosensitive and contaminated with MnO2 impurities", "Because it cannot react in acidic media", "Because it is an irreversible indicator"],
            optionsAr: ["لأنها شديدة الامتصاص للرطوبة", "لأنها حساسة للضوء وتحتوي على شوائب من MnO2", "لأنها لا تتفاعل في الوسط الحمضي", "لأنها دليل غير عكسي"],
            correct: 1,
            hint: "Trace MnO2 catalyzes its photochemical decomposition, requiring standardization.",
            hintAr: "تتأثر بالضوء وتحتوي شوائب MnO2 التي تسرع تفككها الذاتي."
        },
        {
            type: "mcq",
            question: "In the determination of copper salts iodometrically, why is **ammonium thiocyanate added**?",
            questionAr: "عند تقدير أملاح النحاس بالطريقة الأيودومترية، لماذا **يضاف ثيوسيانات الأمونيوم**؟",
            options: ["To oxidize cuprous ions to cupric", "To prevent adsorption of iodine on Cu2I2 precipitate", "To act as a visual redox indicator", "To reduce excess iodine to iodide"],
            optionsAr: ["لأكسدة أيونات النحاسوز إلى نحاسيك", "لمنع امتزاز اليود على سطح راسب Cu2I2", "ليعمل كدليل أكسدة واختزال بصري", "لاختزال اليود الزائد إلى أيوديد"],
            correct: 1,
            hint: "It converts Cu2I2 to Cu2(SCN)2, releasing trapped iodine.",
            hintAr: "يتحول الراسب إلى Cu2(SCN)2 الذي لا يمتز اليود، فتتحرر جزيئات اليود لتعاير."
        },
        {
            type: "mcq",
            question: "At what point in the titration should **ammonium thiocyanate be added** in copper determination?",
            questionAr: "في أي وقت من المعايرة يجب **إضافة ثيوسيانات الأمونيوم** أثناء تقدير النحاس؟",
            options: ["At the very beginning before adding KI", "Near the end point when iodine concentration is low", "Immediately after the first drop of titrant", "After reaching the permanent blue end point"],
            optionsAr: ["في البداية تماماً قبل إضافة KI", "قرب نقطة النهاية عندما ينخفض تركيز اليود", "فور نزول أول نقطة من السحاحة", "بعد الوصول إلى نقطة النهاية الزرقاء الثابتة"],
            correct: 1,
            hint: "High concentrations of iodine at the start would oxidize thiocyanate.",
            hintAr: "تركيز اليود العالي في البداية قد يؤكسد الثيوسيانات نفسه ويفسد التفاعل."
        },
        {
            type: "mcq",
            question: "Why are **methyl orange and methyl red called irreversible redox indicators**?",
            questionAr: "لماذا تسمى أدلة **الميثيل البرتقالي والميثيل الأحمر بالأدلة غير العكسية**؟",
            options: ["They change color by complexation rather than redox", "They are destroyed and bleached irreversibly by strong oxidants like Br2", "Their colors can be restored by adding reducing agents", "They do not show any color change in acidic media"],
            optionsAr: ["يتغير لونها بالتعقيد وليس بالأكسدة والاختزال", "تتلف وتتكسر ألوانها نهائياً بفعل المؤكسدات القوية مثل Br2", "يمكن استعادة ألوانها بإضافة عامل مختزل", "لا تعطي أي تغير لوني في الوسط الحمضي"],
            correct: 1,
            hint: "Bromine breaks the azo linkage irreversibly to colorless products.",
            hintAr: "يقوم البروم بكسر الرابطة الآزوية نهائياً منتجاً مركبات عديمة اللون لا يمكن إعادتها."
        },
        {
            type: "mcq",
            question: "What is the **color of diphenylamine in its oxidized state**?",
            questionAr: "ما هو **لون دليل ثنائي فينيل أمين في صورته المؤكسدة**؟",
            options: ["Colorless", "Red", "Bluish-violet", "Pale blue"],
            optionsAr: ["عديم اللون", "أحمر", "بنفسجي مزرق", "أزرق باهت"],
            correct: 2,
            hint: "Forms diphenylbenzidine violet.",
            hintAr: "يتحول عند التأكسد فوق 0.79 فولت إلى دايفينيل بنزيدين البنفسجي المزرق."
        },
        {
            type: "mcq",
            question: "What is the **color of ferroin indicator in its reduced form**?",
            questionAr: "ما هو **لون دليل الفيروين في صورته المختزلة**؟",
            options: ["Colorless", "Intense red", "Pale blue", "Yellow"],
            optionsAr: ["عديم اللون", "أحمر داكن", "أزرق باهت", "أصفر"],
            correct: 1,
            hint: "[Fe(phen)3]2+ is intensely red.",
            hintAr: "معقد الحديدوز مع الفينانثرولين لونه أحمر مميز."
        },
        {
            type: "mcq",
            question: "Which of the following describes the **titration of arsenite (AsO3 3-) by iodine**?",
            questionAr: "أي مما يلي يصف **معايرة الزرنيخيت (AsO3 3-) بواسطة اليود**؟",
            options: ["Carried out in strong acid as iodometry", "Carried out in presence of NaHCO3 as iodimetry", "Carried out in strong alkali as precipitation", "Carried out without any buffer as self-indicator"],
            optionsAr: ["تتم في حمض قوي كمعايرة أيودومترية", "تتم في وجود بيكربونات الصوديوم كمعايرة أيوديمترية", "تتم في قلوي قوي كمعايرة ترسيب", "تتم بدون منظم كدليل ذاتي"],
            correct: 1,
            hint: "NaHCO3 neutralizes HI, lowering potential and driving the reaction forward directly.",
            hintAr: "تزيل بيكربونات الصوديوم بروتونات الحمض فتخفض الجهد وتجعل الأكسدة مباشرة باليود."
        },
        {
            type: "mcq",
            question: "What is the **effect of adding fluoride (F-) or phosphate (PO4 3-)** to the Fe3+/Fe2+ system in iodine titration?",
            questionAr: "ما هو **تأثير إضافة الفلوريد (F-) أو الفوسفات (PO4 3-)** لمنظومة الحديد في تفاعلات اليود؟",
            options: ["Converts iodometry into iodimetry by lowering Fe3+/Fe2+ potential", "Converts iodimetry into iodometry by precipitating iron", "Prevents iodine from dissolving in water", "Catalyzes the decomposition of starch"],
            optionsAr: ["تحول التفاعل من أيودومتري إلى أيوديمتري بخفض جهد Fe3+/Fe2+", "تحول التفاعل من أيوديمتري إلى أيودومتري بترسيب الحديد", "تمنع ذوبان اليود في الماء", "تحفز التحلل المائي للنشا"],
            correct: 0,
            hint: "Complexing Fe3+ reduces its potential below +0.54 V, allowing I2 to oxidize Fe2+ directly.",
            hintAr: "تكوين معقد ثابت مع Fe3+ يقلل جهده لما دون 0.54 فولت فيتمكن اليود من أكسدة الحديدوز مباشرة."
        },
        {
            type: "mcq",
            question: "What is the **visual end point in an iodometric titration** using starch indicator?",
            questionAr: "ما هي **نقطة النهاية المرئية في المعايرة الأيودومترية** باستخدام دليل النشا؟",
            options: ["Appearance of permanent dark blue color", "Disappearance of blue color", "Appearance of pink color", "Change from orange to green"],
            optionsAr: ["ظهور لون أزرق داكن ثابت", "اختفاء اللون الأزرق تماماً", "ظهور لون وردي دائم", "التحول من البرتقالي للأخضر"],
            correct: 1,
            hint: "All liberated iodine is consumed by thiosulfate, destroying the blue starch-iodine complex.",
            hintAr: "تستهلك الثيوكبريتات آخر جزيئات اليود فيتفكك المعقد الأزرق ويصبح المحلول عديم اللون."
        },
        {
            type: "mcq",
            question: "What is the **main disadvantage of a self-indicator** compared to theoretical equivalence?",
            questionAr: "ما هو **العيب الرئيسي للدليل الذاتي** مقارنة بنقطة التكافؤ النظرية؟",
            options: ["Practical end point is lower than theoretical equivalence point", "Practical end point is higher than theoretical equivalence point", "It cannot be used in acidic media", "It always requires external verification on spot plates"],
            optionsAr: ["نقطة النهاية العملية أقل من نقطة التكافؤ النظرية", "نقطة النهاية العملية أعلى من نقطة التكافؤ النظرية", "لا يمكن استخدامه في الأوساط الحمضية", "يتطلب دائماً فحصاً خارجياً على بلاطة التفاعل"],
            correct: 1,
            hint: "An extra drop of colored reagent is needed beyond equivalence to impart visible color.",
            hintAr: "يلزم نقطة زيادة من المادة الملونة بعد نقطة التكافؤ حتى يظهر اللون للعين المجردة."
        },
        {
            type: "written",
            question: "Write the balanced chemical equation for the **triiodide complex formation** when iodine dissolves in KI solution.",
            questionAr: "اكتب المعادلة الكيميائية الموزونة لـ **تكوين معقد ثلاثي الأيوديد** عند إذابة اليود في محلول يوديد البوتاسيوم.",
            answer: "I2 + I- <=> I3-",
            answerAr: "I2 + I- <=> I3-",
            hint: {
                en: "Molecular iodine reacts reversibly with iodide ion to form the triiodide ion.",
                ar: "يتحد جزيء اليود مع أيون الأيوديد اتحاداً عكسياً ليعطي أيون ثلاثي الأيوديد."
            }
        }
    ]
});
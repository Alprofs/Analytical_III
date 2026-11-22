DataStore.lectures.push({
    id: 4,
    title: "Lec 4: Applications of Redox Titrations",

    // =========================================================================
    // 1. ملخص المحاضرة والشرح الوافي (High-Yield Summary & Doctor's Core Rules)
    // =========================================================================
    summary: [
        {
            type: "vip",
            title: "⭐ [EXAM GOLDEN RULES] Core Blackboard Rules for Lecture 4",
            content: "1. *Determination of Aldoses (Glucose):* Oxidized specifically by **hypoiodite (IO-)** in alkaline medium to aldonic acid, NOT by molecular I2 directly.\n2. *Starch Rule:* Starch forms an **intense blue adsorption complex** with iodine; MUST be added **near the end point** (when faint straw-yellow) because early addition forms an irreversible complex that traps iodine.\n3. *Starch Restrictions:* Never use starch in **alcohol** (inhibits adsorption) or **strong acid** (hydrolyzes starch into glucose, which is a reducing agent!). Use **Chloroform / CCl4** instead.\n4. *Thiosulfate Stabilization:* Standard Na2S2O3 decomposes by CO2 or bacteria; prepared with **recently boiled/cooled water** + **0.1 g NaHCO3** (pH 9-10).\n5. *Equivalent Weight of KIO3:* In weak acid (0.1 N HCl) $Eq.W = MW/5$; in strong acid (4-6 N HCl, Andrew's) $Eq.W = MW/4$. Therefore, it is always prepared in **Molarity (M)**, never Normality.\n6. *Lang's vs. Andrew's:* Andrew's uses **4-6 N HCl** + **Chloroform** (Stoppered flask); Lang's uses **KCN** (forms non-toxic ICN complex) in slightly acidic medium so **Starch** can be used (requires a **Long-neck flask** to avoid toxic HCN gas escape).\n7. *KBrO3 as Oxidant:* Transfers 6 electrons ($Eq.W = MW/6$). Bleaches **methyl orange** irreversibly at the end point by liberated Br2."
        },
        {
            type: "compare",
            title1: "Andrew's Method (Slide 8)",
            val1: "• *Titrant:* Potassium iodate ($KIO_3$).\n• *Medium:* Strongly acidic (**4-6 N HCl**).\n• *Indicator:* **Chloroform** or $CCl_4$ (Starch CANNOT be used due to high acid hydrolysis).\n• *Reaction/Complex:* Stabilizes unstable $I^+$ as **iodine dichloride complex $[ICl_2]^-$**.\n• *End Point:* Disappearance of purple color from organic layer, leaving pale yellow ($I^+$).\n• *Flask:* **Stoppered conical flask** (to prevent $I_2$ volatilization).",
            title2: "Lang's Modification (Slide 8)",
            val2: "• *Titrant:* Potassium iodate ($KIO_3$).\n• *Medium:* **Slightly acidic**.\n• *Indicator:* **Starch** can be used safely due to low acidity.\n• *Reaction/Complex:* Stabilizes $I^+$ by cyanide: $I^+ + CN^- \\rightarrow \\mathbf{ICN}$.\n• *Flask:* **Long-neck flask** (strictly mandatory to prevent poisoning from toxic $HCN$ gas vapor)."
        },
        {
            type: "table",
            headers: ["Reagent / Method", "Equivalent Weight (Eq. Wt.)", "Conditions / Notes"],
            rows: [
                ["Potassium Iodate (KIO3) in 0.1 N HCl", "MW / 5", "IO3- reduced to I2 (gains 5 e-)"],
                ["Potassium Iodate (Andrew's / 4-6 N HCl)", "MW / 4", "IO3- reduced to I+ (gains 4 e-)"],
                ["Potassium Bromate (KBrO3)", "MW / 6", "BrO3- reduced to Br- (gains 6 e-)"],
                ["Sodium Thiosulfate (Na2S2O3)", "MW / 1", "Oxidized to sodium tetrathionate (Na2S4O6)"]
            ]
        },
        {
            type: "compare",
            title1: "Oxidation of Organics (Strong Alkaline)",
            val1: "• Excess standard $KMnO_4$ is added.\n• Organics oxidized to **carbonate ($CO_3^{2-}$)**.\n• $MnO_4^-$ is reduced to **manganate ($MnO_4^{2-}$)** (green).\n• Barium ($Ba^{2+}$) is added to **precipitate manganate as insoluble $BaMnO_4$**.\n• Residual permanganate is back-titrated with **standard sodium formate**.",
            title2: "Oxidation of Organics (Weak Alkaline)",
            val2: "• Organics oxidized to **oxalate + carbonate**.\n• $MnO_4^-$ is reduced to **$MnO_2$**.\n• Excess permanganate decolorized by $H_2O_2$ + acid, and excess $H_2O_2$ is boiled off.\n• Formed oxalic acid is titrated against standard $MnO_4^-$ in **acid medium at 60°C**."
        },
        {
            type: "table",
            headers: ["Flask Type", "Application in Redox Titrations (Slide 9)"],
            rows: [
                ["Stoppered Conical Flask", "Iodine titrations & Andrew's method (prevents volatilization of I2)"],
                ["Long-Neck Flask", "Lang's cyanide modification (traps and prevents escape of toxic HCN gas)"],
                ["Ordinary Conical Flask", "Standard permanganate (KMnO4) and dichromate (K2Cr2O7) titrations"]
            ]
        },
        // --- المصطلحات العلمية المتوقعة (Reveals for Scientific Terms) ---
        {
            type: "reveal",
            title: "⭐ Scientific Term 1: Active species oxidizing aldoses in alkaline iodine",
            content: "**Hypoiodite (IO⁻)**: The active oxidizing intermediate formed in situ ($I_2 + 2OH^- \\rightarrow IO^- + I^- + H_2O$) that selectively oxidizes the aldehyde group of aldoses into carboxylic acids."
        },
        {
            type: "reveal",
            title: "⭐ Scientific Term 2: Titration of reducing agents with iodate in 4-6 N HCl",
            content: "**Andrew's Reaction**: A redox method where iodate ($IO_3^-$) oxidizes reductants ($I^-, Sn^{2+}$) in $4-6\\text{ N HCl}$ yielding unstable $I^+$, which is stabilized by high chloride as $[ICl_2]^-$, detected using chloroform."
        },
        {
            type: "reveal",
            title: "⭐ Scientific Term 3: Modification of Andrew's method replacing high HCl with cyanide",
            content: "**Lang's Modification**: An analytical procedure that uses $KCN$ in a slightly acidic medium to stabilize $I^+$ as non-ionized $ICN$, allowing the use of starch indicator in a long-neck flask."
        },
        {
            type: "reveal",
            title: "⭐ Scientific Term 4: In situ bromine generator used to assay phenol & aromatic amines",
            content: "**Bromate-Bromide Mixture**: An acidified equimolar solution ($BrO_3^- + 5Br^- + 6H^+ \\rightarrow 3Br_2 + 3H_2O$) used for quantitative bromination of phenol into insoluble tribromophenol."
        },
        {
            type: "reveal",
            title: "⭐ Scientific Term 5: Preservative added to starch solution against microbial breakdown",
            content: "**Boric Acid**: Added to starch indicator solutions to prevent decomposition by microorganisms into reducing sugars (glucose) and reddish non-reversible complexes."
        },
        {
            type: "reveal",
            title: "⭐ Scientific Term 6: Oxidation product of thiosulfate when titrated with iodine",
            content: "**Sodium Tetrathionate (Na₂S₄O₆)**: The specific oxidation product formed when standard sodium thiosulfate reacts quantitatively with iodine ($I_2 + 2S_2O_3^{2-} \\rightarrow S_4O_6^{2-} + 2I^-$)."
        }
    ],

    summaryAr: [
        {
            type: "vip",
            title: "⭐ [أهم نقاط الامتحان] الخلاصة الذهبية وقواعد الدكتور لمحاضرة 4",
            content: "١. *تقدير السكريات الألدهيدية (الجلوكوز):* يتأكسد الجلوكوز بفعل أيون **الهيبو أيودايت (IO-)** المتكون في الوسط القلوي إلى حمض ألدونيك، وليس بفعل اليود الجزيئي مباشرة.\n٢. *قاعدة النشا (Starch):* يكون النشا **معقد أدمصاص أزرق شديد** مع اليود؛ ويجب إضافته **قرب نقطة النهاية (عند تحول اللون لأصفر قشي باهت)** لأن إضافته مبكراً تحتجز اليود ولا تطلقه أبداً.\n٣. *ممنوعات استخدام النشا:* يمنع في **الكحول** (يمنع حدوث الأدمصاص) وفي **الأحماض القوية** (يحلل النشا لجلوكوز وهو عامل مختزل يعطي نتائج خاطئة). البديل هو **الكلوروفورم أو CCl4**.\n٤. *حفظ وتثبيت الثايوسلفات:* محلول Na2S2O3 يتفكك بفعل CO2 والبكتيريا؛ لذا يحضر بماء **مغلي ومبرد حديثاً** + **0.1 جم بيكربونات صوديوم NaHCO3** (pH 9-10).\n٥. *الوزن المكافئ لـ KIO3:* في الحمض المخفف (0.1 N) يقسم الوزن الجزيئي على 5؛ وفي الحمض المركز (4-6 N طريقة أندروز) يقسم على 4؛ ولذلك يحضر بـ **المولارية (M)** وليس بالعيارية.\n٦. *مقارنة أندروز ولانج:* أندروز يستخدم **حمض HCl مركز 4-6 N** ودليل **الكلوروفورم** ودورق بسدادة؛ أما لانج فيستبدل الحمض بـ **KCN** لتثبيت I+ في صورة ICN بوسط حمضي خفيف مما يتيح استخدام **النشا**، لكن يتطلب **دورق طويل العنق (Long-neck flask)** لمنع تصاعد غاز HCN السام.\n٧. *برومات البوتاسيوم KBrO3:* عامل مؤكسد يكتسب 6 إلكترونات ($Eq.W = MW/6$)، ويؤكسد دليل **الميثيل البرتقالي** ويزيل لونه تماماً عند نقطة النهاية."
        },
        {
            type: "compare",
            title1: "طريقة أندروز (Andrew's Method)",
            val1: "• *المحلول القياسي:* أيودات البوتاسيوم ($KIO_3$).\n• *الوسط:* شديد الحموضة (**4-6 N HCl**).\n• *الدليل:* **كلوروفورم** أو رابع كلوريد الكربون (ممنوع النشا لتحلله بالحمض).\n• *التثبيت:* تثبيت كاتيون الأيودونيوم $I^+$ كمعقد **$[ICl_2]^-$** بواسطة الحمض المركز.\n• *نقطة النهاية:* اختفاء اللون البنفسجي تماماً من طبقة الكلوروفورم لتصبح صفراء باهتة ($I^+$).\n• *نوع الدورق:* **دورق مخروطي ذو سدادة زجاجية (Stoppered flask)**.",
            title2: "تعديل لانج (Lang's Modification)",
            val2: "• *المحلول القياسي:* أيودات البوتاسيوم ($KIO_3$).\n• *الوسط:* **حمضي خفيف (Slightly acidic)**.\n• *الدليل:* **النشا (Starch)** يمكن استخدامه بأمان لعدم وجود حموضة عالية.\n• *التثبيت:* تثبيت كاتيون $I^+$ بإضافة السيانيد معطياً مركب ثابت **ICN**.\n• *نوع الدورق:* **دورق طويل العنق (Long-neck flask)** لمنع انتشار وتسمم غاز HCN."
        },
        {
            type: "table",
            headers: ["المادة / الطريقة", "الوزن المكافئ (Eq. Wt)", "ملاحظات هامة جداً"],
            rows: [
                ["أيودات البوتاسيوم (KIO3) في حمض 0.1 N", "MW / 5", "تختزل الأيودات إلى يود (تكتسب 5 إلكترونات)"],
                ["أيودات البوتاسيوم (طريقة أندروز 4-6 N HCl)", "MW / 4", "تختزل الأيودات إلى أيون أيودونيوم +I (تكتسب 4 إلكترونات)"],
                ["برومات البوتاسيوم (KBrO3)", "MW / 6", "تختزل البرومات إلى بروميد (تكتسب 6 إلكترونات)"],
                ["ثايوسلفات الصوديوم (Na2S2O3)", "MW / 1", "تتأكسد إلى رباعي ثيونات الصوديوم (Na2S4O6)"]
            ]
        },
        {
            type: "compare",
            title1: "أكسدة المركبات العضوية (وسط قلوي قوي)",
            val1: "• تضاف زيادة قياسية من $KMnO_4$.\n• يتأكسد المركب العضوي إلى **كربونات ($CO_3^{2-}$)**.\n• يختزل البرمنجانات إلى **منجنات ($MnO_4^{2-}$)** ذات اللون الأخضر.\n• يضاف الباريوم **لترسيب المنجنات كراسب $BaMnO_4$** لكي لا تتداخل.\n• تعاير الزيادة من البرمنجانات رجوعياً بـ **فورمات الصوديوم**.",
            title2: "أكسدة المركبات العضوية (وسط قلوي ضعيف)",
            val2: "• يتأكسد المركب العضوي إلى **أوكسالات + كربونات**.\n• يختزل البرمنجانات إلى **ثاني أكسيد المنجنيز $MnO_2$**.\n• تزال زيادة البرمنجانات بواسطة $H_2O_2$ وحمض ثم يغلى المحلول للتخلص من $H_2O_2$.\n• تعاير الأوكسالات الناتجة ضد برمنجانات في **وسط حمضي عند 60°C**."
        },
        {
            type: "table",
            headers: ["شكل الدورق في المعمل", "استخدامه في معايرات الأكسدة والاختزال (سلايد 9)"],
            rows: [
                ["دورق مخروطي ذو سدادة (Stoppered Conical)", "معايرات اليود وطريقة أندروز (لمنع تطاير اليود)"],
                ["دورق طويل العنق (Long-Neck Flask)", "تعديل لانج بالسيانيد (لحبس أبخرة HCN السامة وحماية المحلل)"],
                ["دورق مخروطي عادي (Conical Flask)", "معايرات البرمنجانات والدايكرومات العادية"]
            ]
        },
        // --- المصطلحات العلمية (Reveals بالعربي) ---
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 1: الأيون النشط المسؤول عن أكسدة الألدهيدات في وسط قلوي",
            content: "**الهيبو أيودايت Hypoiodite (IO⁻)**: الأيون المتكون لحظياً من تفاعل اليود مع الصودا الكاوية، وهو المسؤول الفعلي عن أكسدة السكريات الألدهيدية إلى أحماض عضوية."
        },
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 2: معايرة العوامل المختزلة باليودات في وسط حمضي مركز 4-6 N",
            content: "**تفاعل أندروز (Andrew's Reaction)**: طريقة أكسدة باليودات في حمض مركز $4-6\\text{ N HCl}$ يختزل فيها الأيودات إلى كاتيون $+I$ المثبت كمركب $[ICl_2]^-$ ويستخدم الكلوروفورم كدليل."
        },
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 3: تعديل لطريقة أندروز يحل فيه السيانيد محل الحمض المركز",
            content: "**تعديل لانج (Lang's Modification)**: استخدام سيانيد البوتاسيوم في وسط حمضي ضعيف لتثبيت الأيودونيوم كـ $ICN$ ويتيح استخدام دليل النشا في دورق طويل العنق."
        },
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 4: خليط يولد البروم ذاتياً لتقدير الفينول والأمينات العطرية",
            content: "**مخلوط البرومات والبروميد (Bromate-Bromide Mixture)**: مصدر لتوليد غاز البروم حيوياً بالتحميض لتقدير الفينول بترسيبه كمركب ثلاثي بروموفينول أصفر."
        },
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 5: مادة حافظة تضاف للنشا لحمايته من البكتيريا",
            content: "**حمض البوريك (Boric Acid)**: يضاف لمحلول النشا كمادة حافظة تمنع تحلله بالبكتيريا وتمنع تكوّن جلوكوز مختزل أو معقدات حمراء تحجب نقطة التكافؤ."
        },
        {
            type: "reveal",
            title: "⭐ مصطلح علمي 6: ناتج أكسدة الثايوسلفات عند تفاعلها مع اليود",
            content: "**رباعي ثيونات الصوديوم Sodium Tetrathionate (Na₂S₄O₆)**: المركب الناتج من الأكسدة الكمية لمحلول الثايوسلفات أثناء معايرة اليود به."
        }
    ],

    // =========================================================================
    // 2. أسئلة وإجابات نهاية المحاضرة بالكامل (PDF Q&A Full Solutions)
    // =========================================================================
    qna: [
        {
            q: "Give reason: Starch indicator must be added near the endpoint in iodometric titrations. (Slide 17, Q1)",
            a: "Because at high iodine concentrations, starch forms an extremely stable, irreversible adsorption complex with iodine that does not release iodine easily upon titration, resulting in an obscure end point and significant analytical error. Adding it near the end point (straw-yellow color) ensures rapid and reversible dissociation."
        },
        {
            q: "Give reason: Starch should NOT be used in strong acidic solutions or alcoholic solutions. (Slide 17, Q2)",
            a: "• In *strongly acidic solutions:* Strong acid causes hydrolysis of starch into glucose and other fragments; glucose acts as a reducing agent and interferes with the redox titration.\n• In *alcoholic solutions:* Alcohol inhibits and prevents the physical adsorption of iodine onto starch molecules, failing to develop the characteristic blue color."
        },
        {
            q: "Give reason: Acidic iodide solutions should be protected from air. (Slide 17, Q3)",
            a: "Because atmospheric oxygen rapidly oxidizes acidic iodide ions to molecular iodine according to the reaction: $4I^- + O_2 + 4H^+ \\rightarrow 2I_2 + 2H_2O$, which falsely increases the amount of liberated iodine and leads to severe positive errors."
        },
        {
            q: "Give reason: Thiosulfate solutions should be prepared with freshly boiled water and stored with NaHCO3. (Slide 17, Q4 & Q9)",
            a: "Freshly boiled and cooled water expels dissolved CO2 and destroys sulfur-consuming bacteria. 0.1 g NaHCO3 is added to maintain an alkaline pH (9-10), preventing acid-catalyzed decomposition of thiosulfate into bisulfite and elemental sulfur precipitate: $S_2O_3^{2-} + H^+ \\rightarrow HSO_3^- + S\\downarrow$."
        },
        {
            q: "Give reason: Potassium iodate (KIO3) is prepared in molar concentration, not normality. (Slide 17, Q5)",
            a: "Because potassium iodate has different equivalent weights depending on the acid strength of the medium: in weak acid (0.1 N HCl), $Eq.W = MW/5$, while in strong acid (4-6 N HCl, Andrew's method), $Eq.W = MW/4$. Molarity is constant and independent of the reaction pathway."
        },
        {
            q: "Give reason: Starch cannot be used in Andrews’ method. (Slide 17, Q6)",
            a: "Because Andrews' method is conducted in a strongly acidic medium (4-6 N HCl), which rapidly hydrolyzes the starch polysaccharide into reducing sugars (glucose), rendering the indicator completely ineffective."
        },
        {
            q: "Give reason: Lang’s modification uses a long-neck flask. (Slide 17, Q7)",
            a: "Because Lang's procedure uses potassium cyanide (KCN) in acidic medium, generating highly volatile and deadly hydrogen cyanide (HCN) gas. The long neck acts as an air condenser and vapor trap to minimize the hazard of toxic gas escape."
        },
        {
            q: "Give reason: High concentration of HCl is used in Andrew’s method. (Slide 17, Q8)",
            a: "To stabilize the highly unstable iodonium cation ($I^+$) by converting it into the stable iodine dichloride complex ion: $I^+ + 2Cl^- \\rightleftharpoons [ICl_2]^-$, thus driving the reaction quantitatively to completion."
        }
    ],

    qnaAr: [
        {
            q: "علل: يجب إضافة دليل النشا قرب نقطة نهاية المعايرة في المعايرات اليودية. (سلايد 17، س1)",
            a: "لأنه عند التركيزات العالية من اليود، يكوّن النشا مع اليود معقد أدمصاص أزرق شديد الثبات وغير عكسي يحتجز جزيئات اليود بداخله ولا يحررها بسهولة عند المعايرة، مما يفسد نقطة النهاية. لذا يضاف عندما يصبح لون المحلول أصفر قشي باهت لضمان انعكاسية التفاعل وسرعته."
        },
        {
            q: "علل: لا يستخدم دليل النشا في المحاليل الكحولية أو المحاليل شديدة الحموضة. (سلايد 17، س2)",
            a: "• في *المحاليل الكحولية:* الكحول يمنع أدمصاص اليود على أسطح النشا وبالتالي لا يظهر اللون الأزرق.\n• في *المحاليل شديدة الحموضة:* تتسبب الأحماض القوية في تحلل النشا مائياً إلى جلوكوز؛ والجلوكوز عامل مختزل يستهلك اليود ويعطي أخطاء فادحة."
        },
        {
            q: "علل: يجب حماية محاليل الأيوديد المحمضة من التعرض للهواء الجوي. (سلايد 17، س3)",
            a: "لأن أكسجين الهواء الجوي يؤكسد أيونات الأيوديد المحمضة ذاتياً إلى يود حر حسب المعادلة: $4I^- + O_2 + 4H^+ \\rightarrow 2I_2 + 2H_2O$، مما يسبب زيادة وهمية في كمية اليود وخطأً تحليلياً بالزيادة."
        },
        {
            q: "علل: يحضر محلول ثايوسلفات الصوديوم بماء مغلي مسبقاً وتضاف إليه بيكربونات الصوديوم. (سلايد 17، س4 وس9)",
            a: "الماء المغلي والمبرد يطرد غاز ثاني أكسيد الكربون ويقضي على البكتيريا الهوائية. تضاف بيكربونات الصوديوم NaHCO3 لحفظ قلوية خفيفة (pH 9-10) تمنع التحلل الحامضي للثايوسلفات إلى كبريتيت وترسيب عنصر الكبريت: $S_2O_3^{2-} + H^+ \\rightarrow HSO_3^- + S\\downarrow$."
        },
        {
            q: "علل: يحضر محلول أيودات البوتاسيوم KIO3 بالتركيز المولاري وليس العياري. (سلايد 17، س5)",
            a: "لأن لمركب أيودات البوتاسيوم أكثر من وزن مكافئ باختلاف قوة الوسط الحمضي: ففي حمض 0.1 N يكافئ MW/5، بينما في حمض 4-6 N (طريقة أندروز) يكافئ MW/4. لذا فالمولارية ثابتة ومطلقة بينما العيارية تتغير بتغير التفاعل."
        },
        {
            q: "علل: لا يمكن استخدام دليل النشا في طريقة أندروز. (سلايد 17، س6)",
            a: "لأن طريقة أندروز تتم في وسط شديد الحموضة (4-6 N HCl)، وتلك الحموضة العالية تؤدي إلى التحلل المائي الفوري للنشا وتحوله إلى جلوكوز يفسد المعايرة."
        },
        {
            q: "علل: يستخدم دورق طويل العنق في تعديل لانج. (سلايد 17، س7)",
            a: "لأن تفاعل لانج يستخدم سيانيد البوتاسيوم في وسط حمضي مما يؤدي إلى تصاعد غاز سيانيد الهيدروجين (HCN) شديد السمية والتطاير، والرقبة الطويلة تعمل كمكثف يحبس الأبخرة ويحمي المحلل من التسمم."
        },
        {
            q: "علل: يستخدم تركيز عالٍ من حمض الهيدروكلوريك (4-6 N HCl) في طريقة أندروز. (سلايد 17، س8)",
            a: "لتثبيت كاتيون الأيودونيوم ($I^+$) غير المستقر عن طريق تكوين متراكب ثنائي كلورو أيودات المستقر: $I^+ + 2Cl^- \\rightleftharpoons [ICl_2]^-$، مما يدفع تفاعل الأكسدة حتى نهايته التامة."
        }
    ],

    // =========================================================================
    // 3. أسئلة الشفوي التي ذكرها الدكتور (Oral Questions Detailed Answers)
    // =========================================================================
    oral: [
        {
            q: "Why is barium chloride added during the permanganate oxidation of organic compounds in strong alkaline medium?",
            a: "To precipitate the formed manganate (MnO4 2-) as insoluble green barium manganate (BaMnO4). This prevents manganate from undergoing disproportionation or further reacting during back titration, keeping the stoichiometry clear."
        },
        {
            q: "How can non-reducing sucrose be determined by the iodine method?",
            a: "By acid hydrolysis with dilute HCl to split sucrose into equal parts of D-glucose (aldose) and D-fructose (ketose). The aldose (glucose) is then selectively determined by iodine in alkaline medium."
        }
    ],

    oralAr: [
        {
            q: "لماذا يضاف كلوريد الباريوم عند أكسدة المركبات العضوية بالبرمنجانات في وسط قلوي قوي؟",
            a: "لترسيب أيونات المنجنات ($MnO_4^{2-}$) الناتجة كراسب باريوم منجنات أخضر غير ذائب ($BaMnO_4$)، لمنع تفككها أو تداخلها أثناء المعايرة الرجوعية بالفورمات."
        },
        {
            q: "كيف يمكن تقدير السكروز (وهو سكر غير مختزل) بواسطة طريقة اليود؟",
            a: "عن طريق عمل تحلل مائي له بواسطة حمض الهيدروكلوريك، حيث يتفكك إلى جلوكوز (ألدوز) وفركتوز (كيتوز)، ومن ثم يتم تقدير الجلوكوز نوعياً بواسطة الهيبو أيودايت في وسط قلوي."
        }
    ],

    // =========================================================================
    // 4. بنك أسئلة الكويز المطور الشامل (Exact 30 Questions - PDF & Simulated)
    // =========================================================================
    quiz: [
        // --- أسئلة الـ PDF الأصلية (Slides 14, 15, 16) ---
        {
            type: "mcq",
            question: "In the determination of aldoses by iodine, the **aldehyde group is oxidized to**:",
            questionAr: "في تقدير السكريات الألدهيدية باليود، تتأكسد **مجموعة الألدهيد إلى**:",
            options: ["Alcohol", "Ketone", "Carboxylic acid", "Ester"],
            optionsAr: ["كحول", "كيتون", "حمض كربوكسيلي", "إستر"],
            correct: 2,
            hint: "RCHO is converted into aldonic acid (**carboxylic acid** group RCOOH).",
            hintAr: "تتأكسد مجموعة الألدهيد RCHO إلى حمض ألدونيك يحتوي مجموعة **حمض كربوكسيلي** RCOOH."
        },
        {
            type: "mcq",
            question: "Which species is **responsible for oxidizing the aldehyde** in alkaline medium?",
            questionAr: "ما هو النوع الكيميائي **المسؤول عن أكسدة الألدهيد** في الوسط القلوي؟",
            options: ["I₂", "IO⁻", "I₃⁻", "HIO₃"],
            optionsAr: ["I₂", "IO⁻", "I₃⁻", "HIO₃"],
            correct: 1,
            hint: "Hypoiodite (**IO⁻**) generated in situ from iodine and alkali is the oxidizing agent.",
            hintAr: "أيون الهيبو أيودايت (**IO⁻**) المتكون بين اليود والقلوي هو المؤكسد الفعلي."
        },
        {
            type: "mcq",
            question: "What is the correct order of **increasing oxidizing power** among iodine species?",
            questionAr: "ما هو الترتيب الصحيح لـ **زيادة القوة المؤكسدة** لمركبات اليود؟",
            options: ["IO⁻, IO₃⁻, I⁻, I₂", "IO₃⁻, I₂, I⁻, IO⁻", "IO₃⁻, IO⁻, I₂, I⁻", "I⁻ < I₂ < IO₃⁻ < IO⁻"],
            optionsAr: ["IO⁻, IO₃⁻, I⁻, I₂", "IO₃⁻, I₂, I⁻, IO⁻", "IO₃⁻, IO⁻, I₂, I⁻", "I⁻ < I₂ < IO₃⁻ < IO⁻"],
            correct: 3,
            hint: "Reducing iodide is weakest, while **hypoiodite (IO⁻) is the strongest oxidant**.",
            hintAr: "الأيوديد هو الأضعف كمؤكسد، بينما **الهيبو أيودايت IO⁻ هو الأقوى أكسدة**."
        },
        {
            type: "mcq",
            question: "In the final step of aldose determination, the **liberated iodine is titrated with**:",
            questionAr: "في الخطوة النهائية لتقدير الألدوز، يتم **معايرة اليود الناتج بواسطة**:",
            options: ["KMnO₄", "K₂Cr₂O₇", "Na₂S₂O₃", "KI"],
            optionsAr: ["KMnO₄", "K₂Cr₂O₇", "Na₂S₂O₃", "KI"],
            correct: 2,
            hint: "Excess iodine is determined by standard **sodium thiosulfate (Na₂S₂O₃)**.",
            hintAr: "يعاير اليود الحر بواسطة محلول قياسي من **ثايوسلفات الصوديوم Na₂S₂O₃**."
        },
        {
            type: "mcq",
            question: "Starch indicator should be **added near the endpoint** because:",
            questionAr: "يجب **إضافة دليل النشا قرب نقطة النهاية** لأن:",
            options: ["It destroys iodine", "It forms irreversible complexes early", "It prevents hypoiodite formation", "It is unstable in water"],
            optionsAr: ["يدمر اليود", "يكون معقدات غير عكسية إذا أضيف مبكراً", "يمنع تكون الهيبو أيودايت", "غير مستقر في الماء"],
            correct: 1,
            hint: "High iodine concentration causes starch to form an **irreversible complex** that traps iodine.",
            hintAr: "تركيز اليود العالي يجعل النشا يكون **معقداً غير عكسي** يحتجز اليود."
        },
        {
            type: "mcq",
            question: "Starch indicator **should NOT be used in**:",
            questionAr: "**لا يجب استخدام** دليل النشا مطلقاً في:",
            options: ["Neutral solutions", "Strong acidic solutions", "Weakly acidic solutions", "Aqueous solutions"],
            optionsAr: ["المحاليل المتعادلة", "المحاليل شديدة الحموضة", "المحاليل ضعيفة الحموضة", "المحاليل المائية"],
            correct: 1,
            hint: "Strong acids cause **hydrolysis of starch** into glucose.",
            hintAr: "الأحماض القوية تسبب **تحلل النشا مائياً** إلى جلوكوز."
        },
        {
            type: "mcq",
            question: "In strongly acidic or alcoholic solutions, endpoint in iodine titrations is **detected using**:",
            questionAr: "في المحاليل الكحولية أو شديدة الحموضة، يتم **تحديد نقطة نهاية معايرة اليود باستخدام**:",
            options: ["Starch", "Phenolphthalein", "Chloroform or CCl₄", "Methylene blue"],
            optionsAr: ["النشا", "الفينولفثالين", "الكلوروفورم أو CCl₄", "الميثيلين الأزرق"],
            correct: 2,
            hint: "**Chloroform or CCl₄** extracts molecular iodine, giving a vivid purple layer.",
            hintAr: "**الكلوروفورم أو رابع كلوريد الكربون** يستخلص اليود معطياً طبقة بنفسجية."
        },
        {
            type: "mcq",
            question: "Iodine loss during titrations may primarily occur because **iodine is**:",
            questionAr: "قد يحدث فقد لليود أثناء إجراء المعايرات لأن **اليود يتميز بأنه**:",
            options: ["Non-reactive", "Volatile", "Hygroscopic", "Insoluble"],
            optionsAr: ["غير نشط كيميائياً", "متطاير (Volatile)", "ممتص للرطوبة", "غير قابل للذوبان"],
            correct: 1,
            hint: "Iodine has high vapor pressure and is **volatile**, necessitating stoppered flasks.",
            hintAr: "اليود مادة **متطايرة** تتسامى وتفقد في الهواء، لذا تستخدم دوارق مسدودة."
        },
        {
            type: "mcq",
            question: "Acidic iodide solutions lead to unwanted iodine formation because they are **oxidized by**:",
            questionAr: "تؤدي محاليل الأيوديد المحمضة لتكون يود غير مرغوب لأنها **تتأكسد بواسطة**:",
            options: ["CO₂", "Microorganisms", "Atmospheric oxygen", "Light"],
            optionsAr: ["ثاني أكسيد الكربون", "الميكروبات", "أكسجين الهواء الجوي", "الضوء"],
            correct: 2,
            hint: "Acidic I⁻ is readily oxidized by **atmospheric oxygen** ($4I^- + O_2 + 4H^+ \\rightarrow 2I_2 + 2H_2O$).",
            hintAr: "يتأكسد الأيوديد المحمض بسهولة بفعل **أكسجين الهواء الجوي**."
        },
        {
            type: "mcq",
            question: "Standard thiosulfate solutions are **stabilized against decomposition by adding**:",
            questionAr: "يتم **حفظ وتثبيت محاليل الثايوسلفات ضد التحلل بإضافة**:",
            options: ["HCl", "Boric acid", "NaHCO₃", "KI"],
            optionsAr: ["حمض الهيدروكلوريك", "حمض البوريك", "بيكربونات الصوديوم NaHCO₃", "أيوديد البوتاسيوم"],
            correct: 2,
            hint: "0.1 g **NaHCO₃** maintains alkaline pH (9-10) to prevent sulfur precipitation.",
            hintAr: "إضافة **NaHCO₃** تحفظ الوسط قلوياً خفيفاً وتمنع تفكك الثايوسلفات."
        },
        {
            type: "mcq",
            question: "Lang’s method uses which reagent to **stabilize the iodonium cation (I⁺)**?",
            questionAr: "تعتمد طريقة لانج على إضافة أي كاشف لـ **تثبيت كاتيون الأيودونيوم (I⁺)**؟",
            options: ["HCl", "KI", "KCN", "Na₂S₂O₃"],
            optionsAr: ["HCl", "KI", "KCN", "Na₂S₂O₃"],
            correct: 2,
            hint: "Potassium cyanide (**KCN**) stabilizes $I^+$ by forming non-ionized ICN.",
            hintAr: "سيانيد البوتاسيوم (**KCN**) يثبت $I^+$ عبر تكوين مركب ICN غير المتأين."
        },
        {
            type: "mcq",
            question: "The indicator used in **Lang’s modification** is:",
            questionAr: "الدليل المستخدم في **طريقة لانج المعدلة** هو:",
            options: ["Starch", "Chloroform", "KMnO₄", "Methyl orange"],
            optionsAr: ["النشا", "الكلوروفورم", "البرمنجانات", "الميثيل البرتقالي"],
            correct: 0,
            hint: "Because Lang's medium is only slightly acidic, **starch** can be safely employed.",
            hintAr: "لأن وسط تفاعل لانج حمضي خفيف، يمكن استخدام **النشا** بأمان تام."
        },
        {
            type: "mcq",
            question: "In Andrews’ method, the **equivalent weight of iodate (KIO₃)** is:",
            questionAr: "في طريقة أندروز، يكون **الوزن المكافئ لأيون الأيودات** مساوياً لـ:",
            options: ["MW / 6", "MW / 5", "MW / 4", "MW / 2"],
            optionsAr: ["MW / 6", "MW / 5", "MW / 4", "MW / 2"],
            correct: 2,
            hint: "IO₃⁻ (+5) changes to I⁺ (+1), involving 4 electrons: **MW / 4**.",
            hintAr: "تتحول الأيودات من +5 إلى +1 (كاتيون أيودونيوم) باكتساب 4 إلكترونات: **MW / 4**."
        },
        {
            type: "mcq",
            question: "The equivalent weight of **bromate (KBrO₃) when acting as oxidant** is:",
            questionAr: "الوزن المكافئ لـ **البرومات (KBrO₃) كعامل مؤكسد** يساوي:",
            options: ["MW / 1", "MW / 6", "MW / 3", "MW / 2"],
            optionsAr: ["MW / 1", "MW / 6", "MW / 3", "MW / 2"],
            correct: 1,
            hint: "BrO₃⁻ gains 6 electrons to form Br⁻, giving **MW / 6**.",
            hintAr: "تكتسب البرومات 6 إلكترونات لتتحول إلى بروميد: **MW / 6**."
        },
        {
            type: "mcq",
            question: "In **weak alkaline medium**, permanganate oxidation products of organic compounds include:",
            questionAr: "في **الوسط القلوي الضعيف**، تشمل نواتج أكسدة البرمنجانات للمركبات العضوية:",
            options: ["Phenol", "Oxalic acid", "Carboxylates", "Iodine"],
            optionsAr: ["الفينول", "حمض الأوكساليك (Oxalic acid)", "الكربوكسيلات", "اليود"],
            correct: 1,
            hint: "Organics are oxidized to **oxalic acid (oxalate)** + carbonate in weak alkali.",
            hintAr: "تتأكسد المركبات العضوية في القلوي الضعيف إلى **أوكسالات (حمض أوكساليك)** وكربونات."
        },

        // --- أسئلة مكملة مصممة بنفس الفكر والنمط لتكملة الـ 30 سؤالاً ---
        {
            type: "mcq",
            question: "In Andrews' method, the unstable I⁺ cation is **stabilized as an iodine dichloride complex** by:",
            questionAr: "في طريقة أندروز، يتم **تثبيت كاتيون I⁺ كمتراكب ثنائي كلورو أيودات** بواسطة:",
            options: ["Dilute acetic acid", "High concentration of HCl", "Potassium cyanide", "Sodium thiosulfate"],
            optionsAr: ["حمض الأسيتيك المخفف", "تركيز عالٍ من حمض HCl", "سيانيد البوتاسيوم", "ثايوسلفات الصوديوم"],
            correct: 1,
            hint: "High HCl concentration (4-6 N) forms the stable **[ICl₂]⁻ complex**.",
            hintAr: "حمض الهيدروكلوريك عالي التركيز (4-6 عياري) يكوّن متراكب **[ICl₂]⁻** الثابت."
        },
        {
            type: "mcq",
            question: "The organic layer in Andrew's method turns from **purple to pale yellow** due to formation of:",
            questionAr: "تتحول طبقة الكلوروفورم في طريقة أندروز من **البنفسجي إلى الأصفر الباهت** بسبب تكون:",
            options: ["I₂", "I⁻", "I⁺", "IO₃⁻"],
            optionsAr: ["I₂", "I⁻", "I⁺", "IO₃⁻"],
            correct: 2,
            hint: "The disappearance of purple ($I_2$) leaves the organic layer faintly yellow due to **I⁺**.",
            hintAr: "اختفاء لون اليود البنفسجي يترك لوناً أصفر باهتاً ناتجاً عن أيونات **I⁺**."
        },
        {
            type: "mcq",
            question: "Which flask type is **strictly used in Lang’s modification** to avoid toxic gas hazards?",
            questionAr: "ما هو نوع الدورق الذي **يستخدم حصرياً في تعديل لانج** لتجنب مخاطر الغازات السامة؟",
            options: ["Ordinary conical flask", "Stoppered conical flask", "Long-neck flask", "Volumetric flask"],
            optionsAr: ["دورق مخروطي عادي", "دورق مخروطي ذو سدادة", "دورق طويل العنق (Long-neck)", "دورق عياري"],
            correct: 2,
            hint: "A **long-neck flask** prevents poisonous HCN gas vapors from escaping.",
            hintAr: "يستخدم **دورق طويل العنق** لمنع تصاعد وتطاير غاز HCN السام."
        },
        {
            type: "mcq",
            question: "Potassium iodate (KIO₃) standard solution is **prepared based on molarity because**:",
            questionAr: "يحضر محلول أيودات البوتاسيوم القياسي **بناءً على المولارية وليس العيارية لأن**:",
            options: ["It is a secondary standard", "It has multiple equivalent weights", "It is unstable in acid", "It is volatile in air"],
            optionsAr: ["مادة معيارية ثانوية", "له أكثر من وزن مكافئ حسب الحموضة", "غير مستقر في الوسط الحمضي", "يتطاير في الهواء"],
            correct: 1,
            hint: "KIO3 has **different equivalent weights** (MW/5 or MW/4) depending on the medium acidity.",
            hintAr: "لأن له **أوزاناً مكافئة متعددة** تختلف باختلاف تركيز الحمض المستخدم."
        },
        {
            type: "mcq",
            question: "Bromate-bromide mixture is quantitatively used for the **determination of**:",
            questionAr: "يستخدم مخلوط البرومات والبروميد كمياً في **تقدير مركب**:",
            options: ["Glucose", "Glycerol", "Phenol", "Sucrose"],
            optionsAr: ["الجلوكوز", "الجلسرين", "الفينول", "السكروز"],
            correct: 2,
            hint: "Bromate-bromide mixture produces Br2 to brominate **phenol** into tribromophenol.",
            hintAr: "يولد البروم المستخدم في هلجنة وترسيب **الفينول** في صورة ثلاثي بروموفينول."
        },
        {
            type: "mcq",
            question: "The precipitate formed upon reaction of **phenol with excess bromine** is:",
            questionAr: "الراسب المتكون عند تفاعل **الفينول مع الزيادة من البروم** هو:",
            options: ["Monobromophenol", "Dibromophenol", "Tribromophenol", "Tetrabromophenol"],
            optionsAr: ["أحادي بروموفينول", "ثنائي بروموفينول", "ثلاثي بروموفينول (Tribromophenol)", "رباعي بروموفينول"],
            correct: 2,
            hint: "Phenol gives a yellow precipitate of **tribromophenol**.",
            hintAr: "يعطي الفينول راسباً أصفر من **ثلاثي بروموفينول**."
        },
        {
            type: "mcq",
            question: "Why is **chloroform added** during the bromate-bromide determination of phenol?",
            questionAr: "لماذا يضاف **الكلوروفورم أثناء تقدير الفينول** بمخلوط البرومات والبروميد؟",
            options: ["To neutralize the acid", "To dissolve the yellow precipitate", "To accelerate reduction", "To prevent iodine release"],
            optionsAr: ["لمعادلة الحمض", "لإذابة الراسب الأصفر وتوضيح نقطة النهاية", "لتسريع الاختزال", "لمنع انطلاق اليود"],
            correct: 1,
            hint: "Chloroform **dissolves the yellow tribromophenol precipitate** to clearly see the end point.",
            hintAr: "يضاف **لإذابة راسب ثلاثي بروموفينول الأصفر** حتى لا يعيق رؤية نقطة النهاية."
        },
        {
            type: "mcq",
            question: "In potassium bromate titrations, the endpoint is signaled when **excess bromate bleaches**:",
            questionAr: "في معايرات برومات البوتاسيوم، يُستدل على نقطة النهاية عندما **تقوم البرومات بإزالة لون**:",
            options: ["Starch", "Phenolphthalein", "Methyl orange", "Methylene blue"],
            optionsAr: ["النشا", "الفينولفثالين", "الميثيل البرتقالي (Methyl orange)", "الميثيلين الأزرق"],
            correct: 2,
            hint: "Liberated bromine irreversibly bleaches **methyl orange** indicator by oxidation.",
            hintAr: "يقوم أول فائض من البروم بأكسدة وإزالة لون دليل **الميثيل البرتقالي** نهائياً."
        },
        {
            type: "mcq",
            question: "What preservative is added to prevent **microbial decomposition of starch solutions**?",
            questionAr: "ما هي المادة الحافظة المضافة لمنع **التحلل الميكروبي لمحلول النشا**؟",
            options: ["Sodium chloride", "Boric acid", "Hydrochloric acid", "Sodium hydroxide"],
            optionsAr: ["كلوريد الصوديوم", "حمض البوريك (Boric acid)", "حمض الهيدروكلوريك", "هيدروكسيد الصوديوم"],
            correct: 1,
            hint: "**Boric acid** acts as an effective antimicrobial preservative for starch.",
            hintAr: "يضاف **حمض البوريك** كمادة حافظة لحماية النشا من العفن والبكتيريا."
        },
        {
            type: "mcq",
            question: "In the quantitative oxidation of organic compounds in strong alkaline medium, **barium ions precipitate**:",
            questionAr: "عند الأكسدة الكمية للمركبات العضوية في وسط قلوي قوي، تقوم **أيونات الباريوم بترسيب**:",
            options: ["Carbonate", "Permanganate", "Manganate (MnO₄²⁻)", "Oxalate"],
            optionsAr: ["الكربونات", "البرمنجانات", "المنجنات (MnO₄²⁻)", "الأوكسالات"],
            correct: 2,
            hint: "Barium precipitates **manganate as BaMnO₄**, preventing its interference.",
            hintAr: "يرسب الباريوم **أيونات المنجنات في صورة BaMnO₄** الأخضر غير الذائب."
        },
        {
            type: "mcq",
            question: "In strong alkaline medium, the excess unreacted permanganate is **back-titrated using standard**:",
            questionAr: "في الوسط القلوي القوي، تتم **المعايرة الرجوعية للبرمنجانات الزائدة باستخدام**:",
            options: ["Sodium thiosulfate", "Sodium formate", "Oxalic acid", "Ferrous sulfate"],
            optionsAr: ["ثايوسلفات الصوديوم", "فورمات الصوديوم (Sodium formate)", "حمض الأوكساليك", "كبريتات الحديدوز"],
            correct: 1,
            hint: "Standard **sodium formate** is used to titrate excess permanganate in alkaline medium.",
            hintAr: "يستخدم محلول قياسي من **فورمات الصوديوم** لمعايرة الزيادة من البرمنجانات."
        },
        {
            type: "mcq",
            question: "Before determining non-reducing **sucrose by the hypoiodite method**, sucrose must first undergo:",
            questionAr: "قبل تقدير سكر **السكروز غير المختزل بطريقة الهيبو أيودايت**، يجب أن يخضع أولاً لـ:",
            options: ["Oxidation with HNO₃", "Hydrolysis with HCl", "Bromination", "Reduction with NaBH₄"],
            optionsAr: ["أكسدة بحمض النيتريك", "تحلل مائي بحمض الهيدروكلوريك (HCl)", "هلجنة بالبروم", "اختزال بهيدريد البورون"],
            correct: 1,
            hint: "Sucrose is **hydrolyzed by HCl** into glucose (aldose) and fructose.",
            hintAr: "يتم عمل **تحلل مائي بحمض HCl** لتحويل السكروز إلى جلوكوز قابل للأكسدة."
        },
        {
            type: "mcq",
            question: "What product is formed when **thiosulfate decomposes in acidic solutions**?",
            questionAr: "ما هو الناتج المتكون عند **تفكك الثايوسلفات في المحاليل الحمضية**؟",
            options: ["Sulfur dioxide gas", "Elemental sulfur precipitate", "Sulfate precipitate", "Hydrogen sulfide gas"],
            optionsAr: ["غاز ثاني أكسيد الكبريت", "راسب الكبريت العنصري (S↓)", "راسب الكبريتات", "غاز كبريتيد الهيدروجين"],
            correct: 1,
            hint: "Thiosulfate produces bisulfite and a **precipitate of elemental sulfur** ($S\\downarrow$).",
            hintAr: "تتفكك الثايوسلفات حمضياً لتعطي بيسلفيت و**راسب كبريت عنصري أصفر**."
        },
        {
            type: "mcq",
            question: "The blue color formed between starch and iodine is classified chemically as a/an:",
            questionAr: "يوصف اللون الأزرق المتكون بين النشا واليود كيميائياً بأنه:",
            options: ["Covalent compound", "Adsorption complex", "Ionic precipitate", "Coordinate chelate"],
            optionsAr: ["مركب تساهمي", "معقد أدمصاص (Adsorption complex)", "راسب أيوني", "مخلب تناسقي"],
            correct: 1,
            hint: "It is an **adsorption complex** where iodine molecules enter helical starch chains.",
            hintAr: "هو **معقد أدمصاص فيزيائي** تتخلل فيه جزيئات اليود سلاسل النشا الحلزونية."
        },
        {
            type: "mcq",
            question: "When thiosulfate reacts quantitatively with iodine, the **sulfur-containing oxidation product is**:",
            questionAr: "عند تفاعل الثايوسلفات كمياً مع اليود، فإن **الناتج المتأكسد المحتوي على الكبريت هو**:",
            options: ["Sulfate (SO₄²⁻)", "Sulfite (SO₃²⁻)", "Tetrathionate (S₄O₆²⁻)", "Sulfide (S²⁻)"],
            optionsAr: ["كبريتات", "كبريتيت", "رباعي ثيونات (Tetrathionate S₄O₆²⁻)", "كبريتيد"],
            correct: 2,
            hint: "$2S_2O_3^{2-} + I_2 \\rightarrow \\mathbf{S_4O_6^{2-}} + 2I^-$.",
            hintAr: "ينتج أيون **رباعي الثيونات (S₄O₆²⁻)** من أكسدة الثايوسلفات باليود."
        }
    ]
});
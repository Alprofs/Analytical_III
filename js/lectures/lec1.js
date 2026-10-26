DataStore.lectures.push({
    id: 1,
    title: "Lec 1: Oxidation-Reduction Titrations",

    // =========================================================================
    // 1. ملخص المحاضرة والشرح الوافي (Comprehensive Summary & Exam Rules)
    // =========================================================================
    summary: [
        {
            type: "vip",
            title: "⭐ [EXAM PRIORITY] Professor's Core Blackboard Rules",
            content: "1. *Mixed Oxides Rule:* For compounds like *Fe3O4* (FeO + Fe2O3), the average oxidation state of Fe is *+8/3* (NOT +2).\n2. *Oxidant Strength Rule:* Higher oxygen content = stronger oxidant (e.g., *KMnO4 > H2O2*).\n3. *Organic Compounds Rule:* Any organic substance acts as a *reductant* because it undergoes oxidation to *CO2*.\n4. *Dual Nature of H2O2:* When oxidized, it releases *O2*; when reduced, it forms *H2O*.\n5. *Eq. Wt. of KMnO4 in acid:* Molecular weight divided by 5 (electrons gained) = 158 / 5 = *31.6 g/eq*."
        },
        {
            type: "compare",
            title1: "Classical (Old) Redox Definition",
            val1: "• *Oxidation:* Combination of compounds with oxygen.\n• *Reduction:* Reaction of compounds with hydrogen.\n• *The Fatal Flaw:* Fails to explain the oxidation of ferrous chloride by chlorine gas ($2Fe^{2+} + Cl_2 \\rightarrow 2Fe^{3+} + 2Cl^-$) where no oxygen participates!",
            title2: "Modern Electronic Definition ⭐",
            val2: "• *Oxidation:* Loss of electrons ($Fe^{2+} \\rightarrow Fe^{3+} + e^-$).\n• *Reduction:* Gain of electrons ($Cl_2 + 2e^- \\rightarrow 2Cl^-$).\n• *Reductant (Reducing Agent):* The electron donor that undergoes oxidation.\n• *Oxidant (Oxidizing Agent):* The electron acceptor that undergoes reduction.\n• *Rule:* Number of electrons lost in oxidation MUST equal electrons gained in reduction."
        },
        {
            type: "definition",
            term: "Redox in Pharmaceutical Analysis (Slide 3)",
            content: "Many pharmaceutical active ingredients are sensitive to redox mechanisms:\n• *Ascorbic acid (Vitamin C):* Reversibly oxidizes in contact with air to *dehydroascorbic acid*. Exhibits maximum stability (lowest redox rate) when buffered at *pH 6*.\n• *Riboflavin (Vitamin B2):* Reversibly reduced into a dihydro-product that is *less active and less bioavailable*. Exhibits maximum stability when buffered at *pH 5*.\n• *Other Sensitive APIs:* Epinephrine, Morphine, Chlorpromazine, Vitamin K, Vitamin E, and Unsaturated Fats/Oils."
        },
        {
            type: "compare",
            title1: "Water-Soluble Antioxidants (Slide 4)",
            val1: "• Sodium bisulphite & Sodium sulphite\n• Ascorbic acid (Vitamin C)\n• Sodium metabisulphite\n• Glutathione (*GSH*)\n• Cysteine & Thioglycolic acid\n• Sulphur dioxide",
            title2: "Oil-Soluble Antioxidants (Slide 4)",
            val2: "• Butylated hydroxyanisole (*BHA*)\n• Butylated hydroxytoluene (*BHT*)\n• $\\alpha$-Tocopherol (*Vitamin E*)\n• Propyl gallate\n• Lecithin"
        },
        {
            type: "table",
            headers: ["Substance", "Oxidation Number (O.N) Rules"],
            rows: [
                ["Free Elements (H2, Cl2, Al)", "0 (Zero)"],
                ["Monatomic Ions (Na+, Cl-, Fe3+)", "Equal to its electrical charge (+1, -1, +3)"],
                ["Hydrogen (General Compounds)", "+1 (in H2O, NH3, HCl)"],
                ["Hydrogen in Metallic Hydrides", "*-1* (in NaH, LiH, CaH2)"],
                ["Oxygen (General Oxides)", "-2 (in H2O, SO4 2-, CO2)"],
                ["Oxygen in Peroxides", "*-1* (in H2O2, Na2O2)"],
                ["Potassium Chlorate (KClO3)", "K = +1, O = -2, *Cl = +5*"],
                ["Potassium Chromate (K2CrO4)", "K = +1, O = -2, *Cr = +6*"],
                ["Sulfate Ion (SO4 2-)", "O = -2, *S = +6*"]
            ]
        },
        {
            type: "reveal",
            title: "Oxidation States of Manganese and Nitrogen (Slide 11)",
            content: "• *Manganese (Mn) States:* $Mn^0$ (metal), $Mn^{2+}$, $Mn^{3+}$, $MnO_2$ (+4), $MnO_4^{2-}$ (+6), $MnO_4^-$ (+7).\n• *Nitrogen (N) States:* $NH_3$ (-3), $N_2H_4$ (-2), $NH_2OH$ (-1), $N_2$ (0), $N_2O$ (+1), $NO$ (+2), $HNO_2$ (+3), $HNO_3$ (+5)."
        },
        {
            type: "steps",
            title: "Standard Protocol for Balancing Redox Equations (Half-Reaction Ion-Electron Method)",
            items: [
                "1. Assign oxidation numbers to identify oxidized and reduced species.",
                "2. Split the overall reaction into two separate half-reactions (oxidation and reduction).",
                "3. Balance all principal atoms except Oxygen and Hydrogen.",
                "4. Balance Oxygen atoms by adding water molecules ($H_2O$) to the deficient side.",
                "5. Balance Hydrogen atoms by adding hydrogen ions ($H^+$) to the deficient side.",
                "6. Balance electrical charges by adding electrons ($e^-$).",
                "7. Equalize lost and gained electrons by multiplying half-reactions by suitable integers, then sum them up."
            ]
        },
        {
            type: "reveal",
            title: "Eq 1: Aluminum with Hydrochloric Acid (Slide 13)",
            content: "Unbalanced: $Al + HCl \\rightarrow AlCl_3 + H_2$\n\n• *Oxidation Half:* $Al \\rightarrow Al^{3+} + 3e^-$\n• *Reduction Half:* $2H^+ + 2e^- \\rightarrow H_2$\n\n*Equalizing Electrons (LCM = 6e-):*\nMultiply oxidation half by 2: $2Al \\rightarrow 2Al^{3+} + 6e^-$\nMultiply reduction half by 3: $6H^+ + 6e^- \\rightarrow 3H_2$\n\n*Overall Balanced Equation:* $$2Al + 6H^+ \\rightarrow 2Al^{3+} + 3H_2$$"
        },
        {
            type: "reveal",
            title: "Eq 2: Permanganate with Oxalate in Acid (Slide 14)",
            content: "Unbalanced: $MnO_4^- + C_2O_4^{2-} \\rightarrow Mn^{2+} + CO_2$\n\n• *Reduction Half:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$\n• *Oxidation Half:* $C_2O_4^{2-} \\rightarrow 2CO_2 + 2e^-$\n\n*Equalizing Electrons (LCM = 10e-):*\nMultiply reduction half by 2: $2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$\nMultiply oxidation half by 5: $5C_2O_4^{2-} \\rightarrow 10CO_2 + 10e^-$\n\n*Overall Balanced Equation:* $$2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O$$"
        },
        {
            type: "reveal",
            title: "Eq 3: Dichromate with Ferrous Ion in Acid (Slide 15)",
            content: "Unbalanced: $Cr_2O_7^{2-} + Fe^{2+} \\rightarrow Cr^{3+} + Fe^{3+}$\n\n• *Reduction Half:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$\n• *Oxidation Half:* $Fe^{2+} \\rightarrow Fe^{3+} + 1e^-$\n\n*Equalizing Electrons (LCM = 6e-):*\nMultiply oxidation half by 6: $6Fe^{2+} \\rightarrow 6Fe^{3+} + 6e^-$\n\n*Overall Balanced Equation:* $$Cr_2O_7^{2-} + 6Fe^{2+} + 14H^+ \\rightarrow 2Cr^{3+} + 6Fe^{3+} + 7H_2O$$"
        },
        {
            type: "reveal",
            title: "Eq 4a: Permanganate with Hydrogen Peroxide (Slide 16 Homework & Blackboard Exam Equation) ⭐",
            content: "Unbalanced: $MnO_4^- + H_2O_2 + H^+ \\rightarrow Mn^{2+} + H_2O + O_2$\n*(KMnO4 is richer in oxygen; it acts as oxidant, forcing H2O2 to act as reductant producing O2)*.\n\n• *Reduction Half:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ $(\\times 2) \\Rightarrow 2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$\n• *Oxidation Half:* $H_2O_2 \\rightarrow O_2 + 2H^+ + 2e^-$ $(\\times 5) \\Rightarrow 5H_2O_2 \\rightarrow 5O_2 + 10H^+ + 10e^-$\n\n*Subtracting common 10H+ from both sides yields:* $$2MnO_4^- + 5H_2O_2 + 6H^+ \\rightarrow 2Mn^{2+} + 8H_2O + 5O_2$$"
        },
        {
            type: "reveal",
            title: "Eq 4b: Iodate with Iodide in Acid (Slide 16 Homework)",
            content: "Unbalanced: $IO_3^- + I^- + H^+ \\rightarrow I_2 + H_2O$\n\n• *Reduction Half:* $2IO_3^- + 12H^+ + 10e^- \\rightarrow I_2 + 6H_2O$\n• *Oxidation Half:* $2I^- \\rightarrow I_2 + 2e^-$ $(\\times 5) \\Rightarrow 10I^- \\rightarrow 5I_2 + 10e^-$\n\n*Sum:* $2IO_3^- + 10I^- + 12H^+ \\rightarrow 6I_2 + 6H_2O$\n*Dividing all coefficients by 2:* $$IO_3^- + 5I^- + 6H^+ \\rightarrow 3I_2 + 3H_2O$$"
        },
        {
            type: "reveal",
            title: "Eq 4c: Dichromate with Glycerol in Acid (Slide 16 Homework)",
            content: "Unbalanced: $Cr_2O_7^{2-} + C_3H_8O_3 + H^+ \\rightarrow Cr^{3+} + CO_2 + H_2O$\n\n• *Oxidation Half:* $C_3H_8O_3 + 3H_2O \\rightarrow 3CO_2 + 14H^+ + 14e^-$ $(\\times 3)$\n• *Reduction Half:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$ $(\\times 7)$\n\n*Summing and canceling net H+ and H2O:* $$7Cr_2O_7^{2-} + 3C_3H_8O_3 + 56H^+ \\rightarrow 14Cr^{3+} + 9CO_2 + 40H_2O$$"
        },
        {
            type: "reveal",
            title: "Eq 4d: Ceric with Acetaldehyde (Slide 16 Homework)",
            content: "Unbalanced: $Ce^{4+} + CH_3CHO + H_2O \\rightarrow Ce^{3+} + CH_3COOH + H^+$\n\n• *Reduction Half:* $Ce^{4+} + 1e^- \\rightarrow Ce^{3+}$ $(\\times 2)$\n• *Oxidation Half:* $CH_3CHO + H_2O \\rightarrow CH_3COOH + 2H^+ + 2e^-$\n\n*Overall Balanced Equation:* $$2Ce^{4+} + CH_3CHO + H_2O \\rightarrow 2Ce^{3+} + CH_3COOH + 2H^+$$"
        },
        {
            type: "compare",
            title1: "Solution Pressure",
            val1: "• The inherent tendency of a metal to dissolve into an aqueous solution of its salt, forming metal cations.\n• Example: In $Zn/Zn^{2+}$, *Solution Pressure > Ionic Pressure*, so Zn rod dissolves and charges negatively.",
            title2: "Ionic Pressure",
            val2: "• The tendency of metal cations to deposit from the solution onto the metallic rod dipped into it.\n• Example: In $Cu/Cu^{2+}$, *Ionic Pressure > Solution Pressure*, so $Cu^{2+}$ deposits on the Cu rod."
        },
        {
            type: "equation",
            title: "Nernst Equation for Electrode Potential (25°C) ⭐",
            formula: "$$E_{25^\\circ\\text{C}} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$$",
            where: [
                { symbol: "E", meaning: "Electrode potential at prevailing temperature and concentration" },
                { symbol: "E°", meaning: "Standard electrode potential when ionic activity is 1 M" },
                { symbol: "n", meaning: "Valency of metal cation / number of transferred electrons (strictly constant per system)" },
                { symbol: "[Mn+]", meaning: "Molar concentration of metal ions in solution" }
            ],
            note: "Nernst equation establishes the quantitative mathematical relationship between electrode potential and solution concentration."
        },
        {
            type: "reveal",
            title: "Normal Hydrogen Electrode (NHE / SHE) (Slide 25)",
            content: "• *Structure:* Platinum foil coated with platinum black, immersed in $1\\text{ N HCl}$ ($[H^+] = 1\\text{ M}$), with pure $H_2$ gas bubbled at $1\\text{ atm}$.\n• *Half-reaction:* $2H^+ + 2e^- \\rightleftharpoons H_2$\n• *Universal Reference Standard:* By international convention, $E^\\circ_{\\text{NHE}} = 0.00\\text{ V}$ at all temperatures."
        },
        {
            type: "table",
            headers: ["System (Redox Couple)", "E° (Volts) (Strict Sequential Order ⭐)"],
            rows: [
                ["Ce4+ / Ce3+", "+1.65 V"],
                ["MnO4- / Mn2+", "+1.51 V"],
                ["Cl2 / 2Cl-", "+1.36 V"],
                ["Cr2O7 2- / Cr3+", "+1.33 V"],
                ["Fe3+ / Fe2+", "+0.77 V"],
                ["I2 / 2I-", "+0.54 V"],
                ["Ferricyanide / Ferrocyanide", "+0.36 V"],
                ["Cu2+ / Cu", "+0.34 V"],
                ["Cu2+ / Cu+", "+0.16 V"],
                ["H+ / H2 (NHE Reference)", "0.00 V"],
                ["Zn2+ / Zn", "-0.76 V"],
                ["Li+ / Li (Most Reducing Metal)", "-3.04 V"]
            ]
        }
    ],

    summaryAr: [
        {
            type: "vip",
            title: "⭐ [أهم نقاط الامتحان] ملاحظات وقواعد الدكتور من على السبورة",
            content: "١. *قاعدة الأكاسيد المختلطة:* مركب $Fe_3O_4$ هو أكسيد مختلط ($FeO + Fe_2O_3$) ومتوسط عدد تأكسد الحديد فيه هو *+8/3* وليس +2.\n٢. *قوة العامل المؤكسد:* المركب الأعلى في عدد ذرات الأكسجين هو الأقوى كعامل مؤكسد (*KMnO4 أقوى من H2O2*).\n٣. *المركبات العضوية:* أي مركب عضوي يسلك كـ *عامل مختزل (Reductant)* لأنه يميل للأكسدة والتحول إلى $CO_2$.\n٤. *سلوك H2O2 المزدوج:* إذا تأكسد يتحول إلى غاز *$O_2$*، وإذا اختُزل يتحول إلى ماء *$H_2O$*.\n٥. *الوزن المكافئ (Eq.Wt) لـ KMnO4 في وسط حمضي:* الوزن الجزيئي مقسوماً على 5 = 158 / 5 = *31.6 جم/مكافئ* (لأنه يكتسب 5 إلكترونات)."
        },
        {
            type: "compare",
            title1: "التعريف القديم (Classical)",
            val1: "• *الأكسدة:* تفاعل المركبات مع الأكسجين.\n• *الاختزال:* تفاعل المركبات مع الهيدروجين.\n• *العيب القاتل:* فشل تماماً في تفسير أكسدة كلوريد الحديدوز بغاز الكلور ($2Fe^{2+} + Cl_2 \\rightarrow 2Fe^{3+} + 2Cl^-$) لعدم وجود أي أكسجين في التفاعل!",
            title2: "التعريف الإلكتروني الحديث ⭐",
            val2: "• *الأكسدة:* فقد الإلكترونات وزيادة الشحنة الموجبة ($Fe^{2+} \\rightarrow Fe^{3+} + e^-$).\n• *الاختزال:* اكتساب الإلكترونات ونقص الشحنة الموجبة ($Cl_2 + 2e^- \\rightarrow 2Cl^-$).\n• *العامل المختزل (Reductant):* يمنح إلكترونات ويحدث له تأكسد.\n• *العامل المؤكسد (Oxidant):* يكتسب إلكترونات ويحدث له اختزال."
        },
        {
            type: "definition",
            term: "الأكسدة والاختزال في التحليل الصيدلي (سلايد 3)",
            content: "العديد من المواد الفعالة الدوائية حساسة للغاية للأكسدة والاختزال:\n• *حمض الأسكوربيك (فيتامين C):* يتأكسد عكسياً وببطء في الهواء إلى *dehydroascorbic acid*. أعلى درجات استقراره (أقل معدل أكسدة) تكون عند *pH 6*.\n• *الريبوفلافين (فيتامين B2):* يختزل عكسياً إلى مركب ثنائي هيدروجين وهو *أقل فاعلية وأقل امتصاصاً حيوياً*. أعلى استقرار له عند *pH 5*.\n• *مركبات حساسة أخرى:* الإبينفرين، المورفين، الكلوربرومازين، فيتامين K، فيتامين E، والزيوت والدهون غير المشبعة."
        },
        {
            type: "compare",
            title1: "مضادات الأكسدة الذائبة في الماء (سلايد 4)",
            val1: "• صوديوم بيسلفيت وصوديوم سلفيت\n• حمض الأسكوربيك (فيتامين C)\n• صوديوم ميتابيسلفيت\n• الجلوتاثيون (*GSH*)\n• السيستيين وحمض الثايوجلايكوليك\n• ثاني أكسيد الكبريت",
            title2: "مضادات الأكسدة الذائبة في الزيوت (سلايد 4)",
            val2: "• بيوتيليتد هيدروكسي أنيسول (*BHA*)\n• بيوتيليتد هيدروكسي تولوين (*BHT*)\n• ألفا-توكوفيرول (*فيتامين E*)\n• بروبيل جالات (Propyl gallate)\n• الليسيثين (Lecithin)"
        },
        {
            type: "table",
            headers: ["المادة أو الأيون", "قاعدة عدد التأكسد (O.N)"],
            rows: [
                ["العناصر الحرة (H2, Cl2, Al)", "صفر تماماً"],
                ["الأيونات أحادية الذرة (Na+, Cl-, Fe3+)", "تساوي شحنة الأيون كهربياً (+1, -1, +3)"],
                ["الهيدروجين في معظم المركبات", "+1 (مثل H2O, NH3, HCl)"],
                ["الهيدروجين في الهيدريدات الفلزية", "*-1* (مثل NaH, LiH)"],
                ["الأكسجين في الأكاسيد العادية", "-2 (مثل H2O, SO4 2-)"],
                ["الأكسجين في مركبات البيروكسيد", "*-1* (مثل H2O2)"],
                ["كلورات البوتاسيوم (KClO3)", "K = +1, O = -2, *Cl = +5*"],
                ["كرومات البوتاسيوم (K2CrO4)", "K = +1, O = -2, *Cr = +6*"],
                ["أيون الكبريتات (SO4 2-)", "O = -2, *S = +6*"]
            ]
        },
        {
            type: "reveal",
            title: "حالات تأكسد المنجنيز والنيتروجين بالتفصيل (سلايد 11)",
            content: "• *المنجنيز (Mn):* $Mn^0$ (فلز حر), $Mn^{2+}$, $Mn^{3+}$, $MnO_2$ (+4), $MnO_4^{2-}$ (+6), $MnO_4^-$ (+7).\n• *النيتروجين (N):* $NH_3$ (-3), $N_2H_4$ (-2), $NH_2OH$ (-1), $N_2$ (0), $N_2O$ (+1), $NO$ (+2), $HNO_2$ (+3), $HNO_3$ (+5)."
        },
        {
            type: "steps",
            title: "شرح خطوات وزن معادلات الأكسدة والاختزال بالتفصيل (طريقة نصفي التفاعل / أيون-إلكترون)",
            items: [
                "١. تحديد أعداد التأكسد ومعرفة المادة التي تأكسدت والتي اختزلت.",
                "٢. تقسيم التفاعل الكلي إلى نصفي تفاعل منفصلين (نصف أكسدة ونصف اختزال).",
                "٣. وزن جميع الذرات الرئيسية ما عدا الأكسجين والهيدروجين.",
                "٤. وزن ذرات الأكسجين بإضافة جزيئات ماء ($H_2O$) للطرف الناقص أكسجين.",
                "٥. وزن ذرات الهيدروجين بإضافة أيونات هيدروجين ($H^+$) للطرف الناقص هيدروجين.",
                "٦. وزن الشحنات الكهربائية بإضافة الإلكترونات ($e^-$) للطرف الأعلى شحنة.",
                "٧. مساواة الإلكترونات المفقودة بالمكتسبة بضرب نصفي التفاعل في معاملات، ثم الجمع النهائي مع اختصار الأيونات المتشابهة."
            ]
        },
        {
            type: "reveal",
            title: "المعادلة 1: تفاعل الألومنيوم مع حمض الهيدروكلوريك (سلايد 13)",
            content: "التفاعل غير الموزون: $Al + HCl \\rightarrow AlCl_3 + H_2$\n\n• *نصف الأكسدة:* $Al \\rightarrow Al^{3+} + 3e^-$\n• *نصف الاختزال:* $2H^+ + 2e^- \\rightarrow H_2$\n\n*مساواة الإلكترونات (المضاعف 6e-):*\nنضرب نصف الأكسدة في 2: $2Al \\rightarrow 2Al^{3+} + 6e^-$\nنضرب نصف الاختزال في 3: $6H^+ + 6e^- \\rightarrow 3H_2$\n\n*المعادلة الموزونة النهائية:* $$2Al + 6H^+ \\rightarrow 2Al^{3+} + 3H_2$$"
        },
        {
            type: "reveal",
            title: "المعادلة 2: تفاعل البرمنجانات مع الأوكسالات في وسط حمضي (سلايد 14)",
            content: "التفاعل غير الموزون: $MnO_4^- + C_2O_4^{2-} \\rightarrow Mn^{2+} + CO_2$\n\n• *نصف الاختزال:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$\n• *نصف الأكسدة:* $C_2O_4^{2-} \\rightarrow 2CO_2 + 2e^-$\n\n*مساواة الإلكترونات (المضاعف 10e-):*\nنضرب الاختزال في 2: $2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$\nنضرب الأكسدة في 5: $5C_2O_4^{2-} \\rightarrow 10CO_2 + 10e^-$\n\n*المعادلة الموزونة النهائية:* $$2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O$$"
        },
        {
            type: "reveal",
            title: "المعادلة 3: تفاعل الدايكرومات مع الحديدوز في وسط حمضي (سلايد 15)",
            content: "التفاعل غير الموزون: $Cr_2O_7^{2-} + Fe^{2+} \\rightarrow Cr^{3+} + Fe^{3+}$\n\n• *نصف الاختزال:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$\n• *نصف الأكسدة:* $Fe^{2+} \\rightarrow Fe^{3+} + 1e^-$\n\n*مساواة الإلكترونات (المضاعف 6e-):*\nنضرب نصف الأكسدة في 6: $6Fe^{2+} \\rightarrow 6Fe^{3+} + 6e^-$\n\n*المعادلة الموزونة النهائية:* $$Cr_2O_7^{2-} + 6Fe^{2+} + 14H^+ \\rightarrow 2Cr^{3+} + 6Fe^{3+} + 7H_2O$$"
        },
        {
            type: "reveal",
            title: "المعادلة 4أ: تفاعل البرمنجانات مع بيروكسيد الهيدروجين (سلايد 16 وسؤال السبورة الهام) ⭐",
            content: "التفاعل غير الموزون: $MnO_4^- + H_2O_2 + H^+ \\rightarrow Mn^{2+} + H_2O + O_2$\n*(البرمنجانات أغنى بالأكسجين فتسلك كمؤكسد قوي وتجبر H2O2 على التأكسد لإنتاج غاز O2 وليس الماء)*.\n\n• *نصف الاختزال:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ $(\\times 2) \\Rightarrow 2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$\n• *نصف الأكسدة:* $H_2O_2 \\rightarrow O_2 + 2H^+ + 2e^-$ $(\\times 5) \\Rightarrow 5H_2O_2 \\rightarrow 5O_2 + 10H^+ + 10e^-$\n\n*بطرح 10H+ المشتركة من الطرفين نحصل على المعادلة النهائية:* $$2MnO_4^- + 5H_2O_2 + 6H^+ \\rightarrow 2Mn^{2+} + 8H_2O + 5O_2$$"
        },
        {
            type: "reveal",
            title: "المعادلة 4ب: تفاعل الأيودات مع الأيوديد في وسط حمضي (سلايد 16)",
            content: "التفاعل غير الموزون: $IO_3^- + I^- + H^+ \\rightarrow I_2 + H_2O$\n\n• *نصف الاختزال:* $2IO_3^- + 12H^+ + 10e^- \\rightarrow I_2 + 6H_2O$\n• *نصف الأكسدة:* $2I^- \\rightarrow I_2 + 2e^-$ $(\\times 5) \\Rightarrow 10I^- \\rightarrow 5I_2 + 10e^-$\n\n*الجمع:* $2IO_3^- + 10I^- + 12H^+ \\rightarrow 6I_2 + 6H_2O$\n*بالقسمة على 2 نحصل على المعادلة الموزونة النهائية:* $$IO_3^- + 5I^- + 6H^+ \\rightarrow 3I_2 + 3H_2O$$"
        },
        {
            type: "reveal",
            title: "المعادلة 4ج: تفاعل الدايكرومات مع الجلسرين في وسط حمضي (سلايد 16)",
            content: "التفاعل غير الموزون: $Cr_2O_7^{2-} + C_3H_8O_3 + H^+ \\rightarrow Cr^{3+} + CO_2 + H_2O$\n\n• *نصف الأكسدة:* $C_3H_8O_3 + 3H_2O \\rightarrow 3CO_2 + 14H^+ + 14e^-$ $(\\times 3)$\n• *نصف الاختزال:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$ $(\\times 7)$\n\n*بجمع نصفي التفاعل واختصار الماء والبروتونات المتشابهة:* $$7Cr_2O_7^{2-} + 3C_3H_8O_3 + 56H^+ \\rightarrow 14Cr^{3+} + 9CO_2 + 40H_2O$$"
        },
        {
            type: "reveal",
            title: "المعادلة 4د: تفاعل أسيتهيد الأسيريوم مع الأسيتالدهيد (سلايد 16)",
            content: "التفاعل غير الموزون: $Ce^{4+} + CH_3CHO + H_2O \\rightarrow Ce^{3+} + CH_3COOH + H^+$\n\n• *نصف الاختزال:* $Ce^{4+} + 1e^- \\rightarrow Ce^{3+}$ $(\\times 2)$\n• *نصف الأكسدة:* $CH_3CHO + H_2O \\rightarrow CH_3COOH + 2H^+ + 2e^-$\n\n*المعادلة الموزونة النهائية:* $$2Ce^{4+} + CH_3CHO + H_2O \\rightarrow 2Ce^{3+} + CH_3COOH + 2H^+$$"
        },
        {
            type: "compare",
            title1: "ضغط المحلول (Solution Pressure)",
            val1: "• ميل الفلز الذاتي للذوبان في محلول أملاحه متحوّلاً إلى كاتيونات موجبة تترك لوح الفلز مشحوناً بسالبية.\n• مثال: في قطب الخارصين $Zn/Zn^{2+}$، *ضغط المحلول > الضغط الأيوني* فيذوب الخارصين.",
            title2: "الضغط الأيوني (Ionic Pressure)",
            val2: "• ميل الكاتيونات في المحلول للترسب على لوح الفلز المغمور فيه.\n• مثال: في قطب النحاس $Cu/Cu^{2+}$، *الضغط الأيوني > ضغط المحلول* فتترسب أيونات النحاس على اللوح."
        },
        {
            type: "equation",
            title: "معادلة نيرنست لحساب جهد القطب (عند 25°C) ⭐",
            formula: "$$E_{25^\\circ\\text{C}} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$$",
            where: [
                { symbol: "E", meaning: "جهد القطب الفعلي عند تركيز الأيونات الحالي" },
                { symbol: "E°", meaning: "جهد القطب القياسي عندما يكون تركيز الأيونات 1 مولار" },
                { symbol: "n", meaning: "تكافؤ الأيون / عدد الإلكترونات المنقولة (ثابت مطلق للسيستم الواحد ولا يتغير)" },
                { symbol: "[Mn+]", meaning: "التركيز المولاري لأيونات الفلز في المحلول" }
            ],
            note: "العالم نيرنست وضع العلاقة الرياضية الكمية التي تربط بين جهد القطب وتركيز المحلول الإلكتروليتي."
        },
        {
            type: "reveal",
            title: "قطب الهيدروجين القياسي (NHE / SHE) (سلايد 25)",
            content: "• *التركيب:* صفيحة بلاتين مغطاة ببلاتين أسود ومغمورة في محلول $1\\text{ N HCl}$ ($[H^+] = 1\\text{ M}$)، مع تمرير غاز هيدروجين نقي بضغط $1\\text{ atm}$.\n• *نصف التفاعل:* $2H^+ + 2e^- \\rightleftharpoons H_2$\n• *القيمة المعيارية:* جهده القياسي يعتبر اصطلاحاً *صفر فولت تماماً (Zero V)* وهو المرجع الأساسي لمقارنة جميع الجهود."
        },
        {
            type: "table",
            headers: ["النظام (Redox Couple)", "جهد الاختزال القياسي E° (حفظ الترتيب بالأرقام ⭐)"],
            rows: [
                ["Ce4+ / Ce3+", "+1.65 V"],
                ["MnO4- / Mn2+", "+1.51 V"],
                ["Cl2 / 2Cl-", "+1.36 V"],
                ["Cr2O7 2- / Cr3+", "+1.33 V"],
                ["Fe3+ / Fe2+", "+0.77 V"],
                ["I2 / 2I-", "+0.54 V"],
                ["Ferricyanide / Ferrocyanide", "+0.36 V"],
                ["Cu2+ / Cu", "+0.34 V"],
                ["Cu2+ / Cu+", "+0.16 V"],
                ["H+ / H2 (NHE قطب الهيدروجين المرجعي)", "0.00 V"],
                ["Zn2+ / Zn", "-0.76 V"],
                ["Li+ / Li (أقوى فلز مختزل في السلسلة)", "-3.04 V"]
            ]
        }
    ],

    // =========================================================================
    // 2. أسئلة وإجابات نهاية المحاضرة بالكامل (PDF Q&A Full Solutions)
    // =========================================================================
    qna: [
        {
            q: "What is the oxidation number of chlorine in Potassium Chlorate (KClO3)? (Slide 31, Q1)",
            a: "Detailed Solution:\nPotassium (K) is an alkali metal = +1.\nOxygen (O) is = -2 (3 atoms = -6).\nSum of oxidation numbers in a neutral compound is zero: (+1) + Cl + 3(-2) = 0 --> Cl - 5 = 0 --> Cl = *+5*."
        },
        {
            q: "Which of the following vitamins is most stable at pH 5–6 due to redox sensitivity? (Slide 31, Q2)",
            a: "Correct Answer: *Vitamin C and B2*.\n• Vitamin C (Ascorbic acid) reaches peak stability at *pH 6*.\n• Vitamin B2 (Riboflavin) reaches peak stability at *pH 5*."
        },
        {
            q: "In the reaction: MnO4- + 5Fe2+ + 8H+ -> Mn2+ + 5Fe3+ + 4H2O, what is the number of electrons transferred per mole of permanganate? (Slide 31, Q3)",
            a: "Detailed Solution:\nIn MnO4-, Mn is in the *+7* state. In products, it is Mn2+ (*+2* state).\nElectrons gained per mole of permanganate = 7 - 2 = *5 electrons*."
        },
        {
            q: "Which metal has the most negative standard electrode potential according to the electrochemical series? (Slide 31, Q4)",
            a: "Correct Answer: *Lithium (Li)*.\nLithium has E° = *-3.04 V*, making it the most active reducing metal that readily dissolves and oxidizes."
        },
        {
            q: "Which of the following is a correct representation of an electrochemical cell? (Slide 31, Q5)",
            a: "Correct Answer: *Zn | Zn2+ || Cu2+ | Cu*.\nCell notation convention is strictly: Anode (oxidation) || Cathode (reduction)."
        },
        {
            q: "Which of the following is not a water-soluble antioxidant? (Slide 32, Q6)",
            a: "Correct Answer: *Butylated hydroxyanisole (BHA)*.\nBHA, BHT, Lecithin, and Vitamin E are oil-soluble (lipid-soluble) antioxidants."
        },
        {
            q: "Which of the following best describes oxidation in terms of electron transfer? (Slide 32, Q7)",
            a: "Correct Answer: *Loss of electrons*.\nOxidation increases positive charge through electron donation."
        },
        {
            q: "In the redox reaction: 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-, which is the oxidizing agent? (Slide 32, Q8)",
            a: "Correct Answer: *Chlorine gas (Cl2)*.\nCl2 accepts electrons and gets reduced to 2Cl-, hence it acts as the oxidant (oxidizing agent)."
        },
        {
            q: "What is the equivalent weight of KMnO4 in acidic medium if its molecular weight is 158 g/mol? (Slide 32, Q9)",
            a: "Detailed Solution:\nEquivalent weight of oxidant = Molecular weight / electrons gained.\nEq. Wt = 158 / 5 = *31.6 g/eq*."
        },
        {
            q: "The normal hydrogen electrode (NHE) has an electrode potential of: (Slide 32, Q10)",
            a: "Correct Answer: *0.00 V*.\nThe standard hydrogen electrode is arbitrarily adopted as zero at all temperatures."
        },
        {
            q: "Calculate the oxidation number of carbon in: CH4, CH3OH, C2H5OH, CH2OHCH2OH, and Glycerol C3H8O3? (Slide 12)",
            a: "Detailed Calculations:\n• *CH4:* C + 4(+1) = 0 --> C = *-4*\n• *CH3OH:* C + 4(+1) + (-2) = 0 --> C = *-2*\n• *C2H5OH:* 2C + 6(+1) + (-2) = 0 --> 2C = -4 --> C = *-2*\n• *Ethylene glycol (CH2OHCH2OH = C2H6O2):* 2C + 6(+1) + 2(-2) = 0 --> 2C = -2 --> C = *-1*\n• *Glycerol (C3H8O3):* 3C + 8(+1) + 3(-2) = 0 --> 3C + 2 = 0 --> C = *-2/3*."
        }
    ],

    qnaAr: [
        {
            q: "ما هو عدد تأكسد ذرة الكلور في مركب كلورات البوتاسيوم (KClO3)؟ (سلايد 31، س1)",
            a: "خطوات الحساب بالتفصيل:\nالبوتاسيوم K فلز قلوي = +1.\nالأكسجين O = -2 (3 ذرات أكسجين = -6).\nمجموع أعداد التأكسد للمركب المتعادل = صفر.\n(+1) + Cl + 3(-2) = 0 ---> Cl - 5 = 0 ---> Cl = *+5*."
        },
        {
            q: "أي الفيتامينات التالية يمتلك أقصى درجات الاستقرار ضد الأكسدة عند pH 5–6؟ (سلايد 31، س2)",
            a: "الإجابة الصحيحة: *Vitamin C and B2*.\n• فيتامين C (حمض الأسكوربيك) يكون أثبت ما يمكن عند *pH 6*.\n• فيتامين B2 (الريبوفلافين) يكون أثبت ما يمكن عند *pH 5*."
        },
        {
            q: "في تفاعل البرمنجانات مع الحديدوز في وسط حمضي: كم عدد الإلكترونات المنتقلة لكل مول برمنجانات؟ (سلايد 31، س3)",
            a: "خطوات الحل:\nالمنجنيز في أيون البرمنجانات (MnO4-) عدد تأكسده *+7*، ويتحول في النواتج إلى أيون المنجنيزوز Mn2+ (*+2*).\nعدد الإلكترونات المكتسبة = 7 - 2 = *5 إلكترونات*."
        },
        {
            q: "أي الفلزات التالية يمتلك أكثر قيمة سالبة لجهد القطب القياسي في السلسلة الكهروكيميائية؟ (سلايد 31، س4)",
            a: "الإجابة الصحيحة: *الليثيوم (Lithium)*.\nجهده القياسي E° = *-3.04 V*، ولذلك هو أقوى فلز مختزل ويسلك كأنود قوي جداً."
        },
        {
            q: "أي التعبيرات التالية يمثل الرمز الاصطلاحي الصحيح للخلية الجلفانية؟ (سلايد 31، س5)",
            a: "الإجابة الصحيحة: *Zn | Zn2+ || Cu2+ | Cu*.\nلأن الاصطلاح الدولي يفرض كتابة نصف تفاعل الأكسدة (الآنود) يساراً، يليه القنطرة الملحية (||)، ثم نصف الاختزال (الكاثود) يميناً."
        },
        {
            q: "أي المركبات التالية لا يُعد من مضادات الأكسدة الذائبة في الماء؟ (سلايد 32، س6)",
            a: "الإجابة الصحيحة: *بيوتيليتد هيدروكسي أنيسول (BHA)*.\nلأن مركبات BHA و BHT وفيتامين E هي مضادات أكسدة ذائبة في الزيوت والدهون (Oil-soluble)."
        },
        {
            q: "أي العبارات التالية تصف الأكسدة بناءً على حركة الإلكترونات؟ (سلايد 32، س7)",
            a: "الإجابة الصحيحة: *فقد الإلكترونات (Loss of electrons)*."
        },
        {
            q: "في تفاعل الحديدوز مع غاز الكلور: 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-، ما هو العامل المؤكسد؟ (سلايد 32، س8)",
            a: "الإجابة الصحيحة: *غاز الكلور (Cl2)*.\nلأنه يكتسب الإلكترونات ويحدث له اختزال متحولاً إلى أيونات الكلوريد السالبة."
        },
        {
            q: "ما هو الوزن المكافئ لـ KMnO4 في الوسط الحمضي إذا كان وزنه الجزيئي 158 جم/مول؟ (سلايد 32، س9)",
            a: "خطوات الحل:\nالوزن المكافئ للمؤكسد = الوزن الجزيئي مقسوماً على عدد الإلكترونات المكتسبة.\nالوزن المكافئ = 158 / 5 = *31.6 جم/مكافئ*."
        },
        {
            q: "كم يبلغ جهد القطب لقطب الهيدروجين القياسي (NHE)؟ (سلايد 32، س10)",
            a: "الإجابة الصحيحة: *0.00 V (صفر فولت تماماً)* في جميع درجات الحرارة."
        },
        {
            q: "احسب عدد تأكسد الكربون في: الميثان CH4، الميثانول CH3OH، الإيثانول C2H5OH، إيثيلين جليكول CH2OHCH2OH، والجلسرين C3H8O3؟ (سلايد 12)",
            a: "خطوات الحساب:\n• *CH4:* C + 4(+1) = 0 ---> C = *-4*\n• *CH3OH:* C + 4(+1) + (-2) = 0 ---> C = *-2*\n• *C2H5OH:* 2C + 6(+1) + (-2) = 0 ---> 2C = -4 ---> C = *-2*\n• *إيثيلين جليكول (C2H6O2):* 2C + 6(+1) + 2(-2) = 0 ---> 2C = -2 ---> C = *-1*\n• *الجلسرين (C3H8O3):* 3C + 8(+1) + 3(-2) = 0 ---> 3C + 2 = 0 ---> C = *-2/3*."
        }
    ],

    // =========================================================================
    // 3. أسئلة الشفوي التي ذكرها الدكتور (Oral Questions Detailed Answers)
    // =========================================================================
    oral: [
        {
            q: "Oral Q1: How can we titrate Fe2+ using I2 even though E° of Fe3+/Fe2+ (0.77V) is higher than I2/2I- (0.54V)?",
            points: [
                "1. State Nernst equation for the system: E = E° + 0.0591 log ([Fe3+] / [Fe2+]).",
                "2. Normally, I2 cannot oxidize Fe2+ because Fe3+ is a stronger oxidant with a higher standard potential (0.77V vs 0.54V).",
                "3. To force the reaction forward, we must decrease the potential of Fe3+/Fe2+ to below 0.54V.",
                "4. We mask Ferric ions (Fe3+) by adding Fluoride (F-) or Phosphate (PO4 3-).",
                "5. This forms exceptionally stable, soluble complexes like [FeF6]3- or [Fe(PO4)2]3-, reducing free [Fe3+] to near zero.",
                "6. By Nernst equation, the drastic reduction in [Fe3+] lowers the potential to ~0.40V, allowing I2 to quantitatively oxidize Fe2+."
            ]
        },
        {
            q: "Oral Q2: Why is Zimmermann-Reinhardt's reagent added when titrating Fe2+ with KMnO4 in the presence of HCl?",
            points: [
                "1. Permanganate is a very strong oxidant (E° = 1.51V) that can oxidize Chloride ions (E° = 1.36V) into toxic chlorine gas (Cl2), causing severe titration errors.",
                "2. Zimmermann-Reinhardt reagent contains: MnSO4 (Manganese sulfate), H2SO4 (Sulfuric acid), and H3PO4 (Phosphoric acid).",
                "3. By mass action, added Mn2+ lowers the oxidation potential of MnO4-/Mn2+, preventing it from oxidizing ambient chloride ions.",
                "4. Phosphoric acid masks yellow Fe3+ ions by forming colorless [Fe(PO4)2]3- complexes, rendering the pink end-point sharp and easily detectable."
            ]
        },
        {
            q: "Oral Q3: Why does H2O2 produce O2 gas when reacted with KMnO4, but produces H2O when reacted with Fe2+?",
            points: [
                "1. KMnO4 has a very high standard potential (+1.51V) and is richer in oxygen, making it a stronger oxidant than H2O2.",
                "2. Therefore, KMnO4 forces H2O2 to act as a *reductant* (undergoes oxidation: H2O2 -> O2 + 2H+ + 2e-).",
                "3. Conversely, Fe2+ has a lower potential (+0.77V) than H2O2 (+1.78V).",
                "4. Thus, H2O2 acts as an *oxidant* with Fe2+ (undergoes reduction: H2O2 + 2H+ + 2e- -> 2H2O)."
            ]
        },
        {
            q: "Oral Q4: What are the thermodynamic and chemical implications of a negative vs. positive E° value?",
            points: [
                "1. Negative E°: Metal has high Solution Pressure > Ionic Pressure; it readily dissolves, loses electrons, and acts as an *Anode*.",
                "2. Negative E° metals can displace any metal positioned below them in the electrochemical series from its salt solution (e.g., Zn displaces Cu).",
                "3. Positive E°: Metal cations have Ionic Pressure > Solution Pressure; cations tend to deposit on the rod, and the electrode acts as a *Cathode*."
            ]
        }
    ],

    oralAr: [
        {
            q: "سؤال شفوي ١: عند معايرة الحديدوز (Fe2+) باستخدام اليود (I2)، كيف نجعل التفاعل يسير طردياً رغم أن جهد Fe3+/Fe2+ (0.77V) أعلى من اليود (0.54V)؟",
            points: [
                "١. نكتب معادلة نيرنست للنظام: E = E° + 0.0591 log ([Fe3+] / [Fe2+]).",
                "٢. في الظروف العادية لا يستطيع اليود أكسدة الحديدوز لأن Fe3+ مؤكسد أقوى بكثير وجهده أعلى من اليود.",
                "٣. لنجعل التفاعل يسير طردياً، يجب خفض جهد نظام Fe3+/Fe2+ إلى ما دون 0.54V.",
                "٤. نقوم بعمل حجب (Masking) لأيونات الحديديك الناتجة (Fe3+) بإضافة الفلوريد (F-) أو الفوسفات (PO4 3-).",
                "٥. تتكون متراكبات ذائبة شديدة الثبات مثل [FeF6]3- أو [Fe(PO4)2]3-، مما يهبط بتركيز أيونات Fe3+ الحرة إلى الصفر تقريباً.",
                "٦. طبقاً لمعادلة نيرنست، هذا الهبوط الحاد في تركيز Fe3+ يخفض الجهد إلى حوالي 0.40V، فيصبح اليود قادراً على أكسدة الحديدوز تماماً."
            ]
        },
        {
            q: "سؤال شفوي ٢: لماذا نستخدم كاشف تسيمرمان-راينهارت (Zimmermann-Reinhardt) عند معايرة Fe2+ بالبرمنجانات في وجود حمض HCl؟",
            points: [
                "١. لأن البرمنجانات عامل مؤكسد قوي جداً (1.51V) قادر على أكسدة أيونات الكلوريد (1.36V) وتحويلها لغاز كلور سام، مسبباً خطأ كبيراً بالمعايرة.",
                "٢. يتركب كاشف تسيمرمان من: كبريتات منجنيز (MnSO4)، وحمض كبريتيك، وحمض فوسفوريك (H3PO4).",
                "٣. أيونات المنجنيز (Mn2+) تخفض جهد تأكسد البرمنجانات طبقاً لفعل الكتلة، مما يمنعها نهائياً من أكسدة الكلوريد.",
                "٤. حمض الفوسفوريك يرتبط بأيونات الحديديك (Fe3+) الصفراء مكوّناً متراكباً عديم اللون، مما يجعل ظهور اللون الوردي لنقطة النهاية حاداً وواضحاً."
            ]
        },
        {
            q: "سؤال شفوي ٣: علل: لماذا يُنتج H2O2 غاز الأكسجين (O2) مع البرمنجانات، بينما يُنتج الماء (H2O) عند تفاعله مع كبريتات الحديدوز؟",
            points: [
                "١. البرمنجانات أغنى في الأكسجين ولها جهد كهربي أعلى (+1.51V)، مما يجعلها أقوى كعامل مؤكسد من H2O2.",
                "٢. تجبر البرمنجانات H2O2 على أن يسلك كـ *عامل مختزل* (يتأكسد ويفقد إلكترونات متحوّلاً إلى غاز الأكسجين O2).",
                "٣. في المقابل، جهد كبريتات الحديدوز أقل (+0.77V) من جهد H2O2 (+1.78V).",
                "٤. لذلك يسلك H2O2 مع الحديدوز كـ *عامل مؤكسد* (يختزل ويكتسب إلكترونات متحوّلاً إلى الماء H2O)."
            ]
        },
        {
            q: "سؤال شفوي ٤: ما هي الدلالات الكيميائية والكهربية للقيم السالبة والموجبة لجهد القطب القياسي (E°)؟",
            points: [
                "١. القيمة السالبة لـ E°: تعني أن ضغط المحلول للفلز > الضغط الأيوني؛ الفلز يميل بشدة للأكسدة وفقد الإلكترونات ويسلك كـ *آنود*.",
                "٢. الفلز ذو الجهد السالب يستطيع طرد وترسيب أي فلز يليه في السلسلة الكهروكيميائية من محاليل أملاحه (مثل طرد الخارصين للنحاس).",
                "٣. القيمة الموجبة لـ E°: تعني أن الضغط الأيوني > ضغط المحلول؛ الأيونات تميل للترسب على القطب ويسلك القطب كـ *كاثود*."
            ]
        }
    ],

    // =========================================================================
    // 4. بنك أسئلة الكويز المطور الشامل (MCQ, Scientific Term, Balancing, T/F)
    // =========================================================================
    quiz: [
        // --- أسئلة نهاية المحاضرة (Slides 31 & 32 MCQs) ---
        {
            type: "mcq",
            question: "What is the oxidation number of chlorine in Potassium Chlorate (KClO3)?",
            questionAr: "ما هو عدد تأكسد ذرة الكلور في مركب كلورات البوتاسيوم (KClO3)؟",
            options: ["+1", "+3", "+5", "+7"],
            optionsAr: ["+1", "+3", "+5", "+7"],
            correct: 2,
            hint: "K is *+1*, each Oxygen is *-2* (total -6). (+1) + Cl + (-6) = 0 --> Cl = *+5*.",
            hintAr: "البوتاسيوم *+1* والأكسجين *-2* (المجموع -6). في المركب المتعادل: (+1) + Cl + (-6) = 0، إذن Cl = *+5*."
        },
        {
            type: "mcq",
            question: "Which of the following vitamins is most stable at pH 5–6 due to redox sensitivity?",
            questionAr: "أي الفيتامينات التالية يمتلك أقصى درجات الاستقرار ضد التحلل التأكسدي عند pH 5–6؟",
            options: ["Vitamin D", "Vitamin C and B2", "Vitamin A and K", "Vitamin B12"],
            optionsAr: ["فيتامين D", "فيتامين C و B2", "فيتامين A و K", "فيتامين B12"],
            correct: 1,
            hint: "*Ascorbic acid (Vit C)* is stable at *pH 6*, while *Riboflavin (Vit B2)* is most stable at *pH 5*.",
            hintAr: "*فيتامين C* يكون أقل عرضة للأكسدة عند *pH 6*، بينما *فيتامين B2* يكون أثبت ما يمكن عند *pH 5*."
        },
        {
            type: "mcq",
            question: "In the redox reaction: MnO4- + 5Fe2+ + 8H+ -> Mn2+ + 5Fe3+ + 4H2O, what is the number of electrons transferred per mole of permanganate ion?",
            questionAr: "في التفاعل: MnO4- + 5Fe2+ + 8H+ -> Mn2+ + 5Fe3+ + 4H2O، كم عدد الإلكترونات المنتقلة لكل مول من أيون البرمنجانات؟",
            options: ["1", "3", "5", "8"],
            optionsAr: ["1", "3", "5", "8"],
            correct: 2,
            hint: "Manganese changes from *+7* in MnO4- to *+2* in Mn2+, representing *5 electrons gained*.",
            hintAr: "يتغير المنجنيز من حالة التأكسد *+7* إلى *+2*، ما يعني اكتساب *5 إلكترونات*."
        },
        {
            type: "mcq",
            question: "What is the equivalent weight of KMnO4 in acidic medium if its molecular weight is 158 g/mol?",
            questionAr: "ما هو الوزن المكافئ لـ KMnO4 في وسط حمضي إذا كان وزنه الجزيئي 158 جم/مول؟",
            options: ["158.0 g/eq", "79.0 g/eq", "31.6 g/eq", "25.6 g/eq"],
            optionsAr: ["158.0 جم/مكافئ", "79.0 جم/مكافئ", "31.6 جم/مكافئ", "25.6 جم/مكافئ"],
            correct: 2,
            hint: "Eq. Wt = Molecular weight / electrons gained = 158 / 5 = *31.6 g/eq*.",
            hintAr: "الوزن المكافئ = الوزن الجزيئي / عدد الإلكترونات المكتسبة = 158 / 5 = *31.6 جم/مكافئ*."
        },
        {
            type: "mcq",
            question: "Which of the following is not a water-soluble antioxidant?",
            questionAr: "أي من المركبات التالية لا يُصنف ضمن مضادات الأكسدة الذائبة في الماء؟",
            options: ["Sodium metabisulphite", "Ascorbic acid", "Butylated hydroxyanisole (BHA)", "Sodium bisulphite"],
            optionsAr: ["صوديوم ميتابيسلفيت", "حمض الأسكوربيك", "بيوتيليتد هيدروكسي أنيسول (BHA)", "صوديوم بيسلفيت"],
            correct: 2,
            hint: "*BHA* and *BHT* are oil-soluble antioxidants.",
            hintAr: "مركب *BHA* هو مضاد أكسدة يذوب في الزيوت والدهون، وليس في الماء."
        },
        {
            type: "mcq",
            question: "Which metal has the most negative standard electrode potential according to the electrochemical series?",
            questionAr: "أي الفلزات التالية يمتلك أكثر قيمة سالبة لجهد القطب القياسي في السلسلة الكهروكيميائية؟",
            options: ["Zinc", "Magnesium", "Lithium", "Copper"],
            optionsAr: ["الخارصين", "الماغنسيوم", "الليثيوم", "النحاس"],
            correct: 2,
            hint: "*Lithium (Li)* has E° = -3.04 V, making it the most powerful reducing metal.",
            hintAr: "*الليثيوم (Li)* جهده القياسي -3.04 فولت، وهو بذلك أقوى فلز مختزل في السلسلة."
        },
        {
            type: "mcq",
            question: "Which of the following is a correct representation of an electrochemical cell?",
            questionAr: "أي الاختيارات التالية يمثل الرمز الاصطلاحي الصحيح للخلية الكهروكيميائية؟",
            options: ["Cu2+ / Cu || Zn2+ / Zn", "Zn | Zn2+ || Cu2+ | Cu", "Zn / Cu || ZnSO4 / CuSO4", "Cu | Cu2+ || Zn2+ | Zn"],
            optionsAr: ["Cu2+ / Cu || Zn2+ / Zn", "Zn | Zn2+ || Cu2+ | Cu", "Zn / Cu || ZnSO4 / CuSO4", "Cu | Cu2+ || Zn2+ | Zn"],
            correct: 1,
            hint: "Cell notation convention: *Anode (oxidation) || Cathode (reduction)*: Zn | Zn2+ || Cu2+ | Cu.",
            hintAr: "الاصطلاح المعتمد يبدأ بـ *الآنود (أكسدة) || الكاثود (اختزال)*: Zn | Zn2+ || Cu2+ | Cu."
        },
        {
            type: "mcq",
            question: "Which of the following best describes oxidation in terms of electron transfer?",
            questionAr: "أي العبارات التالية تصف الأكسدة بشكل صحيح بناءً على انتقال الإلكترونات؟",
            options: ["Gain of electrons", "Loss of electrons", "Gain of hydrogen", "Addition of oxygen only"],
            optionsAr: ["اكتساب إلكترونات", "فقد إلكترونات", "اكتساب هيدروجين", "إضافة أكسجين فقط"],
            correct: 1,
            hint: "Oxidation is formally defined as the *loss of electrons*.",
            hintAr: "حسب المفهوم الإلكتروني، الأكسدة هي *فقد للإلكترونات*."
        },
        {
            type: "mcq",
            question: "In the redox reaction between Fe2+ and Cl2: 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-, which is the oxidizing agent?",
            questionAr: "في تفاعل الحديدوز مع الكلور: 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-، ما هو العامل المؤكسد؟",
            options: ["Fe2+", "Fe3+", "Cl2", "Cl-"],
            optionsAr: ["Fe2+", "Fe3+", "Cl2", "Cl-"],
            correct: 2,
            hint: "*Cl2* gains electrons and is reduced to Cl-, therefore it is the *oxidizing agent (oxidant)*.",
            hintAr: "*غاز الكلور (Cl2)* يكتسب إلكترونات ويحدث له اختزال، ولذلك فهو *العامل المؤكسد*."
        },
        {
            type: "mcq",
            question: "The normal hydrogen electrode (NHE) has an electrode potential of:",
            questionAr: "كم تبلغ قيمة جهد القطب لقطب الهيدروجين القياسي (NHE)؟",
            options: ["+1.00 V", "0.00 V", "-1.00 V", "+0.34 V"],
            optionsAr: ["+1.00 V", "0.00 V", "-1.00 V", "+0.34 V"],
            correct: 1,
            hint: "The standard potential of NHE is universally adopted as *0.00 V* at all temperatures.",
            hintAr: "تم اصطلاح واعتماد جهد قطب الهيدروجين القياسي ليكون *صفر فولت (0.00 V)*."
        },

        // --- أسئلة ملاحظات السبورة وتريكات الدكتور (Blackboard MCQs) ---
        {
            type: "mcq",
            question: "What is the average oxidation number of iron in the mixed oxide magnetite (Fe3O4)?",
            questionAr: "كم يبلغ متوسط عدد تأكسد الحديد في أكسيد الحديد المختلط (Fe3O4)؟ (تريكة سبورة)",
            options: ["+2", "+3", "+8/3", "+4"],
            optionsAr: ["+2", "+3", "+8/3", "+4"],
            correct: 2,
            hint: "Fe3O4 is FeO + Fe2O3. 3(Fe) + 4(-2) = 0 --> 3Fe = +8 --> Fe = *+8/3*.",
            hintAr: "مركب Fe3O4 أكسيد مختلط، ومجموع شحنات الأكسجين -8، فيكون 3Fe = +8، أي أن متوسط تأكسد الحديد هو *+8/3*."
        },
        {
            type: "mcq",
            question: "In pharmaceutical redox systems, organic compounds generally act as:",
            questionAr: "في أنظمة الأكسدة والاختزال الصيدلية، تسلك المركبات العضوية غالباً كـ:",
            options: ["Strong oxidants", "Reducing agents (Reductants)", "Inert catalysts", "Spectator electrolytes"],
            optionsAr: ["عوامل مؤكسدة قوية", "عوامل مختزلة (Reductants)", "عوامل حفازة خاملة", "إلكتروليتات متفرجة"],
            correct: 1,
            hint: "Organic compounds act as *reductants* because their carbon atoms readily oxidize towards CO2.",
            hintAr: "المركبات العضوية تسلك كـ *عوامل مختزلة* لأن ذرات الكربون فيها تميل للأكسدة والتحول إلى CO2."
        },
        {
            type: "mcq",
            question: "When H2O2 reacts with KMnO4 in acidic medium, the gaseous product formed is:",
            questionAr: "عند تفاعل H2O2 مع KMnO4 في وسط حمضي، الغاز المتصاعد كناتج هو:",
            options: ["Hydrogen gas (H2)", "Oxygen gas (O2)", "Chlorine gas (Cl2)", "Carbon dioxide (CO2)"],
            optionsAr: ["غاز الهيدروجين (H2)", "غاز الأكسجين (O2)", "غاز الكلور (Cl2)", "ثاني أكسيد الكربون (CO2)"],
            correct: 1,
            hint: "KMnO4 is richer in oxygen and a stronger oxidant, forcing H2O2 to oxidize into *O2 gas*.",
            hintAr: "البرمنجانات مؤكسد أقوى لاحتوائها على أكسجين أكثر، فتجبر H2O2 على التأكسد والتصاعد كغاز *أكسجين (O2)*."
        },
        {
            type: "mcq",
            question: "What is the oxidation number of Hydrogen in metal hydrides such as NaH or LiH?",
            questionAr: "كم يبلغ عدد تأكسد الهيدروجين في الهيدريدات الفلزية مثل NaH أو LiH؟",
            options: ["+1", "0", "-1", "-2"],
            optionsAr: ["+1", "0", "-1", "-2"],
            correct: 2,
            hint: "In metallic hydrides, hydrogen is more electronegative than the metal, taking an oxidation state of *-1*.",
            hintAr: "في الهيدريدات الفلزية يكون الهيدروجين أعلى سالبية كهربية من الفلز، فيأخذ عدد تأكسد *-1*."
        },
        {
            type: "mcq",
            question: "In the Nernst equation for a specific redox half-cell, the parameter 'n' represents:",
            questionAr: "في معادلة نيرنست لنصف خلية كيميائية محددة، يمثل الرمز 'n':",
            options: ["A variable changing with concentration", "The number of electrons transferred, which is strictly constant", "The Faraday constant", "The temperature in Kelvin"],
            optionsAr: ["متغيراً يتغير بتغير التركيز", "عدد الإلكترونات المنتقلة، وهو رقم ثابت مطلق للسيستم", "ثابت فاراداي", "درجة الحرارة بالكلفن"],
            correct: 1,
            hint: "'n' is the number of electrons transferred in the balanced half-reaction and is *strictly constant*.",
            hintAr: "الرمز 'n' هو عدد الإلكترونات المنتقلة في التفاعل الموزون وهو *رقم ثابت مطلق للنظام الواحد* لا يتغير."
        },
        {
            type: "mcq",
            question: "Which of the following is the most powerful oxidizing nonmetal in the electrochemical series?",
            questionAr: "أي العناصر اللافلزية التالية يعتبر أقوى عامل مؤكسد في السلسلة الكهروكيميائية؟",
            options: ["Oxygen (O2)", "Chlorine (Cl2)", "Fluorine (F2)", "Bromine (Br2)"],
            optionsAr: ["الأكسجين (O2)", "الكلور (Cl2)", "الفلور (F2)", "البروم (Br2)"],
            correct: 2,
            hint: "*Fluorine (F2)* has E° = +2.87 V, making it the most potent oxidizing nonmetal.",
            hintAr: "*غاز الفلور (F2)* جهده +2.87 فولت وهو أقوى لافلز مؤكسد معروف في الكيمياء."
        },
        {
            type: "mcq",
            question: "In the copper electrode system (Cu / Cu2+), metallic copper deposits on the rod because:",
            questionAr: "في قطب النحاس (Cu / Cu2+)، تترسب ذرات النحاس على اللوح لأن:",
            options: ["Solution Pressure > Ionic Pressure", "Ionic Pressure > Solution Pressure", "Electrode potential is negative", "Copper is a strong reducing agent"],
            optionsAr: ["ضغط المحلول أكبر من الضغط الأيوني", "الضغط الأيوني أكبر من ضغط المحلول", "جهد القطب ذو قيمة سالبة", "النحاس عامل مختزل قوي"],
            correct: 1,
            hint: "For copper, *Ionic Pressure > Solution Pressure*, driving cations to deposit as Cu metal.",
            hintAr: "في قطب النحاس يكون *الضغط الأيوني أكبر من ضغط المحلول*، فتميل الكاتيونات للترسب على اللوح."
        },
        {
            type: "mcq",
            question: "What is the primary function of adding Fluoride or Phosphate during the titration of Fe2+ with I2?",
            questionAr: "ما هو الهدف الأساسي من إضافة الفلوريد أو الفوسفات أثناء معايرة Fe2+ باليود؟",
            options: ["To act as an indicator", "To mask Fe3+ and lower the potential of Fe3+/Fe2+ below 0.54V", "To oxidize iodide into iodine", "To precipitate metallic iron"],
            optionsAr: ["العمل كدليل لوني", "حجب أيونات Fe3+ وخفض جهد نظام Fe3+/Fe2+ لأقل من 0.54V", "أكسدة اليوديد إلى يود", "ترسيب الحديد الفلزي"],
            correct: 1,
            hint: "Masking Fe3+ drops its free concentration, decreasing the potential below +0.54V by Nernst equation.",
            hintAr: "حجب Fe3+ يقلل تركيزه الحر ويهبط بالجهد لأقل من 0.54V طبقاً لنيرنست، فيستطيع اليود أكسدة الحديدوز."
        },
        {
            type: "mcq",
            question: "Zimmermann-Reinhardt reagent contains MnSO4 in order to:",
            questionAr: "يحتوي كاشف تسيمرمان-راينهارت على كبريتات المنجنيز (MnSO4) بهدف:",
            options: ["Lower the redox potential of permanganate to prevent Cl- oxidation", "Increase the acidity of the medium", "Precipitate chloride as MnCl2", "Accelerate the oxidation of Fe2+"],
            optionsAr: ["خفض جهد تأكسد البرمنجانات لمنعها من أكسدة الكلوريد", "زيادة حموضة الوسط التفاعلي", "ترسيب الكلوريد في صورة MnCl2", "تسريع أكسدة الحديدوز"],
            correct: 0,
            hint: "Added Mn2+ lowers the potential of MnO4-/Mn2+ by mass action, preventing toxic Cl2 generation.",
            hintAr: "إضافة Mn2+ تخفض الجهد التأكسدي للبرمنجانات بفعل الكتلة، مما يمنعها من أكسدة الكلوريد إلى كلور سام."
        },

        // --- أسئلة الصح والخطأ (True or False) ---
        {
            type: "tf",
            question: "In the classical redox theory, the oxidation of ferrous chloride by chlorine gas was inexplicable because __no oxygen is involved in the reaction__.",
            questionAr: "في النظرية الكلاسيكية القديمة، تعذر تفسير أكسدة كلوريد الحديدوز بغاز الكلور __لعدم مشاركة أي أكسجين في التفاعل__.",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 0,
            hint: "True. 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl- involves only electron transfer without oxygen.",
            hintAr: "صح. لأن التفاعل لا يحتوي على أكسجين نهائياً، وهذا ما أثبت قصور التعريف القديم."
        },
        {
            type: "tf",
            question: "Riboflavin (Vitamin B2) shows maximum stability against redox degradation when buffered at __pH 6__.",
            questionAr: "يُظهر فيتامين B2 (الريبوفلافين) أقصى درجات الاستقرار ضد التحلل التأكسدي عند __pH 6__.",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 1,
            hint: "False. Riboflavin is most stable at *pH 5*, while Ascorbic acid (Vit C) is most stable at *pH 6*.",
            hintAr: "خطأ. الريبوفلافين يستقر عند *pH 5*، بينما فيتامين C هو الذي يستقر عند *pH 6*."
        },
        {
            type: "tf",
            question: "A metal with a negative standard electrode potential (E°) has a strong tendency to be reduced and acts as a __cathode__.",
            questionAr: "الفلز الذي يمتلك جهد قطب قياسي سالب (E°) يمتلك ميلاً قوياً للاختزال ويسلك كـ __كاثود__.",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 1,
            hint: "False. Negative E° means high solution pressure, tendency to oxidize, and acts as an *anode*.",
            hintAr: "خطأ. الجهد السالب يعني ميل الفلز للتأكسد والذوبان والعمل كـ *آنود (Anode)*."
        },

        // --- أسئلة المصطلحات والوزن المقالي (Scientific Term & Written Balancing) ---
        {
            type: "written",
            question: "Scientific Term: The quantitative mathematical relationship between electrode potential and the molar concentration of electrolytic ions.",
            questionAr: "المصطلح العلمي (Scientific Term): العلاقة الرياضية الكمية بين جهد القطب والتركيز المولاري للأيونات في المحلول الإلكتروليتي.",
            answer: "Nernst Equation",
            answerAr: "معادلة نيرنست (Nernst Equation)",
            hint: {
                en: "Formulated by the chemist Nernst to describe E vs concentration.",
                ar: "صاغها العالم نيرنست لربط الجهد بالتركيز."
            }
        },
        {
            type: "written",
            question: "Scientific Term: Molecular weight of a substance divided by the number of electrons gained or lost in a redox reaction.",
            questionAr: "المصطلح العلمي (Scientific Term): الوزن الجزيئي للمادة مقسوماً على عدد الإلكترونات المكتسبة أو المفقودة في التفاعل.",
            answer: "Equivalent Weight in Redox (Eq. Wt)",
            answerAr: "الوزن المكافئ في تفاعلات الأكسدة والاختزال (Equivalent Weight)",
            hint: {
                en: "Eq Wt = M.Wt / transferred electrons.",
                ar: "الوزن المكافئ = الوزن الجزيئي / عدد الإلكترونات المنقولة."
            }
        },
        {
            type: "written",
            question: "Scientific Term: The tendency of metal ions in solution to deposit onto a metallic rod immersed in it.",
            questionAr: "المصطلح العلمي (Scientific Term): ميل كاتيونات الفلز الموجودة في المحلول للترسب على لوح الفلز المغمور فيه.",
            answer: "Ionic Pressure",
            answerAr: "الضغط الأيوني (Ionic Pressure)",
            hint: {
                en: "Opposite of Solution Pressure.",
                ar: "عكس ضغط المحلول (Solution Pressure)."
            }
        },
        {
            type: "written",
            question: "Balance the following equation in acidic medium: MnO4- + H2O2 + H+ -> Mn2+ + H2O + O2",
            questionAr: "زن المعادلة الآتية بالخطوات في وسط حمضي: MnO4- + H2O2 + H+ -> Mn2+ + H2O + O2 (معادلة الامتحان)",
            answer: "2MnO4- + 5H2O2 + 6H+ -> 2Mn2+ + 8H2O + 5O2",
            answerAr: "2MnO4- + 5H2O2 + 6H+ -> 2Mn2+ + 8H2O + 5O2",
            hint: {
                en: "Reduction half gains 5e- (x2), oxidation half releases 2e- as O2 (x5).",
                ar: "نصف الاختزال يكتسب 5 إلكترونات (نضربه في 2)، ونصف الأكسدة يفقد إلكترونين لينتج O2 (نضربه في 5)."
            }
        },
        {
            type: "written",
            question: "Balance the following equation in acidic medium: IO3- + I- + H+ -> I2 + H2O",
            questionAr: "زن المعادلة الآتية بالخطوات في وسط حمضي: IO3- + I- + H+ -> I2 + H2O",
            answer: "IO3- + 5I- + 6H+ -> 3I2 + 3H2O",
            answerAr: "IO3- + 5I- + 6H+ -> 3I2 + 3H2O",
            hint: {
                en: "2 IO3- + 10 I- + 12 H+ -> 6 I2 + 6 H2O, then divide all coefficients by 2.",
                ar: "تصبح القيمة 2 أيودات مع 10 أيوديد و 12 بروتون، ثم نقسم جميع المعاملات على 2."
            }
        }
    ]
});

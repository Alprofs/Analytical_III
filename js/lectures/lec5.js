DataStore.lectures.push({
    id: 5,
    title: "Lec 5: Applications of Redox Titrations",

    // =========================================================================
    // 1. ملخص المحاضرة والشرح المركز (High-Yield Summary & Core Exam Rules)
    // =========================================================================
    summary: [
        {
            type: "vip",
            title: "⭐ [EXAM PRIORITY] Core Golden Rules & High-Yield Reagents",
            content: "1. *Free Metals Determination:* **Zinc powder** is treated with excess *ferric sulfate* ($Fe_2(SO_4)_3$), reducing $Fe^{3+}$ to $Fe^{2+}$. **Metallic iron** is treated with *ferric chloride* ($FeCl_3$) producing $3FeCl_2$ (titrated with $KMnO_4$ in the presence of **Zimmerman's reagent**).\n2. *Halogens Assay:* **Iodine tincture** is determined by *direct iodimetry* with thiosulfate ($Na_2S_2O_3$). **Bromine & Chlorine** are determined by *indirect iodometry* (treatment with excess $KI$, then titrating the liberated $I_2$ with $Na_2S_2O_3$).\n3. *Oxides & Peroxides:* **$MnO_2$** is determined by *back titration* (heated with known excess $Fe^{2+}$, then unreacted $Fe^{2+}$ back-titrated with $KMnO_4$). **$H_2O_2$** has dual nature: titrated *permanganatometrically* (direct with $KMnO_4$) or *iodometrically* (excess $KI$, titrating liberated $I_2$ with $Na_2S_2O_3$).\n4. *Iron Cations:* **$Fe^{2+}$ (reductant)** is titrated directly with $KMnO_4$ ($H_2SO_4$), or $K_2Cr_2O_7$ (diphenylamine indicator + $H_3PO_4$), or $Ce^{4+}$ (orthophenanthroline). **$Fe^{3+}$ (oxidant)** is titrated directly with $TiCl_3$ (**Titanometry** using thiocyanate indicator) or reduced by pre-reductant ($SnCl_2$ or $Zn$) to $Fe^{2+}$ then titrated.\n5. *Oxalates & Insoluble Cations:* Soluble oxalates are titrated with $KMnO_4$ or $Ce^{4+}$ at **60 °C** in dil. $H_2SO_4$. Cations forming insoluble oxalates ($Ca^{2+}, Ba^{2+}, Pb^{2+}$) are precipitated as oxalate, dissolved in $H^+$, and the liberated $H_2C_2O_4$ is titrated with $KMnO_4$.\n6. *Thiols & Ascorbic Acid:* **Ascorbic acid** is titrated by direct *iodimetry* (starch indicator). **Mercaptans/Thiols** (Dimercaprol, Thioglycollic acid, D-penicillamine) are oxidized by $I_2$ to disulfides; **$NaHCO_3$** is added to neutralize $HI$ and shift the equilibrium forward.\n7. *Karl-Fischer Titration:* Determines moisture content. Reagent consists of **$I_2 + SO_2 + \\text{anhydrous } CH_3OH + \\text{anhydrous pyridine}$**. Must be conducted in a **strictly closed system** to prevent atmospheric moisture contamination."
        },
        {
            type: "compare",
            title1: "Direct Iodimetry",
            val1: "• Analyte is a **reducing agent** titrated directly with standard **iodine solution ($I_2$)**.\n• Examples: Ascorbic acid, Thiol compounds (Dimercaprol, Thioglycollic acid, D-penicillamine).\n• Indicator: **Starch** (appearance of deep blue color at the endpoint).",
            title2: "Indirect Iodometry",
            val2: "• Analyte is an **oxidizing agent** treated with **excess potassium iodide ($KI$)** to liberate $I_2$.\n• The liberated $I_2$ is back/indirectly titrated against standard **sodium thiosulfate ($Na_2S_2O_3$)**.\n• Examples: Chlorine, Bromine, Hydrogen peroxide ($H_2O_2$)."
        },
        {
            type: "table",
            headers: ["Substance / API", "Titration Type", "Standard Titrant", "Key Condition / Indicator"],
            rows: [
                ["Zinc powder (Zn)", "Indirect / Redox", "KMnO4", "Pre-treated with ferric sulfate Fe2(SO4)3"],
                ["Metallic Iron (Fe)", "Indirect / Redox", "KMnO4", "Dissolved in FeCl3; uses Zimmerman's reagent"],
                ["Iodine in tincture", "Direct titration", "Na2S2O3", "Converted to iodide (I-) and tetrathionate"],
                ["Chlorine & Bromine", "Indirect iodometry", "Na2S2O3", "Treated with excess KI; liberates I2"],
                ["Manganese dioxide (MnO2)", "Back titration", "KMnO4", "Boiled with known excess Fe2+ in acid"],
                ["Hydrogen peroxide (H2O2)", "Direct / Indirect", "KMnO4 or Na2S2O3", "Permanganatometry (direct) / Iodometry (indirect)"],
                ["Ferric iron (Fe3+)", "Titanometry", "TiCl3", "Thiocyanate indicator (red to colorless)"],
                ["Oxalate / Oxalic acid", "Direct permanganometry", "KMnO4 or Ce4+", "Heated at 60 °C in dil. H2SO4"],
                ["Ca2+ / Ba2+ / Pb2+", "Indirect precipitation-redox", "KMnO4", "Precipitated as insoluble oxalate, dissolved in acid"],
                ["Mercaptans (RSH)", "Direct iodimetry", "I2", "Requires NaHCO3 to remove generated HI"],
                ["Moisture (Karl Fischer)", "Iodimetric in nature", "Karl Fischer Reagent", "Completely closed system; anhydrous solvents"]
            ]
        },
        {
            type: "reveal",
            title: "Biological Importance of Redox Systems & Antioxidants (Slides 11-12)",
            content: "• **Germicides & Bactericides:** Act through direct oxidation; $H_2O_2$ liberates nascent oxygen in tissues; $KMnO_4$ (wound antiseptic) and $Cl_2$ (dental therapy) denature bacterial proteins by direct oxidation.\n• **Deleterious Free Radicals:** ROS & RNS ($OH^\\bullet, NO^\\bullet, NO_2^\\bullet, RO^\\bullet$) cause cellular damage.\n• **Antioxidants (Scavengers):** Mainly reducing agents (Vitamins A, C, E, Selenium, Phenolics & Flavonoids).\n• **Three Mechanisms of Action:**\n  1. Direct neutralization of generated free radicals.\n  2. Chelation/binding of catalytic metal ions.\n  3. Repair of oxidatively damaged biomolecules or enzyme induction."
        },
        {
            type: "reveal",
            title: "⭐ Expected Scientific Terms (Reveal-style)",
            content: "• **Titanometry:** [The direct redox titration of ferric iron ($Fe^{3+}$) using standard titanous chloride ($TiCl_3$) in the presence of thiocyanate indicator].\n• **Karl-Fischer Reagent:** [A specific analytical mixture composed of iodine ($I_2$), sulfur dioxide ($SO_2$), anhydrous methanol, and anhydrous pyridine used for water determination].\n• **Zimmerman's Reagent:** [A specialized mixture added during the permanganometric determination of iron in the presence of chloride ions to prevent chloride oxidation and sharpen the endpoint].\n• **Pre-reductant:** [A reducing reagent (such as stannous chloride $SnCl_2$ or metallic $Zn$) utilized to quantitatively reduce an analyte (e.g., $Fe^{3+}$ to $Fe^{2+}$) prior to its oxidimetric titration].\n• **Antioxidant (Scavenger):** [A reducing compound capable of counteracting, neutralizing, or quenching reactive oxygen and nitrogen free radicals to prevent biological cellular oxidative damage]."
        }
    ],

    summaryAr: [
        {
            type: "vip",
            title: "⭐ [أهم نقاط الامتحان] القواعد الذهبية والكواشف الأساسية",
            content: "١. *تعيين الفلزات الحرة:* **مسحوق الخارصين (Zinc)** يعامل مع كمية فائضة من *كبريتات الحديديك* ($Fe_2(SO_4)_3$) ليختزل $Fe^{3+}$ إلى $Fe^{2+}$. **الحديد الفلزي (Metallic iron)** يذاب في *كلوريد الحديديك* ($FeCl_3$) وينتج $3FeCl_2$ ويعاير الناتج ضد $KMnO_4$ بوجود **كاشف زيمرمان (Zimmerman's reagent)**.\n٢. *تقدير الهالوجينات:* **صبغة اليود** تعاير بـ *معايرة يودية مباشرة (Iodimetry)* باستخدام ثيوسلفات الصوديوم ($Na_2S_2O_3$). **الكلور والبروم** يعينان بـ *معايرة يودومترية غير مباشرة (Indirect iodometry)* بإضافة فائض من يوديد البوتاسيوم ($KI$) ثم معايرة اليود المتحرر بالثيوسلفات.\n٣. *الأكاسيد والبيروكسيدات:* **ثاني أكسيد المنجنيز ($MnO_2$)** يعين بـ *المعايرة الرجعية (Back titration)* بغليه مع فائض معلوم من $Fe^{2+}$ ثم معايرة المتبقي ضد $KMnO_4$. **بيروكسيد الهيدروجين ($H_2O_2$)** يسلك سلوكاً مزدوجاً: يعاير *برمنجاناتياً (مباشر بـ $KMnO_4$)* أو *يودومترياً (غير مباشر بـ $KI$ والثيوسلفات)*.\n٤. *أيونات الحديد:* **الحديدوز $Fe^{2+}$ (عامل مختزل)** يعاير مباشرة بالبرمنجانات أو الدايكرومات (دليل ثنائي فينيل أمين + $H_3PO_4$) أو السيريوم. **الحديديك $Fe^{3+}$ (عامل مؤكسد)** يعاير مباشرة بكلوريد التيتانيوز $TiCl_3$ (**Titanometry** بدليل الثايوسيانات) أو يختزل أولاً بـ $SnCl_2$ أو فلز $Zn$ ثم يعاير.\n٥. *الأوكسالات والكاتيونات المترسبة:* الأوكسالات الذائبة تعاير بـ $KMnO_4$ أو $Ce^{4+}$ عند درجة حرارة **60 °C** في وسط حمضي مخفف. الكاتيونات المكونة لأوكسالات شحيحة الذوبان ($Ca^{2+}, Ba^{2+}, Pb^{2+}$) ترسب كأوكسالات، ثم تذاب في حمض وتعاير الأوكسالات المتحررة بالبرمنجانات.\n٦. *المركبات الثيولية وفيتامين C:* **حمض الأسكوربيك** يعاير باليود مباشرة (Iodimetry) بدليل النشا. **مركبات الثيول** (Dimercaprol, Thioglycollic acid, D-penicillamine) تتأكسد باليود إلى Disulfide؛ ويضاف **بيكربونات الصوديوم ($NaHCO_3$)** للتخلص من حمض $HI$ الناتج ودفع التفاعل للأمام.\n٧. *معايرة كارل-فيشر:* تستخدم لتعيين الرطوبة (الماء). يتكون الكاشف من **$I_2 + SO_2 + \\text{ميثانول لا مائي} + \\text{بيريدين لا مائي}$**. يجب إجراء التجربة في **نظام مغلق تماماً** لمنع وصول رطوبة الهواء الجوي."
        },
        {
            type: "compare",
            title1: "المعايرة اليوديمترية المباشرة (Iodimetry)",
            val1: "• المادة المراد تحليلها تكون **عامل مختزل** وتعاير مباشرة بمحلول **اليود القياسي ($I_2$)**.\n• أمثلة: فيتامين C (Ascorbic acid)، ومركبات الثيول (Mercaptans).\n• الدليل: **النشا (Starch)** ويعطي لوناً أزرق داكناً عند نقطة النهاية.",
            title2: "المعايرة اليودومترية غير المباشرة (Iodometry)",
            val2: "• المادة المراد تحليلها تكون **عامل مؤكسد** وتضاف إليها كمية فائضة من **يوديد البوتاسيوم ($KI$)** لتحرير اليود ($I_2$).\n• يعاير اليود المتحرر ضد محلول قياسي من **ثيوسلفات الصوديوم ($Na_2S_2O_3$)**.\n• أمثلة: الكلور، البروم، بيروكسيد الهيدروجين ($H_2O_2$)."
        },
        {
            type: "table",
            headers: ["المادة أو العقار الدوائي", "نوع المعايرة", "المحلول القياسي (Titrant)", "الشرط الأساسي / الدليل المستخدم"],
            rows: [
                ["مسحوق الخارصين (Zn)", "معايرة غير مباشرة", "KMnO4", "يعامل أولاً بكبريتات الحديديك Fe2(SO4)3"],
                ["الحديد الفلزي الحر (Fe)", "معايرة غير مباشرة", "KMnO4", "يذاب في FeCl3 ويضاف كاشف زيمرمان لمنع أكسدة الكلوريد"],
                ["اليود في صبغة اليود", "معايرة مباشرة", "Na2S2O3", "يتحول اليود إلى يوديد والثيوسلفات إلى رباعي ثيونات"],
                ["الكلور والبروم", "معايرة يودومترية غير مباشرة", "Na2S2O3", "يعامل بفائض KI لتحرير مكافئ من اليود I2"],
                ["ثاني أكسيد المنجنيز (MnO2)", "معايرة رجعية (Back titration)", "KMnO4", "يغلى مع كمية فائضة معلومة من Fe2+ في وسط حمضي"],
                ["بيروكسيد الهيدروجين (H2O2)", "مباشرة أو غير مباشرة", "KMnO4 أو Na2S2O3", "برمنجاناتية (مباشرة) / أو يودومترية (غير مباشرة بـ KI)"],
                ["أيون الحديديك (Fe3+)", "Titanometry", "TiCl3", "دليل الثايوسيانات (يتحول اللون من الأحمر لعديم اللون)"],
                ["الأوكسالات / حمض الأوكساليك", "برمنجاناتية مباشرة", "KMnO4 أو Ce4+", "التسخين عند 60 درجة مئوية في حمض كبريتيك مخفف"],
                ["كاتيونات الكالسيوم والباريوم والرصاص", "ترسيب ثم أكسدة واختزال غير مباشرة", "KMnO4", "ترسب كأوكسالات، ثم تذاب في حمض وتعاير الأوكسالات بـ KMnO4"],
                ["مركبات الثيول (Mercaptans)", "يوديمترية مباشرة", "I2", "إضافة NaHCO3 للتخلص من حمض HI ودفع التفاعل للأمام"],
                ["الرطوبة / الماء (Karl Fischer)", "يوديمترية بطبيعتها", "كاشف كارل فيشر", "نظام مغلق تماماً ومذيبات لا مائية لمنع رطوبة الجو"]
            ]
        },
        {
            type: "reveal",
            title: "الأهمية البيولوجية لتفاعلات الأكسدة والاختزال ومضادات الأكسدة (سلايد 11-12)",
            content: "• **المطهرات ومبيدات البكتيريا:** تعمل بالأكسدة المباشرة؛ بيروكسيد الهيدروجين ($H_2O_2$) يحرر الأكسجين النشط في الأنسجة، والبرمنجانات وكلور الأسنان يفسدان بروتين البكتيريا بالأكسدة المباشرة.\n• **الجذور الحرة الضارة:** أنواع الأكسجين والنيتروجين التفاعلية ($OH^\\bullet, NO^\\bullet, NO_2^\\bullet, RO^\\bullet$) تدمر خلايا الجسم.\n• **مضادات الأكسدة (Antioxidants):** عوامل مختزلة في الغالب (فيتامين A و C و E، السيلينيوم، الفينولات والفلافونويدات).\n• **آليات عمل مضادات الأكسدة الثلاث:**\n  ١. التفاعل المباشر مع الجذور الحرة وإبطال مفعولها.\n  ٢. ربط ومخلبة أيونات الفلزات المحفزة لتكوين الجذور الحرة.\n  ٣. إصلاح التلف التأكسدي للجزيئات الحيوية أو تحفيز إنزيمات الإصلاح الخلوي."
        },
        {
            type: "reveal",
            title: "⭐ المصطلحات العلمية المتوقعة للامتحان (Reveal-style)",
            content: "• **Titanometry:** [المعايرة المباشرة لأيون الحديديك $Fe^{3+}$ باستخدام محلول قياسي من كلوريد التيتانيوز $TiCl_3$ في وجود دليل الثايوسيانات].\n• **Karl-Fischer Reagent:** [كاشف كيميائي مخصص لتقدير الماء والرطوبة يتكون من اليود وثاني أكسيد الكبريت والميثانول اللامائي والبيريدين اللامائي].\n• **Zimmerman's Reagent:** [كاشف يضاف أثناء معايرة الحديد بالبرمنجانات في وجود أيونات الكلوريد لمنع أكسدة الكلوريد وتوضيح نقطة النهاية].\n• **Pre-reductant:** [مادة مختزلة مثل $SnCl_2$ أو فلز $Zn$ تستخدم لاختزال المادة المراد تحليلها تمهيدياً (مثل اختزال $Fe^{3+}$ إلى $Fe^{2+}$) قبل معايرتها].\n• **Antioxidants:** [مركبات مختزلة تلتقط الجذور الحرة التفاعلية (Scavengers) لحماية خلايا الجسم ومكوناته من التلف التأكسدي]."
        }
    ],

    // =========================================================================
    // 2. حل أسئلة نهاية المحاضرة بالكامل بالتفصيل (Q&A Slides 13 & 14)
    // =========================================================================
    qna: [
        {
            q: "1. Zinc powder is determined indirectly by treatment with: (Slide 13, Q1)",
            a: "Answer: *Ferric sulfate (B)*.\nExplanation: Metallic zinc is treated with ferric sulfate, reducing $Fe^{3+}$ to an equivalent amount of $Fe^{2+}$, which is subsequently titrated with standard $KMnO_4$."
        },
        {
            q: "2. During the determination of zinc powder, zinc reduces Fe³⁺ to: (Slide 13, Q2)",
            a: "Answer: *Fe²⁺ (C)*.\nExplanation: The chemical reaction is $Zn + Fe_2(SO_4)_3 \\rightarrow ZnSO_4 + 2FeSO_4$, where iron is quantitatively reduced to ferrous ion ($Fe^{2+}$)."
        },
        {
            q: "3. Metallic iron reacts with ferric chloride according to which equation? (Slide 13, Q3)",
            a: "Answer: *Fe + 2FeCl3 -> 3FeCl2 (B)*.\nExplanation: One mole of free metallic iron reduces two moles of ferric chloride to yield three moles of ferrous chloride."
        },
        {
            q: "4. In the reaction between iodine and thiosulfate, iodine is converted into: (Slide 13, Q4)",
            a: "Answer: *Iodide (B)*.\nExplanation: In the reaction $I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}$, iodine ($I_2$) undergoes reduction from oxidation state 0 to -1 (iodide, $I^-$)."
        },
        {
            q: "5. Chlorine and bromine are determined indirectly after treatment with excess: (Slide 13, Q5)",
            a: "Answer: *KI (B)*.\nExplanation: Because chlorine and bromine are stronger oxidants than iodine, they oxidize excess potassium iodide ($KI$) to liberate free $I_2$, which is titrated with standard sodium thiosulfate."
        },
        {
            q: "6. Hydrogen peroxide can act as: (Slide 13, Q6)",
            a: "Answer: *Both an oxidizing and a reducing agent (C)*.\nExplanation: Due to the intermediate oxidation state of oxygen in peroxides (-1), $H_2O_2$ can be oxidized to $O_2$ (0) or reduced to $H_2O$ (-2)."
        },
        {
            q: "7. In the indirect determination of metallic zinc, zinc functions primarily as: (Slide 13, Q7)",
            a: "Answer: *A reducing agent (B)*.\nExplanation: Metallic zinc ($Zn^0$) loses two electrons and undergoes oxidation to $Zn^{2+}$, thereby acting as a reducing agent towards $Fe^{3+}$."
        },
        {
            q: "8. Which titrant is used for the Fe²⁺ produced during metallic iron determination? (Slide 13, Q8)",
            a: "Answer: *KMnO4 (C)*.\nExplanation: The produced ferrous chloride ($FeCl_2$) is titrated oxidimetrically with potassium permanganate ($KMnO_4$) in the presence of Zimmerman's reagent."
        },
        {
            q: "9. Which statement best describes the determination of chlorine and bromine? (Slide 14, Q9)",
            a: "Answer: *Indirect iodometric titration (B)*.\nExplanation: The halogens liberate iodine from excess iodide, and the liberated $I_2$ is titrated with thiosulfate."
        },
        {
            q: "10. The determination of MnO₂ is classified as: (Slide 14, Q10)",
            a: "Answer: *Back titration (B)*.\nExplanation: Insoluble $MnO_2$ is boiled with a known excess of ferrous sulfate in acid, and the remaining unreacted $Fe^{2+}$ is back-titrated with standard $KMnO_4$."
        },
        {
            q: "11. The direct titration of ferric iron with TiCl₃ is called: (Slide 14, Q11)",
            a: "Answer: *Titanometry (C)*.\nExplanation: Titrations employing standard titanous salts (such as $TiCl_3$) as powerful reducing titrants are defined as Titanometry."
        },
        {
            q: "12. An alternative procedure for ferric iron determination involves its preliminary reduction using: (Slide 14, Q12)",
            a: "Answer: *SnCl2 (A)*.\nExplanation: Ferric ions ($Fe^{3+}$) can be reduced to ferrous ($Fe^{2+}$) using pre-reductants like stannous chloride ($SnCl_2$) or metallic zinc prior to titration."
        },
        {
            q: "13. Oxalate and oxalic acid are titrated with KMnO₄ or Ce⁴⁺ because they are: (Slide 14, Q13)",
            a: "Answer: *Reducing agents (B)*.\nExplanation: Oxalate ions ($C_2O_4^{2-}$) readily undergo oxidation to carbon dioxide ($CO_2$), thereby functioning as strong reducing agents."
        },
        {
            q: "14. The permanganometric titration of oxalate is conducted at approximately: (Slide 14, Q14)",
            a: "Answer: *60 °C (D)*.\nExplanation: The reaction between permanganate and oxalate is slow at ambient temperature and must be accelerated by heating to 60 °C."
        },
        {
            q: "15. In the indirect determination of calcium, calcium is initially precipitated as: (Slide 14, Q15)",
            a: "Answer: *Calcium oxalate (B)*.\nExplanation: $Ca^{2+}$ is precipitated as insoluble calcium oxalate ($CaC_2O_4$), separated, redissolved in dilute sulfuric acid, and the liberated oxalic acid is titrated with $KMnO_4$."
        },
        {
            q: "16. Dimercaprol, thioglycollic acid, and D-penicillamine can be assayed iodimetrically because they contain: (Slide 14, Q16)",
            a: "Answer: *A thiol group (B)*.\nExplanation: These compounds contain free sulfhydryl/thiol ($-SH$) groups that exhibit potent reducing properties and are stoichiometrically oxidized by iodine to disulfides."
        }
    ],

    qnaAr: [
        {
            q: "١. يعين مسحوق الخارصين بطريقة غير مباشرة بمعاملته مع: (سلايد 13، س1)",
            a: "الإجابة: *كبريتات الحديديك Ferric sulfate (B)*.\nالتوضيح: يتفاعل الخارصين مع كبريتات الحديديك ليختزل أيونات $Fe^{3+}$ إلى كمية مكافئة تماماً من أيونات الحديدوز $Fe^{2+}$ التي تعاير بالبرمنجانات."
        },
        {
            q: "٢. أثناء تعيين مسحوق الخارصين، يقوم الخارصين باختزال Fe³⁺ إلى: (سلايد 13، س2)",
            a: "الإجابة: *Fe²⁺ (C)*.\nالتوضيح: المعادلة هي: $Zn + Fe_2(SO_4)_3 \\rightarrow ZnSO_4 + 2FeSO_4$، حيث يختزل الحديديك كمياً إلى حديدوز."
        },
        {
            q: "٣. يتفاعل الحديد الفلزي مع كلوريد الحديديك طبقاً للمعادلة: (سلايد 13، س3)",
            a: "الإجابة: *Fe + 2FeCl3 -> 3FeCl2 (B)*.\nالتوضيح: يتفاعل مول واحد من فلز الحديد مع مولين من كلوريد الحديديك لينتج 3 مولات من كلوريد الحديدوز."
        },
        {
            q: "٤. في التفاعل بين اليود وثيوسلفات الصوديوم، يتحول اليود إلى: (سلايد 13، س4)",
            a: "الإجابة: *يوديد Iodide (B)*.\nالتوضيح: في المعادلة $I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}$، يختزل اليود المتعادل (0) إلى أيون يوديد سالب (-1)."
        },
        {
            q: "٥. يعين الكلور والبروم بطريقة غير مباشرة بعد المعاملة مع فائض من: (سلايد 13، س5)",
            a: "الإجابة: *KI (B)*.\nالتوضيح: الكلور والبروم عوامل مؤكسدة أقوى من اليود، لذا يؤكسدان فائض يوديد البوتاسيوم ويحرران اليود الحر الذي يعاير بالثيوسلفات."
        },
        {
            q: "٦. يمكن لبيروكسيد الهيدروجين (H2O2) أن يسلك كـ: (سلايد 13، س6)",
            a: "الإجابة: *عامل مؤكسد ومختزل معاً (C)*.\nالتوضيح: نظراً لأن عدد تأكسد الأكسجين فيه هو -1 (حالة وسطية)، فيمكن أن يتأكسد لـ $O_2$ أو يختزل لـ $H_2O$."
        },
        {
            q: "٧. في التقدير غير المباشر للخارصين الفلزي، يسلك الخارصين أساساً كـ: (سلايد 13، س7)",
            a: "الإجابة: *عامل مختزل Reducing agent (B)*.\nالتوضيح: يفقد الخارصين إلكترونين ويتحول إلى $Zn^{2+}$ مسبباً اختزال أيونات $Fe^{3+}$."
        },
        {
            q: "٨. ما هو المحلول القياسي المستخدم لمعايرة Fe²⁺ الناتج أثناء تقدير الحديد الفلزي؟ (سلايد 13، س8)",
            a: "الإجابة: *KMnO4 (C)*.\nالتوضيح: يعاير كلوريد الحديدوز الناتج أكسيدياً بمحلول برمنجانات البوتاسيوم القياسي بوجود كاشف زيمرمان."
        },
        {
            q: "٩. ما هي العبارة التي تصف بدقة طريقة تعيين الكلور والبروم؟ (سلايد 14، س9)",
            a: "الإجابة: *معايرة يودومترية غير مباشرة Indirect iodometric titration (B)*.\nالتوضيح: الهالوجين يؤكسد يوديد البوتاسيوم ليحرر يوداً مكافئاً يعاير بالثيوسلفات."
        },
        {
            q: "١٠. يصنف تقدير ثاني أكسيد المنجنيز (MnO2) على أنه: (سلايد 14، س10)",
            a: "الإجابة: *معايرة رجعية Back titration (B)*.\nالتوضيح: يغلى الراسب مع زيادة معلومة من كبريتات الحديدوز في وسط حمضي ثم تعاير الزيادة المتبقية ضد البرمنجانات."
        },
        {
            q: "١١. تسمى المعايرة المباشرة لأيون الحديديك باستخدام TiCl₃ بـ: (سلايد 14، س11)",
            a: "الإجابة: *تيتانومتري Titanometry (C)*.\nالتوضيح: المعايرات التي تعتمد على أملاح التيتانيوز كعامل مختزل تسمى Titanometry."
        },
        {
            q: "١٢. تتضمن الطريقة البديلة لتعيين الحديديك اختزاله تمهيدياً باستخدام: (سلايد 14، س12)",
            a: "الإجابة: *SnCl2 (A)*.\nالتوضيح: يستخدم كلوريد القصديروز $SnCl_2$ أو فلز الخارصين كعامل اختزال تمهيدي لاختزال $Fe^{3+}$ إلى $Fe^{2+}$."
        },
        {
            q: "١٣. تعاير الأوكسالات وحمض الأوكساليك بالبرمنجانات أو السيريوم لأنها: (سلايد 14، س13)",
            a: "الإجابة: *عوامل مختزلة Reducing agents (B)*.\nالتوضيح: تتأكسد الأوكسالات بسهولة إلى غاز ثاني أكسيد الكربون $CO_2$ مانحة إلكترونات."
        },
        {
            q: "١٤. تجرى المعايرة البرمنجاناتية للأوكسالات تقريباً عند درجة حرارة: (سلايد 14، س14)",
            a: "الإجابة: *60 °C (D)*.\nالتوضيح: التفاعل بطيء عند درجة حرارة الغرفة، لذا يسخن المحلول إلى 60 درجة مئوية لتسريع التفاعل."
        },
        {
            q: "١٥. في التقدير غير المباشر للكالسيوم، يرسب الكالسيوم أولاً في صورة: (سلايد 14، س15)",
            a: "الإجابة: *أوكسالات الكالسيوم Calcium oxalate (B)*.\nالتوضيح: يرسب الكالسيوم كأوكسالات كالسيوم شحيحة الذوبان، ثم يرشح ويذاب في حمض وتعاير الأوكسالات بـ $KMnO_4$."
        },
        {
            q: "١٦. يمكن تعيين الدايمركابرول وحمض الثايوجلايكوليك والبنسيلامين يوديمترياً لاحتوائها على: (سلايد 14، س16)",
            a: "الإجابة: *مجموعة ثيول A thiol group (B)*.\nالتوضيح: لاحتوائها على مجموعة ($-SH$) الحرة ذات الخواص الاختزالية القوية والتي تتأكسد باليود إلى Disulfide."
        }
    ],

    // =========================================================================
    // 3. أسئلة الشفوي المتوقعة وإجاباتها النموذجية (Oral Questions & Answers)
    // =========================================================================
    oral: [
        {
            q: "Why must the Karl-Fischer titration be carried out in a completely closed system and with anhydrous solvents?",
            a: "Because the stoichiometric consumption of iodine directly corresponds to the amount of water present; any atmospheric moisture entering the open vessel would cause a false, grossly elevated result."
        },
        {
            q: "What is the specific role of adding sodium bicarbonate (NaHCO3) during the iodimetric assay of mercaptans?",
            a: "The oxidation of mercaptans by iodine generates hydroiodic acid (HI) which makes the medium acidic and favors the reverse reaction. NaHCO3 neutralizes HI, thereby shifting the equilibrium quantitatively forward."
        },
        {
            q: "Why is Zimmerman's reagent added during the permanganometric titration of iron in the presence of hydrochloric acid?",
            a: "Permanganate can oxidize chloride ions to free chlorine gas (consuming titrant erroneously). Zimmerman's reagent contains manganese sulfate (lowers redox potential), phosphoric acid (complexes Fe3+ to sharpen the endpoint), and sulfuric acid."
        }
    ],

    oralAr: [
        {
            q: "علل: لماذا يجب إجراء معايرة كارل فيشر في نظام مغلق تماماً وباستخدام كواشف لا مائية؟",
            a: "لأن كمية اليود المستهلكة تكافئ كمية الماء في العينة بدقة، فإذا كان النظام مفتوحاً ستدخل رطوبة الهواء الجوي وتتفاعل مع الكاشف معطية نتائج خاطئة عالية جداً."
        },
        {
            q: "ما هو الدور المحدد لإضافة بيكربونات الصوديوم (NaHCO3) أثناء تعيين مركبات الثيول باليود؟",
            a: "أكسدة الثيول باليود تنتج حمض الهيدرويوديك (HI) الذي يجعل التفاعل عكسياً؛ فتقوم بيكربونات الصوديوم بمعادلة حمض HI فور تكونه لدفع الاتزان إلى اليمين باتجاه تكوين النواتج."
        },
        {
            q: "لماذا يضاف كاشف زيمرمان أثناء معايرة الحديد بالبرمنجانات في وجود حمض الهيدروكلوريك؟",
            a: "لأن البرمنجانات تؤكسد أيونات الكلوريد لغاز الكلور مما يستهلك المحلول القياسي خطأً؛ فيعمل كاشف زيمرمان (بما يحتويه من كبريتات المنجنوز وحمض الفوسفوريك) على خفض جهد البرمنجانات ومخلبة الحديديك لتوضيح نقطة النهاية."
        }
    ],

    // =========================================================================
    // 4. بنك أسئلة الكويز المطور الشامل (30 سؤالاً مطابقاً لأسلوب المحاضرة)
    // =========================================================================
    quiz: [
        // --- 1. أسئلة سلايدات نهاية المحاضرة (Slides 13 & 14 كاملة بالنص) ---
        {
            type: "mcq",
            question: "**Zinc powder** is determined indirectly by treatment with:",
            questionAr: "يتم تقدير **مسحوق الخارصين** بطريقة غير مباشرة عن طريق المعاملة مع:",
            options: ["Ferrous sulfate", "Ferric sulfate", "Titanous chloride", "Sodium thiosulfate"],
            optionsAr: ["كبريتات الحديدوز", "كبريتات الحديديك", "كلوريد التيتانيوز", "ثيوسلفات الصوديوم"],
            correct: 1,
            hint: "Zinc powder reduces **ferric sulfate** to ferrous sulfate, which is then titrated with permanganate.",
            hintAr: "يختزل مسحوق الخارصين **كبريتات الحديديك** إلى كبريتات حديدوز التي تعاير بالبرمنجانات."
        },
        {
            type: "mcq",
            question: "During the determination of zinc powder, **zinc reduces Fe³⁺** to:",
            questionAr: "أثناء تقدير مسحوق الخارصين، يقوم **الخارصين باختزال Fe³⁺** إلى:",
            options: ["Metallic iron", "FeO", "Fe²⁺", "Fe⁴⁺"],
            optionsAr: ["حديد فلزي", "FeO", "Fe²⁺", "Fe⁴⁺"],
            correct: 2,
            hint: "The reaction converts trivalent iron Fe3+ into bivalent **Fe2+**.",
            hintAr: "يحول التفاعل الحديد الثلاثي Fe3+ إلى حديد ثنائي **Fe2+**."
        },
        {
            type: "mcq",
            question: "**Metallic iron reacts with ferric chloride** according to which equation?",
            questionAr: "يتفاعل **الحديد الفلزي مع كلوريد الحديديك** طبقاً لأي من المعادلات الآتية؟",
            options: [
                "Fe + FeCl3 -> 2FeCl2",
                "Fe + 2FeCl3 -> 3FeCl2",
                "2Fe + FeCl3 -> 3FeCl2",
                "Fe + 3FeCl3 -> 4FeCl2"
            ],
            optionsAr: [
                "Fe + FeCl3 -> 2FeCl2",
                "Fe + 2FeCl3 -> 3FeCl2",
                "2Fe + FeCl3 -> 3FeCl2",
                "Fe + 3FeCl3 -> 4FeCl2"
            ],
            correct: 1,
            hint: "One mole of metallic Fe reacts with 2 moles of FeCl3 to give **3 moles of FeCl2**.",
            hintAr: "يتفاعل مول واحد من Fe مع مولين من FeCl3 ليعطي **3 مولات من FeCl2**."
        },
        {
            type: "mcq",
            question: "In the reaction between **iodine and thiosulfate**, iodine is converted into:",
            questionAr: "في التفاعل بين **اليود وثيوسلفات الصوديوم**، يتحول اليود إلى:",
            options: ["Iodate", "Iodide", "Hypoiodite", "Periodate"],
            optionsAr: ["يودات", "يوديد", "هيبويوديت", "بيريودات"],
            correct: 1,
            hint: "I2 is reduced from oxidation state 0 to -1 forming **iodide** (I-).",
            hintAr: "يختزل اليود I2 من صفر إلى -1 مكوناً **اليوديد** (I-)."
        },
        {
            type: "mcq",
            question: "**Chlorine and bromine** are determined indirectly after treatment with excess:",
            questionAr: "يتم تقدير **الكلور والبروم** بطريقة غير مباشرة بعد المعاملة مع فائض من:",
            options: ["KBr", "KI", "KCl", "Na2S2O3"],
            optionsAr: ["KBr", "KI", "KCl", "Na2S2O3"],
            correct: 1,
            hint: "They oxidize excess **potassium iodide (KI)** to liberate free iodine.",
            hintAr: "يؤكسدان الزيادة من **يوديد البوتاسيوم (KI)** لتحرير اليود الحر."
        },
        {
            type: "mcq",
            question: "**Hydrogen peroxide** can act as:",
            questionAr: "يمكن لمركب **بيروكسيد الهيدروجين** أن يسلك كـ:",
            options: [
                "Only an oxidizing agent",
                "Only a reducing agent",
                "Both an oxidizing and a reducing agent",
                "Neither an oxidizing nor a reducing agent"
            ],
            optionsAr: [
                "عامل مؤكسد فقط",
                "عامل مختزل فقط",
                "عامل مؤكسد ومختزل معاً",
                "ليس عاملاً مؤكسداً ولا مختزلاً"
            ],
            correct: 2,
            hint: "Because oxygen has an intermediate oxidation number of -1, it exhibits **dual redox behavior**.",
            hintAr: "لأن عدد تأكسد الأكسجين فيه -1 وهو حالة متوسطة، فيسلك **كعامل مؤكسد ومختزل معاً**."
        },
        {
            type: "mcq",
            question: "In the indirect determination of metallic zinc, **zinc functions primarily as**:",
            questionAr: "في التقدير غير المباشر للخارصين الفلزي، **يعمل الخارصين أساساً كـ**:",
            options: ["An oxidizing agent", "A reducing agent", "A redox indicator", "A masking agent"],
            optionsAr: ["عامل مؤكسد", "عامل مختزل", "دليل أكسدة واختزال", "عامل حجب"],
            correct: 1,
            hint: "Zinc donates electrons and is oxidized to Zn2+, acting as a **reducing agent**.",
            hintAr: "الخارصين يفقد إلكترونات ويتأكسد إلى Zn2+، لذا فهو **عامل مختزل**."
        },
        {
            type: "mcq",
            question: "Which **titrant** is used for the Fe²⁺ produced during metallic iron determination?",
            questionAr: "أي **محلول قياسي** يستخدم لمعايرة Fe²⁺ الناتج أثناء تقدير الحديد الفلزي؟",
            options: ["Na2S2O3", "I2", "KMnO4", "TiCl3"],
            optionsAr: ["Na2S2O3", "I2", "KMnO4", "TiCl3"],
            correct: 2,
            hint: "The generated ferrous ions are titrated using standard **KMnO4** in the presence of Zimmerman's reagent.",
            hintAr: "أيونات الحديدوز الناتجة تعاير باستخدام محلول قياسي من **KMnO4** بوجود كاشف زيمرمان."
        },
        {
            type: "mcq",
            question: "Which statement best describes the determination of **chlorine and bromine**?",
            questionAr: "أي العبارات الآتية تصف بدقة طريقة تقدير **الكلور والبروم**؟",
            options: [
                "Direct iodimetric titration",
                "Indirect iodometric titration",
                "Direct permanganometric titration",
                "Back cerimetic titration"
            ],
            optionsAr: [
                "معايرة يوديمترية مباشرة",
                "معايرة يودومترية غير مباشرة",
                "معايرة برمنجاناتية مباشرة",
                "معايرة سيريومية رجعية"
            ],
            correct: 1,
            hint: "Treating with KI followed by thiosulfate titration is defined as **indirect iodometric titration**.",
            hintAr: "المعاملة بـ KI ثم المعايرة بالثيوسلفات هي **معايرة يودومترية غير مباشرة**."
        },
        {
            type: "mcq",
            question: "The determination of **MnO₂** is classified as:",
            questionAr: "يصنف تقدير **ثاني أكسيد المنجنيز (MnO₂)** على أنه:",
            options: ["Direct titration", "Back titration", "Replacement titration", "Precipitation titration"],
            optionsAr: ["معايرة مباشرة", "معايرة رجعية", "معايرة إحلال", "معايرة ترسيب"],
            correct: 1,
            hint: "Insoluble MnO2 is treated with known excess Fe2+, and unreacted Fe2+ is titrated; this is **back titration**.",
            hintAr: "تفاعل المادة الصلبة مع فائض معلوم من Fe2+ ثم معايرة الفائض يسمى **معايرة رجعية**."
        },
        {
            type: "mcq",
            question: "The **direct titration of ferric iron with TiCl₃** is called:",
            questionAr: "تسمى **المعايرة المباشرة لأيون الحديديك باستخدام TiCl₃** بـ:",
            options: ["Cerimetry", "Iodimetry", "Titanometry", "Permanganometry"],
            optionsAr: ["سيريمتري", "يوديمتري", "تيتانومتري", "برمنجانومتري"],
            correct: 2,
            hint: "Titration using titanous salts is specifically called **Titanometry**.",
            hintAr: "المعايرة باستخدام أملاح التيتانيوز تسمى اصطلاحاً **تيتانومتري (Titanometry)**."
        },
        {
            type: "mcq",
            question: "An alternative procedure for ferric iron determination involves its **preliminary reduction using**:",
            questionAr: "تتضمن الطريقة البديلة لتقدير الحديديك **اختزاله أولاً باستخدام**:",
            options: ["SnCl2", "KMnO4 or Ce4+", "I2 or bromine", "H2O2 or chlorine"],
            optionsAr: ["SnCl2", "KMnO4 أو Ce4+", "I2 أو البروم", "H2O2 أو الكلور"],
            correct: 0,
            hint: "Stannous chloride (**SnCl2**) acts as a pre-reductant to reduce Fe3+ to Fe2+.",
            hintAr: "يعمل كلوريد القصديروز (**SnCl2**) كعامل اختزال تمهيدي لتحويل Fe3+ إلى Fe2+."
        },
        {
            type: "mcq",
            question: "**Oxalate and oxalic acid** are titrated with KMnO₄ or Ce⁴⁺ because they are:",
            questionAr: "تعاير **الأوكسالات وحمض الأوكساليك** بـ KMnO₄ أو Ce⁴⁺ لأنها:",
            options: ["Oxidizing agents", "Reducing agents", "Redox indicators", "Complexing indicators"],
            optionsAr: ["عوامل مؤكسدة", "عوامل مختزلة", "أدلة أكسدة واختزال", "أدلة تعقيد"],
            correct: 1,
            hint: "Oxalate loses electrons and is converted into CO2, making it a **reducing agent**.",
            hintAr: "تفقد الأوكسالات إلكترونات وتتحول إلى CO2، مما يجعلها **عوامل مختزلة**."
        },
        {
            type: "mcq",
            question: "The **permanganometric titration of oxalate** is conducted at approximately:",
            questionAr: "تجرى **المعايرة البرمنجاناتية للأوكسالات** عند درجة حرارة حوالي:",
            options: ["10 °C", "25 °C", "40 °C", "60 °C"],
            optionsAr: ["10 °C", "25 °C", "40 °C", "60 °C"],
            correct: 3,
            hint: "The reaction rate between oxalate and KMnO4 is slow at room temperature, requiring heating to **60 °C**.",
            hintAr: "تفاعل البرمنجانات مع الأوكسالات بطيء في درجة حرارة الغرفة ويتطلب تسخيناً إلى **60 °C**."
        },
        {
            type: "mcq",
            question: "In the indirect determination of calcium, **calcium is initially precipitated as**:",
            questionAr: "في التقدير غير المباشر للكالسيوم، **يرسب الكالسيوم أولاً في صورة**:",
            options: ["Calcium sulfate", "Calcium oxalate", "Calcium iodide", "Calcium permanganate"],
            optionsAr: ["كبريتات الكالسيوم", "أوكسالات الكالسيوم", "يوديد الكالسيوم", "برمنجانات الكالسيوم"],
            correct: 1,
            hint: "Ca2+ is quantitatively precipitated as **calcium oxalate** (CaC2O4).",
            hintAr: "يرسب الكالسيوم كمياً في صورة **أوكسالات الكالسيوم** (CaC2O4)."
        },
        {
            type: "mcq",
            question: "**Dimercaprol, thioglycollic acid, and D-penicillamine** can be assayed iodimetrically because they contain:",
            questionAr: "يمكن تعيين **الدايمركابرول وحمض الثايوجلايكوليك والبنسيلامين** يوديمترياً لاحتوائها على:",
            options: ["A carboxyl group", "A thiol group", "A hydroxyl group only", "An amino group only"],
            optionsAr: ["مجموعة كربوكسيل", "مجموعة ثيول", "مجموعة هيدروكسيل فقط", "مجموعة أمين فقط"],
            correct: 1,
            hint: "The oxidizable moiety is the **thiol (-SH) group**.",
            hintAr: "المجموعة القابلة للتأكسد باليود هي **مجموعة الثيول (-SH)**."
        },

        // --- 2. أسئلة إضافية مطابقة لنمط وأسلوب الدكتور (14 سؤالاً مكملاً) ---
        {
            type: "mcq",
            question: "The **reagent used in Karl-Fischer titration** for moisture determination is composed of:",
            questionAr: "يتكون **الكاشف المستخدم في معايرة كارل فيشر** لتقدير الرطوبة من:",
            options: [
                "I2 + SO2 + anhydrous CH3OH + anhydrous pyridine",
                "I2 + H2SO4 + aqueous CH3OH + pyridine",
                "KI + SO3 + anhydrous ethanol + ammonia",
                "I2 + Na2S2O3 + anhydrous CH3OH + pyridine"
            ],
            optionsAr: [
                "I2 + SO2 + ميثانول لا مائي + بيريدين لا مائي",
                "I2 + H2SO4 + ميثانول مائي + بيريدين",
                "KI + SO3 + إيثانول لا مائي + أمونيا",
                "I2 + Na2S2O3 + ميثانول لا مائي + بيريدين"
            ],
            correct: 0,
            hint: "Karl Fischer reagent contains **I2, SO2, anhydrous methanol, and anhydrous pyridine**.",
            hintAr: "يتكون كاشف كارل فيشر من **اليود، ثاني أكسيد الكبريت، ميثانول لا مائي، وبيريدين لا مائي**."
        },
        {
            type: "mcq",
            question: "The **Karl-Fischer titration must be carried out in a closed system** mainly to:",
            questionAr: "يجب إجراء **معايرة كارل فيشر في نظام مغلق تماماً** أساساً لـ:",
            options: [
                "Prevent loss of pyridine by volatilization",
                "Prevent environmental moisture from entering",
                "Avoid the oxidation of sulfur dioxide by air",
                "Prevent the photochemical decomposition of iodine"
            ],
            optionsAr: [
                "منع تطاير البيريدين",
                "منع دخول رطوبة الهواء الجوي",
                "تجنب أكسدة ثاني أكسيد الكبريت بالهواء",
                "منع التحلل الضوئي لليود"
            ],
            correct: 1,
            hint: "The closed system is mandatory to **prevent environmental moisture from entering**.",
            hintAr: "النظام المغلق إلزامي لـ **منع دخول رطوبة الهواء الجوي**."
        },
        {
            type: "mcq",
            question: "In the determination of ascorbic acid (Vitamin C), the titration is classified as:",
            questionAr: "في تقدير حمض الأسكوربيك (فيتامين C)، تصنف المعايرة على أنها:",
            options: ["Iodometry", "Iodimetry", "Titanometry", "Permanganometry"],
            optionsAr: ["يودومتري", "يوديمتري", "تيتانومتري", "برمنجانومتري"],
            correct: 1,
            hint: "Ascorbic acid is titrated directly with standard iodine, so it is **Iodimetry**.",
            hintAr: "يعاير فيتامين C مباشرة بمحلول اليود القياسي، لذا فهي **Iodimetry**."
        },
        {
            type: "mcq",
            question: "During the iodimetric titration of thioglycollic acid, **NaHCO3 is added to**:",
            questionAr: "أثناء المعايرة اليوديمترية لحمض الثايوجلايكوليك، **تضاف بيكربونات الصوديوم NaHCO3 لـ**:",
            options: [
                "Act as a redox indicator",
                "Precipitate the formed disulfide",
                "Remove HI and shift the reaction forward",
                "Prevent the air oxidation of iodine"
            ],
            optionsAr: [
                "العمل كدليل أكسدة واختزال",
                "ترسيب مركب ثنائي الكبريتيد المتكون",
                "إزالة حمض HI ودفع التفاعل للأمام",
                "منع الأكسدة الهوائية لليود"
            ],
            correct: 2,
            hint: "NaHCO3 neutralizes hydroiodic acid to **remove HI and shift the reaction forward**.",
            hintAr: "تعادل بيكربونات الصوديوم الحمض المتكون لـ **إزالة HI ودفع التفاعل للأمام**."
        },
        {
            type: "mcq",
            question: "When **iodine in iodine tincture** is determined, the method used is:",
            questionAr: "عند تقدير **اليود في صبغة اليود**، تكون الطريقة المستخدمة هي:",
            options: [
                "Direct titration with thiosulfate",
                "Indirect titration with excess KI",
                "Back titration with potassium permanganate",
                "Direct titration with titanous chloride"
            ],
            optionsAr: [
                "معايرة مباشرة بالثيوسلفات",
                "معايرة غير مباشرة بفائض KI",
                "معايرة رجعية ببرمنجانات البوتاسيوم",
                "معايرة مباشرة بكلوريد التيتانيوز"
            ],
            correct: 0,
            hint: "Free iodine in tincture is determined by **direct titration with thiosulfate**.",
            hintAr: "اليود الحر في الصبغة يعاير عن طريق **معايرة مباشرة بالثيوسلفات**."
        },
        {
            type: "mcq",
            question: "In the direct titration of ferric iron with titanous chloride, the **indicator used is**:",
            questionAr: "في المعايرة المباشرة للحديديك بكلوريد التيتانيوز، يكون **الدليل المستخدم هو**:",
            options: ["Starch", "Diphenylamine", "Thiocyanate", "Ferroin"],
            optionsAr: ["النشا", "ثنائي فينيل أمين", "الثايوسيانات", "فيروين"],
            correct: 2,
            hint: "Titanometry uses **thiocyanate indicator**, which turns from blood red to colorless at the endpoint.",
            hintAr: "تستخدم معايرة التيتانومتري **دليل الثايوسيانات** الذي يتغير من الأحمر الدموي إلى عديم اللون."
        },
        {
            type: "mcq",
            question: "In the titration of ferrous iron with potassium dichromate, **H3PO4 is added to**:",
            questionAr: "في معايرة الحديدوز بدايكرومات البوتاسيوم، **يضاف H3PO4 لـ**:",
            options: [
                "Lower the potential of Fe3+/Fe2+ system by forming a complex with Fe3+",
                "Act as a primary redox catalyst",
                "Prevent the precipitation of chromium hydroxide",
                "Oxidize diphenylamine indicator prematurely"
            ],
            optionsAr: [
                "خفض جهد نظام Fe3+/Fe2+ عن طريق تكوين متراكب مع Fe3+",
                "العمل كعامل حفاز رئيسي للأكسدة والاختزال",
                "منع ترسب هيدروكسيد الكروم",
                "أكسدة دليل ثنائي فينيل أمين مبكراً"
            ],
            correct: 0,
            hint: "Phosphoric acid binds ferric ions to **lower the potential of Fe3+/Fe2+ system**.",
            hintAr: "يرتبط حمض الفوسفوريك بأيونات الحديديك لـ **خفض جهد نظام Fe3+/Fe2+ بتكوين متراكب مع Fe3+**."
        },
        {
            type: "mcq",
            question: "Which of the following compounds is an example of an **oil-soluble antioxidant**?",
            questionAr: "أي من المركبات الآتية يعتبر مثالاً على **مضاد أكسدة ذائب في الزيت**؟",
            options: ["Sodium metabisulphite", "Ascorbic acid", "Glutathione (GSH)", "Alpha-Tocopherol (Vitamin E)"],
            optionsAr: ["صوديوم ميتابيسلفيت", "حمض الأسكوربيك", "جلوتاثيون (GSH)", "ألفا-توكوفيرول (فيتامين E)"],
            correct: 3,
            hint: "Vitamin E (**Alpha-Tocopherol**) is a classic oil-soluble antioxidant.",
            hintAr: "فيتامين E (**ألفا-توكوفيرول**) هو مضاد أكسدة شهير ذائب في الدهون والزيوت."
        },
        {
            type: "mcq",
            question: "**Antioxidants protect human biological cells** mainly because they are:",
            questionAr: "تقوم **مضادات الأكسدة بحماية خلايا الجسم الحيوية** أساساً لأنها:",
            options: [
                "Strong oxidizing agents that release chlorine",
                "Mostly reducing agents acting as free radical scavengers",
                "Insoluble metal complexing agents that precipitate DNA",
                "Acidifying buffers that maintain blood at pH 2"
            ],
            optionsAr: [
                "عوامل مؤكسدة قوية تحرر غاز الكلور",
                "عوامل مختزلة غالباً تعمل ككانسات للجذور الحرة",
                "عوامل معقدة غير ذائبة ترسب الحمض النووي",
                "محاليل منظمة حمضية تحافظ على حموضة الدم عند 2"
            ],
            correct: 1,
            hint: "Antioxidants are **mostly reducing agents acting as free radical scavengers**.",
            hintAr: "مضادات الأكسدة هي **عوامل مختزلة غالباً تعمل ككانسات للجذور الحرة (Scavengers)**."
        },
        {
            type: "mcq",
            question: "Which of the following acts as a **germicide by liberating nascent oxygen** in tissues?",
            questionAr: "أي من الآتي يعمل كـ **مطهر عن طريق تحرير الأكسجين النشط** في الأنسجة؟",
            options: ["KMnO4", "H2O2", "TiCl3", "Na2S2O3"],
            optionsAr: ["KMnO4", "H2O2", "TiCl3", "Na2S2O3"],
            correct: 1,
            hint: "**H2O2** acts as a germicide via liberation of nascent oxygen.",
            hintAr: "يعمل **H2O2** كمطهر بفضل تحريره للأكسجين الوليد في الأنسجة."
        },
        {
            type: "mcq",
            question: "**Bactericidal agents like KMnO4 and Cl2** exert their antimicrobial action through:",
            questionAr: "تؤدي **مبيدات البكتيريا مثل KMnO4 و Cl2** دورها المضاد للميكروبات من خلال:",
            options: [
                "Denaturing bacterial proteins by direct oxidation",
                "Precipitating bacterial calcium as insoluble oxalates",
                "Reducing bacterial nucleic acids to hydrogen gas",
                "Preventing moisture entry by a closed system"
            ],
            optionsAr: [
                "إفساد بروتينات البكتيريا بالأكسدة المباشرة",
                "ترسيب كالسيوم البكتيريا كأوكسالات غير ذائبة",
                "اختزال الأحماض النووية للبكتيريا إلى غاز الهيدروجين",
                "منع دخول الرطوبة بنظام مغلق"
            ],
            correct: 0,
            hint: "They act by **denaturing bacterial proteins by direct oxidation**.",
            hintAr: "تقتل البكتيريا عن طريق **إفساد وتشويه بروتيناتها بالأكسدة المباشرة**."
        },
        {
            type: "mcq",
            question: "Which of the following is considered a **reactive oxygen or nitrogen free radical**?",
            questionAr: "أي من الآتي يعتبر من **الجذور الحرة التفاعلية للأكسجين أو النيتروجين**؟",
            options: ["OH•", "SO4²⁻", "Cl⁻", "Na⁺"],
            optionsAr: ["•OH", "SO4²⁻", "Cl⁻", "Na⁺"],
            correct: 0,
            hint: "The hydroxyl radical (**OH•**) is a primary reactive species.",
            hintAr: "جذر الهيدروكسيل الحر (**•OH**) هو أحد أهم الجذور الحرة التفاعلية."
        },
        {
            type: "mcq",
            question: "In the permanganatometric titration of hydrogen peroxide, the **oxidation product of H2O2** is:",
            questionAr: "في المعايرة البرمنجاناتية لبيروكسيد الهيدروجين، يكون **ناتج أكسدة H2O2** هو:",
            options: ["H2O", "O2", "O3", "OH⁻"],
            optionsAr: ["H2O", "O2", "O3", "OH⁻"],
            correct: 1,
            hint: "When H2O2 is oxidized by permanganate, it produces **molecular oxygen (O2)**.",
            hintAr: "عند أكسدة H2O2 بالبرمنجانات فإنه يتحول إلى **غاز الأكسجين (O2)**."
        },
        {
            type: "mcq",
            question: "Cations like **Ba²⁺ and Pb²⁺** are determined indirectly by redox titration using their ability to:",
            questionAr: "يتم تقدير كاتيونات مثل **Ba²⁺ و Pb²⁺** بطريقة غير مباشرة بالمعايرة التأكسدية اعتماداً على قدرتها على:",
            options: [
                "Form insoluble oxalates",
                "Form soluble chloride complexes",
                "Act as strong pre-reductants",
                "Directly reduce thiosulfate ions"
            ],
            optionsAr: [
                "تكوين أوكسالات شحيحة الذوبان",
                "تكوين متراكبات كلوريد ذائبة",
                "العمل كعوامل اختزال تمهيدية قوية",
                "اختزال أيونات الثيوسلفات مباشرة"
            ],
            correct: 0,
            hint: "Like calcium, they are precipitated as **insoluble oxalates**.",
            hintAr: "شأنها شأن الكالسيوم، ترسب في صورة **أوكسالات شحيحة الذوبان** ثم تعاير الأوكسالات."
        }
    ]
});
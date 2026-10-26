DataStore.lectures.push({
    id: 2,
    title: "Lec 2: Factors Affecting Oxidation Potential",

    // =========================================================================
    // 1. ملخص المحاضرة والشرح الوافي (Comprehensive Summary & Exam Rules)
    // =========================================================================
    summary: [
        {
            type: "vip",
            title: "⭐ [EXAM PRIORITY] Professor's Core Blackboard & Slide Rules",
            content: "1. *Anode vs Cathode Rule:* At any Anode, *Solution Pressure (SP) > Ionic Pressure (IP)* (e.g., $Zn \\rightarrow Zn^{2+} + 2e^-$). At any Cathode, *Ionic Pressure (IP) > Solution Pressure (SP)* (e.g., $Cu^{2+} + 2e^- \\rightarrow Cu$).\n2. *Zimmermann's Reagent Trio:* $MnSO_4$ (common ion $Mn^{2+}$ lowers $MnO_4^-$ potential to prevent $Cl^-$ oxidation), $H_3PO_4$ (masks yellow $Fe^{3+}$ as $[Fe(PO_4)_2]^{3-}$ and lowers its potential), $H_2SO_4$ (provides required $H^+$ acidity).\n3. *Titration of FeCl2 with K2Cr2O7:* Needs NO Zimmermann's reagent because $E^\\circ_{Cr_2O_7^{2-}/Cr^{3+}} (1.33\\text{V}) < E^\\circ_{Cl_2/2Cl^-} (1.36\\text{V})$.\n4. *Typical pH Toggle (Arsenate/Arsenite):* In acidic medium ($H^+$), Arsenate oxidizes $I^-$ to $I_2$. In alkaline medium ($NaHCO_3$), $I_2$ oxidizes Arsenite to Arsenate because $NaHCO_3$ neutralizes $H^+$ and drops Arsenate potential.\n5. *Ferri/Ferro Cyanide Trick:* Adding $Zn^{2+}$ precipitates Ferrocyanide as $Zn_2[Fe(CN)_6]\\downarrow$, lowering $[Fe(CN)_6^{4-}]$ and raising system potential so Ferricyanide can oxidize $I^-$ to $I_2$.\n6. *Copper/Iodide Precipitation Trick:* $2Cu^{2+} + 4I^- \\rightarrow Cu_2I_2\\downarrow + I_2$. Insoluble $Cu_2I_2$ ppt drastically lowers $[Cu^+]$, boosting $Cu^{2+}/Cu^+$ potential from +0.16V to *+0.86V*."
        },
        {
            type: "compare",
            title1: "Anode Behavior (Electrode Oxidation)",
            val1: "• *Pressure Ratio:* $\\text{Solution Pressure (SP)} > \\text{Ionic Pressure (IP)}$.\n• *Process:* Metal dissolves into solution forming cations ($M \\rightarrow M^{n+} + ne^-$).\n• *Charge:* Electrode acquires negative charge.\n• *Example:* Zinc electrode in $Zn/Zn^{2+}$ cell ($E^\\circ = -0.76\\text{V}$).",
            title2: "Cathode Behavior (Electrode Reduction)",
            val2: "• *Pressure Ratio:* $\\text{Ionic Pressure (IP)} > \\text{Solution Pressure (SP)}$.\n• *Process:* Solution cations deposit onto metallic rod ($M^{n+} + ne^- \\rightarrow M$).\n• *Charge:* Electrode acquires positive charge.\n• *Example:* Copper electrode in $Cu/Cu^{2+}$ cell ($E^\\circ = +0.34\\text{V}$)."
        },
        {
            type: "steps",
            title: "Factor 1: Common Ion Effect & Zimmermann-Reinhardt Reagent (Slide 2)",
            items: [
                "1. According to Nernst equation: $E = E^\\circ + \\frac{0.0591}{n} \\log \\frac{[\\text{Oxidized}]}{[\\text{Reduced}]}$. The potential depends directly on the ratio of oxidized to reduced species.",
                "2. When titrating $Fe^{2+}$ (as $FeCl_2$) with $KMnO_4$, $KMnO_4$ has $E^\\circ = +1.51\\text{V}$, which is higher than both $Fe^{3+}/Fe^{2+}$ (+0.77V) and $Cl_2/2Cl^-$ (+1.36V).",
                "3. Therefore, $KMnO_4$ oxidizes both $Fe^{2+}$ and $Cl^-$ to toxic $Cl_2$ gas, consuming excess titrant and giving falsely high results.",
                "4. *Role of MnSO4:* Supplies common ion $Mn^{2+}$, increasing the denominator $[Red]$, which lowers the potential of $MnO_4^-/Mn^{2+}$ below 1.36V so it cannot oxidize $Cl^-$.",
                "5. *Role of H3PO4:* Complexes $Fe^{3+}$ into colorless $[Fe(PO_4)_2]^{3-}$, lowering free $[Fe^{3+}]$ (which drops $Fe^{3+}/Fe^{2+}$ potential) and eliminating yellow interference at the pink end-point.",
                "6. *Role of H2SO4:* Provides necessary $H^+$ acidity without introducing interfering halides.",
                "7. *Note on K2Cr2O7:* $K_2Cr_2O_7$ ($E^\\circ = +1.33\\text{V}$) can titrate $FeCl_2$ WITHOUT Zimmermann's reagent because its potential is naturally lower than $Cl_2/2Cl^-$ (+1.36V)."
            ]
        },
        {
            type: "steps",
            title: "Factor 2: Effect of pH on Oxygenated Oxidants (Slide 3 & 4)",
            items: [
                "1. For oxygen-containing oxidizing agents, increasing acidity ($[H^+]$) increases the oxidation potential.",
                "2. *Permanganate System:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O \\Rightarrow E = E^\\circ + \\frac{0.0591}{5} \\log \\frac{[MnO_4^-][H^+]^8}{[Mn^{2+}]}$. High $[H^+]$ drastically elevates potential.",
                "3. *Dichromate System:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O \\Rightarrow E = E^\\circ + \\frac{0.0591}{6} \\log \\frac{[Cr_2O_7^{2-}][H^+]^{14}}{[Cr^{3+}]^2}$.",
                "4. *Typical pH Toggle (Arsenate / Arsenite / Iodine):* $AsO_4^{3-} + 2I^- + 2H^+ \\rightleftharpoons AsO_3^{3-} + I_2 + H_2O$.",
                "5. *In Acidic Medium (H+):* Arsenate acts as an oxidant, converting $I^-$ to $I_2$.",
                "6. *In Alkaline Medium (NaHCO3):* $I_2$ acts as an oxidant, converting Arsenite to Arsenate. $NaHCO_3$ neutralizes $H^+$, lowering Arsenate potential."
            ]
        },
        {
            type: "steps",
            title: "Factor 3: Effect of Complexing Agents (Slide 5 & 6)",
            items: [
                "1. *Raising I2/2I- Potential (using HgCl2):* $I_2 + 2e^- \\rightleftharpoons 2I^-$. Adding $Hg^{2+}$ forms stable $[HgI_4]^{2-}$ complex, removing free $I^-$. By Nernst equation ($E = E^\\circ + \\frac{0.0591}{2} \\log \\frac{[I_2]}{[I^-]^2}$), decreasing $[I^-]$ raises $I_2/2I^-$ potential above 0.77V, allowing $I_2$ to oxidize $Fe^{2+}$.",
                "2. *Lowering Fe3+/Fe2+ Potential (using F- or PO4 3-):* Adding $F^-$ or $PO_4^{3-}$ forms stable $[FeF_6]^{3-}$ or $[Fe(PO_4)_2]^{3-}$ complexes. Decreasing free $[Fe^{3+}]$ drops $Fe^{3+}/Fe^{2+}$ potential from +0.77V below +0.54V. Thus, $Fe^{3+}$ can no longer oxidize $I^-$, and $I_2$ can quantitatively oxidize $Fe^{2+}$."
            ]
        },
        {
            type: "steps",
            title: "Factor 4: Effect of Precipitating Agents (Slide 8 & 9)",
            items: [
                "1. *Ferri/Ferro Cyanide System:* $[Fe(CN)_6]^{3-} + e^- \\rightleftharpoons [Fe(CN)_6]^{4-}$ ($E^\\circ = +0.36\\text{V}$). Standard potential is lower than $I_2/2I^-$ (+0.54V), so Ferricyanide cannot normally oxidize Iodide.",
                "2. *Adding Zn2+:* $Zn^{2+}$ precipitates Ferrocyanide as insoluble zinc ferrocyanide $Zn_2[Fe(CN)_6]\\downarrow$. Removing $[Fe(CN)_6^{4-}]$ drives the potential above +0.54V, enabling Ferricyanide to quantitatively oxidize Iodide to Iodine.",
                "3. *Copper / Iodide System:* $2Cu^{2+} + 4I^- \\rightarrow Cu_2I_2\\downarrow + I_2$. Standard $E^\\circ_{Cu^{2+}/Cu^+} = +0.16\\text{V}$ is much lower than $I_2/2I^-$ (+0.54V).",
                "4. *Precipitation Mechanism:* Formation of insoluble $Cu_2I_2$ precipitate reduces free $[Cu^+]$ to near zero. By Nernst equation ($E = E^\\circ + 0.0591 \\log \\frac{[Cu^{2+}]}{[Cu^+]}$), decreasing $[Cu^+]$ shifts potential to *+0.86V*, allowing $Cu^{2+}$ to oxidize $I^-$.",
                "5. *Reversing the Copper Reaction:* Adding Tartaric acid or Citric acid complexes $Cu^{2+}$, drastically lowering $[Cu^{2+}]$. This drops $Cu^{2+}/Cu^+$ potential below +0.54V, allowing $I_2$ to oxidize Cuprous ($Cu^+$) back to Cupric."
            ]
        }
    ],

    summaryAr: [
        {
            type: "vip",
            title: "⭐ [أهم نقاط الامتحان] ملاحظات وقواعد الدكتور من على السبورة والملف",
            content: "١. *قاعدة الآنود والكاثود:* عند أي آنود يكون *ضغط المحلول (SP) أكبر من الضغط الأيوني (IP)* ($Zn \\rightarrow Zn^{2+} + 2e^-$). وعند أي كاثود يكون *الضغط الأيوني (IP) أكبر من ضغط المحلول (SP)* ($Cu^{2+} + 2e^- \\rightarrow Cu$).\n٢. *ثلاثية كاشف تسيمرمان:* $MnSO_4$ (يوفر أيون مشترك $Mn^{2+}$ يقلل جهد البرمنجانات حتى لا تؤكسد الكلوريد)، $H_3PO_4$ (يحجب أيونات $Fe^{3+}$ الصفراء في صورة متراكب $[Fe(PO_4)_2]^{3-}$ ويقلل جهدها)، $H_2SO_4$ (يوفر الحموضة اللازمة $H^+$).\n٣. *معايرة FeCl2 بالدايكرومات:* لا تحتاج إلى كاشف تسيمرمان لأن جهد الدايكرومات (+1.33V) أقل أساساً من جهد الكلوريد (+1.36V).\n٤. *تأثير pH على الأرسينات والأرسينيت:* في الوسط الحمضي ($H^+$) تسلك الأرسينات كمؤكسد لأكسدة $I^-$ إلى $I_2$. وفي الوسط القاعدي ($NaHCO_3$) يؤكسد اليود الأرسينيت إلى أرسينات لأن بيكربونات الصوديوم تعادل $H^+$ فتهبط بجهد الأرسينات.\n٥. *تريكة الفيريسيانيد والخارصين:* إضافة $Zn^{2+}$ ترسب الفيروسيانيد في صورة $Zn_2[Fe(CN)_6]\\downarrow$ فتخفض تركيز الفيروسيانيد وترفع جهد النظام فيستطيع أكسدة اليوديد.\n٦. *تريكة ترسيب النحاس واليوديد:* $2Cu^{2+} + 4I^- \\rightarrow Cu_2I_2\\downarrow + I_2$. ترسيب راسب $Cu_2I_2$ قليل الذوبان يقلل تركيز $Cu^+$ جداً، فيرفع جهد نظام $Cu^{2+}/Cu^+$ من +0.16V إلى *+0.86V* ليصبح قادراً على أكسدة اليوديد."
        },
        {
            type: "compare",
            title1: "سلوك الآنود (أكسدة القطب)",
            val1: "• *نسبة الضغط:* $\\text{ضغط المحلول (SP)} > \\text{الضغط الأيوني (IP)}$.\n• *العملية:* يذوب الفلز في المحلول مكوّناً كاتيونات ($M \\rightarrow M^{n+} + ne^-$).\n• *الشحنة:* يكتسب القطب شحنة سالبة.\n• *مثال:* قطب الخارصين في خلية $Zn/Zn^{2+}$ ($E^\\circ = -0.76\\text{V}$).",
            title2: "سلوك الكاثود (اختزال القطب)",
            val2: "• *نسبة الضغط:* $\\text{الضغط الأيوني (IP)} > \\text{ضغط المحلول (SP)}$.\n• *العملية:* تترسب كاتيونات المحلول على لوح الفلز ($M^{n+} + ne^- \\rightarrow M$).\n• *الشحنة:* يكتسب القطب شحنة موجبة.\n• *مثال:* قطب النحاس في خلية $Cu/Cu^{2+}$ ($E^\\circ = +0.34\\text{V}$)."
        },
        {
            type: "steps",
            title: "العامل 1: تأثير الأيون المشترك وكاشف تسيمرمان-راينهارت (سلايد 2)",
            items: [
                "١. طبقاً لمعادلة نيرنست: $E = E^\\circ + \\frac{0.0591}{n} \\log \\frac{[\\text{Oxidized}]}{[\\text{Reduced}]}$، يتناسب جهد القطب مع نسبة المادة المؤكسدة إلى المختزلة.",
                "٢. عند معايرة $Fe^{2+}$ (في صورة $FeCl_2$) باستخدام $KMnO_4$، يكون جهد البرمنجانات (+1.51V) أعلى من جهد الحديدوز (+0.77V) والكلوريد (+1.36V).",
                "٣. لذلك تقوم البرمنجانات بأكسدة الكلوريد إلى غاز الكلور السام إلى جانب أكسدة الحديدوز، مما يعطي نتائج أعلى من الحقيقة.",
                "٤. *دور MnSO4:* يوفر أيون المنجنيزوز المشترك $Mn^{2+}$ فيزود المقام $[Red]$، مما يخفض جهد البرمنجانات لأقل من 1.36V ويمنع أكسدة الكلوريد.",
                "٥. *دور H3PO4:* يرتبط بأيونات $Fe^{3+}$ مكوّناً متراكباً عديم اللون $[Fe(PO_4)_2]^{3-}$، فيقلل تركيز $Fe^{3+}$ الحر (مما يخفض جهد $Fe^{3+}/Fe^{2+}$) ويزيل اللون الأصفر.",
                "٦. *دور H2SO4:* يوفر الوسط الحمضي القوي اللازم $H^+$.",
                "٧. *ملاحظة الدايكرومات:* دايكرومات البوتاسيوم ($E^\\circ = +1.33\\text{V}$) تستطيع معايرة $FeCl_2$ بدون كاشف تسيمرمان لأن جهدها أقل طبيعياً من الكلوريد (+1.36V)."
            ]
        },
        {
            type: "steps",
            title: "العامل 2: تأثير أس الهيدروجين (pH) على العوامل المؤكسدة الأكسجينية (سلايد 3 و 4)",
            items: [
                "١. بالنسبة للعوامل المؤكسدة المحتوية على أكسجين، فإن زيادة الحموضة ($[H^+]$) تؤدي لزيادة جهد الأكسدة.",
                "٢. *نظام البرمنجانات:* $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O \\Rightarrow E = E^\\circ + \\frac{0.0591}{5} \\log \\frac{[MnO_4^-][H^+]^8}{[Mn^{2+}]}$.",
                "٣. *نظام الدايكرومات:* $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O \\Rightarrow E = E^\\circ + \\frac{0.0591}{6} \\log \\frac{[Cr_2O_7^{2-}][H^+]^{14}}{[Cr^{3+}]^2}$.",
                "٤. *مثال تأثير pH الشفاف (الأرسينات / الأرسينيت / اليود):* $AsO_4^{3-} + 2I^- + 2H^+ \\rightleftharpoons AsO_3^{3-} + I_2 + H_2O$.",
                "٥. *في الوسط الحمضي (H+):* تسلك الأرسينات كمؤكسد وتؤكسد $I^-$ إلى $I_2$.",
                "٦. *في الوسط القاعدي (NaHCO3):* يسلك $I_2$ كمؤكسد ويؤكسد الأرسينيت إلى أرسينات. تقوم البيكربونات بمعادلة $H^+$ فيقل جهد الأرسينات."
            ]
        },
        {
            type: "steps",
            title: "العامل 3: تأثير العوامل المكونة للمتراكبات (Complexing Agents) (سلايد 5 و 6)",
            items: [
                "١. *رفع جهد نظام I2/2I- (باستخدام HgCl2):* $I_2 + 2e^- \\rightleftharpoons 2I^-$. إضافة $Hg^{2+}$ تكون متراكب $[HgI_4]^{2-}$ ثابت وتلغي أيونات $I^-$ الحرة. حسب نيرنست ($E = E^\\circ + \\frac{0.0591}{2} \\log \\frac{[I_2]}{[I^-]^2}$)، نقص $[I^-]$ يرفع جهد اليود لأعلى من 0.77V، فيستطيع اليود أكسدة $Fe^{2+}$.",
                "٢. *خفض جهد نظام Fe3+/Fe2+ (باستخدام الفلوريد أو الفوسفات):* إضافة $F^-$ أو $PO_4^{3-}$ تكون متراكبات ثابته $[FeF_6]^{3-}$ أو $[Fe(PO_4)_2]^{3-}$. نقص $[Fe^{3+}]$ يهبط بجهد الحديديك من +0.77V إلى ما دون +0.54V. فلا يستطيع الحديديك أكسدة اليوديد، ويستطيع اليود أكسدة الحديدوز تماماً."
            ]
        },
        {
            type: "steps",
            title: "العامل 4: تأثير العوامل المرسبة (Precipitating Agents) (سلايد 8 و 9)",
            items: [
                "1. *نظام الفيريسيانيد / الفيروسيانيد:* $[Fe(CN)_6]^{3-} + e^- \\rightleftharpoons [Fe(CN)_6]^{4-}$ ($E^\\circ = +0.36\\text{V}$). جهده أقل من اليود (+0.54V) فلا يستطيع الفيريسيانيد أكسدة اليوديد في الظروف العادية.",
                "٢. *إضافة أملاح الخارصين (Zn2+):* يرسب الخارصين الفيروسيانيد في صورة $Zn_2[Fe(CN)_6]\\downarrow$ غير ذائب. نقص تركيز المنحنى $[Fe(CN)_6^{4-}]$ يرفع جهد النظام لأعلى من +0.54V، فيستطيع الفيريسيانيد أكسدة اليوديد.",
                "٣. *نظام النحاس واليوديد:* $2Cu^{2+} + 4I^- \\rightarrow Cu_2I_2\\downarrow + I_2$. الجهد القياسي $E^\\circ_{Cu^{2+}/Cu^+} = +0.16\\text{V}$ وهو أقل بكثير من اليود (+0.54V).",
                "٤. *ميكانيكية الترسيب:* تكوّن راسب $Cu_2I_2$ غير الذائب يخفض تركيز $Cu^+$ الحر تماماً. حسب معادلة نيرنست، نقص $[Cu^+]$ يرفع جهد النحاس إلى *+0.86V*، فيستطيع النحاسيك أكسدة اليوديد.",
                "٥. *عكس تفاعل النحاس:* إضافة حمض الطرطريك أو السيتريك ترتبط بالنحاسيك $Cu^{2+}$ وتخفض تركيزه. فيقل جهد النحاس لأقل من +0.54V، ويصبح اليود قادراً على أكسدة النحاسوز $Cu^+$ مرة أخرى."
            ]
        }
    ],

    // =========================================================================
    // 2. أسئلة وإجابات نهاية المحاضرة وعلل بالكامل (PDF Q&A & Give Reasons)
    // =========================================================================
    qna: [
        {
            q: "Why can Ferrous sulfate be assayed by Potassium Dichromate without adding Zimmermann's reagent? (Slide 15, Q1)",
            a: "Detailed Solution:\nBecause the standard reduction potential of Dichromate ($E^\\circ_{Cr_2O_7^{2-}/Cr^{3+}} = +1.33\\text{ V}$) is higher than Ferrous ($E^\\circ = +0.77\\text{ V}$) but LOWER than Chloride ($E^\\circ_{Cl_2/2Cl^-} = +1.36\\text{ V}$). Therefore, Dichromate selectively oxidizes $Fe^{2+}$ without oxidizing ambient $Cl^-$ ions."
        },
        {
            q: "Why can Iodine oxidize Cuprous (Cu+) in the presence of Tartrate or Citrate? (Slide 15, Q2)",
            a: "Detailed Solution:\nTartrate or Citrate ions act as strong complexing agents for Cupric ions ($Cu^{2+}$). By complexing $Cu^{2+}$, the free $[Cu^{2+}]$ concentration is drastically reduced. According to Nernst equation ($E = E^\\circ + 0.0591 \\log \\frac{[Cu^{2+}]}{[Cu^+]}$), decreasing $[Cu^{2+}]$ lowers the redox potential of $Cu^{2+}/Cu^+$ below that of $I_2/2I^-$ (+0.54V), enabling Iodine to oxidize Cuprous ($Cu^+$) back to Cupric."
        },
        {
            q: "Why can Iodine oxidize Arsenite in the presence of Sodium Bicarbonate (NaHCO3)? (Slide 15, Q3)",
            a: "Detailed Solution:\nThe reaction $AsO_4^{3-} + 2I^- + 2H^+ \\rightleftharpoons AsO_3^{3-} + I_2 + H_2O$ produces $H^+$ ions. Sodium bicarbonate ($NaHCO_3$) acts as a buffer that neutralizes generated $H^+$ ions. According to Nernst equation, removing $H^+$ drastically decreases the oxidation potential of the Arsenate/Arsenite system below that of $I_2/2I^-$, allowing Iodine to quantitatively oxidize Arsenite to Arsenate."
        },
        {
            q: "Why should Mercuric salt (HgCl2 / Hg(NO3)2) be added upon determination of Ferrous by Iodine? (Slide 15, Q4)",
            a: "Detailed Solution:\nNormally, $I_2$ ($E^\\circ = +0.54\\text{ V}$) cannot oxidize $Fe^{2+}$ ($E^\\circ = +0.77\\text{ V}$). Adding $Hg^{2+}$ forms an exceptionally stable, low-dissociation complex with Iodide ions ($Hg^{2+} + 4I^- \\rightarrow [HgI_4]^{2-}$). By drastically reducing free $[I^-]$, the denominator in Nernst equation ($E = E^\\circ + \\frac{0.0591}{2} \\log \\frac{[I_2]}{[I^-]^2}$) drops near zero, driving the potential of $I_2/2I^-$ above +0.77V so Iodine can oxidize Ferrous."
        },
        {
            q: "Why does Ferric (Fe3+) normally oxidize Iodide (I-)? (Slide 6, Q1)",
            a: "Detailed Solution:\nBecause the standard electrode potential of $Fe^{3+}/Fe^{2+}$ ($E^\\circ = +0.77\\text{ V}$) is higher than that of $I_2/2I^-$ ($E^\\circ = +0.54\\text{ V}$). Species with higher potential spontaneously oxidize species with lower potential."
        },
        {
            q: "Why can Iodine oxidize Ferrous only in the presence of Fluoride or Phosphoric acid? (Slide 6, Q2)",
            a: "Detailed Solution:\nFluoride ($F^-$) or Phosphoric acid ($H_3PO_4$) forms extremely stable soluble complexes with Ferric ions ($[FeF_6]^{3-}$ or $[Fe(PO_4)_2]^{3-}$). This drastically reduces free $[Fe^{3+}]$ concentration, which by Nernst equation lowers the potential of $Fe^{3+}/Fe^{2+}$ below +0.54V, allowing $I_2$ to oxidize $Fe^{2+}$."
        },
        {
            q: "Why does Cu2+ oxidize I- to I2 even though E°(Cu2+/Cu+) = 0.16V is less than E°(I2/2I-) = 0.54V? (Slide 10 & Slide 14, Q12)",
            a: "Detailed Solution:\nBecause the reaction forms cuprous iodide precipitate ($Cu_2I_2\\downarrow$) which has extremely low solubility. Precipitation removes free $Cu^+$ ions from solution. By Nernst equation ($E = E^\\circ + 0.0591 \\log \\frac{[Cu^{2+}]}{[Cu^+]}$), the near-zero $[Cu^+]$ shifts the effective potential of $Cu^{2+}/Cu^+$ to approximately *+0.86 V*, making Cupric a strong enough oxidant to oxidize Iodide."
        }
    ],

    qnaAr: [
        {
            q: "علل: لماذا يمكن معايرة كبريتات الحديدوز بواسطة دايكرومات البوتاسيوم دون الحاجة لاقتارنها بكاشف تسيمرمان؟ (سلايد 15، س1)",
            a: "الإجابة النموذجية:\nلأن جهد الاختزال القياسي للدايكرومات ($E^\\circ_{Cr_2O_7^{2-}/Cr^{3+}} = +1.33\\text{ V}$) أعلى من جهد الحديدوز (+0.77V) ولكنه أصلًا أقل من جهد أكسدة الكلوريد ($E^\\circ_{Cl_2/2Cl^-} = +1.36\\text{ V}$). بالتالي تؤكسد الدايكرومات أيونات $Fe^{2+}$ اختيارياً دون أن تؤكسد الكلوريد."
        },
        {
            q: "علل: لماذا يستطيع اليود أكسدة النحاسوز (Cu+) في وجود الطرطرات أو السيترات؟ (سلايد 15، س2)",
            a: "الإجابة النموذجية:\nلأن أيونات الطرطرات أو السيترات تعمل كعوامل حجب مكوّنة لمتراكبات ثابته مع أيونات النحاسيك ($Cu^{2+}$)، مما يقلل تركيز $Cu^{2+}$ الحر بشدة. طبقاً لمعادلة نيرنست، نقص $[Cu^{2+}]$ يهبط بجهد نظام $Cu^{2+}/Cu^+$ لما دون جهد اليود (+0.54V)، فيصبح اليود قادراً على أكسدة النحاسوز متحوّلاً إلى نحاسيك."
        },
        {
            q: "علل: لماذا يستطيع اليود أكسدة الأرسينيت في وجود بيكربونات الصوديوم (NaHCO3)؟ (سلايد 15، س3)",
            a: "الإجابة النموذجية:\nلأن التفاعل $AsO_4^{3-} + 2I^- + 2H^+ \\rightleftharpoons AsO_3^{3-} + I_2 + H_2O$ ينتج أيونات $H^+$. تقوم بيكربونات الصوديوم ($NaHCO_3$) بمعادلة أيونات $H^+$ الناتجة. طبقاً لمعادلة نيرنست، نقص $[H^+]$ يخفض جهد أكسدة نظام الأرسينات/الأرسينيت لأقل من جهد اليود (+0.54V)، مما يتيح لليود أكسدة الأرسينيت كمياً إلى أرسينات."
        },
        {
            q: "علل: لماذا يجب إضافة أملاح الزئبق (HgCl2) عند تقدير الحديدوز بواسطة اليود؟ (سلايد 15، س4)",
            a: "الإجابة النموذجية:\nفي الظروف العادية لا يستطيع اليود (+0.54V) أكسدة الحديدوز (+0.77V). إضافة $Hg^{2+}$ ترتبط بأيونات اليوديد مكوّنة متراكباً شديد الثبات ومستقر جداً $[HgI_4]^{2-}$. هذا الهبوط الحاد في تركيز $I^-$ الحر يرفع قيمة اللوجاريتم في معادلة نيرنست، فيقفز جهد نظام $I_2/2I^-$ لأعلى من +0.77V، ويستطيع اليود أكسدة الحديدوز."
        },
        {
            q: "علل: لماذا يؤكسد الحديديك (Fe3+) أيونات اليوديد (I-) في الظروف العادية؟ (سلايد 6، س1)",
            a: "الإجابة النموذجية:\nلأن الجهد القياسي لنظام $Fe^{3+}/Fe^{2+}$ ($E^\\circ = +0.77\\text{ V}$) أعلى من الجهد القياسي لنظام $I_2/2I^-$ ($E^\\circ = +0.54\\text{ V}$). الأنظمة ذات الجهد الأعلى تؤكسد الأنظمة ذات الجهد الأقل تلقائياً."
        },
        {
            q: "علل: لماذا لا يستطيع اليود أكسدة الحديدوز إلا في وجود الفلوريد أو حمض الفوسفوريك؟ (سلايد 6، س2)",
            a: "الإجابة النموذجية:\nلأن الفلوريد ($F^-$) أو حمض الفوسفوريك ($H_3PO_4$) يرتبطان بأيونات الحديديك الناتجة مكوّنين متراكبات ذائبة شديدة الثبات ($[FeF_6]^{3-}$ أو $[Fe(PO_4)_2]^{3-}$). هذا الخفض الحاد في تركيز $Fe^{3+}$ يهبط بجهد نظام $Fe^{3+}/Fe^{2+}$ إلى ما دون +0.54V طبقاً لنيرنست، فيصبح اليود قادراً على أكسدة الحديدوز."
        },
        {
            q: "علل: لماذا يؤكسد النحاسيك Cu2+ أيونات اليوديد I- رغم أن جهد النحاس (0.16V) أقل من جهد اليود (0.54V)؟ (سلايد 10 وسلايد 14، س12)",
            a: "الإجابة النموذجية:\nبسبب تكوّن راسب يوديد النحاسوز ($Cu_2I_2\\downarrow$) شحيح الذوبان جداً. الترسيب يلغي وجود أيونات $Cu^+$ الحرة في المحلول. طبقاً لمعادلة نيرنست ($E = E^\\circ + 0.0591 \\log \\frac{[Cu^{2+}]}{[Cu^+]}$)، فإن هبوط $[Cu^+]$ إلى القرب من الصفر يرفع الجهد الفعلي للنحاس إلى حوالي *+0.86 V*، فيصبح مؤكسداً قادراً على أكسدة اليوديد."
        }
    ],

    // =========================================================================
    // 3. أسئلة الشفوي التفاعلية بالنقاط (Oral Exam Questions - Active Recall)
    // =========================================================================
    oral: [
        {
            q: "Oral Q1: What are the three components of Zimmermann's Reagent and the exact chemical function of each?",
            points: [
                "1. Zimmermann's reagent is composed of: MnSO4 (Manganese sulfate), H3PO4 (Phosphoric acid), and H2SO4 (Sulfuric acid).",
                "2. MnSO4 provides common ion Mn2+, increasing the reduced form concentration and lowering the oxidation potential of MnO4-/Mn2+ below +1.36V so it cannot oxidize Cl-.",
                "3. H3PO4 acts as a complexing agent that masks Fe3+ as colorless [Fe(PO4)2]3-, which lowers Fe3+/Fe2+ potential and eliminates yellow color interference.",
                "4. H2SO4 provides the strong H+ acidity required for the permanganate redox reaction."
            ]
        },
        {
            q: "Oral Q2: Enumerate the 4 main factors affecting oxidation potential and give a specific clinical/analytical example for each.",
            points: [
                "1. Common Ion Effect: Example = MnSO4 in Zimmermann's reagent lowering MnO4-/Mn2+ potential.",
                "2. Effect of pH: Example = High H+ increases KMnO4 & K2Cr2O7 potential; NaHCO3 neutralizes H+ to lower Arsenate potential.",
                "3. Effect of Complexing Agents: Example = HgCl2 complexes I- to raise I2 potential; F- or H3PO4 complexes Fe3+ to lower Fe3+ potential.",
                "4. Effect of Precipitating Agents: Example = Zn2+ precipitates Ferrocyanide to raise Ferri/Ferro potential; Cu2I2 precipitation raises Cu2+/Cu+ potential to +0.86V."
            ]
        },
        {
            q: "Oral Q3: Explain the 'Typical pH Effect' in the Arsenate / Arsenite / Iodine redox system.",
            points: [
                "1. The reversible reaction equation is: AsO4 3- + 2I- + 2H+ <==> AsO3 3- + I2 + H2O.",
                "2. In Acidic Medium (H+ present): High [H+] increases the oxidation potential of Arsenate, making Arsenate the Oxidant that oxidizes I- to I2.",
                "3. In Alkaline Medium (NaHCO3 added): NaHCO3 neutralizes H+ ions, drastically lowering the oxidation potential of Arsenate.",
                "4. Consequently, Iodine (I2) becomes the stronger Oxidant that oxidizes Arsenite (AsO3 3-) to Arsenate."
            ]
        },
        {
            q: "Oral Q4: How can we make I2 oxidize Fe2+ (2 methods), and how can we make I2 oxidize Cuprous (Cu+)?",
            points: [
                "1. To make I2 oxidize Fe2+ (Method 1): Add F- or H3PO4 to complex Fe3+, lowering Fe3+/Fe2+ potential below 0.54V.",
                "2. To make I2 oxidize Fe2+ (Method 2): Add HgCl2 to complex I- as [HgI4]2-, raising I2/2I- potential above 0.77V.",
                "3. To make I2 oxidize Cuprous (Cu+): Add Tartaric acid or Citric acid to complex Cu2+, dropping Cu2+/Cu+ potential below 0.54V."
            ]
        }
    ],

    oralAr: [
        {
            q: "سؤال شفوي ١: اذكر المكونات الثلاثة لكاشف تسيمرمان-راينهارت مع توضيح الدور الكيميائي الدقيق لكل مكون؟",
            points: [
                "١. يتركب كاشف تسيمرمان من: كبريتات المنجنيز (MnSO4)، وحمض الفوسفوريك (H3PO4)، وحمض الكبريتيك (H2SO4).",
                "٢. MnSO4 يوفر أيون المنجنيزوز المشترك Mn2+ فيقلل جهد البرمنجانات لما دون +1.36V ويمنعها من أكسدة الكلوريد.",
                "٣. H3PO4 يعمل كعامل حجب يربط أيونات Fe3+ في صورة متراكب عديم اللون [Fe(PO4)2]3- فتخفّض جهد الحديديك وتزيل اللون الأصفر.",
                "٤. H2SO4 يوفر الوسط الحمضي القوي (H+) المطلوب لتفاعل البرمنجانات."
            ]
        },
        {
            q: "سؤال شفوي ٢: عدد العوامل الأربعة المؤثرة على جهد الأكسدة مع إعطاء مثال تحليلي محدد لكل عامل؟",
            points: [
                "١. تأثير الأيون المشترك (Common Ion): مثل إضافة MnSO4 في كاشف تسيمرمان لخفض جهد البرمنجانات.",
                "٢. تأثير أس الهيدروجين (pH): مثل زيادة الحموضة لرفع جهد KMnO4، أو إضافة NaHCO3 لمعادلة H+ وخفض جهد الأرسينات.",
                "٣. تأثير العوامل المكونة للمتراكبات (Complexing Agents): مثل إضافة HgCl2 لرفع جهد اليود، أو الفلوريد لخفض جهد الحديديك.",
                "٤. تأثير العوامل المرسبة (Precipitating Agents): مثل إضافة الخارصين لترسيب الفيروسيانيد ورفع جهد الفيريسيانيد، أو ترسيب Cu2I2 لرفع جهد النحاس لـ +0.86V."
            ]
        },
        {
            q: "سؤال شفوي ٣: اشرح بالتفصيل سؤال الشفوي الشهير 'تأثير pH النموذجي (Typical pH Effect)' في نظام الأرسينات والأرسينيت واليود؟",
            points: [
                "١. معادلة التفاعل العكسي هي: AsO4 3- + 2I- + 2H+ <==> AsO3 3- + I2 + H2O.",
                "٢. في الوسط الحمضي (وجود H+): زيادة [H+] ترفع جهد الأرسينات فتصبح الأرسينات هي العامل المؤكسد الذي يؤكسد I- إلى I2.",
                "٣. في الوسط القاعدي (إضافة NaHCO3): تعادل البيكربونات أيونات H+ فتهبط بجهد الأرسينات بشدة.",
                "٤. بالتالي يصبح اليود (I2) هو العامل المؤكسد الأقوى الذي يؤكسد الأرسينيت (AsO3 3-) إلى أرسينات."
            ]
        },
        {
            q: "سؤال شفوي ٤: كيف نجعل اليود يؤكسد الحديدوز Fe2+ (طريقتان)، وكيف نجعل اليود يؤكسد النحاسوز Cu+؟",
            points: [
                "١. لجعل اليود يؤكسد الحديدوز (الطريقة الأولى): نضيف الفلوريد أو حمض الفوسفوريك لحجب Fe3+ وخفض جهده لأقل من 0.54V.",
                "٢. لجعل اليود يؤكسد الحديدوز (الطريقة الثانية): نضيف HgCl2 لحجب I- وتكوين [HgI4]2- لرفع جهد اليود لأعلى من 0.77V.",
                "٣. لجعل اليود يؤكسد النحاسوز (Cu+): نضيف حمض الطرطريك أو السيتريك لحجب Cu2+ وخفض جهد النحاس لأقل من 0.54V."
            ]
        }
    ],

    // =========================================================================
    // 5. بنك الأسئلة الشامل (Comprehensive Exam Quiz Bank - 25 Questions)
    // =========================================================================
    quiz: [
        // --- أسئلة نهاية المحاضرة (PDF Slides 12-14 MCQs) ---
        {
            type: "mcq",
            question: "Which of the following is true regarding oxidation and reduction in redox reactions? (PDF Q1)",
            questionAr: "أي العبارات التالية صحيحة فيما يتعلق بالأكسدة والاختزال؟ (سلايد 12، س1)",
            options: [
                "Oxidation is the gain of electrons; reduction is the loss of electrons.",
                "Oxidation is the reaction with hydrogen; reduction is the reaction with oxygen.",
                "Oxidation is the loss of electrons; reduction is the gain of electrons.",
                "Oxidation is the increase in mass; reduction is the decrease in mass."
            ],
            optionsAr: [
                "الأكسدة هي اكتساب إلكترونات والاختزال هو فقد إلكترونات",
                "الأكسدة هي التفاعل مع الهيدروجين والاختزال هو التفاعل مع الأكسجين",
                "الأكسدة هي فقد إلكترونات والاختزال هو اكتساب إلكترونات",
                "الأكسدة هي زيادة الكتلة والاختزال هو نقص الكتلة"
            ],
            correct: 2,
            hint: "Oxidation = Loss of electrons; Reduction = Gain of electrons.",
            hintAr: "الأكسدة هي فقد الإلكترونات بينما الاختزال هو اكتساب الإلكترونات."
        },
        {
            type: "mcq",
            question: "In the reaction between Fe2+ and Cl2, which species is the oxidizing agent? (PDF Q2)",
            questionAr: "في التفاعل بين Fe2+ و Cl2، ما هي المادة التي تسلك كعامل مؤكسد؟ (سلايد 12، س2)",
            options: ["Fe2+", "Fe3+", "Cl2", "Cl-"],
            optionsAr: ["Fe2+", "Fe3+", "Cl2", "Cl-"],
            correct: 2,
            hint: "Cl2 accepts electrons to become Cl-, making it the oxidizing agent.",
            hintAr: "غاز الكلور Cl2 يكتسب إلكترونات ويتحول إلى Cl-، ولذلك فهو العامل المؤكسد."
        },
        {
            type: "mcq",
            question: "What is the equivalent weight of KMnO4 in a redox reaction where it accepts 5 electrons? (PDF Q3)",
            questionAr: "ما هو الوزن المكافئ لـ KMnO4 عندما يكتسب 5 إلكترونات في وسط حمضي؟ (سلايد 12، س3)",
            options: ["Molecular weight * 5", "Molecular weight / 5", "Atomic weight of Mn", "Molarity / 5"],
            optionsAr: ["الوزن الجزيئي * 5", "الوزن الجزيئي / 5", "الوزن الذري للمنجنيز", "المولارية / 5"],
            correct: 1,
            hint: "Equivalent weight = Molecular weight / transferred electrons = M.Wt / 5.",
            hintAr: "الوزن المكافئ = الوزن الجزيئي مقسوماً على عدد الإلكترونات المكتسبة (5)."
        },
        {
            type: "mcq",
            question: "Which of the following antioxidants is oil-soluble? (PDF Q4)",
            questionAr: "أي من مضادات الأكسدة التالية يُعتبر ذائباً في الزيوت (Lipid-soluble)؟ (سلايد 12، س4)",
            options: ["Sodium metabisulphite", "Cysteine hydrochloride", "Propyl gallate", "Sodium sulphite"],
            optionsAr: ["صوديوم ميتابيسلفيت", "سيستايين هيدروكلورايد", "بروبيل جالات (Propyl gallate)", "صوديوم سلفيت"],
            correct: 2,
            hint: "Propyl gallate, BHA, BHT, and Vitamin E are oil-soluble antioxidants.",
            hintAr: "مركب بروبيل جالات و BHA و BHT وفيتامين E هي مضادات أكسدة ذائبة في الدهون والزيوت."
        },
        {
            type: "mcq",
            question: "The Nernst equation relates electrode potential to which of the following? (PDF Q5)",
            questionAr: "تربط معادلة نيرنست بين جهد القطب وأي من العوامل التالية؟ (سلايد 13، س5)",
            options: [
                "Atomic number and pressure",
                "Standard potential, temperature, ion concentration, and number of electrons",
                "Volume of solution and oxidation state",
                "Valence electrons and density"
            ],
            optionsAr: [
                "العدد الذري والضغط",
                "الجهد القياسي، درجة الحرارة، تركيز الأيونات، وعدد الإلكترونات",
                "حجم المحلول وحالة التأكسد",
                "إلكترونات التكافؤ والكثافة"
            ],
            correct: 1,
            hint: "E = E° + (RT/nF) ln([Ox]/[Red]).",
            hintAr: "معادلة نيرنست تربط الجهد بالجهد القياسي ودرجة الحرارة والتركيز وعدد الإلكترونات."
        },
        {
            type: "mcq",
            question: "What is the effect of pH on the oxidation potential of the MnO4- / Mn2+ system? (PDF Q6)",
            questionAr: "ما هو تأثير pH على جهد أكسدة نظام البرمنجانات MnO4- / Mn2+؟ (سلايد 13، س6)",
            options: [
                "Increases with increasing pH",
                "Decreases with increasing acidity",
                "Increases with increasing acidity",
                "No effect"
            ],
            optionsAr: [
                "يزداد بزيادة الـ pH (زيادة القاعدية)",
                "يقل بزيادة الحموضة",
                "يزداد بزيادة الحموضة (زيادة [H+])",
                "ليس له أي تأثير"
            ],
            correct: 2,
            hint: "Since H+ is a reactant, increasing acidity ([H+]) increases oxidation potential.",
            hintAr: "بما أن H+ مادة متفاعلة، فإن زيادة الحموضة ترفع جهد الأكسدة."
        },
        {
            type: "mcq",
            question: "Why is phosphoric acid used in Zimmermann's reagent during redox titration? (PDF Q7)",
            questionAr: "لماذا يُستخدم حمض الفوسفوريك في كاشف تسيمرمان أثناء المعايرة؟ (سلايد 13، س7)",
            options: [
                "To increase oxidation potential of MnO4-",
                "To complex Fe3+ and lower its oxidation potential",
                "To raise the pH",
                "To increase solubility of Fe2+"
            ],
            optionsAr: [
                "لزيادة جهد أكسدة البرمنجانات",
                "لحجب Fe3+ وتكوين متراكب يقلل جهد أكسدته ويزيل اللون الأصفر",
                "لرفع أس الهيدروجين pH",
                "لزيادة ذوبانية أيونات Fe2+"
            ],
            correct: 1,
            hint: "H3PO4 complexes Fe3+ into [Fe(PO4)2]3-, lowering its potential and eliminating yellow color.",
            hintAr: "يرتبط حمض الفوسفوريك بالحديديك مكوّناً متراكب [Fe(PO4)2]3- فيقلل جهده ويزيل اللون الأصفر."
        },
        {
            type: "mcq",
            question: "Which of the following best describes the endpoint in a redox titration using potassium permanganate? (PDF Q8)",
            questionAr: "أي الاختيارات التالية يصف نقطة النهاية عند المعايرة بالبرمنجانات بشكل صحيح؟ (سلايد 14، س8)",
            options: [
                "Appearance of a persistent yellow color",
                "Disappearance of blue color",
                "Appearance of a faint pink color",
                "Bubbling of hydrogen gas"
            ],
            optionsAr: [
                "ظهور لون أصفر ثابت",
                "اختفاء اللون الأزرق",
                "ظهور لون وردي خفيف ثابت (Faint pink color)",
                "تصاعد فقاعات غاز الهيدروجين"
            ],
            correct: 2,
            hint: "KMnO4 acts as a self-indicator; the first excess drop gives a persistent faint pink color.",
            hintAr: "البرمنجانات دليل ذاتي، وأول قطرة زائدة تعطي لوناً وردياً خفيفاً ثابتاً."
        },
        {
            type: "mcq",
            question: "In a galvanic cell with Zn | Zn2+ and Cu2+ | Cu, the electron flow is: (PDF Q9)",
            questionAr: "في الخلية الجلفانية Zn | Zn2+ || Cu2+ | Cu، سريان الإلكترونات يكون: (سلايد 14، س9)",
            options: [
                "From Cu to Zn",
                "From Zn to Cu",
                "From Cu2+ to Zn2+",
                "From salt bridge to electrodes"
            ],
            optionsAr: [
                "من قطب النحاس إلى الخارصين",
                "من قطب الخارصين (الآنود) إلى قطب النحاس (الكاثود)",
                "من أيونات Cu2+ إلى Zn2+",
                "من القنطرة الملحية إلى الأقطاب"
            ],
            correct: 1,
            hint: "Electrons flow spontaneously from Anode (Zn) to Cathode (Cu).",
            hintAr: "تتسرب الإلكترونات تلقائياً من الآنود (الخارصين) إلى الكاثود (النحاس)."
        },
        {
            type: "mcq",
            question: "Which of the following species has the highest standard electrode potential (E°)? (PDF Q10)",
            questionAr: "أي الأنظمة التالية يمتلك أعلى جهد قطب قياسي (E°)؟ (سلايد 14، س10)",
            options: ["Fe3+ / Fe2+", "Ag+ / Ag", "Cu2+ / Cu", "Zn2+ / Zn"],
            optionsAr: ["Fe3+ / Fe2+ (+0.77V)", "Ag+ / Ag (+0.80V)", "Cu2+ / Cu (+0.34V)", "Zn2+ / Zn (-0.76V)"],
            correct: 1,
            hint: "Ag+/Ag has E° = +0.80 V, higher than Fe3+/Fe2+ (+0.77V), Cu2+/Cu (+0.34V), and Zn2+/Zn (-0.76V).",
            hintAr: "نظام الفضة Ag+/Ag جهده +0.80V وهو الأعلى بين الاختيارات المتاحة."
        },
        {
            type: "mcq",
            question: "What is the primary function of the salt bridge in an electrochemical cell? (PDF Q11)",
            questionAr: "ما هي الوظيفة الأساسية للقنطرة الملحية في الخلية الكهروكيميائية؟ (سلايد 14، س11)",
            options: [
                "To produce electrons",
                "To prevent gas evolution",
                "To maintain electrical neutrality in half-cells",
                "To reduce hydrogen ions"
            ],
            optionsAr: [
                "إنتاج الإلكترونات",
                "منع تصاعد الغازات",
                "الحفاظ على التعادل الكهربائي بين نصفي الخلية (Maintain electrical neutrality)",
                "اختزال أيونات الهيدروجين"
            ],
            correct: 2,
            hint: "Salt bridge allows ion migration to maintain electrical neutrality.",
            hintAr: "تسمح القنطرة الملحية بهجرة الأيونات للحفاظ على التعادل الكهربائي."
        },
        {
            type: "mcq",
            question: "Why does Cu2+ oxidize I- to I2 even though E°(Cu2+/Cu+) is less than E°(I2/2I-)? (PDF Q12)",
            questionAr: "لماذا يؤكسد النحاسيك Cu2+ أيونات اليوديد رغم أن جهد النحاس أقل من جهد اليود؟ (سلايد 14، س12)",
            options: [
                "Due to hydrogen gas formation",
                "Because Cu+ is highly unstable in water",
                "Because of precipitation of Cu2I2",
                "Because iodine forms a stable complex with Cu2+"
            ],
            optionsAr: [
                "بسبب تصاعد غاز الهيدروجين",
                "لأن أيون Cu+ غير مستقر للغاية في الماء",
                "بسبب ترسيب يوديد النحاسوز Cu2I2 قليل الذوبان",
                "لأن اليود يكوّن متراكباً ثابتاً مع Cu2+"
            ],
            correct: 2,
            hint: "Precipitation of Cu2I2 drops [Cu+] near zero, shifting potential to +0.86 V.",
            hintAr: "ترسيب Cu2I2 يلغي وجود Cu+ الحر ويرفع جهد النحاس إلى +0.86V."
        },

        // --- أسئلة ملاحظات السبورة والتريكات الخاصة بالدكتور (Blackboard MCQs) ---
        {
            type: "mcq",
            question: "At any Anode electrode, which relationship between Solution Pressure (SP) and Ionic Pressure (IP) is strictly true?",
            questionAr: "عند أي قطب يسلك كـ أنود (Anode)، أي العلاقات التالية بين ضغط المحلول (SP) والضغط الأيوني (IP) تعتبر صحيحة تماماً؟ (سؤال سبورة)",
            options: ["SP = IP", "Solution Pressure > Ionic Pressure", "Ionic Pressure > Solution Pressure", "SP = 0"],
            optionsAr: ["SP = IP", "ضغط المحلول أكبر من الضغط الأيوني (SP > IP)", "الضغط الأيوني أكبر من ضغط المحلول (IP > SP)", "ضغط المحلول يساوي صفر"],
            correct: 1,
            hint: "Anodes dissolve metal into cations, meaning Solution Pressure > Ionic Pressure.",
            hintAr: "عند الآنود يذوب الفلز، وهذا يعني أن ضغط المحلول أكبر من الضغط الأيوني."
        },
        {
            type: "mcq",
            question: "What happens to the oxidation potential of Ferri/Ferrocyanide system when Zn2+ ions are added?",
            questionAr: "ماذا يحدث لجهد الأكسدة لنظام الفيريسيانيد/الفيروسيانيد عند إضافة أيونات الخارصين Zn2+؟ (سؤال كويز قديم)",
            options: [
                "Decreases because Zn2+ oxidizes Ferricyanide",
                "Increases because Zn2+ precipitates Ferrocyanide as Zn2[Fe(CN)6]",
                "Remains unchanged at +0.36 V",
                "Drops to negative values"
            ],
            optionsAr: [
                "يقل لأن الخارصين يؤكسد الفيريسيانيد",
                "يزداد لأن الخارصين يرسب الفيروسيانيد في صورة Zn2[Fe(CN)6]",
                "يبقى ثابتاً دون تغيير عند +0.36V",
                "يهبط إلى قيم سالبة"
            ],
            correct: 1,
            hint: "Precipitating Ferrocyanide drops denominator [Red], driving potential up so it can oxidize I-.",
            hintAr: "ترسيب الفيروسيانيد يقلل تركيز الشق المختزل فيرفع الجهد لأعلى من +0.54V."
        },
        {
            type: "mcq",
            question: "To reverse the reaction 2Cu2+ + 4I- -> Cu2I2 + I2 so that I2 oxidizes Cuprous back to Cu2+, one should add:",
            questionAr: "لعكس تفاعل النحاس واليوديد بحيث يستطيع اليود أكسدة النحاسوز إلى نحاسيك، يجب إضافة:",
            options: ["Mercuric chloride (HgCl2)", "Tartaric acid or Citric acid", "Potassium permanganate", "Sulfuric acid"],
            optionsAr: ["كلوريد الزئبق (HgCl2)", "حمض الطرطريك أو حمض السيتريك (Tartaric / Citric acid)", "برمنجانات البوتاسيوم", "حمض الكبريتيك"],
            correct: 1,
            hint: "Tartrate/Citrate complexes Cu2+, lowering Cu2+/Cu+ potential below +0.54V.",
            hintAr: "حمض الطرطريك أو السيتريك يرتبط بالنحاسيك فيقلل جهده لأقل من +0.54V."
        },
        {
            type: "mcq",
            question: "In the Arsenate/Arsenite system, adding NaHCO3 drives the reaction to favor:",
            questionAr: "في نظام الأرسينات/الأرسينيت، إضافة بيكربونات الصوديوم NaHCO3 تجعل التفاعل يسير في اتجاه:",
            options: [
                "Oxidation of Iodide to Iodine by Arsenate",
                "Oxidation of Arsenite to Arsenate by Iodine",
                "Precipitation of Arsenic metal",
                "Evolution of Hydrogen gas"
            ],
            optionsAr: [
                "أكسدة اليوديد إلى يود بواسطة الأرسينات",
                "أكسدة الأرسينيت إلى أرسينات بواسطة اليود",
                "ترسيب فلز الزرنيخ",
                "تصاعد غاز الهيدروجين"
            ],
            correct: 1,
            hint: "NaHCO3 neutralizes H+, lowering Arsenate potential so I2 oxidizes Arsenite.",
            hintAr: "البيكربونات تعادل H+ فتهبط بجهد الأرسينات، فيؤكسد اليودُ الأرسينيتَ."
        },

        // --- أسئلة الصح والخطأ (True or False) ---
        {
            type: "tf",
            question: "Potassium dichromate requires the addition of Zimmermann's reagent when titrating FeCl2 to prevent Chloride oxidation.",
            questionAr: "تحتاج دايكرومات البوتاسيوم إلى إضافة كاشف تسيمرمان عند معايرة FeCl2 لمنع أكسدة أيونات الكلوريد.",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 1,
            hint: "False. K2Cr2O7 potential (+1.33V) is already lower than Cl2/2Cl- (+1.36V), so no reagent is needed.",
            hintAr: "خطأ. جهد الدايكرومات (+1.33V) أقل طبيعياً من الكلوريد (+1.36V) فلا تحتاج لكاشف تسيمرمان."
        },
        {
            type: "tf",
            question: "At any Cathode electrode in an electrochemical cell, Ionic Pressure (IP) exceeds Solution Pressure (SP).",
            questionAr: "عند أي قطب كاثود في الخلية الكهروكيميائية، يكون الضغط الأيوني (IP) أكبر من ضغط المحلول (SP).",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 0,
            hint: "True. Cathode deposition means Ionic Pressure > Solution Pressure.",
            hintAr: "صح. عند الكاثود تترسب الأيونات من المحلول مما يعني أن الضغط الأيوني أكبر."
        },
        {
            type: "tf",
            question: "Adding HgCl2 to a solution containing I- lowers the redox potential of the I2/2I- system.",
            questionAr: "إضافة HgCl2 إلى محلول يحتوي على أيونات اليوديد I- تؤدي إلى خفض جهد الأكسدة لنظام اليود I2/2I-.",
            options: ["True", "False"],
            optionsAr: ["صح", "خطأ"],
            correct: 1,
            hint: "False. HgCl2 complexes I-, decreasing [I-] in the denominator and INCREASING the potential.",
            hintAr: "خطأ. إضافة HgCl2 تحجب أيونات I- وتخفض تركيزها في المقام مما يرفع جهد اليود."
        },

        // --- أسئلة المصطلحات والتعليلات المقالية (Scientific Term & Written Give Reasons) ---
// --- تصحيح الأسئلة المقالية (حل الخطأ القاتل) ---
        {
            type: "written",
            question: "Scientific Term: The reagent composed of MnSO4, H3PO4, and H2SO4 used to prevent chloride oxidation during permanganate titrations.",
            questionAr: "المصطلح العلمي (Scientific Term): الكاشف المكون من كبريتات المنجنيز، وحمض الفوسفوريك، وحمض الكبريتيك والمستخدم لمنع أكسدة الكلوريد أثناء المعايرة بالبرمنجانات.",
            answer: "Zimmermann-Reinhardt Reagent",
            answerAr: "كاشف تسيمرمان-راينهارت (Zimmermann's Reagent)",
            hint: "Named after Zimmermann and Reinhardt.",
            hintAr: "سمي باسم العالمين تسيمرمان وراينهارت."
        },
        {
            type: "written",
            question: "Scientific Term: The tendency of a solid metal to dissolve into an aqueous solution forming metal cations.",
            questionAr: "المصطلح العلمي (Scientific Term): ميل الفلز الصلب للذوبان في المحلول المائي متحوّلاً إلى كاتيونات فلزية.",
            answer: "Solution Pressure (SP)",
            answerAr: "ضغط المحلول (Solution Pressure)",
            hint: "Opposite of Ionic Pressure; high in anodes like Zinc.",
            hintAr: "عكس الضغط الأيوني، ويكون عالياً في الآنود مثل الخارصين."
        },
        {
            type: "written",
            question: "Write the chemical reaction formula showing how Cu2+ oxidizes I- despite its lower standard potential.",
            questionAr: "اكتب معادلة التفاعل الكيميائي الموزونة التي توضح كيف تؤكسد أيونات Cu2+ أيونات I- رغم انخفاض جهد النحاس القياسي.",
            answer: "2Cu2+ + 4I- -> Cu2I2(ppt) + I2",
            answerAr: "2Cu2+ + 4I- -> Cu2I2(ppt) + I2",
            hint: "2 Cu2+ reacts with 4 I- to give cuprous iodide precipitate Cu2I2 and I2.",
            hintAr: "2 أيون نحاسيك مع 4 أيونات يوديد يعطي راسب يوديد النحاسوز Cu2I2 وغاز اليود I2."
        }
    ]
});

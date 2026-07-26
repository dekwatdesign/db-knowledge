# `drug_monograph`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| generic_name | varchar(150) | YES | MUL | NULL |  |  |
| brand_name | varchar(150) | YES |  | NULL |  |  |
| manufacturer | varchar(150) | YES |  | NULL |  |  |
| distributor | varchar(150) | YES |  | NULL |  |  |
| dosage_form | varchar(150) | YES |  | NULL |  |  |
| strength | varchar(150) | YES |  | NULL |  |  |
| classification | varchar(150) | YES |  | NULL |  |  |
| similar_drug | text | YES |  | NULL |  |  |
| summary_formulary_recommendation | longtext | YES |  | NULL |  |  |
| approved_indication | text | YES |  | NULL |  |  |
| pharmacology | longtext | YES |  | NULL |  |  |
| clinical_efficacy | longtext | YES |  | NULL |  |  |
| pharmacokinetics | longtext | YES |  | NULL |  |  |
| precaution | longtext | YES |  | NULL |  |  |
| contraindication | longtext | YES |  | NULL |  |  |
| adverse_drug_reaction | longtext | YES |  | NULL |  |  |
| dosage_and_administration | longtext | YES |  | NULL |  |  |
| cost_comparision | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_generic_name | generic_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "1000015",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil\\fcharset0 MS Sans Serif;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\'bc\\'d9\\'e9\\'e3\\'cb\\'ad\\'e8\\par\r\n\\lang1033\\f1\\par\r\n\\lang1054\\f0 1\\lang1033\\f1 . bipolar disorder\\lang1054\\f0  15\\lang1033 mg/day max. 30 mg/day\\f1\\par\r\n\\lang1054\\f0 2\\lang1033\\f1 . major depressive disorder 2-\\lang1054\\f0 10\\lang1033\\f1  mg oncedaly \\f0 mg/day \\lang1054 (\\lang1033 adjustive \\lang1054\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba\\lang1033  antidepressant\\lang1054 )\\lang1033\\f1\\par\r\n\\lang1054\\f0 3\\lang1033\\f1 .schizophrenia 10-15 \\f0 mg/day max. 30 mg/day \\par\r\n\\par\r\n\\lang1054\\'e0\\'b4\\'e7\\'a1\\par\r\n\\lang1033\\f1 1.autistic disorder\\lang1054\\f0  10-15 \\lang1033 mg/day \\f1\\par\r\n2. bipolar disorder 10 \\f0 mg/day max.30 mg/day\\f1\\par\r\n3.schizophrenia 10 \\f0 mg/day max.30 mg/day\\par\r\n\\par\r\n**\\lang1054  \\'e4\\'c1\\'e8\\'b5\\'e9\\'cd\\'a7\\'bb\\'c3\\'d1\\'ba\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'e3\\'b9\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba \\'e4\\'b5\\par\r\n\\lang1033\\f1 **pregnancy category: C\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1.autistic disorder\\par\r\n2. bipolar disorder\\par\r\n3. major depressive disorder\\par\r\n4.schizophrenia \\lang1054\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 - 5-HT2A receptor antagonist\\par\r\n- partial dopamin receptor agonist\\par\r\n- 5-HT1A receptor agonist\\par\r\n\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 bioavailabillty= 87%\\par\r\nhalf- life= 48-68 \\lang1054\\f1\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\par\r\n\\lang1033 major metabolic pathway \\lang1054  \\lang1033 CYP \\lang1054 3\\lang1033 A4, 2D6\\par\r\nActive metabolite : Dehydroaripipazole\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 . \\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8 \\par\r\n2. \\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'a6\\'e8\\'d2\\'b5\\'d1\\'c7\\'b5\\'d2\\'c2\\par\r\n3. \\'c1\\'d5\\'bb\\'c3\\'d0\\'c7\\'d1\\'b5\\'d4\\'e0\\'c1\\'e7\\'b4\\'e0\\'c5\\'d7\\'cd\\'b4\\'a2\\'d2\\'c7\\'b5\\'e8\\'d3\\'a1\\'c7\\'e8\\'d2\\'bb\\'a1\\'b5\\'d4 \\par\r\n4. \\lang1033 cardiovascular disease \\lang1054\\'a8\\'d0\\'e0\\'be\\'d4\\'e8\\'c1\\'a4\\'c7\\'d2\\'c1\\'e0\\'ca\\'d5\\'e8\\'c2\\'a7\\'e3\\'b9\\'a1\\'d2\\'c3\\'e0\\'a1\\'d4\\'b4 \\lang1033 orthostatic hypotention\\par\r\n5. cerebovascular disease \\lang1054\\'a8\\'d0\\'e0\\'be\\'d4\\'e8\\'c1\\'a4\\'c7\\'d2\\'c1\\'e0\\'ca\\'d5\\'e8\\'c2\\'a7\\'e3\\'b9\\'a1\\'d2\\'c3\\'e0\\'a1\\'d4\\'b4 \\lang1033 orthostatic hypotention\\par\r\n6. metabolic syndrome\\par\r\n7.NMS\\par\r\n8. Seizure\\par\r\n9. weight gain\\lang1054\\par\r\n\\f2\\par\r\n\\par\r\n\\lang1033\\f1 pregnantcy cat. C\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'e1\\'c5\\'d0\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'cd\\'d7\\'e8\\'b9\\'e6\\'e3\\'b9\\'b5\\'d3\\'c3\\'d1\\'ba\\f1\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. sedation\\par\r\n2. EPS\\par\r\n3. weigth gain\\par\r\n\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000038",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\'bc\\'d9\\'e9\\'e3\\'cb\\'ad\\'e8\\par\r\n1. \\lang1033 bipolar disorder 25 mg bid-tid \\par\r\n2. nausea and vomiting 10-25 mg q4-6 hr prn\\par\r\n3.schizophenia 10-25 mg tid max. 400 mg/day\\par\r\n\\par\r\n\\lang1054\\'e0\\'b4\\'e7\\'a1\\par\r\n\\lang1033 1. schizophenia 0.5-1 mg/kg/dse q 4-6 hr\\par\r\n2. nausea and vomiting 0.5-1 mg/kg/dse q 4-6 hr\\par\r\n\\par\r\n** \\lang1054\\'a4\\'c7\\'c3\\'bb\\'c3\\'d1\\'ba\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'e3\\'b9\\'a4\\'b9\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba\\par\r\n\\lang1033 **pregnancy categy: C\\par\r\n\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 .\\lang1033 bipolar disorder\\par\r\n\\pard 2.  nausea and vomiting\\par\r\n\\pard 3.schizophenia \\lang1054\\f2\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 -weak anticholinergic\\par\r\n-strong antiadrenergic\\par\r\n-antihistamine\\par\r\n-antiserotonin\\par\r\n\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 bioavailility: 32%\\par\r\nprotein binding: 90-99%\\par\r\nmetabolism \\lang1054\\f1\\'bc\\'e8\\'d2\\'b9\\'b5\\'d1\\'ba\\'e0\\'bb\\'e7\\'b9\\'cb\\'c5\\'d1\\'a1\\par\r\n\\'a2\\'d1\\'ba\\'cd\\'cd\\'a1\\'b7\\'d2\\'a7\\'bb\\'d1\\'ca\\'ca\\'d2\\'c7\\'d0 23\\lang1033 % \\par\r\nt1/2 : 6 \\lang1054\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\par\r\n\\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1.\\lang1054\\f1\\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8\\par\r\n2\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8.\\'c1\\'d5\\'e0\\'c1\\'e7\\'b4\\'e0\\'c5\\'d7\\'cd\\'b4\\'a2\\'d2\\'c7\\'b5\\'e8\\'d3\\'a1\\'c7\\'e8\\'d2\\'bb\\'a1\\'b5\\'d4\\par\r\n3. \\lang1033 bone marrow depressant\\par\r\n4. cardiovascular disease\\par\r\n5.\\lang1054\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba\\par\r\n6.\\lang1033 hepatic encephalopathy\\par\r\n7.NMS\\par\r\n8.\\lang1054\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'e4\\'b5\\par\r\n9.\\lang1033 seizure disorder\\par\r\n10. tardive dyskinesia\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1. \\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'e1\\'c5\\'d0\\'e1\\'be\\'e9\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'cd\\'d7\\'e8\\'b9\\'e6\\'e3\\'b9\\'b5\\'d3\\'c3\\'d1\\'ba\\par\r\n2. \\'a1\\'d2\\'c3\\'e3\\'aa\\'e9\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba \\lang1033 CNS depression \\lang1054\\'e3\\'b9\\'a2\\'b9\\'d2\\'b4\\'ca\\'d9\\'a7\\f1\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 . \\lang1033 orthostatic hypotention\\par\r\n2.EPS\\par\r\n3.prolong QT interval\\par\r\n4.photosensitivity\\par\r\n5.aganulocytosis\\par\r\n6.aplastic anemia\\par\r\n7.leucopenia\\par\r\n8.NMS\\par\r\n9.seizure\\par\r\n10. sedation\\par\r\n11. hyperprolactinemia\\par\r\n\\par\r\n\\par\r\n\\par\r\n\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000048",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 Schizophenia\\par\r\n\\lang1054\\f1    \\lang1033 target 300-450 mg/day\\par\r\n\\par\r\n\\f0 **pregnancy category: B\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 Schizophenia\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 -\\lang1054\\f1\\'c2\\'d1\\'ba\\'c2\\'d1\\'e9\\'a7 \\lang1033 dopamin, serotonin, alpha adrenergic, histamine, cholinergic receptor\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 Bioavalibility: 50-60%\\par\r\n\\lang1054\\f1\\'bc\\'e8\\'d2\\'b9 \\lang1033 2D6, 1A2\\par\r\nt1/2: 4-66 \\lang1054\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\f1\\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8\\par\r\n-\\lang1033 sedation\\par\r\n-seizure\\par\r\n-NMS\\par\r\n-EPS\\par\r\n-cardiovascular disesa\\par\r\n-\\lang1054\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba \\'e2\\'c3\\'a4\\'e4\\'b5\\lang1033\\par\r\n\\lang1054\\f0 -\\f1\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'ca\\'d9\\'ba\\'ba\\'d8\\'cb\\'c3\\'d5\\'e8\\'a8\\'d0\\'b7\\'d3\\'e3\\'cb\\'e9\\'a1\\'d2\\'c3\\'a1\\'d3\\'a8\\'d1\\'b4\\'c2\\'d2\\'b5\\'e8\\'d3\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'cb\\'c3\\'d7\\'cd\\'e1\\'be\\'e9\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'a2\\'cd\\'a7\\'c2\\'d2\\'b9\\'d5\\'e9\\par\r\n-\\'e0\\'a4\\'c2\\'e3\\'aa\\'e9 \\lang1033 Clozapine \\lang1054\\'e1\\'c5\\'e9\\'c7\\'e0\\'a1\\'d4\\'b4 \\lang1033 aganulocytosis\\par\r\n-\\lang1054\\'e2\\'c3\\'a4\\'c5\\'c1\\'aa\\'d1\\'a1\\'e1\\'ba\\'ba\\'a4\\'d8\\'c1\\'cd\\'d2\\'a1\\'d2\\'c3\\'e4\\'c1\\'e8\\'e4\\'b4\\'e9\\par\r\n-\\lang1033 Severe central nervous symtem  depression\\par\r\n-\\lang1054\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'c1\\'d5\\'a4\\'c7\\'d2\\'c1\\'e0\\'ca\\'d5\\'e8\\'c2\\'a7\\'e3\\'b9\\'a1\\'d2\\'c3\\'e0\\'a1\\'d4\\'b4\\lang1033  aganulocytosis \\lang1054\\'cb\\'c3\\'d7\\'cd\\'e3\\'aa\\'e9\\'c2\\'d2\\'b7\\'d5\\'e8\\'a1\\'b4\\'e4\\'a2\\'a1\\'c3\\'d0\\'b4\\'d9\\'a1\\f1\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 . \\lang1033 hypotention\\par\r\n2. tachycardia\\par\r\n3. weight gain\\par\r\n4.salavation\\par\r\n5.dizziness\\par\r\n6.Somnolence\\par\r\n7.DM\\par\r\n8.QT prolongation\\par\r\n9.aganulocytosis\\par\r\n10.NMS\\par\r\n11.seizure\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000070",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 bipolar\\lang1054\\par\r\n\\'e0\\'b4\\'e7\\'a1 \\'cd\\'d2\\'c2\\'d8\\'c1\\'d2\\'a1\\'c7\\'e8\\'d2 10 \\'bb\\'d5\\lang1033  \\lang1054\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'b7\\'d5\\'e8\\'e3\\'aa\\'e9\\'a4\\'c7\\'c3\\'cd\\'c2\\'d9\\'e8\\'e3\\'b9\\'aa\\'e8\\'c7\\'a7400-600 \\lang1033 mg/day\\par\r\n\\lang1054\\'bc\\'d9\\'e9\\'e3\\'cb\\'ad\\'e8 \\lang1033 target 300 mg/day\\par\r\nSchizophenia\\par\r\n  \\lang1054\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'a4\\'c7\\'c3\\'cd\\'c2\\'d8\\'e8\\'e3\\'b9\\'aa\\'e8\\'c7\\'a7 300-800\\lang1033  mg/day\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 -Schizophenia\\par\r\n-bipolar disorder\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": null,
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 bioavailibility 9%\\par\r\n\\lang1054\\f1\\'bc\\'e8\\'d2\\'b9 \\lang1033 CYP3A4\\par\r\nexcretion: Fecal20%, renal 73%\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 . \\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8\\par\r\n2.\\'cd\\'d2\\'a8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 agranulocytosis,leukopenia, neutopenia\\par\r\n3.\\lang1054\\'cd\\'d2\\'a8\\'e0\\'bb\\'e7\\'b9\\'ca\\'d2\\'e0\\'cb\\'b5\\'d8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 sedation\\par\r\n\\lang1054\\f0 4\\f1 .\\'cd\\'d2\\'a8\\'b7\\'d3\\'e3\\'cb\\'e9\\'ca\\'d5\\'a2\\'cd\\'a7\\'e0\\'c5\\'b9\\'ca\\'ec\\'b5\\'d2\\'e0\\'bb\\'c5\\'d5\\'e8\\'c2\\'b9\\par\r\n5. \\'cd\\'d2\\'a8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 EPS\\par\r\n6. \\lang1054\\'cd\\'d2\\'a8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 NMS\\par\r\n7.\\lang1054\\'a4\\'c7\\'c3\\'e3\\'aa\\'e9\\'cd\\'c2\\'e8\\'d2\\'a7\\'c3\\'d0\\'c1\\'d1\\'b4\\'c3\\'d0\\'c7\\'d1\\'a7\\'e3\\'b9\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'c5\\'c1\\'aa\\'d1\\'a1\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d8\\'e9\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'cd\\'d7\\'e8\\'b9\\'e6\\'e3\\'b9\\'b5\\'d3\\'c3\\'d1\\'ba\\f1\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1.orthostatic hypotention\\par\r\n2.tachycardia\\par\r\n3.serum cholestero raised\\par\r\n4.serum triglyceride raised\\par\r\n5.weight gain\\par\r\n6.Incerased l8ver enzymes\\par\r\n7.EPS\\par\r\n8.Seizure\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000072",
    "generic_name": "fluoxetine",
    "brand_name": "FULOX",
    "manufacturer": "บริษัท สหแพทย์เภสัช จำกัด",
    "distributor": "บริษัท ฟาร์มีน่า จำกัด",
    "dosage_form": "ยาเม็ด",
    "strength": "20 มิลลิกรัม",
    "classification": "Antidepressant",
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\f1  \\'e3\\'b9\\'bc\\'d9\\'e9\\'e3\\'cb\\'ad\\'e8\\'e3\\'cb\\'e9\\'c2\\'d2 20 \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9 \\'aa\\'e8\\'c7\\'a7\\'e0\\'aa\\'e9\\'d2 \\'c0\\'d2\\'c2\\'cb\\'c5\\'d1\\'a7\\'a8\\'d2\\'a1\\'a1\\'d2\\'c3\\'e3\\'aa\\'e9\\'c2\\'d2\\'e4\\'bb\\'cb\\'c5\\'d2\\'ba\\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec\\'cd\\'d2\\'a8\\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2 20  \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9 \\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'ca\\'d9\\'a7\\'ca\\'d8\\'b4 80 \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9 \\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'b7\\'d5\\'e8\\'c1\\'d2\\'a1\\'a1\\'c7\\'e8\\'d2  20  \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9 \\'a4\\'c7\\'c3\\'e1\\'ba\\'e8\\'a7\\'e3\\'cb\\'e9\\'aa\\'e8\\'c7\\'a7\\'e0\\'aa\\'e9\\'d2\\'e1\\'c5\\'d0\\'e0\\'b7\\'d5\\'e8\\'c2\\'a7\\par\r\n- \\'e3\\'b9\\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8 \\'e3\\'cb\\'e9\\'c2\\'d2\\'a2\\'b9\\'d2\\'b4\\'e0\\'c3\\'d4\\'e8\\'c1\\'b5\\'e9\\'b9 10 \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9 \\'c0\\'d2\\'c2\\'cb\\'c5\\'d1\\'a7\\'a8\\'d2\\'a1\\'e3\\'aa\\'e9\\'c2\\'d2\\'e4\\'bb\\'cb\\'c5\\'d2\\'c2\\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec\\'cd\\'d2\\'a8\\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2 10 \\lang1033 mg/\\lang1054\\'c7\\'d1\\'b9\\f2\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 - \\lang1054\\'c3\\'d1\\'a1\\'c9\\'d2\\'c0\\'d2\\'c7\\'d0\\'cd\\'d2\\'c3\\'c1\\'b3\\'ec\\'ab\\'d6\\'c1\\'e0\\'c8\\'c3\\'e9\\'d2 \\'c3\\'d1\\'a1\\'c9\\'d2\\'c0\\'d2\\'c7\\'d0\\'cd\\'d2\\'c3\\'c1\\'b3\\'d7\\'ab\\'d6\\'c1\\'e0\\'c8\\'c3\\'e9\\'d2\\'cd\\'e8\\'cd\\'b9\\'e6 \\'aa\\'b9\\'d4\\'b4\\'e0\\'c3\\'d7\\'e9\\'cd\\'c3\\'d1\\'a7 (\\lang1033 dysthymic disorders\\lang1054 )\\par\r\n\\pard\\lang1033 - \\lang1054\\'c3\\'d1\\'a1\\'c9\\'d2\\'a4\\'c7\\'d2\\'c1\\'bc\\'d4\\'b4\\'bb\\'a1\\'b5\\'d4\\'cd\\'d7\\'e8\\'b9\\'e6 \\'e0\\'aa\\'e8\\'b9 \\'a1\\'d2\\'c3\\'bb\\'c3\\'d1\\'ba\\'c3\\'d0\\'ba\\'ba\\'a1\\'d2\\'c3\\'a1\\'d4\\'b9 \\'c3\\'d1\\'a1\\'c9\\'d2\\'e2\\'c3\\'a4\\'bb\\'c3\\'d0\\'ca\\'d2\\'b7\\'c7\\'d4\\'b5\\'a1\\'a1\\'d1\\'a7\\'c7\\'c5\\'e1\\'ba\\'ba\\'b5\\'d7\\'e8\\'b9\\'b5\\'c3\\'d0\\'cb\\'b9\\'a1 (\\lang1033 panic disorder\\lang1054 ) \\'c3\\'d1\\'a1\\'c9\\'d2\\'cd\\'d2\\'a1\\'d2\\'c3\\'ab\\'d6\\'c1\\'e0\\'c8\\'c3\\'e9\\'d2\\'b7\\'d5\\'e8\\'ca\\'d1\\'c1\\'be\\'d1\\'b9\\'b8\\'ec\\'a1\\'d1\\'ba\\'e2\\'c3\\'a4\\'a8\\'d4\\'b5\\'e0\\'c0\\'b7 \\'e3\\'aa\\'e9\\'c3\\'d1\\'a1\\'c9\\'d2\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b7\\'d5\\'e8\\'cb\\'c5\\'d1\\'e8\\'a7\\'b9\\'e9\\'d3\\'a1\\'d2\\'c1\\'e0\\'c3\\'e7\\'c7\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\'c2\\'d1\\'ba\\'c2\\'d1\\'e9\\'a7\\'a1\\'d2\\'c3\\'e0\\'a1\\'e7\\'ba\\'a1\\'c5\\'d1\\'ba\\'a2\\'cd\\'a7 \\lang1033 serotonin \\lang1054\\'cd\\'c2\\'e8\\'d2\\'a7\\'e0\\'a9\\'be\\'d2\\'d0\\'e0\\'a8\\'d2\\'d0\\'a8\\'a7\\f1\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 - \\lang1054\\'b6\\'d9\\'a1\\'b4\\'d9\\'b4\\'ab\\'d6\\'c1\\'e4\\'b4\\'e9\\'b4\\'d5\\'e3\\'b9\\'b7\\'d2\\'a7\\'e0\\'b4\\'d4\\'b9\\'cd\\'d2\\'cb\\'d2\\'c3\\par\r\n- \\'c3\\'d0\\'b4\\'d1\\'ba\\'c2\\'d2\\'e3\\'b9\\'e0\\'c5\\'d7\\'cd\\'b4\\'ca\\'d9\\'a7\\'ca\\'d8\\'b4 (\\lang1033 peak plasma level\\lang1054 )\\lang1033  4-8 \\lang1054\\'aa\\'c1.\\par\r\n- \\'b6\\'d9\\'a1\\'e0\\'bb\\'c5\\'d5\\'e8\\'c2\\'b9\\'e1\\'bb\\'c5\\'a7\\'b7\\'d5\\'e8\\'b5\\'d1\\'ba\\'e4\\'b4\\'e9\\'e0\\'bb\\'e7\\'b9 \\lang1033 norfluoxetine \\lang1054\\'b7\\'d5\\'e8\\'c1\\'d5\\'c4\\'b7\\'b8\\'d4\\'ec\\par\r\n- \\'a2\\'d1\\'ba\\'cd\\'cd\\'a1\\'b7\\'d2\\'a7\\'e4\\'b5\\par\r\n- \\'a4\\'e8\\'d2\\'a4\\'c3\\'d6\\'a7\\'aa\\'d5\\'c7\\'d4\\'b5 \\'a2\\'cd\\'a7 \\lang1033 fluoxetine 2-3 \\lang1054\\'c7\\'d1\\'b9 \\'a2\\'cd\\'a7 \\lang1033 norfluoxetine 7-9 \\lang1054\\'c7\\'d1\\'b9\\f1\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\f1  \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\'c3\\'d0\\'c2\\'d0\\'a4\\'c3\\'d6\\'e8\\'a7\\'aa\\'d5\\'c7\\'d4\\'b5\\'e3\\'b9\\'a1\\'d2\\'c3\\'a1\\'d3\\'a8\\'d1\\'b4\\'cd\\'cd\\'a1\\'a8\\'d2\\'a1\\'c3\\'e8\\'d2\\'a7\\'a1\\'d2\\'c2\\'a2\\'cd\\'a7\\'b5\\'d1\\'c7\\'c2\\'d2 fluoxetine \\'e1\\'c5\\'d0\\'cd\\'b9\\'d8\\'be\\'d1\\'b9\\'b8\\'ec\\'a8\\'d2\\'a1\\'a1\\'d2\\'c3\\'e0\\'bc\\'d2\\'bc\\'c5\\'d2\\'ad  fluoxetine \\'e3\\'b9\\'c3\\'e8\\'d2\\'a7\\'a1\\'d2\\'c2 (\\lang1033 active metabolite; norfluoxetine\\lang1054 )\\lang1033  \\lang1054\\'c2\\'d2\\'c7\\'b9\\'d2\\'b9 3 \\'c7\\'d1\\'b9\\'e1\\'c5\\'d0 9 \\'c7\\'d1\\'b9 \\'b5\\'d2\\'c1\\'c5\\'d3\\'b4\\'d1\\'ba \\'a8\\'d6\\'a7\\'b5\\'e9\\'cd\\'a7\\'c3\\'d0\\'c1\\'d1\\'b4\\'c3\\'d0\\'c7\\'d1\\'a7\\'e3\\'b9\\'a1\\'d2\\'c3\\'e3\\'cb\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b7\\'d5\\'e8\\'c1\\'d5\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba\\'e1\\'c5\\'d0\\'e2\\'c3\\'a4\\'e4\\'b5 \\'c3\\'c7\\'c1\\'b7\\'d1\\'e9\\'a7\\'e3\\'b9\\'a1\\'c3\\'b3\\'d5\\'b7\\'d5\\'e8\\'a8\\'d0\\'cb\\'c2\\'d8\\'b4\\'c2\\'d2\\'b9\\'d5\\'e9\\'e1\\'c5\\'d0\\'e3\\'cb\\'e9\\'c2\\'d2\\'e3\\'cb\\'c1\\'e8\\'b5\\'d2\\'c1 \\'be\\'d6\\'a7\\'a4\\'d3\\'b9\\'d6\\'a7\\'b6\\'d6\\'a7\\'bc\\'c5\\'b7\\'d5\\'e8\\'c2\\'d2\\'b9\\'d5\\'e9\\'c2\\'d1\\'a7\\'a4\\'e9\\'d2\\'a7\\'ca\\'d0\\'ca\\'c1\\'e3\\'b9\\'c3\\'e8\\'d2\\'a7\\'a1\\'d2\\'c2\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\f1  \\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba\\'c2\\'d2\\'e1\\'a1\\'e9\\'ab\\'d6\\'c1\\'e0\\'c8\\'c3\\'e9\\'d2\\'a1\\'c5\\'d8\\'e8\\'c1 \\lang1033 MAOI \\lang1054\\'cd\\'d2\\'a8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4\\'a1\\'c5\\'d8\\'e8\\'c1\\'cd\\'d2\\'a1\\'d2\\'c3 \\lang1033 serotonin syndrome \\lang1054\\'c3\\'d8\\'b9\\'e1\\'c3\\'a7\\'b6\\'d6\\'a7\\'e0\\'ca\\'d5\\'c2\\'aa\\'d5\\'c7\\'d4\\'b5\\'e4\\'b4\\'e9 \\'a1\\'e8\\'cd\\'b9\\'a8\\'d0\\'e3\\'aa\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'a4\\'c7\\'c3\\'cb\\'c2\\'d8\\'b4\\'c2\\'d2 \\lang1033 MAOI \\lang1054\\'e0\\'bb\\'e7\\'b9\\'e0\\'c7\\'c5\\'d2 2 \\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec \\'e1\\'c5\\'d0\\'a1\\'e8\\'cd\\'b9\\'e3\\'aa\\'e9\\'c2\\'d2\\'a4\\'c7\\'c3\\'cb\\'c2\\'d8\\'b4\\'c2\\'d2 \\lang1033 fluoxetine \\lang1054\\'e0\\'bb\\'e7\\'b9\\'e0\\'c7\\'c5\\'d2 5 \\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec\\par\r\n- \\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba\\'c2\\'d2 \\lang1033 pimozide, thioridazine\\par\r\n- \\lang1054\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\f2\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 -\\f1  \\'cd\\'d2\\'a1\\'d2\\'c3\\'b9\\'cd\\'b9\\'e4\\'c1\\'e8\\'cb\\'c5\\'d1\\'ba \\'b7\\'e9\\'cd\\'a7\\'e0\\'ca\\'d5\\'c2 \\'a4\\'c5\\'d7\\'e8\\'b9\\'e4\\'ca\\'e9 \\'cd\\'d2\\'e0\\'a8\\'d5\\'c2\\'b9 \\'b9\\'e9\\'d3\\'cb\\'b9\\'d1\\'a1\\'c5\\'b4 \\'c1\\'d5\\'bb\\'d1\\'ad\\'cb\\'d2\\'b7\\'d2\\'a7\\'e0\\'be\\'c8 \\lang1033 (sexual dysfunction) \\'cd\\'d2\\'a1\\'d2\\'c3\\'c7\\'d4\\'b5\\'a1\\'a1\\'d1\\'a7\\'c7\\'c5 \\'cb\\'a7\\'d8\\'b4\\'cb\\'a7\\'d4\\'b4\\'a1\\'c3\\'d0\\'c7\\'b9\\'a1\\'c3\\'d0\\'c7\\'d2\\'c2 \\'bc\\'d8\\'b4\\'c5\\'d8\\'a1\\'bc\\'d8\\'b4\\'b9\\'d1\\'e8\\'a7\\par\r\n- \\'cd\\'d2\\'a1\\'d2\\'c3\\'a2\\'e9\\'d2\\'a7\\'e0\\'a4\\'d5\\'c2\\'a7\\'ca\\'e8\\'c7\\'b9\\'c1\\'d2\\'a1\\'ca\\'d2\\'c1\\'d2\\'c3\\'b6\\'c5\\'b4\\'c5\\'a7\\'e4\\'b4\\'e9\\'e2\\'b4\\'c2\\'a1\\'d2\\'c3\\'c5\\'b4\\'a2\\'b9\\'d2\\'b4\\'c2\\'d2\\'c5\\'a7 \\'cb\\'c3\\'d7\\'cd\\'c3\\'cd\\'e3\\'cb\\'e9\\'c3\\'e8\\'d2\\'a7\\'a1\\'d2\\'c2\\'bb\\'c3\\'d1\\'ba\\'b5\\'d1\\'c7\\'e3\\'cb\\'e9\\'e0\\'a2\\'e9\\'d2\\'a1\\'d1\\'ba\\'c2\\'d2\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000073",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 schizophenia 3-6 mg/day\\par\r\n\\par\r\n**pregnancy category: C \\lang1054\\f1\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 schizophenia\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 block dopamine receptor\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 absortion\\par\r\n Oral 3-8 \\lang1054\\f1\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\par\r\n\\lang1033 metabolite \\lang1054\\'bc\\'e8\\'d2\\'b9\\'b5\\'d1\\'ba\\par\r\n\\'a2\\'d1\\'ba\\'cd\\'cd\\'a1\\'b7\\'d2\\'a7\\'cd\\'d8\\'a8\\'d2\\'c3\\'d0\\'e0\\'bb\\'e7\\'b9\\'ca\\'e8\\'c7\\'b9\\'e3\\'cb\\'ad\\'e8 \\'e1\\'c5\\'d0\\'b7\\'d2\\'a7\\'bb\\'d1\\'ca\\'ca\\'d2\\'c7\\'d0\\'e0\\'bb\\'e7\\'b9\\'ca\\'e8\\'c7\\'b9\\'b9\\'e9\\'cd\\'c2\\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1\\f1 .\\lang1033 QT prplongation\\par\r\n2. bone marrow suppression\\par\r\n3.EPS\\par\r\n4. orthostatic hypotention\\par\r\n5. NMS\\par\r\n6. sedation\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1. \\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'cb\\'c3\\'d7\\'cd\\'e1\\'be\\'e9\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'cd\\'d7\\'e8\\'b9\\'e6\\'e3\\'b9\\'b5\\'d3\\'c3\\'d1\\'ba\\par\r\n2. \\lang1033 Acute intoxication \\lang1054 (\\lang1033 ethanol, barbiturate \\lang1054\\'cb\\'c3\\'d7\\'cd \\lang1033 opioid\\lang1054 )\\par\r\n\\lang1033 3. Severe CNS depression\\par\r\n4. Severely-agitated patients\\par\r\n5. Subcortical brain damage\\par\r\n6. Cerebrovascular \\lang1054\\'cb\\'c3\\'d7\\'cd \\lang1033 renal insufficiency\\par\r\n7. Severe cardiovascular disease\\par\r\n8. Blood dyscrasias\\par\r\nPheochromocytoma\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. EPS\\par\r\n2. Hyperprolactinemia\\par\r\n3.dermatitis\\par\r\n4.N/V\\par\r\n\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000075",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil\\fcharset0 MS Sans Serif;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20\\par\r\n\\par\r\n\\lang1033 psychosis \\lang1054 12.5-37.5 \\lang1033 mg \\lang1054\\'b7\\'d8\\'a1 \\lang1033 2 \\lang1054\\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec\\lang1033  IM.\\par\r\n\\par\r\n\\f1 **pregnancy category: C\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 schizophenia\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 block post synaptic mesolimbic dopaminergic D1, D2 receptor\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 protein 91-99 %\\par\r\nmetabolitr \\lang1054\\f1\\'bc\\'e8\\'d2\\'b9 \\lang1033 CYP2D6\\par\r\nexcretion : renal\\par\r\nt1/2: 163-232 \\lang1054\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7 \\f2\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs20 1. \\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8\\par\r\n2. \\lang1033 Sedation\\par\r\n3. \\lang1054\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba\\lang1033 , \\lang1054\\'e4\\'b5\\par\r\n4. \\lang1033 cerebrovascular disease\\par\r\n5. cardiovascular disease\\par\r\n6. hyperprolactinenia\\par\r\n7.bone marrow suppressant \\lang1054\\'a4\\'c7\\'c3\\'cb\\'c2\\'d8\\'b4\\'e3\\'aa\\'e9\\'b6\\'e9\\'d2\\'c1\\'d5 \\lang1033 absolute neutrophil count < 1,000/mm3\\par\r\n8. EPS\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. \\lang1054\\f1\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'bc\\'d9\\'e9\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\lang1033 sinvlj;oxitdv[vnjoq.o9eiy[\\par\r\n2. \\lang1054\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e2\\'c3\\'a4\\'b5\\'d1\\'ba\\par\r\n3. \\lang1033 SEvere CNS depression\\par\r\n4. coma\\par\r\n5. Suncortical brain damage\\par\r\n6. Blood dyscrasias\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. orthostatic hypotention\\par\r\n2. EPS\\par\r\n3.photosensitivity\\par\r\n4.constipation\\par\r\n5. QT prolongtion\\par\r\n6. aganulocytosis\\par\r\n7.SLE\\par\r\n8. NMS\\par\r\n9. seizure\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000079",
    "generic_name": null,
    "brand_name": null,
    "manufacturer": null,
    "distributor": null,
    "dosage_form": null,
    "strength": null,
    "classification": null,
    "similar_drug": null,
    "summary_formulary_recommendation": "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20  - \\lang1054\\f1\\'bc\\'d9\\'e9\\'e3\\'cb\\'ad\\'e8\\lang1033\\f0\\par\r\nTourette's syndrome \\par\r\n     moderate 0.5-2 mg bid-tid \\par\r\n     severe 3-5 mg bid-tid\\par\r\nSchizophenia \\par\r\n     moderate 0.5-2 mg bid-tid \\par\r\n     severe 3-5 mg bid-tid\\par\r\n- \\lang1054\\f1\\'e0\\'b4\\'e7\\'a1\\par\r\n\\lang1033\\f0 Tourette's syndrome \\lang1054\\f1\\'cd\\'d2\\'c2\\'d8 3-12 \\'bb\\'d5  0.5 \\lang1033 mg/day divice dose \\lang1054\\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4 0.5 \\lang1033 mg \\lang1054\\'b7\\'d8\\'a1 5-7 \\'c7\\'d1\\'b9 \\'a8\\'b9\\'e4\\'b4\\'e9 \\lang1033 therapeutic effect\\par\r\n- hyperactive behavior \\lang1054\\'cd\\'d2\\'c2\\'d8 3-12 \\'bb\\'d5 0.05 \\lang1033 mg/kg/day \\lang1054\\'e1\\'ba\\'e8\\'a7\\'c3\\'d1\\'ba\\'bb\\'c3\\'d0\\'b7\\'d2\\'b9 2-3 \\'a4\\'c3\\'d1\\'e9\\'a7 \\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4 0.5 \\lang1033 mg \\lang1054\\'b7\\'d8\\'a1 5-7 \\'c7\\'d1\\'b9 \\'a8\\'b9\\'e4\\'b4\\'e9 0.075  \\lang1033 mg/kg/day\\par\r\n-problematic behavior  \\lang1054\\'cd\\'d2\\'c2\\'d8 3-12 \\'bb\\'d5 0.05 \\lang1033 mg/kg/day \\lang1054\\'e1\\'ba\\'e8\\'a7\\'c3\\'d1\\'ba\\'bb\\'c3\\'d0\\'b7\\'d2\\'b9 2-3 \\'a4\\'c3\\'d1\\'e9\\'a7 \\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4 0.5 \\lang1033 mg \\lang1054\\'b7\\'d8\\'a1 5-7 \\'c7\\'d1\\'b9 \\'a8\\'b9\\'e4\\'b4\\'e9 0.075  \\lang1033 mg/kg/day\\f0\\par\r\n-Schizophenia \\lang1054\\f1\\'cd\\'d2\\'c2\\'d8 3-12 \\'bb\\'d5 0.05 \\lang1033 mg/kg/day \\lang1054\\'e1\\'ba\\'e8\\'a7\\'c3\\'d1\\'ba\\'bb\\'c3\\'d0\\'b7\\'d2\\'b9 2-3 \\'a4\\'c3\\'d1\\'e9\\'a7 \\'e0\\'be\\'d4\\'e8\\'c1\\'a2\\'b9\\'d2\\'b4 0.5 \\lang1033 mg \\lang1054\\'b7\\'d8\\'a1 5-7 \\'c7\\'d1\\'b9 \\'a8\\'b9\\'e4\\'b4\\'e9 0.\\lang1033 15\\lang1054   \\lang1033 mg/kg/day\\f0\\par\r\n\\par\r\n**pregnancy category: C\\par\r\n    \\par\r\n\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "approved_indication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1.schizophenia\\par\r\n2.Tourette's syndrome \\par\r\n\\lang1054\\f1 3.\\lang1033 hyperactive behavior\\par\r\n4. problematic behavior\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "pharmacology": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 -compettitive blockage post synaptic dopamine receptor\\par\r\n-\\lang1054\\f1\\'c2\\'d1\\'a7\\'c2\\'d1\\'e9\\'a7 \\lang1033 alpha adrenergic receptor \\lang1054\\'ba\\'d2\\'a7\\'aa\\'b9\\'d4\\'b4\\f2\\par\r\n}\r\n\u0000",
    "clinical_efficacy": null,
    "pharmacokinetics": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f1\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 -Absorption:60%\\par\r\n-t1/2: 12-36 \\lang1054\\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\lang1033  oral \\par\r\n-t1/2:3 \\lang1054\\'ca\\'d1\\'bb\\'b4\\'d2\\'cb\\'ec \\lang1033 IM.\\lang1054\\par\r\n\\lang1033 -\\lang1054\\'bc\\'e8\\'d2\\'b9 \\lang1033 CYP 1A2 , 2D6, 3A4\\lang1054\\f1\\par\r\n}\r\n\u0000",
    "precaution": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1.\\lang1054\\f1\\'bc\\'d9\\'e9\\'ca\\'d9\\'a7\\'cd\\'d2\\'c2\\'d8\\par\r\n2. \\lang1033 cardiac abnormality \\lang1054\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 QT prolongation\\par\r\n3. CVD \\lang1054\\'e0\\'a1\\'d4\\'b4 \\lang1033 anginal pain\\par\r\n4. \\lang1054\\'a1\\'d2\\'c3\\'e3\\'aa\\'e9\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba \\lang1033 Li \\lang1054\\'e0\\'a1\\'d4\\'b4 \\lang1033 encephalopatic syndrome\\par\r\n\\pard 5. \\lang1054\\'a1\\'d2\\'c3\\'e3\\'aa\\'e9\\'c3\\'e8\\'c7\\'c1\\'a1\\'d1\\'ba\\'c2\\'d2\\'b7\\'d5\\'e8\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 QT prolongation\\par\r\n\\pard\\lang1054 6. \\lang1033 Seizure\\par\r\n7. Tardive dykinesia\\par\r\n8. NMS\\par\r\n9. Hypothyroid \\lang1054\\'b7\\'d3\\'e3\\'cb\\'e9\\'e0\\'a1\\'d4\\'b4 \\lang1033 QT prolongation\\par\r\n\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "contraindication": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. \\lang1054\\f1\\'cb\\'e9\\'d2\\'c1\\'e3\\'aa\\'e9\\'e3\\'b9\\'a4\\'b9\\'b7\\'d5\\'e8\\'e1\\'be\\'e9\\'c2\\'d2\\'b9\\'d5\\'e9\\'cb\\'c3\\'d7\\'cd\\'e1\\'be\\'e9\\'ca\\'e8\\'c7\\'b9\\'bb\\'c3\\'d0\\'a1\\'cd\\'ba\\'a2\\'cd\\'a7\\'c2\\'d2\\'b9\\'d5\\'e9\\par\r\n2. \\lang1033 Comatose state\\par\r\n3. Parkinson's disease\\par\r\n4. Toxic central nervous system depression\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "adverse_drug_reaction": "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 MS Sans Serif;}{\\f1\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}{\\f2\\fnil MS Sans Serif;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs20 1. hypotention\\par\r\n2. EPS\\par\r\n3. Somnolence\\par\r\n4. blurred vision\\par\r\n\\pard 5. \\f1 QT prolongation\\par\r\n\\pard\\f0 6. sudden cardiac death\\par\r\n7. aganulocytosis\\par\r\n8. NMS\\par\r\n9. seizure\\lang1054\\f2\\par\r\n}\r\n\u0000",
    "dosage_and_administration": null,
    "cost_comparision": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

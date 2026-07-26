# `hsk_kardex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kid | int(10) | NO | PRI | 0 |  |  |
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| dx | varchar(100) | YES |  | NULL |  |  |
| h_prediag | text | YES |  | NULL |  |  |
| nurse_patient | varchar(20) | YES |  | NULL |  |  |
| ss_patient | varchar(1) | YES |  | NULL |  |  |
| ss_detail | varchar(255) | YES |  | NULL |  |  |
| re_ward | varchar(10) | YES |  | NULL |  |  |
| re_date | date | YES |  | NULL |  |  |
| disease | varchar(255) | YES |  | NULL |  |  |
| history_drug_allergy | varchar(200) | YES |  | NULL |  |  |
| allergic_reactions | varchar(200) | YES |  | NULL |  |  |
| drug_interaction | varchar(200) | YES |  | NULL |  |  |
| drug_other | varchar(255) | YES |  | NULL |  |  |
| drug_prn | varchar(255) | YES |  | NULL |  |  |
| drug_month | varchar(255) | YES |  | NULL |  |  |
| other_treatment_plans | varchar(255) | YES |  | NULL |  |  |
| problem_j | varchar(255) | YES |  | NULL |  |  |
| problem_k | varchar(255) | YES |  | NULL |  |  |
| problem_sos | varchar(255) | YES |  | NULL |  |  |
| problem_adl | varchar(255) | YES |  | NULL |  |  |
| problem_social | varchar(255) | YES |  | NULL |  |  |
| problem_restore | varchar(255) | YES |  | NULL |  |  |
| s_plan1 | text | YES |  | NULL |  |  |
| s_plan2 | text | YES |  | NULL |  |  |
| s_plan3 | text | YES |  | NULL |  |  |
| s_plan4 | text | YES |  | NULL |  |  |
| s_nurse1 | text | YES |  | NULL |  |  |
| s_nurse2 | text | YES |  | NULL |  |  |
| s_nurse3 | text | YES |  | NULL |  |  |
| s_nurse4 | text | YES |  | NULL |  |  |
| s_evaluation1 | text | YES |  | NULL |  |  |
| s_evaluation2 | text | YES |  | NULL |  |  |
| s_evaluation3 | text | YES |  | NULL |  |  |
| s_evaluation4 | text | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |
| spell_id | int(1) | YES |  | NULL |  |  |
| type_smiv | varchar(100) | YES |  | NULL |  |  |
| type_save | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | kid | yes | 1 |
| PRIMARY | an | yes | 2 |
| PRIMARY | hn | yes | 3 |
| uk | an | yes | 1 |
| uk | hn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "kid": 33200,
    "an": "670001235",
    "hn": "670000001",
    "dx": "F840 Childhood autism",
    "h_prediag": "ซน ไม่นิ่ง",
    "nurse_patient": "yuwa001",
    "ss_patient": "N",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "",
    "drug_interaction": "",
    "drug_other": "",
    "drug_prn": "",
    "drug_month": "",
    "other_treatment_plans": "",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-08-20 18:24:21",
    "spell_id": 2,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33202,
    "an": "670001142",
    "hn": "660001252",
    "dx": "F840 Childhood autism",
    "h_prediag": "ซน ไม่นิ่ง",
    "nurse_patient": "yuwa001",
    "ss_patient": "N",
    "ss_detail": "5",
    "re_ward": "03",
    "re_date": "2024-08-27",
    "disease": "1",
    "history_drug_allergy": "2",
    "allergic_reactions": "3",
    "drug_interaction": "4",
    "drug_other": "ยาอื่นๆ:",
    "drug_prn": "ยาฉีด PRN:",
    "drug_month": "ยาฉีดประจำเดือน:",
    "other_treatment_plans": "แผนการรักษาอื่นๆ:",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-08-27 11:45:19",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33204,
    "an": "670001503",
    "hn": "670001082",
    "dx": "F429 Obsessive-compulsive disorder, unspecified",
    "h_prediag": "[MASKED_FULLNAME]",
    "nurse_patient": "yuwa319",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "",
    "drug_interaction": "",
    "drug_other": "",
    "drug_prn": "",
    "drug_month": "",
    "other_treatment_plans": "",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-08-30 15:20:54",
    "spell_id": 2,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33211,
    "an": "670001483",
    "hn": "610000298",
    "dx": "Childhood Autism with ID",
    "h_prediag": "Refer จาก สมุทรปราการ ปัญหาพฤติกรรม ก้าวร้าว อาละวาด",
    "nurse_patient": "yuwa231",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "ไม่มี",
    "history_drug_allergy": "ไม่มี",
    "allergic_reactions": "ไม่มี",
    "drug_interaction": "ไม่มี",
    "drug_other": "",
    "drug_prn": "",
    "drug_month": "",
    "other_treatment_plans": "",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-09-05 08:05:31",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33206,
    "an": "670001328",
    "hn": "660001191",
    "dx": "F840 Childhood autism",
    "h_prediag": "ซน ไม่นิ่ง ไม่นิ่ง",
    "nurse_patient": "yuwa066",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "01",
    "re_date": "2024-09-04",
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "",
    "drug_interaction": "",
    "drug_other": "",
    "drug_prn": "",
    "drug_month": "",
    "other_treatment_plans": "",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-09-04 10:24:26",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33208,
    "an": "670001462",
    "hn": "670000832",
    "dx": "F322 Sever depressive episode without psychotic symptoms",
    "h_prediag": "คิดจะฆ่าตัวตาย",
    "nurse_patient": "yuwa228",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "",
    "drug_interaction": "",
    "drug_other": "ไม่มี",
    "drug_prn": "ไม่มี",
    "drug_month": "ไม่มี",
    "other_treatment_plans": "ไม่มี",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-09-04 10:32:51",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33210,
    "an": "670001419",
    "hn": "650005914",
    "dx": "F840 Childhood autism",
    "h_prediag": "เอาแต่ใจ ไม่ฟังเหตุผล",
    "nurse_patient": "yuwa069",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "-",
    "drug_interaction": "",
    "drug_other": "",
    "drug_prn": "-",
    "drug_month": "",
    "other_treatment_plans": "",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-09-04 13:55:36",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  },
  {
    "kid": 33212,
    "an": "670001257",
    "hn": "660001255",
    "dx": "F840 Childhood autism",
    "h_prediag": "ควบคุมอารมณ์ได้น้อย cc",
    "nurse_patient": "yuwa047",
    "ss_patient": "Y",
    "ss_detail": "",
    "re_ward": "",
    "re_date": null,
    "disease": "",
    "history_drug_allergy": "",
    "allergic_reactions": "",
    "drug_interaction": "",
    "drug_other": "c",
    "drug_prn": "c",
    "drug_month": "",
    "other_treatment_plans": "c",
    "problem_j": "",
    "problem_k": "",
    "problem_sos": "",
    "problem_adl": "",
    "problem_social": "",
    "problem_restore": "",
    "s_plan1": "",
    "s_plan2": "",
    "s_plan3": "",
    "s_plan4": "",
    "s_nurse1": "",
    "s_nurse2": "",
    "s_nurse3": "",
    "s_nurse4": "",
    "s_evaluation1": "",
    "s_evaluation2": "",
    "s_evaluation3": "",
    "s_evaluation4": "",
    "d_update": "2024-09-05 10:00:44",
    "spell_id": 1,
    "type_smiv": null,
    "type_save": null
  }
]
```

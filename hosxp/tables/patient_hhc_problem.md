# `patient_hhc_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_problem_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_problem_name | varchar(250) | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_hhc_problem_id": 1,
    "patient_hhc_problem_name": "เบาหวานขึ้นตา (Retinopathy)  ตามัว, ตาบอด",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 2,
    "patient_hhc_problem_name": "ไตเสื่อม (Nephropathy)  ค่า Creatinine สูง, ปัสสาวะโปรตีน",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 3,
    "patient_hhc_problem_name": "ปลายประสาทเสื่อม (Neuropathy)  เท้าชา, ปวดแสบปวดร้อน",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 4,
    "patient_hhc_problem_name": "แผลเรื้อรัง/ติดเชื้อ  โดยเฉพาะที่เท้า",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 5,
    "patient_hhc_problem_name": "น้ำหนักตัวมาก / อ้วนลงพุง",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 6,
    "patient_hhc_problem_name": "ภาวะน้ำตาลต่ำ (Hypoglycemia)  หน้ามืด, สั่น, ชัก",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 7,
    "patient_hhc_problem_name": "ขาดวินัยในการควบคุมอาหาร",
    "patient_hhc_disease_group_id": 3
  },
  {
    "patient_hhc_problem_id": 8,
    "patient_hhc_problem_name": "ลืมกินยา / หยุดยาเอง",
    "patient_hhc_disease_group_id": 3
  }
]
```

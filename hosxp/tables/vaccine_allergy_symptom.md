# `vaccine_allergy_symptom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_allergy_symptom_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_allergy_symptom_name | varchar(250) | YES | UNI | NULL |  |  |
| severity_level | int(11) | YES |  | NULL |  |  |
| fda_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_allergy_symptom_name | vaccine_allergy_symptom_name | yes | 1 |
| PRIMARY | vaccine_allergy_symptom_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_allergy_symptom_id": 1,
    "vaccine_allergy_symptom_name": "ปวด บวม แดง ร้อน บริเวณที่ฉีด (Injection site reaction)",
    "severity_level": 1,
    "fda_id": 1
  },
  {
    "vaccine_allergy_symptom_id": 2,
    "vaccine_allergy_symptom_name": "ไข้ ( Fever)",
    "severity_level": 1,
    "fda_id": 2
  },
  {
    "vaccine_allergy_symptom_id": 3,
    "vaccine_allergy_symptom_name": "ปวดศีรษะ (Headache)",
    "severity_level": 1,
    "fda_id": 3
  },
  {
    "vaccine_allergy_symptom_id": 4,
    "vaccine_allergy_symptom_name": "เหนื่อย อ่อนเพลีย ไม่มีแรง (Fatigue)",
    "severity_level": 1,
    "fda_id": 4
  },
  {
    "vaccine_allergy_symptom_id": 5,
    "vaccine_allergy_symptom_name": "ปวดกล้ามเนื้อ ( Myalgia )",
    "severity_level": 2,
    "fda_id": 5
  },
  {
    "vaccine_allergy_symptom_id": 6,
    "vaccine_allergy_symptom_name": "คลื่นไส้ (Nausea)",
    "severity_level": 2,
    "fda_id": 7
  },
  {
    "vaccine_allergy_symptom_id": 7,
    "vaccine_allergy_symptom_name": "อาเจียน ( Vomiting)",
    "severity_level": 2,
    "fda_id": 8
  },
  {
    "vaccine_allergy_symptom_id": 8,
    "vaccine_allergy_symptom_name": "ท้องเสีย (Diarrhea)",
    "severity_level": 2,
    "fda_id": 9
  }
]
```

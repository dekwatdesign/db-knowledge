# `patient_coc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_coc_type_name | patient_coc_type_name | yes | 1 |
| PRIMARY | patient_coc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_coc_type_id": 1,
    "patient_coc_type_name": "ANC"
  },
  {
    "patient_coc_type_id": 2,
    "patient_coc_type_name": "กลุ่มหญิงหลังคลอด"
  },
  {
    "patient_coc_type_id": 3,
    "patient_coc_type_name": "ผู้สูงอายุ"
  },
  {
    "patient_coc_type_id": 4,
    "patient_coc_type_name": "เด็กน้ำหนักน้อยและคลอดก่อนกำหนด"
  },
  {
    "patient_coc_type_id": 5,
    "patient_coc_type_name": "เด็ก"
  },
  {
    "patient_coc_type_id": 6,
    "patient_coc_type_name": "DM"
  },
  {
    "patient_coc_type_id": 7,
    "patient_coc_type_name": "HT"
  },
  {
    "patient_coc_type_id": 8,
    "patient_coc_type_name": "COPD"
  }
]
```

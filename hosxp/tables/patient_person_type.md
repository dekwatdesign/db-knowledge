# `patient_person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_person_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_person_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_person_type_name | patient_person_type_name | yes | 1 |
| PRIMARY | patient_person_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "patient_person_type_id": 1,
    "patient_person_type_name": "กำนัน ผู้ใหญ่บ้าน"
  },
  {
    "patient_person_type_id": 3,
    "patient_person_type_name": "แพทย์ประจำตำบล"
  },
  {
    "patient_person_type_id": 4,
    "patient_person_type_name": "สมาชิก อบต."
  },
  {
    "patient_person_type_id": 2,
    "patient_person_type_name": "อสม."
  },
  {
    "patient_person_type_id": 5,
    "patient_person_type_name": "อื่นๆ"
  }
]
```

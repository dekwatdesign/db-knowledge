# `doctor_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_patient_type_id | int(11) | NO | PRI | 0 |  |  |
| doctor_patient_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_patient_type_name | doctor_patient_type_name | yes | 1 |
| PRIMARY | doctor_patient_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "doctor_patient_type_id": 3,
    "doctor_patient_type_name": "Refer"
  },
  {
    "doctor_patient_type_id": 2,
    "doctor_patient_type_name": "VIP"
  },
  {
    "doctor_patient_type_id": 1,
    "doctor_patient_type_name": "ปกติ"
  }
]
```

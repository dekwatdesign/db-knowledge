# `dental_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_patient_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_patient_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_patient_type_name | dental_patient_type_name | yes | 1 |
| PRIMARY | dental_patient_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "dental_patient_type_id": 1,
    "dental_patient_type_name": "ทั่วไป"
  },
  {
    "dental_patient_type_id": 2,
    "dental_patient_type_name": "จิตเวชเด็ก"
  },
  {
    "dental_patient_type_id": 3,
    "dental_patient_type_name": "จิตเวชผู้ใหญ่"
  },
  {
    "dental_patient_type_id": 4,
    "dental_patient_type_name": "ECT"
  },
  {
    "dental_patient_type_id": 5,
    "dental_patient_type_name": "ฉุกเฉิน"
  },
  {
    "dental_patient_type_id": 6,
    "dental_patient_type_name": "กลุ่มใช้ยา"
  },
  {
    "dental_patient_type_id": 7,
    "dental_patient_type_name": "เด็กพิเศษ"
  }
]
```

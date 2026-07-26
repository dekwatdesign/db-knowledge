# `doctor_deformed_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_cause_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_cause_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_deformed_cause_name | doctor_deformed_cause_name | yes | 1 |
| PRIMARY | doctor_deformed_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "doctor_deformed_cause_id": 1,
    "doctor_deformed_cause_name": "พันธุกรรม"
  },
  {
    "doctor_deformed_cause_id": 2,
    "doctor_deformed_cause_name": "อุบัติเหตุ"
  },
  {
    "doctor_deformed_cause_id": 3,
    "doctor_deformed_cause_name": "โรคติดเชื้อ"
  },
  {
    "doctor_deformed_cause_id": 4,
    "doctor_deformed_cause_name": "ไม่ทราบสาเหตุ"
  },
  {
    "doctor_deformed_cause_id": 5,
    "doctor_deformed_cause_name": "โรคอื่นๆ"
  }
]
```

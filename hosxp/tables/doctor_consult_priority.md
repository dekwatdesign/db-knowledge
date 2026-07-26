# `doctor_consult_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_consult_priority_id | int(11) | NO | PRI | 0 |  |  |
| doctor_consult_priority_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_consult_priority_name | doctor_consult_priority_name | yes | 1 |
| PRIMARY | doctor_consult_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "doctor_consult_priority_id": 1,
    "doctor_consult_priority_name": "ปกติ"
  },
  {
    "doctor_consult_priority_id": 2,
    "doctor_consult_priority_name": "มาก"
  },
  {
    "doctor_consult_priority_id": 3,
    "doctor_consult_priority_name": "มากที่สุด"
  }
]
```

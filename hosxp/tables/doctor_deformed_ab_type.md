# `doctor_deformed_ab_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_ab_type_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_ab_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_deformed_ab_type_name | doctor_deformed_ab_type_name | yes | 1 |
| PRIMARY | doctor_deformed_ab_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_deformed_ab_type_id": 1,
    "doctor_deformed_ab_type_name": "ตั้งแต่เกิด"
  },
  {
    "doctor_deformed_ab_type_id": 2,
    "doctor_deformed_ab_type_name": "ภายหลัง"
  }
]
```

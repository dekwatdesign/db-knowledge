# `doctor_deformed_abnormal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_abnormal_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_type_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_abnormal_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_deformed_abnormal_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_deformed_abnormal_id": 1,
    "doctor_deformed_type_id": 1,
    "doctor_deformed_abnormal_name": "ตาบอด"
  },
  {
    "doctor_deformed_abnormal_id": 2,
    "doctor_deformed_type_id": 1,
    "doctor_deformed_abnormal_name": "ตาเลือนราง"
  },
  {
    "doctor_deformed_abnormal_id": 3,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_abnormal_name": "หูหนวก"
  },
  {
    "doctor_deformed_abnormal_id": 4,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_abnormal_name": "หูตึง"
  },
  {
    "doctor_deformed_abnormal_id": 5,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_abnormal_name": "สื่อความหมาย"
  },
  {
    "doctor_deformed_abnormal_id": 6,
    "doctor_deformed_type_id": 3,
    "doctor_deformed_abnormal_name": "การเคลื่อนไหว - ขาด"
  },
  {
    "doctor_deformed_abnormal_id": 7,
    "doctor_deformed_type_id": 3,
    "doctor_deformed_abnormal_name": "การเคลื่อนไหว - อ่อนแรง"
  },
  {
    "doctor_deformed_abnormal_id": 8,
    "doctor_deformed_type_id": 3,
    "doctor_deformed_abnormal_name": "การเคลื่อนไหว - อื่นๆ"
  }
]
```

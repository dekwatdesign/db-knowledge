# `doctor_deformed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_type_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_deformed_type_name | doctor_deformed_type_name | yes | 1 |
| PRIMARY | doctor_deformed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "doctor_deformed_type_id": 1,
    "doctor_deformed_type_name": "ทางการมองเห็น"
  },
  {
    "doctor_deformed_type_id": 2,
    "doctor_deformed_type_name": "ทางการได้ยินหรือสื่อความหมาย"
  },
  {
    "doctor_deformed_type_id": 3,
    "doctor_deformed_type_name": "ทางการเคลื่อนไหวหรือทางร่างกาย"
  },
  {
    "doctor_deformed_type_id": 4,
    "doctor_deformed_type_name": "ทางจิตใจหรือพฤตกิรรมหรือออทิสติก"
  },
  {
    "doctor_deformed_type_id": 5,
    "doctor_deformed_type_name": "ทางสติปัญญา"
  },
  {
    "doctor_deformed_type_id": 6,
    "doctor_deformed_type_name": "ทางการเรียนรู้"
  }
]
```

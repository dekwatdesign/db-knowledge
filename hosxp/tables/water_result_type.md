# `water_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| water_result_type_id | int(11) | NO | PRI | 0 |  |  |
| water_result_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | water_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "water_result_type_id": 1,
    "water_result_type_name": "ใช้ดื่มได้"
  },
  {
    "water_result_type_id": 2,
    "water_result_type_name": "ใช้ดื่มไม่ได้"
  },
  {
    "water_result_type_id": 3,
    "water_result_type_name": "ไม่ได้ใช้"
  },
  {
    "water_result_type_id": 4,
    "water_result_type_name": "ตู้เสีย"
  },
  {
    "water_result_type_id": 5,
    "water_result_type_name": "ไม่ได้ตรวจ"
  }
]
```

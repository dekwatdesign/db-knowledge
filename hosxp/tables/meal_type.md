# `meal_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| meal_type_id | int(11) | NO | PRI | 0 |  |  |
| meal_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_meal_type_name | meal_type_name | yes | 1 |
| PRIMARY | meal_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "meal_type_id": 1,
    "meal_type_name": "เช้า"
  },
  {
    "meal_type_id": 2,
    "meal_type_name": "กลางวัน"
  },
  {
    "meal_type_id": 3,
    "meal_type_name": "เย็น"
  },
  {
    "meal_type_id": 4,
    "meal_type_name": "ก่อนนอน"
  }
]
```

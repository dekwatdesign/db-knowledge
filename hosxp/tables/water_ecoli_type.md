# `water_ecoli_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| water_ecoli_type_id | int(11) | NO | PRI | 0 |  |  |
| water_ecoli_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | water_ecoli_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "water_ecoli_type_id": 1,
    "water_ecoli_type_name": "พบ"
  },
  {
    "water_ecoli_type_id": 2,
    "water_ecoli_type_name": "ไม่พบ"
  }
]
```

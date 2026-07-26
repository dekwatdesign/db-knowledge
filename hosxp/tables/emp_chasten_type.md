# `emp_chasten_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_chasten_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_chasten_type_name | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_chasten_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_chasten_type_id": 1,
    "emp_chasten_type_name": "ร้ายแรง"
  },
  {
    "emp_chasten_type_id": 2,
    "emp_chasten_type_name": "ไม่ร้ายแรง"
  }
]
```

# `emp_hostype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_hostype_id | int(11) | NO | PRI | 0 |  |  |
| emp_hostype_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_hostype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_hostype_id": 1,
    "emp_hostype_name": "เอกชน"
  },
  {
    "emp_hostype_id": 2,
    "emp_hostype_name": "รัฐบาล"
  }
]
```

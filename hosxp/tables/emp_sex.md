# `emp_sex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_sex_id | int(11) | NO | PRI | 0 |  |  |
| emp_sex_name | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_sex_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_sex_id": 1,
    "emp_sex_name": "ชาย"
  },
  {
    "emp_sex_id": 2,
    "emp_sex_name": "หญิง"
  }
]
```

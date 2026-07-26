# `emp_dep_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_dep_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_dep_type_name | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_dep_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_dep_type_id": 1,
    "emp_dep_type_name": "แผนก"
  },
  {
    "emp_dep_type_id": 2,
    "emp_dep_type_name": "ฝ่าย"
  }
]
```

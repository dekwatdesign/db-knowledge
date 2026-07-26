# `emp_resign_salary_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_resign_salary_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_resign_salary_type_name | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_resign_salary_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_resign_salary_type_id": 1,
    "emp_resign_salary_type_name": "บำเน็จ"
  },
  {
    "emp_resign_salary_type_id": 2,
    "emp_resign_salary_type_name": "บำนาญ"
  }
]
```

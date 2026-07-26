# `emp_expense_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_head_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_head_name | varchar(100) | YES |  | NULL |  |  |
| emp_expense_head_eng_name | varchar(100) | YES |  | NULL |  |  |
| emp_expense_head_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_head_price | double(22,3) | YES |  | NULL |  |  |
| emp_expense_head_detail | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_expense_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

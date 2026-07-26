# `emp_expense_dental`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_dental_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_dental_date | date | YES |  | NULL |  |  |
| emp_expense_dental_next_date | date | YES |  | NULL |  |  |
| emp_expense_dental_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_head_dental_id | int(11) | YES |  | NULL |  |  |
| date_approve | date | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| staff_approve | varchar(20) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_expense_dental_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

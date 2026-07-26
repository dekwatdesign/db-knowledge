# `emp_office_exp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_exp_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_head_id | int(11) | YES |  | NULL |  |  |
| emp_office_exp_price | double(22,3) | YES |  | NULL |  |  |
| emp_office_id | int(11) | YES |  | NULL |  |  |
| emp_office_exp_detail | text | YES |  | NULL |  |  |
| emp_officce_exp_staff | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_exp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

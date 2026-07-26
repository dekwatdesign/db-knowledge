# `emp_expense_receip`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_receip_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_receip_no | varchar(100) | YES |  | NULL |  |  |
| emp_expense_receip_date | date | YES | MUL | NULL |  |  |
| emp_expense_receip_amount | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_id | int(11) | YES |  | NULL |  |  |
| emp_expense_receip_draw | double(15,2) | YES |  | NULL |  |  |
| emp_expense_receip_df | double(15,2) | YES |  | NULL |  |  |
| emp_expense_receip_ki_money | double(15,2) | YES |  | NULL |  |  |
| emp_expense_receip_ki_time | int(11) | YES |  | NULL |  |  |
| emp_expense_med_dental | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_expense_receip_date | emp_expense_receip_date | no | 1 |
| PRIMARY | emp_expense_receip_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

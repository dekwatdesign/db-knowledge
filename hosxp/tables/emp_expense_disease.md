# `emp_expense_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_disease_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_disease_money | double(15,2) | YES |  | NULL |  |  |
| code | varchar(7) | YES | MUL | NULL |  |  |
| emp_expense_med_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refexpense_medical16 | emp_expense_med_id | no | 1 |
| ix_Reficd10111 | code | no | 1 |
| PRIMARY | emp_expense_disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

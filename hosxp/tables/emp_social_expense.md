# `emp_social_expense`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_expense_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_expense_start_date | date | YES |  | NULL |  |  |
| emp_social_expense_end_date | date | YES |  | NULL |  |  |
| emp_social_expense_day | int(11) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| emp_social_expense_detail | varchar(255) | YES |  | NULL |  |  |
| emp_social_expense_money | decimal(10,0) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |
| emp_social_expense_extra_money | decimal(10,0) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_welfare27 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_expense_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

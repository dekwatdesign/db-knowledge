# `emp_office_exp_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_exp_team_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_head_id | int(11) | YES |  | NULL |  |  |
| emp_office_exp_team_price | double(22,3) | YES |  | NULL |  |  |
| emp_office_team_id | int(11) | YES |  | NULL |  |  |
| emp_office_exp_team_note | varchar(150) | YES |  | NULL |  |  |
| emp_office_exp_team_staff | varchar(50) | YES |  | NULL |  |  |
| emp_office_exp_money_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_exp_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_employee_salary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_employee_id | int(11) | YES |  | NULL |  |  |
| stock_salary_id | int(11) | YES |  | NULL |  |  |
| stock_salary_price | double(22,8) | YES |  | NULL |  |  |
| stock_employee_salary_id | int(11) | NO | PRI | 0 |  |  |
| stock_salary_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_employee_salary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

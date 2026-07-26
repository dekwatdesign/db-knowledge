# `stock_employee`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_employee_id | int(11) | NO | PRI | 0 |  |  |
| stock_employee_title | varchar(50) | YES |  | NULL |  |  |
| stock_employee_name | varchar(200) | YES |  | NULL |  |  |
| stock_employee_salary_total | double(22,8) | YES |  | NULL |  |  |
| stock_employee_position_id | int(11) | YES |  | NULL |  |  |
| stock_employee_identity_card | varchar(13) | YES |  | NULL |  |  |
| stock_employee_sex | varchar(10) | YES |  | NULL |  |  |
| stock_employee_department_id | varchar(11) | YES |  | NULL |  |  |
| stock_employee_status | int(11) | YES |  | NULL |  |  |
| stock_employee_code | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_employee_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_labor_cost_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_labor_cost_id | int(11) | YES |  | NULL |  |  |
| stock_labor_cost_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_employee_id | int(11) | YES |  | NULL |  |  |
| stock_saraly | double(22,8) | YES |  | NULL |  |  |
| stock_saraly_year | double(22,8) | YES |  | NULL |  |  |
| stock_amount_work_day | double(15,2) | YES |  | NULL |  |  |
| stock_amount_work_year | double(15,2) | YES |  | NULL |  |  |
| stock_amount_total_year | double(15,2) | YES |  | NULL |  |  |
| stock_ratio_qty | double(11,2) | YES |  | NULL |  |  |
| stock_labor_cost_total | double(22,8) | YES |  | NULL |  |  |
| stock_work_detail | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_labor_cost_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

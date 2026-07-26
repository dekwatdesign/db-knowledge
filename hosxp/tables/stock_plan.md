# `stock_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_plan_id | int(11) | NO | PRI | 0 |  |  |
| bdg_year | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| budget_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| budget_ceiling | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdg_year | bdg_year | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | stock_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

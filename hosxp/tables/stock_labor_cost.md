# `stock_labor_cost`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_labor_cost_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| stock_user_name | varchar(100) | YES |  | NULL |  |  |
| bdg_year | varchar(4) | YES |  | NULL |  |  |
| total_price | double(22,8) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_labor_cost_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

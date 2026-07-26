# `stock_capital_cost_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_capital_cost_id | int(11) | YES |  | NULL |  |  |
| stock_capital_cost_detail_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| item_price | double(22,8) | YES |  | NULL |  |  |
| total_price | double(22,8) | YES |  | NULL |  |  |
| item_year_start | varchar(4) | YES |  | NULL |  |  |
| item_usage_life | int(11) | YES |  | NULL |  |  |
| item_year_usage_life | int(11) | YES |  | NULL |  |  |
| stock_devalue_status | int(11) | YES |  | NULL |  |  |
| stock_devalue_price | double(22,8) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_capital_cost_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

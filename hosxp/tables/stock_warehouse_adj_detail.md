# `stock_warehouse_adj_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_warehouse_adj_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_warehouse_adj_head_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| stock_package_qty_balance | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| adjust_unit_cost | double(15,5) | YES |  | NULL |  |  |
| total_adjust_price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_warehouse_adj_detail | stock_warehouse_adj_head_id | no | 1 |
| PRIMARY | stock_warehouse_adj_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

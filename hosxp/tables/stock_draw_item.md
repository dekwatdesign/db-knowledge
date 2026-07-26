# `stock_draw_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| draw_qty | int(11) | YES |  | NULL |  |  |
| warehouse_remain_qty | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| sum_pay_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(30) | YES |  | NULL |  |  |
| item_max | int(11) | YES |  | NULL |  |  |
| warehouse_total_qty | int(11) | YES |  | NULL |  |  |
| item_barcode | varchar(30) | YES |  | NULL |  |  |
| item_remark | text | YES |  | NULL |  |  |
| item_totalrequest | int(11) | YES |  | NULL |  |  |
| sp_log | text | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_list_id | int(11) | YES |  | NULL |  |  |
| is_error | char(1) | YES |  | NULL |  |  |
| request_stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| request_qty_unit_qty | int(11) | YES |  | NULL |  |  |
| warehouse_remain_all_qty | int(11) | YES |  | NULL |  |  |
| req_stock_item_unit_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_draw_id | stock_draw_id | no | 1 |
| PRIMARY | stock_draw_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

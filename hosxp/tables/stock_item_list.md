# `stock_item_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_deliver_detail_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| item_list_qty | int(11) | YES |  | NULL |  |  |
| item_left_qty | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(100) | YES |  | NULL |  |  |
| item_expire | date | YES | MUL | NULL |  |  |
| item_list_status | char(1) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| item_price | double(15,8) | YES |  | NULL |  |  |
| item_unitqty | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| balance_qty | double(22,3) | YES |  | NULL |  |  |
| price_total | double(22,8) | YES |  | NULL |  |  |
| item_barcode | varchar(20) | YES |  | NULL |  |  |
| item_po_avg_cost | double(15,8) | YES |  | NULL |  |  |
| item_stock_avg_cost | double(15,8) | YES |  | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| adj_in_qty | int(11) | YES |  | NULL |  |  |
| adj_out_qty | int(11) | YES |  | NULL |  |  |
| adj_return_qty | int(11) | YES |  | NULL |  |  |
| draw_qty | int(11) | YES |  | NULL |  |  |
| borrow_qty | int(11) | YES |  | NULL |  |  |
| bestow_qty | int(11) | YES |  | NULL |  |  |
| item_expire_qty | int(11) | YES |  | NULL |  |  |
| real_left_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deliver_detail_id | stock_deliver_detail_id | no | 1 |
| ix_expire_date | item_expire | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_item_list_id_id | item_list_id | no | 1 |
| ix_item_list_id_id | item_id | no | 2 |
| ix_item_list_id_id | stock_deliver_detail_id | no | 3 |
| ix_item_list_id_id_index | item_id | no | 1 |
| ix_item_list_id_id_index | item_list_id | no | 2 |
| ix_item_list_id_id_index | stock_deliver_detail_id | no | 3 |
| ix_stock_po_id | stock_po_id | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | item_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

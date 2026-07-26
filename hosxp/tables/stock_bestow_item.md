# `stock_bestow_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_bestow_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_bestow_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| bestow_item_qty | int(11) | YES |  | NULL |  |  |
| bestow_item_status | char(1) | YES |  | NULL |  |  |
| bestow_unit_price | float | YES |  | NULL |  |  |
| bestow_item_unit | int(11) | YES |  | NULL |  |  |
| bestow_total_price | float | YES |  | NULL |  |  |
| bestow_item_lotno | varchar(50) | YES |  | NULL |  |  |
| bestow_item_expire | date | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| stock_warehouse_qty | int(11) | YES |  | NULL |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| lend_po_detail_id | int(11) | YES |  | NULL |  |  |
| total_rcv_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_stock_bestow_id | stock_bestow_id | no | 1 |
| PRIMARY | stock_bestow_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

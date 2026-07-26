# `stock_subtransfer_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subtransfer_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_subtransfer_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_subtransfer_qty | int(11) | YES |  | NULL |  |  |
| stock_subtransfer_price | double(22,8) | YES |  | NULL |  |  |
| stock_subtransfer_unitcost | double(22,8) | YES |  | NULL |  |  |
| remain | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| warehouse_remain_qty | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| item_barcode | varchar(50) | YES |  | NULL |  |  |
| remark | varchar(200) | YES |  | NULL |  |  |
| item_picture | blob | YES |  | NULL |  |  |
| stock_remain_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_subtransfer_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

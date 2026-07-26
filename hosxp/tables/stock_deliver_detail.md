# `stock_deliver_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_deliver_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_deliver_id | int(11) | YES | MUL | NULL |  |  |
| stock_po_detail_id | int(11) | YES | MUL | NULL |  |  |
| stock_deliver_qty | int(11) | YES |  | NULL |  |  |
| stock_deliver_price | double(15,5) | YES |  | NULL |  |  |
| stock_deliver_lotno | varchar(100) | YES |  | NULL |  |  |
| stock_deliver_expire | date | YES |  | NULL |  |  |
| empty_stock | char(1) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| balance_qty | double(22,3) | YES |  | NULL |  |  |
| item_unitprice | double(22,8) | YES |  | NULL |  |  |
| reg_no | varchar(20) | YES |  | NULL |  |  |
| deliver_note | varchar(50) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_po_price | double(15,3) | YES |  | NULL |  |  |
| stock_deliver_best_before_date | date | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| request_tag_no | varchar(200) | YES |  | NULL |  |  |
| recv_department_id | int(11) | YES |  | NULL |  |  |
| batch_no | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_deliver_id | stock_deliver_id | no | 1 |
| ix_stock_po_detail_id | stock_po_detail_id | no | 1 |
| PRIMARY | stock_deliver_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

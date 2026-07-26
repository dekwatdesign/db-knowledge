# `stock_po_special_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_special_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_special_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_po_qty | double(15,8) | YES |  | NULL |  |  |
| stock_po_price | double(15,8) | YES |  | NULL |  |  |
| stock_po_ref_price | double(15,8) | YES |  | NULL |  |  |
| stock_po_total | double(15,8) | YES |  | NULL |  |  |
| trade_name | varchar(150) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| stock_po_item_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_item_discount | int(11) | YES |  | NULL |  |  |
| stock_po_item_money_discount | double(15,8) | YES |  | NULL |  |  |
| stock_po_item_unit | varchar(50) | YES |  | NULL |  |  |
| stock_po_tax | char(1) | YES |  | NULL |  |  |
| stock_po_item_unitcost | double(15,8) | YES |  | NULL |  |  |
| stock_po_item_owner | int(11) | YES |  | NULL |  |  |
| po_detail_cancel | char(1) | YES |  | NULL |  |  |
| stock_po_before_discount_price | double(15,8) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| stock_deliver_qty | double(15,8) | YES |  | NULL |  |  |
| reference_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | double(15,8) | YES |  | NULL |  |  |
| stock_po_tax_cost | double(15,8) | YES |  | NULL |  |  |
| stock_po_last_price | double(15,8) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| item_drug_account | char(1) | YES |  | NULL |  |  |
| request_list_id | int(11) | YES |  | NULL |  |  |
| stock_co_po_detail_id | int(11) | YES |  | NULL |  |  |
| remain_qty | double(15,8) | YES |  | NULL |  |  |
| item_barcode | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_po_special_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

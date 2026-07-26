# `stock_po_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_po_qty | int(11) | YES |  | NULL |  |  |
| stock_po_price | double(22,8) | YES |  | NULL |  |  |
| stock_po_ref_price | double(22,8) | YES |  | NULL |  |  |
| stock_po_total | double(22,8) | YES |  | NULL |  |  |
| trade_name | varchar(150) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| stock_po_item_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_item_discount | double(15,3) | YES |  | NULL |  |  |
| stock_po_item_money_discount | double(22,8) | YES |  | NULL |  |  |
| stock_po_item_unit | varchar(50) | YES |  | NULL |  |  |
| stock_po_tax | char(1) | YES |  | NULL |  |  |
| stock_po_item_unitcost | double(22,8) | YES |  | NULL |  |  |
| stock_po_item_owner | int(11) | YES |  | NULL |  |  |
| po_detail_cancel | char(1) | YES |  | NULL |  |  |
| stock_po_before_discount_price | double(22,8) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| stock_deliver_qty | int(11) | YES |  | NULL |  |  |
| reference_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_po_tax_cost | double(22,8) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_po_last_price | double(22,8) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| item_drug_account | char(1) | YES |  | NULL |  |  |
| request_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_co_po_detail_id | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| item_barcode | varchar(30) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| stock_pkg_before_disc_price | double(22,8) | YES |  | NULL |  |  |
| stock_po_item_money_disc_tot | double(15,3) | YES |  | NULL |  |  |
| check_key | varchar(100) | YES | MUL | NULL |  |  |
| request_tag_no | varchar(200) | YES |  | NULL |  |  |
| item_avg_cost | double(15,3) | YES |  | NULL |  |  |
| stock_po_item_discount2 | double(15,3) | YES |  | NULL |  |  |
| stock_cost_center_id | int(11) | YES |  | NULL |  |  |
| stock_io_no | varchar(20) | YES |  | NULL |  |  |
| project_remark | varchar(200) | YES |  | NULL |  |  |
| stock_asset_no | varchar(20) | YES |  | NULL |  |  |
| project_no | varchar(20) | YES |  | NULL |  |  |
| wbs | varchar(100) | YES |  | NULL |  |  |
| exchange_item_id | int(11) | YES |  | NULL |  |  |
| exchange_item_unit_id | int(11) | YES |  | NULL |  |  |
| exchange_qty | int(11) | YES |  | NULL |  |  |
| exchange_remain_package_qty | int(11) | YES |  | NULL |  |  |
| po_norm_qty | double(15,3) | YES |  | NULL |  |  |
| po_norm_stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| sap_pr_no | varchar(50) | YES |  | NULL |  |  |
| stock_bestow_id | int(11) | YES | MUL | NULL |  |  |
| wh_remain_qty | double(15,3) | YES |  | NULL |  |  |
| dep_remain_qty | double(15,3) | YES |  | NULL |  |  |
| other_discount | double(15,5) | YES |  | NULL |  |  |
| stock_po_price_before_vat | double(15,5) | YES |  | NULL |  |  |
| stock_po_pc_type_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_contract_id | int(11) | YES |  | NULL |  |  |
| is_transfer_unit | char(1) | YES |  | NULL |  |  |
| back_order_qty | double(15,3) | YES |  | NULL |  |  |
| last_warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_contract_item_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_check_key | check_key | no | 1 |
| ix_detail_id_id | stock_po_detail_id | no | 1 |
| ix_detail_id_id | stock_po_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_reference_id | reference_id | no | 1 |
| ix_request_list_id | request_list_id | no | 1 |
| ix_stock_bestow_id | stock_bestow_id | no | 1 |
| ix_stock_item_unit_id | stock_item_unit_id | no | 1 |
| ix_stock_po_id | stock_po_id | no | 1 |
| ix_stock_vendor_contract_item_id | stock_vendor_contract_item_id | no | 1 |
| PRIMARY | stock_po_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

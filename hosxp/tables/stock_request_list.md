# `stock_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| request_list_id | int(11) | NO | PRI | 0 |  |  |
| request_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| request_left_qty | int(11) | YES |  | NULL |  |  |
| request_unit | varchar(11) | YES |  | NULL |  |  |
| request_list_unit_price | double(15,3) | YES |  | NULL |  |  |
| request_list_total_price | double(15,3) | YES |  | NULL |  |  |
| request_complete | char(1) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| incoming_balance_qty | int(11) | YES |  | NULL |  |  |
| rate_1_month | int(11) | YES |  | NULL |  |  |
| stock_item_unit_standard_price | double(15,3) | YES |  | NULL |  |  |
| package_price | double(22,8) | YES |  | NULL |  |  |
| last_price | double(15,3) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| use_stock_plan_bdg | char(1) | YES |  | NULL |  |  |
| stock_plan_total_amount | double(22,3) | YES |  | NULL |  |  |
| stock_plan_remain_amount | double(22,3) | YES |  | NULL |  |  |
| stock_plan_outgoing_amount | double(22,3) | YES |  | NULL |  |  |
| total_Price | double(22,3) | YES |  | NULL |  |  |
| item_barcode | varchar(30) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| stock_po_item_type_id | int(11) | YES |  | NULL |  |  |
| stock_request_item_discount | double(22,8) | YES |  | NULL |  |  |
| stock_request_item_money_discount | double(22,8) | YES |  | NULL |  |  |
| rate_3_month | int(11) | YES |  | NULL |  |  |
| trade_name | varchar(150) | YES |  | NULL |  |  |
| total_plan_qty | int(11) | YES |  | NULL |  |  |
| total_po_qty | int(11) | YES |  | NULL |  |  |
| plan_remain_qty | int(11) | YES |  | NULL |  |  |
| forcast_month | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| stock_dep_request_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_po_pc_type_id | int(11) | YES |  | NULL |  |  |
| trimester | int(11) | YES |  | NULL |  |  |
| trimester_plan_qty | int(11) | YES |  | NULL |  |  |
| trimester_plan_amount | double(15,3) | YES |  | NULL |  |  |
| trimester_plan_use_qty | int(11) | YES |  | NULL |  |  |
| trimester_plan_use_amount | double(15,3) | YES |  | NULL |  |  |
| trimester_plan_remain_qty | int(11) | YES |  | NULL |  |  |
| trimester_plan_remain_amount | double(15,3) | YES |  | NULL |  |  |
| vat_price | double(15,3) | YES |  | NULL |  |  |
| total_price_before_vat | double(15,3) | YES |  | NULL |  |  |
| last_warehouse_id | int(11) | YES |  | NULL |  |  |
| total_plan_amount | double(22,3) | YES |  | NULL |  |  |
| item_flag | int(11) | YES |  | NULL |  |  |
| stock_vendor_contract_id | int(11) | YES |  | NULL |  |  |
| contract_remain_package_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_request_id | request_id | no | 1 |
| ix_stock_dep_request_list_id | stock_dep_request_list_id | no | 1 |
| ix_stock_vendor_id | stock_vendor_id | no | 1 |
| PRIMARY | request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

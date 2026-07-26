# `inv_durable_good`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_code | varchar(30) | YES |  | NULL |  |  |
| inv_durable_good_name | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_category_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| dep_recieve_date | date | YES |  | NULL |  |  |
| inv_durable_good_unit_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_color | varchar(30) | YES |  | NULL |  |  |
| inv_durable_good_supplier_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_generation | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_size | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_recieve_date | date | YES |  | NULL |  |  |
| inv_durable_good_picture | longblob | YES |  | NULL |  |  |
| inv_durable_good_blame | text | YES |  | NULL |  |  |
| recieve_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_price_rent | float | YES |  | NULL |  |  |
| inv_durable_good_price_cost | double(22,3) | YES |  | NULL |  |  |
| inv_durable_good_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rent_id | int(11) | YES |  | NULL |  |  |
| insurance_terms | text | YES |  | NULL |  |  |
| insurance_date | date | YES |  | NULL |  |  |
| insurance_expire | date | YES |  | NULL |  |  |
| inv_durable_good_insurer_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_budgeter_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_lastupdate | date | YES |  | NULL |  |  |
| inv_durable_good_number | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_serial_no | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_equipment | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_other | text | YES |  | NULL |  |  |
| inv_durable_good_frame_number | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_dch_date | date | YES |  | NULL |  |  |
| inv_durable_good_dch_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_dch_refer_doc | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_dch_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_dch_profit | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_dch | char(1) | YES |  | NULL |  |  |
| inv_durable_good_insurance_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_insurance_doc | blob | YES |  | NULL |  |  |
| inv_durable_good_last_update | date | YES |  | NULL |  |  |
| inv_durable_good_rent_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_staff | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_bail_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_bail_percent | int(11) | YES |  | NULL |  |  |
| inv_durable_good_bail_date | date | YES |  | NULL |  |  |
| bail_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_bail_staff | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_bail_doc | blob | YES |  | NULL |  |  |
| insurance_filename | text | YES |  | NULL |  |  |
| inv_durable_good_bail_filename | text | YES |  | NULL |  |  |
| inv_durable_good_depic_year | int(11) | YES |  | NULL |  |  |
| inv_durable_good_ware_code | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_invoice | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_note | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_depric_pc | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_seller_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_brand | varchar(150) | YES |  | NULL |  |  |
| inv_durable_good_insure_price | double(15,2) | YES |  | NULL |  |  |
| rent_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_asset_code | varchar(20) | YES |  | NULL |  |  |
| asset_sap_code | varchar(20) | YES |  | NULL |  |  |
| durable_req_cost_id | varchar(20) | YES |  | NULL |  |  |
| durable_sap_cost_id | varchar(20) | YES |  | NULL |  |  |
| durable_depric_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_code | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_oldcode | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_amount | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_unit | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_name | text | YES |  | NULL |  |  |
| inv_durable_good_sap_no | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_sap_type | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_sap_group_id | char(5) | YES |  | NULL |  |  |
| inv_durable_good_sap_cate_id | char(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_supplier | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_sap_dchdate | date | YES |  | NULL |  |  |
| inv_durable_good_sap_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_rcvdate | date | YES |  | NULL |  |  |
| inv_durable_good_sap_agey | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_agem | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_depric | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_cost_desc | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_sap_dep | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_sap_dep_desc | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_sap_room_id | char(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_emp | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_year | varchar(4) | YES |  | NULL |  |  |
| inv_durable_good_kind_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_desc_id | int(11) | YES |  | NULL |  |  |
| inv_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_level_code | varchar(2) | YES |  | NULL |  |  |
| salvage_value | double(15,2) | YES |  | NULL |  |  |
| calc_depreciation | char(1) | YES |  | NULL |  |  |
| depreciation_method_type_id | int(11) | YES |  | NULL |  |  |
| depreciation_end_date | date | YES |  | NULL |  |  |
| depreciation_begin_date | datetime | YES |  | NULL |  |  |
| ass_total_amount | double(15,2) | YES |  | NULL |  |  |
| scan_barcode_staff | varchar(50) | YES |  | NULL |  |  |
| scan_barcode_update | datetime | YES |  | NULL |  |  |
| po_number | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_gfmis | varchar(50) | YES |  | NULL |  |  |
| inv_durable_inv_category_id | int(11) | YES |  | NULL |  |  |
| inv_durable_inv_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_inv_kind_id | int(11) | YES |  | NULL |  |  |
| inv_durable_inv_desc_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_old_code | varchar(100) | YES |  | NULL |  |  |
| inv_durable_last_maintain_date | date | YES |  | NULL |  |  |
| inv_durable_code_incomplete | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

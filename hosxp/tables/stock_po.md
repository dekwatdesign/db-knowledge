# `stock_po`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_po_no | varchar(30) | YES | MUL | NULL |  |  |
| stock_po_date | date | YES | MUL | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| budget_id | int(11) | YES | MUL | NULL |  |  |
| item_type | int(11) | YES |  | NULL |  |  |
| purchase_type | int(11) | YES |  | NULL |  |  |
| paid_status_id | int(11) | YES |  | NULL |  |  |
| stock_po_confirm | char(1) | YES |  | NULL |  |  |
| po_amount | double(15,3) | YES |  | NULL |  |  |
| po_item_amount | int(11) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES | MUL | NULL |  |  |
| supplier_agent_id | int(11) | YES |  | NULL |  |  |
| deliver_count | int(11) | YES |  | NULL |  |  |
| deliver_complete | char(1) | YES |  | NULL |  |  |
| po_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_tax | char(1) | YES |  | NULL |  |  |
| stock_po_vat | double(15,3) | YES |  | NULL |  |  |
| stock_po_discount | int(11) | YES |  | NULL |  |  |
| stock_po_discount_total | double(15,3) | YES |  | NULL |  |  |
| deliver_cancel | char(1) | YES |  | NULL |  |  |
| po_cancel | char(1) | YES | MUL | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| reference_id | int(11) | YES | MUL | NULL |  |  |
| delivery_ref_date | date | YES | MUL | NULL |  |  |
| pr_ref_no | varchar(100) | YES |  | NULL |  |  |
| receive_wo_po | char(1) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| authorize_staff | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| authorize_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| deliver_day | int(11) | YES |  | NULL |  |  |
| stock_co_po_type_id | int(11) | YES |  | NULL |  |  |
| offer_date | date | YES |  | NULL |  |  |
| cheque_no | varchar(50) | YES | MUL | NULL |  |  |
| cheque_date | date | YES |  | NULL |  |  |
| payment_no | varchar(30) | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| stock_po_type | int(11) | YES |  | NULL |  |  |
| transport_day | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_budget_use | double(15,3) | YES |  | NULL |  |  |
| stock_budget_remain | double(15,3) | YES |  | NULL |  |  |
| stock_budget_price | double(15,3) | YES |  | NULL |  |  |
| remark_1 | varchar(100) | YES |  | NULL |  |  |
| remark_2 | varchar(100) | YES |  | NULL |  |  |
| remark_3 | varchar(100) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_po_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| significant_number | varchar(50) | YES | MUL | NULL |  |  |
| is_temp | char(1) | YES |  | NULL |  |  |
| request_tag_no | varchar(20) | YES | MUL | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| stock_paid_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_discount_after_vat | double(15,3) | YES |  | NULL |  |  |
| stock_po_vat_amount | double(15,3) | YES |  | NULL |  |  |
| po_doc_no | varchar(100) | YES |  | NULL |  |  |
| stock_po_ref_id | int(11) | YES | MUL | NULL |  |  |
| stock_vendor_disc_type_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_disc_percent | double(15,3) | YES |  | NULL |  |  |
| paid_status_update_datetime | datetime | YES |  | NULL |  |  |
| stock_po_before_discount_amt | double(15,3) | YES |  | NULL |  |  |
| stock_po_vendor_disc_amt | double(15,3) | YES |  | NULL |  |  |
| stock_po_before_vat_amt | double(15,3) | YES |  | NULL |  |  |
| po_deliver_recv_date | date | YES |  | NULL |  |  |
| po_deliver_recv_time | time | YES |  | NULL |  |  |
| po_deliver_inv_stat_type_id | int(11) | YES |  | NULL |  |  |
| po_deliver_gd_stat_type_id | int(11) | YES |  | NULL |  |  |
| po_deliver_confirm_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_manual_disc_amt | double(15,3) | YES |  | NULL |  |  |
| stock_po_adj_before_vat | double(15,3) | YES |  | NULL |  |  |
| ref_request_id | int(11) | YES | MUL | NULL |  |  |
| po_est_date | date | YES |  | NULL |  |  |
| stock_po_priority_type_id | int(11) | YES |  | NULL |  |  |
| po_est_deliver_date | date | YES |  | NULL |  |  |
| po_contract_no | varchar(100) | YES |  | NULL |  |  |
| po_deliver_amount | double(15,3) | YES |  | NULL |  |  |
| deliver_stop | char(1) | YES |  | NULL |  |  |
| stock_budget_transfer | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_contract_id | int(11) | YES | MUL | NULL |  |  |
| deliver_stop_date | date | YES |  | NULL |  |  |
| po_approval_date | date | YES |  | NULL |  |  |
| price_inc_vat | char(1) | YES |  | NULL |  |  |
| deliver_no_list | varchar(200) | YES |  | NULL |  |  |
| egp_project_no | varchar(20) | YES |  | NULL |  |  |
| egp_control_no | varchar(20) | YES |  | NULL |  |  |
| gfmis_po_no | varchar(20) | YES |  | NULL |  |  |
| request_no_list | varchar(200) | YES |  | NULL |  |  |
| stock_budget_type_id | int(11) | YES |  | NULL |  |  |
| acc_posted | char(1) | YES | MUL | NULL |  |  |
| acc_posted_datetime | datetime | YES |  | NULL |  |  |
| stock_deliver_doc_no_list | varchar(200) | YES |  | NULL |  |  |
| round_total_price | char(1) | YES |  | NULL |  |  |
| use_no_discount | char(1) | YES |  | NULL |  |  |
| fine_amount | double(22,2) | YES |  | NULL |  |  |
| stock_po_adj_vat | double(15,2) | YES |  | NULL |  |  |
| stock_plan_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_budget_year | budget_id | no | 1 |
| ix_budget_year | bdg_year | no | 2 |
| ix_budget_year_index | bdg_year | no | 1 |
| ix_budget_year_index | budget_id | no | 2 |
| ix_checkno | cheque_no | no | 1 |
| ix_contract_id | stock_vendor_contract_id | no | 1 |
| ix_delivery_ref_date | delivery_ref_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_po_date_posted | acc_posted | no | 1 |
| ix_po_date_posted | deliver_complete | no | 2 |
| ix_po_date_posted | stock_po_date | no | 3 |
| ix_po_id_cancel | stock_po_id | no | 1 |
| ix_po_id_cancel | po_cancel | no | 2 |
| ix_po_id_cancel_index | po_cancel | no | 1 |
| ix_po_id_cancel_index | stock_po_id | no | 2 |
| ix_po_id_supplier_id | stock_po_id | no | 1 |
| ix_po_id_supplier_id | supplier_id | no | 2 |
| ix_reference_id | reference_id | no | 1 |
| ix_ref_request_id | ref_request_id | no | 1 |
| ix_request_tag_no | request_tag_no | no | 1 |
| ix_significant_number | significant_number | no | 1 |
| ix_stock_po_date | stock_po_date | no | 1 |
| ix_stock_po_no | stock_po_no | no | 1 |
| ix_stock_po_ref_id | stock_po_ref_id | no | 1 |
| PRIMARY | stock_po_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

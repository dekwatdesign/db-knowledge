# `stock_po_special`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_special_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_po_no | varchar(30) | YES |  | NULL |  |  |
| stock_po_date | date | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| budget_id | int(11) | YES |  | NULL |  |  |
| item_type | int(11) | YES |  | NULL |  |  |
| purchase_type | int(11) | YES |  | NULL |  |  |
| paid_status_id | int(11) | YES |  | NULL |  |  |
| stock_po_confirm | char(1) | YES |  | NULL |  |  |
| po_amount | double(15,3) | YES |  | NULL |  |  |
| po_item_amount | double(15,3) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| supplier_agent_id | int(11) | YES |  | NULL |  |  |
| deliver_count | double(15,8) | YES |  | NULL |  |  |
| deliver_complete | char(1) | YES |  | NULL |  |  |
| po_type_id | int(11) | YES |  | NULL |  |  |
| stock_po_tax | char(1) | YES |  | NULL |  |  |
| stock_po_vat | double(22,3) | YES |  | NULL |  |  |
| stock_po_discount | double(22,3) | YES |  | NULL |  |  |
| stock_po_discount_total | double(22,3) | YES |  | NULL |  |  |
| deliver_cancel | char(1) | YES |  | NULL |  |  |
| po_cancel | char(1) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| reference_id | int(11) | YES |  | NULL |  |  |
| delivery_ref_date | date | YES |  | NULL |  |  |
| pr_ref_no | varchar(100) | YES |  | NULL |  |  |
| receive_wo_po | char(1) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| authorize_staff | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| authorize_datetime | datetime | YES |  | NULL |  |  |
| deliver_day | int(11) | YES |  | NULL |  |  |
| stock_co_po_type_id | int(11) | YES |  | NULL |  |  |
| offer_date | date | YES |  | NULL |  |  |
| cheque_no | varchar(50) | YES |  | NULL |  |  |
| cheque_date | date | YES |  | NULL |  |  |
| payment_no | varchar(30) | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| stock_po_type | int(11) | YES |  | NULL |  |  |
| transport_day | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_budget_use | double(22,8) | YES |  | NULL |  |  |
| stock_budget_remain | double(22,8) | YES |  | NULL |  |  |
| stock_budget_price | double(22,8) | YES |  | NULL |  |  |
| remark_1 | varchar(100) | YES |  | NULL |  |  |
| remark_2 | varchar(100) | YES |  | NULL |  |  |
| remark_3 | varchar(100) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_po_special_document_id | varchar(50) | YES |  | NULL |  |  |
| project_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_po_special_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

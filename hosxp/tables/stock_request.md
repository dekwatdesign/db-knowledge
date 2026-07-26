# `stock_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| request_id | int(11) | NO | PRI | 0 |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_no | varchar(50) | YES |  | NULL |  |  |
| request_receive_date | date | YES |  | NULL |  |  |
| request_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| request_complete | char(1) | YES | MUL | NULL |  |  |
| use_date | date | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| stock_subject | varchar(150) | YES |  | NULL |  |  |
| stock_subject_person | varchar(150) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| transport_day | int(11) | YES |  | NULL |  |  |
| budget_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_request_doc_id | varchar(30) | YES |  | NULL |  |  |
| project_id | int(11) | YES |  | NULL |  |  |
| stock_user_approve_id | int(11) | YES |  | NULL |  |  |
| stock_approve_date | date | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_request_document_id | varchar(50) | YES |  | NULL |  |  |
| project_plan_id | int(11) | YES |  | NULL |  |  |
| request_all_complete | char(1) | YES |  | NULL |  |  |
| budget_runno | int(11) | YES |  | NULL |  |  |
| approve | varchar(1) | YES |  | NULL |  |  |
| request_tag_no | varchar(20) | YES | MUL | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| purchase_type | int(11) | YES |  | NULL |  |  |
| stock_budget_total | double(15,3) | YES |  | NULL |  |  |
| stock_budget_use | double(15,3) | YES |  | NULL |  |  |
| stock_budget_remain | double(15,3) | YES |  | NULL |  |  |
| trimester | int(11) | YES |  | NULL |  |  |
| vat_percent | double(15,3) | YES |  | NULL |  |  |
| request_reason | varchar(200) | YES |  | NULL |  |  |
| request_total_price | double(15,3) | YES |  | NULL |  |  |
| request_item_count | int(11) | YES |  | NULL |  |  |
| stock_budget_pr_use | double(15,3) | YES |  | NULL |  |  |
| stock_budget_pr_remain | double(15,3) | YES |  | NULL |  |  |
| officer_list | varchar(250) | YES |  | NULL |  |  |
| stock_po_no_list | varchar(200) | YES |  | NULL |  |  |
| stock_budget_type_id | int(11) | YES |  | NULL |  |  |
| dep_request_no_list | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_po_id | stock_po_id | no | 1 |
| ix_request_complete | request_complete | no | 1 |
| ix_request_date | request_date | no | 1 |
| ix_request_tag_no | request_tag_no | no | 1 |
| ix_warehouse_id | request_warehouse_id | no | 1 |
| PRIMARY | request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

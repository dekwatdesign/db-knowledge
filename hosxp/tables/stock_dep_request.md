# `stock_dep_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_dep_request_type_id | int(11) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| request_stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_dep_request_note | varchar(200) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| reject | char(1) | YES |  | NULL |  |  |
| approve_reject_datetime | datetime | YES |  | NULL |  |  |
| approve_stock_user_id | int(11) | YES |  | NULL |  |  |
| approve_note | varchar(200) | YES |  | NULL |  |  |
| request_tag_no | varchar(25) | YES |  | NULL |  |  |
| stock_sub_department_id | int(11) | YES |  | NULL |  |  |
| pr_tag_no | varchar(25) | YES |  | NULL |  |  |
| request_emp_id | int(11) | YES |  | NULL |  |  |
| stock_cost_center_id | int(11) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| done_pr | char(1) | YES |  | NULL |  |  |
| done_po | char(1) | YES |  | NULL |  |  |
| item_type | int(11) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| request_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| stock_authorize_type_id | int(11) | YES |  | NULL |  |  |
| stock_priority_id | int(11) | YES |  | NULL |  |  |
| a_select | char(1) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| stock_dep_request_status_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| wbs | varchar(100) | YES |  | NULL |  |  |
| authorize_user_list | varchar(200) | YES |  | NULL |  |  |
| dep_request_no | varchar(25) | YES | MUL | NULL |  |  |
| stock_budget_type_id | int(11) | YES |  | NULL |  |  |
| stock_budget_id | int(11) | YES |  | NULL |  |  |
| request_no_list | varchar(100) | YES |  | NULL |  |  |
| dep_request_total_price | double(22,2) | YES |  | NULL |  |  |
| doc_request_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dep_request_no | dep_request_no | no | 1 |
| PRIMARY | stock_dep_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_subdraw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subdraw_id | int(11) | NO | PRI | 0 |  |  |
| stock_subdraw_date | date | YES | MUL | NULL |  |  |
| stock_subdraw_no | varchar(50) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_request_date | date | YES |  | NULL |  |  |
| stock_subdraw_officer_name | varchar(100) | YES |  | NULL |  |  |
| stock_subdraw_approve_name | varchar(100) | YES |  | NULL |  |  |
| stock_subdraw_approve | char(1) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| stock_subdraw_complete | char(1) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| stock_subdraw_type_id | int(11) | YES |  | NULL |  |  |
| stock_draw_ref_no | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_subdraw_id | int(11) | YES | MUL | NULL |  |  |
| subdraw_note | varchar(250) | YES |  | NULL |  |  |
| stock_subdraw_complete_user_id | int(11) | YES |  | NULL |  |  |
| project_id | varchar(20) | YES |  | NULL |  |  |
| project_plan_id | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_subdraw_document_id | varchar(50) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| stauts_pr | int(11) | YES |  | NULL |  |  |
| stock_subdraw_approve_date | date | YES |  | NULL |  |  |
| status_pr | int(11) | YES |  | NULL |  |  |
| draw_expire | char(1) | YES |  | NULL |  |  |
| request_officer_id | int(11) | YES |  | NULL |  |  |
| approve_officer_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_suspend | char(1) | YES |  | NULL |  |  |
| stock_draw_count | int(11) | YES |  | NULL |  |  |
| enable_qty0 | char(1) | YES |  | NULL |  |  |
| subdraw_cancel | char(1) | YES |  | NULL |  |  |
| stock_subdraw_deliver_confirm | char(1) | YES |  | NULL |  |  |
| stock_subdraw_approve2 | char(1) | YES |  | NULL |  |  |
| approve2_officer_id | int(11) | YES |  | NULL |  |  |
| approve2_datetime | datetime | YES |  | NULL |  |  |
| date_use_d1 | date | YES |  | NULL |  |  |
| date_use_d2 | date | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| approve1_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_online_subdraw_id | online_subdraw_id | no | 1 |
| ix_stock_dubdraw_date | stock_subdraw_date | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | stock_subdraw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

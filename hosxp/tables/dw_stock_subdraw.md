# `dw_stock_subdraw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subdraw_id | int(11) | NO | PRI | 0 |  |  |
| stock_subdraw_date | date | YES |  | NULL |  |  |
| stock_subdraw_no | varchar(50) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_request_date | date | YES |  | NULL |  |  |
| stock_subdraw_officer_name | varchar(100) | YES |  | NULL |  |  |
| stock_subdraw_approve_name | varchar(100) | YES |  | NULL |  |  |
| stock_subdraw_approve | char(1) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_complete | char(1) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| stock_subdraw_type_id | int(11) | YES |  | NULL |  |  |
| stock_draw_ref_no | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| warehouse_hospcode | char(5) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| hospital_process_complete | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_whospcode | warehouse_hospcode | no | 1 |
| PRIMARY | stock_subdraw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

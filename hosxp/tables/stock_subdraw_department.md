# `stock_subdraw_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subdraw_department_id | int(11) | NO | PRI | 0 |  |  |
| stock_subdraw_department_date | date | YES |  | NULL |  |  |
| stock_subdraw_department_no | varchar(20) | YES |  | NULL |  |  |
| department_id_receive | int(11) | YES |  | NULL |  |  |
| department_id_issue | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_user_officer_name | varchar(100) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(15,8) | YES |  | NULL |  |  |
| subdraw_note | varchar(300) | YES |  | NULL |  |  |
| stock_subdraw_status | char(1) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_subdraw_department_document_id | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_subdraw_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

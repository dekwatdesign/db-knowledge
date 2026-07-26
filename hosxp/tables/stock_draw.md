# `stock_draw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_date | date | YES | MUL | NULL |  |  |
| stock_draw_no | varchar(50) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_receive_date | date | YES |  | NULL |  |  |
| stock_draw_officer_name | varchar(100) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_draw_complete | char(1) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(22,8) | YES |  | NULL |  |  |
| stock_subdraw_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_type_id | int(11) | YES |  | NULL |  |  |
| stock_draw_ref_no | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_transfer_draw_id | varchar(11) | YES | MUL | NULL |  |  |
| draw_cancel | char(1) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_draw_document_id | varchar(50) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| sp_status | varchar(100) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| ref_stock_deliver_id | int(11) | YES | MUL | NULL |  |  |
| draw_expire | char(1) | YES |  | NULL |  |  |
| stock_draw_deliver_confirm | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_draw_dep_id_date | stock_draw_id | no | 1 |
| ix_draw_dep_id_date | department_id | no | 2 |
| ix_draw_dep_id_date | stock_draw_date | no | 3 |
| ix_draw_dep_id_date_index | department_id | no | 1 |
| ix_draw_dep_id_date_index | stock_draw_date | no | 2 |
| ix_draw_dep_id_date_index | stock_draw_id | no | 3 |
| ix_draw_id_date | stock_draw_id | no | 1 |
| ix_draw_id_date | stock_draw_date | no | 2 |
| ix_draw_id_date_index | stock_draw_date | no | 1 |
| ix_draw_id_date_index | stock_draw_id | no | 2 |
| ix_draw_id_dep_id | stock_draw_id | no | 1 |
| ix_draw_id_dep_id | department_id | no | 2 |
| ix_draw_id_dep_id_index | department_id | no | 1 |
| ix_draw_id_dep_id_index | stock_draw_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_rsdi | ref_stock_deliver_id | no | 1 |
| ix_stock_draw_date | stock_draw_date | no | 1 |
| ix_stock_draw_no | stock_draw_no | no | 1 |
| ix_stock_draw_refno | stock_draw_ref_no | no | 1 |
| ix_stock_sub_draw_id | stock_subdraw_id | no | 1 |
| ix_stock_transfer_draw_id | stock_transfer_draw_id | no | 1 |
| PRIMARY | stock_draw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

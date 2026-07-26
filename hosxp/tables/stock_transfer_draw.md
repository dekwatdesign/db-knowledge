# `stock_transfer_draw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_transfer_draw_id | int(11) | NO | PRI | 0 |  |  |
| stock_transfer_draw_date | date | YES | MUL | NULL |  |  |
| stock_transfer_draw_no | varchar(30) | YES |  | NULL |  |  |
| stock_transfer_draw_office_name | varchar(100) | YES |  | NULL |  |  |
| stock_transfer_draw_user_id | int(11) | YES |  | NULL |  |  |
| stock_transfer_draw_departmant_id_start | int(11) | YES |  | NULL |  |  |
| stock_transfer_draw_departmant_id_end | int(11) | YES |  | NULL |  |  |
| stock_transfer_draw_complete | varchar(2) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | float | YES |  | NULL |  |  |
| stock_subdraw_department_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_transfer_draw_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| department_id_from | int(11) | YES |  | NULL |  |  |
| department_id_to | int(11) | YES |  | NULL |  |  |
| department_id_start | int(11) | YES |  | NULL |  |  |
| draw_transfer_date | date | YES |  | NULL |  |  |
| draw_transfer_docno | varchar(100) | YES | MUL | NULL |  |  |
| stock_transfer_recv_complete | char(1) | YES |  | NULL |  |  |
| stock_transfer_recv_date | date | YES |  | NULL |  |  |
| draw_transfer_docno_number | varchar(10) | YES |  | NULL |  |  |
| draw_user_id | int(11) | YES |  | NULL |  |  |
| approve_user_id | int(11) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| approve_datetime | datetime | YES |  | NULL |  |  |
| draw_expire | char(1) | YES |  | NULL |  |  |
| no_check_qty | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_draw_transfer_docno | draw_transfer_docno | no | 1 |
| ix_draw_transfer_drawdate | stock_transfer_draw_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_transfer_draw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

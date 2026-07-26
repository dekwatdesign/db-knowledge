# `stock_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_id | int(11) | YES |  | NULL |  |  |
| stock_return_date | date | YES | MUL | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| stock_return_no | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_return_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| warehouse_receive_ok | char(1) | YES |  | NULL |  |  |
| warehouse_receive_datetime | datetime | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| confirm_return | char(1) | YES |  | NULL |  |  |
| stock_po_ref_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_return_date | stock_return_date | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | stock_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_subtransfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subtransfer_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_transfer_id | int(11) | YES |  | NULL |  |  |
| warehouse_receive_id | int(11) | YES |  | NULL |  |  |
| stock_subtransfer_date | date | YES | MUL | NULL |  |  |
| stock_subtransfer_no | varchar(30) | YES |  | NULL |  |  |
| stock_subtransfer_receive_date | date | YES |  | NULL |  |  |
| stock_subtransfer_approve_name | varchar(200) | YES |  | NULL |  |  |
| stock_subtransfer_approve | char(1) | YES | MUL | NULL |  |  |
| stock_subtransfer_complete | char(1) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(22,8) | YES |  | NULL |  |  |
| stock_subtransfer_note | text | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(2) | YES |  | NULL |  |  |
| stock_subtransfer_document_id | varchar(50) | YES |  | NULL |  |  |
| stock_subtransfer_officer_name | varchar(200) | YES |  | NULL |  |  |
| stock_user_approve_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_subtransfer_date | stock_subtransfer_date | no | 1 |
| ix_stock_subtransfer_date_a_c | stock_subtransfer_date | no | 1 |
| ix_stock_subtransfer_date_a_c | stock_subtransfer_approve | no | 2 |
| ix_stock_subtransfer_date_a_c | stock_subtransfer_complete | no | 3 |
| ix_stock_subtransfer_date_a_c_index | stock_subtransfer_approve | no | 1 |
| ix_stock_subtransfer_date_a_c_index | stock_subtransfer_complete | no | 2 |
| ix_stock_subtransfer_date_a_c_index | stock_subtransfer_date | no | 3 |
| ix_stock_subtransfer_date_w | stock_subtransfer_date | no | 1 |
| ix_stock_subtransfer_date_w | warehouse_transfer_id | no | 2 |
| PRIMARY | stock_subtransfer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

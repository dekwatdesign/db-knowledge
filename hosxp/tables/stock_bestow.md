# `stock_bestow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_bestow_id | int(11) | NO | PRI | 0 |  |  |
| stock_bestow_no | varchar(255) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| stock_bestow_date | date | YES | MUL | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| return_complete | char(1) | YES |  | NULL |  |  |
| Cancel_confirm | char(1) | YES |  | NULL |  |  |
| Cancel_reason | varchar(100) | YES |  | NULL |  |  |
| stock_bestow_status | varchar(1) | YES |  | NULL |  |  |
| stock_borrow_no | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(255) | YES | MUL | NULL |  |  |
| bestow_count | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_bestow_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| cancel_resaon | char(1) | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| stock_bestow_type_id | int(11) | YES |  | NULL |  |  |
| stock_lend_id | int(11) | YES | MUL | NULL |  |  |
| stock_bestow_note | text | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdate | stock_bestow_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_lend_id | stock_lend_id | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | stock_bestow_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

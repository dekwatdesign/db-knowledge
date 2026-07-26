# `stock_borrow_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_borrow_return_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_borrow_return_no | varchar(40) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| stock_borrow_return_date | date | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_borrow_id | int(11) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_borrow_return_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_borrow_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

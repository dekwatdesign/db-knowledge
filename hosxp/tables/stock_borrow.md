# `stock_borrow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| borrow_id | int(11) | NO | PRI | 0 |  |  |
| stock_deliver_no | varchar(50) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| borrow_date | date | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| return_complete | char(1) | YES |  | NULL |  |  |
| cancel_confirm | char(1) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| stock_borrow_status | char(1) | YES |  | NULL |  |  |
| stock_borrow_no | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| borrow_qty | int(11) | YES |  | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| borrow_remark | varchar(255) | YES |  | NULL |  |  |
| stock_borrow_status_remark_id | int(11) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_borrow_document_id | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | borrow_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

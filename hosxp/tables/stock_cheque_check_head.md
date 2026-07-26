# `stock_cheque_check_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cheque_check_head_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_cheque_check_date | date | YES | MUL | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_deliver_date | date | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| stock_user_name | varchar(200) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| stock_cheque_check_no | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| stock_cheque_check_head_amount | double(18,4) | YES |  | NULL |  |  |
| stock_cheque_check_head_status | varchar(1) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_cheque_check_date | stock_cheque_check_date | no | 1 |
| PRIMARY | stock_cheque_check_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

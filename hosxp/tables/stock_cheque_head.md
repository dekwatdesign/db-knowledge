# `stock_cheque_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cheque_head_id | int(11) | NO | PRI | 0 |  |  |
| stock_cheque_date | date | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_start_date | date | YES |  | NULL |  |  |
| stock_end_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| stock_cheque_check_head_id | int(11) | YES |  | NULL |  |  |
| stock_cheque_status | varchar(2) | YES |  | NULL |  |  |
| stock_cheque_no | varchar(50) | YES |  | NULL |  |  |
| stock_cheque_payment_no | varchar(50) | YES |  | NULL |  |  |
| supplier_agent_name | varchar(150) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| stock_cheque_head_date | date | YES |  | NULL |  |  |
| stock_cheque_taxrate_id | int(11) | YES |  | NULL |  |  |
| stock_cheque_head_amount | double(15,3) | YES |  | NULL |  |  |
| stock_cheque_head_vatamt | double(15,3) | YES |  | NULL |  |  |
| stock_cheque_head_netamount | double(15,3) | YES |  | NULL |  |  |
| stock_cheque_head_wt | varchar(1) | YES |  | NULL |  |  |
| stock_cheque_head_wtamount | double(15,3) | YES |  | NULL |  |  |
| stock_cheque_head_offerdate | date | YES |  | NULL |  |  |
| stock_cheque_head_offerdate_invoices | varchar(20) | YES |  | NULL |  |  |
| stock_cheque_head_penalty | double(18,4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_cheque_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

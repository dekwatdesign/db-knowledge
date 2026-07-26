# `thai_payment_trans`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| thai_payment_trans_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| merchantid | varchar(100) | YES |  | NULL |  |  |
| orderid | varchar(100) | YES |  | NULL |  |  |
| response_code | varchar(100) | YES |  | NULL |  |  |
| response_message | varchar(255) | YES |  | NULL |  |  |
| orderid_ref | varchar(100) | YES |  | NULL |  |  |
| txn_amount | double(15,2) | YES |  | NULL |  |  |
| txn_date | date | YES |  | NULL |  |  |
| txn_time | time | YES |  | NULL |  |  |
| order_desc | varchar(150) | YES |  | NULL |  |  |
| bank_no | varchar(100) | YES |  | NULL |  |  |
| pay_type | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | thai_payment_trans_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `pay_debt_rcv_payment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pay_debt_rcv_payment_id | int(11) | NO | PRI | 0 |  |  |
| receipt_no | varchar(50) | YES |  | NULL |  |  |
| receipt_date | date | YES |  | NULL |  |  |
| receipt_time | time | YES |  | NULL |  |  |
| receive_date | date | YES | MUL | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| code | varchar(15) | YES |  | NULL |  |  |
| finance_pay_type_id | int(11) | YES |  | NULL |  |  |
| hospital_department_bank_id | int(11) | YES |  | NULL |  |  |
| rcpt_book_no | int(11) | YES |  | NULL |  |  |
| invoice_count | int(11) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| create_at | datetime | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| stock_vendor_name | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_tax | varchar(20) | YES |  | NULL |  |  |
| stock_vendor_tax_branch | varchar(20) | YES |  | NULL |  |  |
| stock_vendor_addr | varchar(250) | YES |  | NULL |  |  |
| stock_vendor_phone | varchar(100) | YES |  | NULL |  |  |
| finance_pay_type_name | varchar(100) | YES |  | NULL |  |  |
| hospital_department_bank_name | varchar(200) | YES |  | NULL |  |  |
| bank_branch | varchar(150) | YES |  | NULL |  |  |
| bank_account_number | varchar(50) | YES |  | NULL |  |  |
| doctor_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_receive_date | receive_date | no | 1 |
| PRIMARY | pay_debt_rcv_payment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

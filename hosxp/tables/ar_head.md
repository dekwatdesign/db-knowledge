# `ar_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ar_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| debt_amount | double(15,3) | YES |  | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| company_id | int(11) | YES |  | NULL |  |  |
| pttypeno | varchar(50) | YES |  | NULL |  |  |
| ar_flag_id | int(11) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| invoice_date | date | YES |  | NULL |  |  |
| due_date | date | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| adjust_detail | char(1) | YES |  | NULL |  |  |
| ar_date | date | YES | MUL | NULL |  |  |
| ar_time | time | YES |  | NULL |  |  |
| ar_datetime | datetime | YES |  | NULL |  |  |
| finance_close | char(1) | YES |  | NULL |  |  |
| receive_money_total | double(15,3) | YES |  | NULL |  |  |
| transfer_datetime | datetime | YES |  | NULL |  |  |
| debt_id | int(11) | YES |  | NULL |  |  |
| credit_adjust_amount | double(15,3) | YES |  | NULL |  |  |
| debit_adjust_amount | double(15,3) | YES |  | NULL |  |  |
| original_amount | double(15,3) | YES |  | NULL |  |  |
| original_pttype | char(2) | YES |  | NULL |  |  |
| contract_id | int(11) | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| max_debt_amount | double(15,3) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| finance_docno | varchar(100) | YES |  | NULL |  |  |
| debt_due_day | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_date | ar_date | no | 1 |
| ix_ix_pttype | pttype | no | 1 |
| PRIMARY | ar_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

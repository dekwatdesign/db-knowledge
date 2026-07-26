# `hpc11_ktb_approval_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospcode | varchar(5) | YES |  | NULL |  |  |
| company_code | varchar(15) | YES |  | NULL |  |  |
| company_name | varchar(255) | YES |  | NULL |  |  |
| merchant_code | varchar(15) | YES |  | NULL |  |  |
| merchant_name | varchar(255) | YES |  | NULL |  |  |
| merchant_type | varchar(1) | YES |  | NULL |  |  |
| terminal_id | varchar(15) | YES |  | NULL |  |  |
| transaction_date1 | date | YES | MUL | NULL |  |  |
| transaction_time1 | time | YES |  | NULL |  |  |
| transaction_date2 | date | YES |  | NULL |  |  |
| transaction_time2 | time | YES |  | NULL |  |  |
| personal_id | varchar(13) | YES | MUL | NULL |  |  |
| personal_fname | varchar(100) | YES |  | NULL |  |  |
| personal_lname | varchar(100) | YES |  | NULL |  |  |
| reference_pid | varchar(13) | YES |  | NULL |  |  |
| t1 | varchar(30) | YES |  | NULL |  |  |
| t2 | varchar(30) | YES |  | NULL |  |  |
| t3 | varchar(30) | YES |  | NULL |  |  |
| t4 | varchar(30) | YES |  | NULL |  |  |
| t5 | varchar(30) | YES |  | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| tdate | date | YES |  | NULL |  |  |
| amount | double(15,2) | YES |  | NULL |  |  |
| t6 | varchar(2) | YES |  | NULL |  |  |
| t7 | varchar(15) | YES |  | NULL |  |  |
| transaction_type | varchar(30) | YES |  | NULL |  |  |
| approval_code | varchar(15) | YES | MUL | NULL |  |  |
| t8 | varchar(15) | YES |  | NULL |  |  |
| channel | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| approval_code | approval_code | no | 1 |
| personal_id | personal_id | no | 1 |
| transaction_date1 | transaction_date1 | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

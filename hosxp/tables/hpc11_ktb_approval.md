# `hpc11_ktb_approval`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_id | varchar(10) | YES |  | NULL |  |  |
| company_code | varchar(10) | YES |  | NULL |  |  |
| company_name | varchar(200) | YES |  | NULL |  |  |
| merchant_no | varchar(10) | YES |  | NULL |  |  |
| merchant_name | varchar(80) | YES |  | NULL |  |  |
| type_paid | varchar(1) | YES |  | NULL |  |  |
| terminal_id | varchar(10) | YES |  | NULL |  |  |
| transaction_date | date | YES |  | NULL |  |  |
| transaction_time | time | YES |  | NULL |  |  |
| post_date | date | YES |  | NULL |  |  |
| post_time | time | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| first_name | varchar(180) | YES |  | NULL |  |  |
| last_name | varchar(180) | YES |  | NULL |  |  |
| ref_pid | varchar(13) | YES |  | NULL |  |  |
| pid_cus | varchar(13) | YES |  | NULL |  |  |
| first_name_cus | varchar(180) | YES |  | NULL |  |  |
| last_name_cus | varchar(180) | YES |  | NULL |  |  |
| ptype | varchar(1) | YES |  | NULL |  |  |
| relation_id | varchar(1) | YES |  | NULL |  |  |
| birth_date | date | YES |  | NULL |  |  |
| effdtbeg | date | YES |  | NULL |  |  |
| transaction_amount | decimal(16,2) | YES |  | NULL |  |  |
| batch_no | varchar(20) | YES |  | NULL |  |  |
| trace | varchar(20) | YES |  | NULL |  |  |
| txns_code | varchar(20) | YES |  | NULL |  |  |
| appr_code | varchar(9) | YES |  | NULL |  |  |
| trans_ref_id | varchar(90) | YES |  | NULL |  |  |
| user_id | varchar(200) | YES |  | NULL |  |  |
| reference_3 | varchar(2) | YES |  | NULL |  |  |
| reason_keyin | varchar(60) | YES |  | NULL |  |  |
| appr_code_old_payment | varchar(9) | YES |  | NULL |  |  |
| reason_other | varchar(60) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

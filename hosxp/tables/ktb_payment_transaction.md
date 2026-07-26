# `ktb_payment_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_payment_transaction_id | int(11) | NO | PRI | 0 |  |  |
| tx_id | varchar(50) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| service_type | varchar(150) | YES |  | NULL |  |  |
| patient_type | varchar(150) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES | MUL | NULL |  |  |
| paidst_02_total | double(15,2) | YES |  | NULL |  |  |
| paidst_03_total | double(15,2) | YES |  | NULL |  |  |
| total_amount | double(15,2) | YES |  | NULL |  |  |
| checkin_flag_status | char(1) | YES |  | NULL |  |  |
| checkin_flag_datetime | datetime | YES |  | NULL |  |  |
| checkin_reponse_json | text | YES |  | NULL |  |  |
| checkin_claim_code | varchar(20) | YES |  | NULL |  |  |
| checkin_authen_code | varchar(15) | YES |  | NULL |  |  |
| checkin_authen_datetime | datetime | YES |  | NULL |  |  |
| notify_flag_status | char(1) | YES |  | NULL |  |  |
| notify_flag_datetime | datetime | YES |  | NULL |  |  |
| notify_reponse_json | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| cancel_flag_status | char(1) | YES |  | NULL |  |  |
| cancel_flag_datetime | datetime | YES |  | NULL |  |  |
| cancel_response_json | text | YES |  | NULL |  |  |
| finance_number_02 | varchar(7) | YES |  | NULL |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| staff_cancel | varchar(50) | YES |  | NULL |  |  |
| ref_ktb_txid | varchar(50) | YES | UNI | NULL |  |  |
| ref_ktb_approval_code | varchar(50) | YES |  | NULL |  |  |
| ref_ktb_cash_code | varchar(255) | YES |  | NULL |  |  |
| ref_ktb_cash_response_json | text | YES |  | NULL |  |  |
| ref_ktb_privilege_confirm | varchar(50) | YES |  | NULL |  |  |
| privilege_verify_status | char(1) | YES |  | NULL |  |  |
| privilege_verify_datetime | datetime | YES |  | NULL |  |  |
| privilege_verify_ref1 | varchar(20) | YES |  | NULL |  |  |
| privilege_verify_ref2 | varchar(20) | YES |  | NULL |  |  |
| privilege_lock_transaction | char(1) | YES |  | NULL |  |  |
| confirm_privilege_status | char(1) | YES |  | NULL |  |  |
| confirm_privilege_datetime | datetime | YES |  | NULL |  |  |
| confirm_privilege_amount | double(15,2) | YES |  | NULL |  |  |
| cash_verify_status | char(1) | YES |  | NULL |  |  |
| cash_verify_datetime | datetime | YES |  | NULL |  |  |
| cash_lock_transaction | char(1) | YES |  | NULL |  |  |
| confirm_cash_status | char(1) | YES |  | NULL |  |  |
| confirm_cash_datetime | datetime | YES |  | NULL |  |  |
| confirm_cash_amount | double(15,2) | YES |  | NULL |  |  |
| payment_success_status | char(1) | YES | MUL | NULL |  |  |
| inquiry_flag_datetime | datetime | YES |  | NULL |  |  |
| inquiry_response_json | text | YES |  | NULL |  |  |
| staff_inquiry | varchar(50) | YES |  | NULL |  |  |
| lock_transaction | char(1) | YES |  | NULL |  |  |
| pay_times | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ktb_payment_transaction_idx1 | tx_id | yes | 1 |
| ix_ktb_payment_transaction_idx2 | vn | no | 1 |
| ix_ktb_payment_transaction_idx3 | transaction_datetime | no | 1 |
| ix_ktb_payment_transaction_idx4 | ref_ktb_txid | yes | 1 |
| ix_ktb_payment_transaction_multi_idx1 | payment_success_status | no | 1 |
| ix_ktb_payment_transaction_multi_idx1 | ref_ktb_txid | no | 2 |
| ix_ktb_payment_transaction_multi_idx1 | tx_id | no | 3 |
| PRIMARY | ktb_payment_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

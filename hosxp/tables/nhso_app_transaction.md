# `nhso_app_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_app_transaction_id | int(11) | NO | PRI | 0 |  |  |
| tx_id | varchar(50) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pay_times | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| service_type | varchar(150) | YES |  | NULL |  |  |
| patient_type | varchar(150) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| paidst_02_total | double(15,2) | YES |  | NULL |  |  |
| paidst_03_total | double(15,2) | YES |  | NULL |  |  |
| total_amount | double(15,2) | YES |  | NULL |  |  |
| checkin_flag_status | char(1) | YES |  | NULL |  |  |
| checkin_flag_datetime | datetime | YES |  | NULL |  |  |
| checkin_reponse_json | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| cancel_flag_status | char(1) | YES |  | NULL |  |  |
| cancel_flag_datetime | datetime | YES |  | NULL |  |  |
| cancel_response_json | text | YES |  | NULL |  |  |
| finance_number_02 | varchar(15) | YES |  | NULL |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| staff_cancel | varchar(50) | YES |  | NULL |  |  |
| ref_ktb_txid | varchar(50) | YES |  | NULL |  |  |
| ref_ktb_approval_code | varchar(50) | YES |  | NULL |  |  |
| ref_ktb_cash_code | varchar(255) | YES |  | NULL |  |  |
| ref_ktb_cash_response_json | text | YES |  | NULL |  |  |
| ref_ktb_privilege_confirm | varchar(50) | YES |  | NULL |  |  |
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
| pttype | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_app_transaction_id | tx_id | no | 1 |
| ix_nhso_app_transaction_status | payment_success_status | no | 1 |
| ix_nhso_app_transaction_vn | vn | no | 1 |
| PRIMARY | nhso_app_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

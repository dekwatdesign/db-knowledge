# `edc_kbank_payment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edc_kbank_payment_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| book_number | int(11) | YES |  | NULL |  |  |
| bill_number | int(11) | YES |  | NULL |  |  |
| edc_kbank_payment_trans_type | varchar(30) | YES |  | NULL |  |  |
| edc_kbank_payment_restxt | varchar(50) | YES |  | NULL |  |  |
| edc_kbank_payment_date | date | YES |  | NULL |  |  |
| edc_kbank_payment_time | time | YES |  | NULL |  |  |
| edc_kbank_payment_approvecode | varchar(6) | YES |  | NULL |  |  |
| edc_kbank_payment_trace_no | varchar(6) | YES |  | NULL |  |  |
| edc_kbank_payment_termi_id | varchar(8) | YES |  | NULL |  |  |
| edc_kbank_payment_merch_id | varchar(15) | YES |  | NULL |  |  |
| edc_kbank_payment_card_number | varchar(40) | YES |  | NULL |  |  |
| edc_kbank_payment_card_type | varchar(20) | YES |  | NULL |  |  |
| edc_kbank_payment_batch_no | varchar(6) | YES |  | NULL |  |  |
| edc_kbank_payment_ref_no | varchar(12) | YES |  | NULL |  |  |
| edc_kbank_payment_ref_1 | varchar(20) | YES |  | NULL |  |  |
| edc_kbank_payment_ref_2 | varchar(20) | YES |  | NULL |  |  |
| edc_kbank_payment_uid | varchar(20) | YES | MUL | NULL |  |  |
| edc_kbank_payment_amount | decimal(10,0) | YES |  | NULL |  |  |
| edc_kbank_payment_isvoid | char(1) | YES |  | NULL |  |  |
| edc_kbank_payment_void_apprvcd | varchar(6) | YES |  | NULL |  |  |
| edc_kbank_payment_void_date | date | YES |  | NULL |  |  |
| edc_kbank_payment_void_time | time | YES |  | NULL |  |  |
| edc_kbank_payment_staff | varchar(50) | YES |  | NULL |  |  |
| edc_kbank_payment_staff_void | varchar(50) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| qr_ref_code | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edc_kbank_payment_uid | edc_kbank_payment_uid | no | 1 |
| ix_finance_number_unique | finance_number | yes | 1 |
| PRIMARY | edc_kbank_payment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `qr_payment_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| qr_payment_transaction_id | int(11) | NO | PRI | 0 |  |  |
| hospital_code | varchar(255) | YES | MUL | NULL |  |  |
| biller_id | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| visit_datetime | datetime | YES |  | NULL |  |  |
| ref1 | varchar(50) | YES |  | NULL |  |  |
| ref2 | varchar(50) | YES | MUL | NULL |  |  |
| service_datetime | datetime | YES |  | NULL |  |  |
| amount | double(18,2) | YES | MUL | NULL |  |  |
| service_guid | varchar(38) | YES | UNI | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| paid_status | varchar(20) | YES |  | NULL |  |  |
| paid_date_time | datetime | YES |  | NULL |  |  |
| qr_approve_req_tranxid | int(11) | YES |  | NULL |  |  |
| paid_tranxid | int(11) | YES |  | NULL |  |  |
| book_no | int(11) | YES |  | NULL |  |  |
| bill_no | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |
| json_request_qrcode | text | YES |  | NULL |  |  |
| tablet_display_status | char(1) | YES |  | NULL |  |  |
| qr_payment_device_id | int(11) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inquiry_guid_idx | service_guid | yes | 1 |
| ix_ref_idx | hospital_code | yes | 1 |
| ix_ref_idx | ref1 | yes | 2 |
| ix_ref_idx | ref2 | yes | 3 |
| ix_ref_idx | amount | yes | 4 |
| ix_ref_idx_index | amount | yes | 1 |
| ix_ref_idx_index | ref2 | yes | 2 |
| ix_ref_idx_index | hospital_code | yes | 3 |
| ix_ref_idx_index | ref1 | yes | 4 |
| ix_ref_idx_index_index | ref2 | yes | 1 |
| ix_ref_idx_index_index | amount | yes | 2 |
| ix_ref_idx_index_index | ref1 | yes | 3 |
| ix_ref_idx_index_index | hospital_code | yes | 4 |
| ix_ref_idx_index_index_index | amount | yes | 1 |
| ix_ref_idx_index_index_index | hospital_code | yes | 2 |
| ix_ref_idx_index_index_index | ref1 | yes | 3 |
| ix_ref_idx_index_index_index | ref2 | yes | 4 |
| PRIMARY | qr_payment_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

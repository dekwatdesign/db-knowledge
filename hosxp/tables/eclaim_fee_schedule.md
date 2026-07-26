# `eclaim_fee_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eclaim_fee_schedule_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| eclaim_fee_schedule_req_date | datetime | YES |  | NULL |  |  |
| eclaim_fee_schedule_req | text | YES |  | NULL |  |  |
| eclaim_fee_schedule_resp | text | YES |  | NULL |  |  |
| eclaim_fee_schedule_status | char(1) | YES |  | NULL |  |  |
| claim_staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| nhso_id | int(11) | YES |  | NULL |  |  |
| nhso_seq | varchar(50) | YES |  | NULL |  |  |
| eclaim_fee_schedule_check_req | text | YES |  | NULL |  |  |
| rep_eclaim_detail_error_code | text | YES |  | NULL |  |  |
| rep_eclaim_detail_rep_no | varchar(20) | YES |  | NULL |  |  |
| nhso_uid | varchar(50) | YES |  | NULL |  |  |
| nhso_record_status | char(1) | YES |  | NULL |  |  |
| nhso_payment_status | varchar(50) | YES |  | NULL |  |  |
| nhso_run_date | datetime | YES |  | NULL |  |  |
| nhso_budget_no | varchar(50) | YES |  | NULL |  |  |
| nhso_book_date | datetime | YES |  | NULL |  |  |
| nhso_doc_no | varchar(50) | YES |  | NULL |  |  |
| nhso_rep_no | varchar(50) | YES |  | NULL |  |  |
| nhso_period | varchar(50) | YES |  | NULL |  |  |
| nhso_message | text | YES |  | NULL |  |  |
| nhso_btch_no | varchar(10) | YES |  | NULL |  |  |
| nhso_source_channel | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | eclaim_fee_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

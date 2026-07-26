# `ktb_claim_dent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_claim_dent_id | int(11) | NO | PRI | 0 |  |  |
| ktb_claim_dent_booking_no | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| booking_book_status | int(11) | YES |  | NULL |  |  |
| booking_bill_status | int(11) | YES |  | NULL |  |  |
| booking_record_count | int(11) | YES |  | NULL |  |  |
| booking_send_status | varchar(255) | YES |  | NULL |  |  |
| ck_booking_datetime | datetime | YES |  | NULL |  |  |
| savemed_send_status | varchar(255) | YES |  | NULL |  |  |
| savemed_data_check | text | YES |  | NULL |  |  |
| savemed_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ktb_claim_dent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

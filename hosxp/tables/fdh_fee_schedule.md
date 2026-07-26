# `fdh_fee_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fdh_fee_schedule_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| fdh_fee_schedule_req_date | datetime | YES |  | NULL |  |  |
| fdh_fee_schedule_req | text | YES |  | NULL |  |  |
| fdh_fee_schedule_resp | text | YES |  | NULL |  |  |
| fdh_fee_schedule_status | char(1) | YES |  | NULL |  |  |
| claim_staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| transaction_uid | varchar(50) | YES |  | NULL |  |  |
| cancel_staff | varchar(50) | YES |  | NULL |  |  |
| fdh_fee_schedule_check_req | text | YES |  | NULL |  |  |
| fdh_status | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | fdh_fee_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

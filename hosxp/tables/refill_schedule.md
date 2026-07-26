# `refill_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| schedule_id | int(11) | NO | PRI | 0 |  |  |
| order_id | int(11) | YES | MUL | NULL |  |  |
| refill_seq | int(11) | YES |  | NULL |  |  |
| scheduled_date | date | YES | MUL | NULL |  |  |
| actual_date | date | YES |  | NULL |  |  |
| status | varchar(20) | YES | MUL | NULL |  |  |
| channel | varchar(20) | YES |  | NULL |  |  |
| delivery_address | text | YES |  | NULL |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| pharmacist_code | varchar(15) | YES |  | NULL |  |  |
| dispense_datetime | datetime | YES |  | NULL |  |  |
| tracking_no | varchar(50) | YES |  | NULL |  |  |
| notify_datetime | datetime | YES |  | NULL |  |  |
| notify_channel | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_refill_schedule_date | scheduled_date | no | 1 |
| ix_idx_refill_schedule_order | order_id | no | 1 |
| ix_idx_refill_schedule_status | status | no | 1 |
| PRIMARY | schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

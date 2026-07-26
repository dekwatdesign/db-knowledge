# `payment_kiosk_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payment_kiosk_log_id | int(11) | NO | PRI | 0 |  |  |
| activity_log_datetime | datetime | YES |  | NULL |  |  |
| activity_log_computer | varchar(100) | YES |  | NULL |  |  |
| activity_log_text | text | YES |  | NULL |  |  |
| activity_log_staff | varchar(50) | YES |  | NULL |  |  |
| activity_log_vn | varchar(12) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_activity_log_vn | activity_log_vn | no | 1 |
| PRIMARY | payment_kiosk_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

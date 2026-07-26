# `line_notify_queue_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| line_notify_queue_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| line_notify_message | varchar(2000) | YES |  | NULL |  |  |
| message_datetime | datetime | YES | MUL | NULL |  |  |
| expired_datetime | datetime | YES | MUL | NULL |  |  |
| send_status | varchar(200) | YES |  | NULL |  |  |
| message_key | varchar(100) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_message_datetime | message_datetime | no | 1 |
| ix_message_datetime_exp | expired_datetime | no | 1 |
| ix_message_datetime_exp | message_datetime | no | 2 |
| PRIMARY | line_notify_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

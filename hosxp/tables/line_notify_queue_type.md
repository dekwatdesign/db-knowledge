# `line_notify_queue_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| line_notify_queue_type_id | int(11) | NO | PRI | 0 |  |  |
| line_notify_queue_type_name | varchar(200) | YES | UNI | NULL |  |  |
| line_notify_queue_active | char(1) | YES |  | NULL |  |  |
| message_template | varchar(2000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_line_notify_queue_type_name | line_notify_queue_type_name | yes | 1 |
| PRIMARY | line_notify_queue_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

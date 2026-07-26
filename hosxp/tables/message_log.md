# `message_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| message_id | int(11) | NO | PRI | 0 |  |  |
| message_datetime | datetime | YES |  | NULL |  |  |
| message_from_user | varchar(50) | YES |  | NULL |  |  |
| message_to_user | varchar(50) | YES | MUL | NULL |  |  |
| message_text | longtext | YES |  | NULL |  |  |
| message_read | char(1) | YES |  | NULL |  |  |
| message_read_datetime | datetime | YES |  | NULL |  |  |
| message_computer_name | varchar(100) | YES |  | NULL |  |  |
| message_depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_message_to_user | message_to_user | no | 1 |
| PRIMARY | message_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

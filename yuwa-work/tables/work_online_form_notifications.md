# `work_online_form_notifications`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| form_id | int | NO | UNI | NULL |  |  |
| notify_line | varchar(1) | NO |  | N |  |  |
| line_channel_id | varchar(255) | YES |  | NULL |  |  |
| line_channel_secret | varchar(255) | YES |  | NULL |  |  |
| line_reply_to | varchar(255) | YES |  | NULL |  |  |
| notify_telegram | varchar(1) | NO |  | N |  |  |
| telegram_token | varchar(255) | YES |  | NULL |  |  |
| telegram_chat_id | varchar(255) | YES |  | NULL |  |  |
| notify_fields | text | YES |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uniq_online_form_notifications_form | form_id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| form_id | `work_online_forms.id` | fk_online_form_notifications_form |

## Sample rows (0)

```json
[]
```

# `work_custom_app_service_request_chat_reads`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| request_id | int | NO | PRI | NULL |  |  |
| user_id | varchar(50) | NO | PRI | NULL |  |  |
| last_read_message_id | bigint unsigned | YES |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_service_chat_reads_user | user_id | no | 1 |
| idx_service_chat_reads_user | request_id | no | 2 |
| PRIMARY | request_id | yes | 1 |
| PRIMARY | user_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| request_id | `work_custom_app_service_requests.id` | fk_service_chat_reads_request |

## Sample rows (2)

```json
[
  {
    "request_id": 101,
    "user_id": "253",
    "last_read_message_id": 3,
    "updated_at": "2026-07-11 15:27:06"
  },
  {
    "request_id": 101,
    "user_id": "307",
    "last_read_message_id": 4,
    "updated_at": "2026-07-11 15:44:00"
  }
]
```

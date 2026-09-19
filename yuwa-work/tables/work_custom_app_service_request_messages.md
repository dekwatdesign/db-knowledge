# `work_custom_app_service_request_messages`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| request_id | int | NO | MUL | NULL |  |  |
| sender_id | varchar(50) | NO |  | NULL |  |  |
| sender_display_name | varchar(255) | NO |  | NULL |  |  |
| sender_role | varchar(20) | NO |  | NULL |  |  |
| body | text | NO |  | NULL |  |  |
| client_nonce | varchar(64) | NO |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_service_chat_cursor | request_id | no | 1 |
| idx_service_chat_cursor | id | no | 2 |
| idx_service_chat_rate | request_id | no | 1 |
| idx_service_chat_rate | sender_id | no | 2 |
| idx_service_chat_rate | created_at | no | 3 |
| PRIMARY | id | yes | 1 |
| uk_service_chat_nonce | request_id | yes | 1 |
| uk_service_chat_nonce | sender_id | yes | 2 |
| uk_service_chat_nonce | client_nonce | yes | 3 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| request_id | `work_custom_app_service_requests.id` | fk_service_chat_request |

## Sample rows (4)

```json
[
  {
    "id": 1,
    "request_id": 101,
    "sender_id": "253",
    "sender_display_name": "[MASKED_FULLNAME]",
    "sender_role": "provider",
    "body": "สวัสดีครับ",
    "client_nonce": "3189449d-3db6-4b9a-9f96-9b8cf00b086f",
    "created_at": "2026-07-11 14:43:53"
  },
  {
    "id": 2,
    "request_id": 101,
    "sender_id": "307",
    "sender_display_name": "[MASKED_FULLNAME]",
    "sender_role": "requester",
    "body": "ว่าไงครับ",
    "client_nonce": "a4d9f076-7d36-45ef-adca-6a9cc7495d46",
    "created_at": "2026-07-11 14:45:07"
  },
  {
    "id": 3,
    "request_id": 101,
    "sender_id": "307",
    "sender_display_name": "[MASKED_FULLNAME]",
    "sender_role": "requester",
    "body": "5555",
    "client_nonce": "47cc94b8-eddc-4ea0-be35-0b0041457508",
    "created_at": "2026-07-11 14:45:14"
  },
  {
    "id": 4,
    "request_id": 101,
    "sender_id": "307",
    "sender_display_name": "[MASKED_FULLNAME]",
    "sender_role": "requester",
    "body": "โหลๆ",
    "client_nonce": "49a51aeb-ccbe-4609-bfc8-7e9584cfe74e",
    "created_at": "2026-07-11 15:41:14"
  }
]
```

# `hosxp_chat_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chat_log_it | int(11) | NO | PRI | 0 |  |  |
| chat_time | datetime | YES | MUL | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| login_name | varchar(100) | YES |  | NULL |  |  |
| chat_text | varchar(250) | YES |  | NULL |  |  |
| html_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_chat_time | chat_time | no | 1 |
| PRIMARY | chat_log_it | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "chat_log_it": 7,
    "chat_time": "2023-08-31 11:49:00",
    "computer_name": "A63-0023",
    "login_name": "yuwa297",
    "chat_text": "พี่หนุ่ย",
    "html_text": null
  },
  {
    "chat_log_it": 8,
    "chat_time": "2023-08-31 11:49:51",
    "computer_name": "A63-0023",
    "login_name": "yuwa297",
    "chat_text": "เห็นข้อความมั้ยคะ",
    "html_text": null
  },
  {
    "chat_log_it": 9,
    "chat_time": "2023-09-28 09:31:28",
    "computer_name": "A63-0021",
    "login_name": "yuwa008",
    "chat_text": "[MASKED_FULLNAME]",
    "html_text": null
  },
  {
    "chat_log_it": 10,
    "chat_time": "2024-03-27 11:07:03",
    "computer_name": "HCLABCLIENT",
    "login_name": "yuwa290",
    "chat_text": "สวัสดี",
    "html_text": null
  },
  {
    "chat_log_it": 11,
    "chat_time": "2025-05-01 09:12:56",
    "computer_name": "DESKTOP-6QJ8O8N",
    "login_name": "yuwa298",
    "chat_text": "อนัญญา",
    "html_text": null
  },
  {
    "chat_log_it": 12,
    "chat_time": "2025-05-08 16:18:44",
    "computer_name": "HCLABCLIENT",
    "login_name": "yuwa290",
    "chat_text": "รายงานค่าวิกฤติ",
    "html_text": null
  }
]
```

# `work_custom_app_service_notifications`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | UNI | NULL |  | FK → work_custom_app_services.id |
| notify_line | varchar(1) | NO |  | N |  | Y or N |
| line_channel_id | varchar(255) | YES |  | NULL |  |  |
| line_channel_secret | varchar(255) | YES |  | NULL |  |  |
| line_reply_to | varchar(255) | YES |  | NULL |  |  |
| notify_telegram | varchar(1) | NO |  | N |  | Y or N |
| telegram_token | varchar(255) | YES |  | NULL |  |  |
| telegram_chat_id | varchar(255) | YES |  | NULL |  |  |
| notify_fields | text | YES |  | NULL |  | JSON array of field names to include in notification |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_service_id | service_id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| service_id | `work_custom_app_services.id` | fk_svc_notif_service |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "service_id": 1,
    "notify_line": "N",
    "line_channel_id": "2009171593",
    "line_channel_secret": "fcc9a63e46daa7b7cbcabb234eabb69d",
    "line_reply_to": "C484f6614d0775c160e3fdf90a6c1a3f7",
    "notify_telegram": "N",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"Datetime of use\",\"Building Floor\",\"Room\"]",
    "updated_at": "2026-07-11 15:45:17"
  },
  {
    "id": 4,
    "service_id": 2,
    "notify_line": "N",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "N",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"User\",\"field_1\",\"field_4\",\"field_3\",\"field_5\"]",
    "updated_at": "2026-07-11 14:40:54"
  },
  {
    "id": 11,
    "service_id": 5,
    "notify_line": "Y",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "Y",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"Priority\",\"field_1\",\"Department\",\"Building\",\"Room\",\"Problem\"]",
    "updated_at": "2026-03-02 14:13:39"
  },
  {
    "id": 17,
    "service_id": 6,
    "notify_line": "Y",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "Y",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[]",
    "updated_at": "2026-02-25 10:54:27"
  },
  {
    "id": 22,
    "service_id": 7,
    "notify_line": "N",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "N",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"subject\",\"Platform\",\"User\",\"Department\",\"Timeline (1 Day)\"]",
    "updated_at": "2026-07-11 14:41:10"
  },
  {
    "id": 27,
    "service_id": 8,
    "notify_line": "N",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "N",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"Title\",\"Level\",\"Department\"]",
    "updated_at": "2026-07-11 14:41:20"
  },
  {
    "id": 28,
    "service_id": 9,
    "notify_line": "Y",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "Y",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"Priority\",\"User\",\"Location\",\"Department\",\"Software\",\"Detail\"]",
    "updated_at": "2026-04-02 15:37:53"
  },
  {
    "id": 29,
    "service_id": 10,
    "notify_line": "Y",
    "line_channel_id": "2009185875",
    "line_channel_secret": "af232ff16c3eff79ede86beab0bc8ee4",
    "line_reply_to": "C4153101401d797d3398e7a59faf3b9bf",
    "notify_telegram": "Y",
    "telegram_token": "7880339500:AAEj5usKinfCfzaggskPauoYkyGe0mnoo54",
    "telegram_chat_id": "-1002477092105",
    "notify_fields": "[\"field_1\",\"field_2\",\"field_3\",\"field_4\"]",
    "updated_at": "2026-04-02 16:23:08"
  }
]
```

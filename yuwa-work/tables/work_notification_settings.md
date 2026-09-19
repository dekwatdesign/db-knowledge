# `work_notification_settings`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| setting_key | varchar(100) | NO | UNI | NULL |  |  |
| is_enabled | char(1) | NO |  | N |  |  |
| created_by | bigint | YES |  | NULL |  |  |
| updated_by | bigint | YES |  | NULL |  |  |
| created_at | timestamp | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | timestamp | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uniq_work_notification_settings_key | setting_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "setting_key": "required_signature",
    "is_enabled": "Y",
    "created_by": null,
    "updated_by": 253,
    "created_at": "2026-04-22 11:04:35",
    "updated_at": "2026-04-23 09:09:20"
  },
  {
    "id": 2,
    "setting_key": "required_email",
    "is_enabled": "Y",
    "created_by": null,
    "updated_by": 253,
    "created_at": "2026-04-22 11:04:35",
    "updated_at": "2026-04-23 09:09:18"
  },
  {
    "id": 3,
    "setting_key": "required_line",
    "is_enabled": "Y",
    "created_by": null,
    "updated_by": 253,
    "created_at": "2026-04-22 11:04:35",
    "updated_at": "2026-04-23 09:08:25"
  },
  {
    "id": 4,
    "setting_key": "required_bank_account",
    "is_enabled": "N",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-22 11:04:35",
    "updated_at": "2026-04-22 11:04:35"
  }
]
```

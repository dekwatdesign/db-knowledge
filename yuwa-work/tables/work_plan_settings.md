# `work_plan_settings`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| setting_key | varchar(120) | NO | UNI | NULL |  |  |
| setting_json | longtext | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_plan_setting_key | setting_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "setting_key": "general",
    "setting_json": "{\"fiscal_year\":2568,\"warning_threshold\":80,\"success_threshold\":100,\"notify_email\":\"N\",\"notify_line\":\"N\",\"notify_below_target\":\"Y\",\"notify_due_days\":7,\"his_system\":\"CUSTOM API\",\"his_api_url\":\"\",\"his_sync_interval\":\"daily\"}",
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  }
]
```

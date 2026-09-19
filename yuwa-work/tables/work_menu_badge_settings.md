# `work_menu_badge_settings`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| app_key | varchar(100) | NO | MUL | NULL |  |  |
| menu_permission_key | varchar(255) | NO | UNI | NULL |  |  |
| badge_label | varchar(100) | NO |  | ใหม่ |  |  |
| is_enabled | varchar(1) | NO |  | N |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_work_menu_badge_app | app_key | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_work_menu_badge_permission | menu_permission_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "app_key": "home",
    "menu_permission_key": "home_service_my_note",
    "badge_label": "ใหม่",
    "is_enabled": "Y",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-21 16:32:43",
    "updated_at": "2026-04-21 16:32:43"
  },
  {
    "id": 2,
    "app_key": "home",
    "menu_permission_key": "home_service_work_app_15",
    "badge_label": "ใหม่",
    "is_enabled": "Y",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-21 16:32:50",
    "updated_at": "2026-04-21 16:32:50"
  },
  {
    "id": 3,
    "app_key": "home",
    "menu_permission_key": "home_service_work_app_14",
    "badge_label": "ใหม่",
    "is_enabled": "Y",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-21 16:32:53",
    "updated_at": "2026-04-21 16:32:53"
  },
  {
    "id": 4,
    "app_key": "home",
    "menu_permission_key": "home_service_work_app_17",
    "badge_label": "ใหม่",
    "is_enabled": "Y",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-21 16:32:55",
    "updated_at": "2026-04-21 16:32:55"
  }
]
```

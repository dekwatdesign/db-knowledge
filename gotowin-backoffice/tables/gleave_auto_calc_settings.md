# `gleave_auto_calc_settings`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| setting_key | varchar(100) | NO | UNI | NULL |  |  |
| setting_val | text | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_setting_key | setting_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "setting_key": "leave_start_date_field",
    "setting_val": "HR_STARTWORK_DATE",
    "updated_at": "2026-03-20 14:54:00"
  },
  {
    "id": 2,
    "setting_key": "auto_calc_last_run",
    "setting_val": "",
    "updated_at": "2026-03-20 14:54:00"
  },
  {
    "id": 3,
    "setting_key": "auto_calc_last_year",
    "setting_val": "",
    "updated_at": "2026-03-20 14:54:00"
  },
  {
    "id": 4,
    "setting_key": "auto_calc_last_count",
    "setting_val": "0",
    "updated_at": "2026-03-20 14:54:00"
  }
]
```

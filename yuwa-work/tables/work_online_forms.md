# `work_online_forms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| group_id | int | YES | MUL | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| icon_value | varchar(255) | NO |  | fa-solid fa-file-lines |  |  |
| icon_class | varchar(255) | NO |  | text-info |  |  |
| share_level | varchar(20) | NO |  | private |  |  |
| owner_dep0_id | int | NO |  | 0 |  |  |
| owner_dep1_id | int | NO |  | 0 |  |  |
| owner_dep2_id | int | NO |  | 0 |  |  |
| sort_order | int | NO |  | 0 |  |  |
| settings_json | longtext | YES |  | NULL |  |  |
| created_by | int | NO | MUL | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |
| is_active | varchar(1) | NO | MUL | Y |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_online_forms_active | is_active | no | 1 |
| idx_online_forms_group | group_id | no | 1 |
| idx_online_forms_owner | created_by | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| group_id | `work_online_form_groups.id` | fk_online_forms_group |

## Sample rows (1)

```json
[
  {
    "id": 2,
    "group_id": 2,
    "title": "ทดสอบ",
    "description": "",
    "icon_value": "fa-solid fa-file-lines",
    "icon_class": "text-info",
    "share_level": "group",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "sort_order": 0,
    "settings_json": "{\"schedule_enabled\":\"N\",\"schedule_open_at\":\"\",\"schedule_close_at\":\"\",\"dashboard_show_summary\":\"Y\",\"dashboard_widgets\":[],\"report_presets\":[]}",
    "created_by": 253,
    "created_at": "2026-04-10 17:15:48",
    "updated_at": "2026-04-10 17:15:48",
    "is_active": "Y"
  }
]
```

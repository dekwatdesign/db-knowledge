# `work_online_form_groups`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| icon_value | varchar(255) | NO |  | fa-solid fa-folder-open |  |  |
| icon_class | varchar(255) | NO |  | text-primary |  |  |
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
| idx_online_form_groups_active | is_active | no | 1 |
| idx_online_form_groups_owner | created_by | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 2,
    "title": "งาน IT",
    "description": "",
    "icon_value": "./uploads/online_forms/groups/group_2_20260424164153_5475ab76_yuwa-gtw.png",
    "icon_class": "image",
    "share_level": "group",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "sort_order": 0,
    "settings_json": null,
    "created_by": 253,
    "created_at": "2026-04-07 14:52:11",
    "updated_at": "2026-04-24 16:42:08",
    "is_active": "Y"
  }
]
```

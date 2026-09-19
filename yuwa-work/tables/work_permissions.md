# `work_permissions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| menu_id | int | YES | MUL | NULL |  |  |
| permission_key | varchar(255) | YES | MUL | NULL |  |  |
| permission_title | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| menu_id | menu_id | no | 1 |
| permission_key | permission_key | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| menu_id | `work_menus.id` | work_permissions_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "menu_id": 1,
    "permission_key": "person_dashboard_view",
    "permission_title": "ดู"
  },
  {
    "id": 2,
    "menu_id": 2,
    "permission_key": "person_hip_view",
    "permission_title": "ดู"
  },
  {
    "id": 3,
    "menu_id": 2,
    "permission_key": "person_hip_report",
    "permission_title": "รายงานผล"
  },
  {
    "id": 4,
    "menu_id": 3,
    "permission_key": "system_dashboard_view",
    "permission_title": "ดู"
  },
  {
    "id": 5,
    "menu_id": 5,
    "permission_key": "person_list_view",
    "permission_title": "ดู"
  },
  {
    "id": 6,
    "menu_id": 4,
    "permission_key": "system_accounts_view",
    "permission_title": "ดู"
  },
  {
    "id": 7,
    "menu_id": 6,
    "permission_key": "person_departments_view",
    "permission_title": "ดู"
  },
  {
    "id": 8,
    "menu_id": 7,
    "permission_key": "person_reports_view",
    "permission_title": "ดู"
  }
]
```

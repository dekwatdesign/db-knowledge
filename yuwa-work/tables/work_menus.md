# `work_menus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| app_id | int | YES | MUL | NULL |  |  |
| menu_key | varchar(255) | YES |  | NULL |  |  |
| menu_title | varchar(255) | YES |  | NULL |  |  |
| menu_icon_class | varchar(255) | YES |  | NULL |  |  |
| menu_icon_style_class | varchar(255) | YES |  | NULL |  |  |
| menu_url_path | varchar(255) | YES |  | NULL |  |  |
| menu_sort | int | YES |  | NULL |  |  |
| menu_permission_key_default | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| app_id | app_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| app_id | `work_apps.id` | work_menus_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "app_id": 1,
    "menu_key": "person_dashboard",
    "menu_title": "ภาพรวม",
    "menu_icon_class": "fa-solid fa-chart-pie",
    "menu_icon_style_class": null,
    "menu_url_path": "person_dashboard.php",
    "menu_sort": 1,
    "menu_permission_key_default": "person_dashboard_view"
  },
  {
    "id": 2,
    "app_id": 1,
    "menu_key": "person_hip",
    "menu_title": "เวลาเข้า-ออกงาน",
    "menu_icon_class": "fa-solid fa-business-time",
    "menu_icon_style_class": null,
    "menu_url_path": "person_hip.php",
    "menu_sort": 5,
    "menu_permission_key_default": "person_hip_view"
  },
  {
    "id": 3,
    "app_id": 9,
    "menu_key": "system_dashboard",
    "menu_title": "ภาพรวม",
    "menu_icon_class": "fa-solid fa-chart-pie",
    "menu_icon_style_class": null,
    "menu_url_path": "system_dashboard.php",
    "menu_sort": 1,
    "menu_permission_key_default": "system_dashboard_view"
  },
  {
    "id": 4,
    "app_id": 9,
    "menu_key": "system_accounts",
    "menu_title": "Accounts",
    "menu_icon_class": "fa-solid fa-address-card",
    "menu_icon_style_class": null,
    "menu_url_path": "system_accounts.php",
    "menu_sort": 3,
    "menu_permission_key_default": "system_accounts_view"
  },
  {
    "id": 5,
    "app_id": 1,
    "menu_key": "person_list",
    "menu_title": "บุคคลากร",
    "menu_icon_class": "fa-solid fa-users",
    "menu_icon_style_class": null,
    "menu_url_path": "person_list.php",
    "menu_sort": 2,
    "menu_permission_key_default": "person_list_view"
  },
  {
    "id": 6,
    "app_id": 1,
    "menu_key": "person_departments",
    "menu_title": "หน่วยงาน",
    "menu_icon_class": "fa-solid fa-building-user",
    "menu_icon_style_class": null,
    "menu_url_path": "person_departments.php",
    "menu_sort": 3,
    "menu_permission_key_default": "person_departments_view"
  },
  {
    "id": 7,
    "app_id": 1,
    "menu_key": "person_reports",
    "menu_title": "รายงานผล",
    "menu_icon_class": "fa-solid fa-file-chart-column",
    "menu_icon_style_class": null,
    "menu_url_path": "person_reports.php",
    "menu_sort": 6,
    "menu_permission_key_default": "person_reports_view"
  },
  {
    "id": 8,
    "app_id": 1,
    "menu_key": "person_shifts",
    "menu_title": "กะเวลา",
    "menu_icon_class": "fa-solid fa-user-clock",
    "menu_icon_style_class": null,
    "menu_url_path": "person_shifts.php",
    "menu_sort": 4,
    "menu_permission_key_default": "person_shifts_view"
  }
]
```

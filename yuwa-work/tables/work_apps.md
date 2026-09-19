# `work_apps`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| app_key | varchar(255) | YES |  | NULL |  |  |
| title | varchar(255) | YES |  | NULL |  |  |
| icon_type | varchar(255) | YES |  | NULL |  | class or img |
| icon_value | varchar(255) | YES |  | NULL |  |  |
| icon_class | varchar(255) | YES |  | NULL |  |  |
| is_show | varchar(1) | NO |  | N |  | Y or N |
| is_public | varchar(1) | NO |  | N |  | Y or N |
| sort | int | YES |  | NULL |  |  |
| app_file | varchar(255) | YES |  | NULL |  |  |
| app_permission_key_default | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| permission_key | app_permission_key_default | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "app_key": "hr",
    "title": "งานบุคลากร",
    "icon_type": "class",
    "icon_value": "fa-solid fa-user-tie",
    "icon_class": "text-gradient-3 fa-bounce",
    "is_show": "Y",
    "is_public": "N",
    "sort": 2,
    "app_file": "hr.php",
    "app_permission_key_default": "person_dashboard_view"
  },
  {
    "id": 2,
    "app_key": "metting",
    "title": "จองห้องประชุม",
    "icon_type": "class",
    "icon_value": "fa-solid fa-users-rectangle",
    "icon_class": "text-primary",
    "is_show": "N",
    "is_public": "Y",
    "sort": 2,
    "app_file": "services.php",
    "app_permission_key_default": null
  },
  {
    "id": 3,
    "app_key": null,
    "title": "งานทรัพย์สิน",
    "icon_type": "class",
    "icon_value": "fa-solid fa-file-invoice-dollar",
    "icon_class": "text-primary",
    "is_show": "Y",
    "is_public": "N",
    "sort": 3,
    "app_file": null,
    "app_permission_key_default": null
  },
  {
    "id": 4,
    "app_key": null,
    "title": "งานพัสดุ",
    "icon_type": "class",
    "icon_value": "fa-solid fa-box-open-full",
    "icon_class": "text-success",
    "is_show": "Y",
    "is_public": "N",
    "sort": 4,
    "app_file": null,
    "app_permission_key_default": null
  },
  {
    "id": 5,
    "app_key": "technician",
    "title": "ช่าง",
    "icon_type": "class",
    "icon_value": "fa-solid fa-screwdriver-wrench",
    "icon_class": "text-dark",
    "is_show": "N",
    "is_public": "Y",
    "sort": 4,
    "app_file": "services.php",
    "app_permission_key_default": null
  },
  {
    "id": 6,
    "app_key": "it",
    "title": "ไอที",
    "icon_type": "class",
    "icon_value": "fa-solid fa-computer",
    "icon_class": "text-warning",
    "is_show": "N",
    "is_public": "Y",
    "sort": 5,
    "app_file": "services.php",
    "app_permission_key_default": null
  },
  {
    "id": 7,
    "app_key": "car",
    "title": "จองรถ",
    "icon_type": "class",
    "icon_value": "fa-solid fa-car",
    "icon_class": "text-info",
    "is_show": "N",
    "is_public": "Y",
    "sort": 3,
    "app_file": "services.php",
    "app_permission_key_default": null
  },
  {
    "id": 8,
    "app_key": "leave",
    "title": "ลา",
    "icon_type": "class",
    "icon_value": "fa-solid fa-calendar-xmark",
    "icon_class": "text-primary",
    "is_show": "Y",
    "is_public": "N",
    "sort": 8,
    "app_file": null,
    "app_permission_key_default": null
  }
]
```

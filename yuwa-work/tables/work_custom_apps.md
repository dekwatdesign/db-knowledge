# `work_custom_apps`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | NO |  | NULL |  |  |
| icon_type | varchar(10) | NO |  | class |  |  |
| icon_value | varchar(255) | YES |  | fa-solid fa-briefcase |  |  |
| icon_class | varchar(255) | YES |  | text-primary |  |  |
| dep_index | int | NO |  | NULL |  | 0=กลุ่มภารกิจ, 1=กลุ่มงาน, 2=งาน |
| dep_id | int | NO |  | NULL |  | ID ของหน่วยงานที่ผูก |
| created_by | int | NO |  | NULL |  | gtw_user_id ของผู้สร้าง |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| is_active | varchar(1) | NO |  | Y |  | Y or N |
| dashboard_settings_json | longtext | YES |  | NULL |  |  |
| app_public_level | varchar(20) | NO |  | mission |  | all, mission, group, dep, leader |
| app_sub_id | int | YES |  | 0 |  | Reference ID based on app_public_level |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "title": "ขอใช้บริการงานโภชนาการ",
    "icon_type": "class",
    "icon_value": "fa-solid fa-kitchen-set",
    "icon_class": "text-gradient-berry",
    "dep_index": 2,
    "dep_id": 8,
    "created_by": 253,
    "created_at": "2026-02-19 08:43:26",
    "is_active": "Y",
    "dashboard_settings_json": null,
    "app_public_level": "dep",
    "app_sub_id": 17
  },
  {
    "id": 2,
    "title": "งานเทคโนโลยีสารสนเทศ",
    "icon_type": "class",
    "icon_value": "fa-solid fa-desktop",
    "icon_class": "text-gradient-fire",
    "dep_index": 2,
    "dep_id": 13,
    "created_by": 253,
    "created_at": "2026-02-20 11:40:04",
    "is_active": "Y",
    "dashboard_settings_json": "{\"dash_stat_staff\":\"Y\",\"dash_stat_services\":\"Y\",\"dash_stat_created\":\"Y\",\"dash_services_grid\":\"Y\",\"dash_recent_requests\":\"N\",\"sr_stat_summary\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_new_request_btn\":\"Y\",\"dash_fullcalendar\":\"Y\",\"dash_fullcalendar_service_id\":2,\"dash_fullcalendar_date_field\":\"field_3\",\"dash_fullcalendar_title_field\":\"field_5\"}",
    "app_public_level": "dep",
    "app_sub_id": 25
  },
  {
    "id": 3,
    "title": "ขอใช้บริการ HR",
    "icon_type": "class",
    "icon_value": "fa-solid fa-briefcase",
    "icon_class": "text-primary",
    "dep_index": 1,
    "dep_id": 5,
    "created_by": 253,
    "created_at": "2026-04-21 16:46:37",
    "is_active": "Y",
    "dashboard_settings_json": null,
    "app_public_level": "group",
    "app_sub_id": 5
  }
]
```

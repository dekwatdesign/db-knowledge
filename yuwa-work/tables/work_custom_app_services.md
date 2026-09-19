# `work_custom_app_services`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| custom_app_id | int | NO | MUL | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| icon_type | varchar(10) | NO |  | class |  |  |
| icon_value | varchar(255) | YES |  | fa-solid fa-gear |  |  |
| icon_class | varchar(255) | YES |  | text-primary |  |  |
| sort | int | NO |  | 0 |  |  |
| is_active | varchar(1) | NO |  | Y |  | Y or N |
| settings_json | longtext | YES |  | NULL |  |  |
| created_by | int | NO |  | NULL |  | gtw_user_id ของผู้สร้าง |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| custom_app_id | custom_app_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| custom_app_id | `work_custom_apps.id` | work_custom_app_services_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "custom_app_id": 1,
    "title": "บริการ",
    "description": "",
    "icon_type": "class",
    "icon_value": "fa-solid fa-kitchen-set",
    "icon_class": "text-info",
    "sort": 1,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"list_form_col_Room\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_Borrow List\": \"N\", \"adm_dash_calendar_date_field\": \"\", \"list_form_col_Building Floor\": \"N\", \"adm_dash_calendar_title_field\": \"\", \"list_form_col_Datetime of use\": \"Y\", \"list_form_col_Number of people\": \"N\"}",
    "created_by": 253,
    "created_at": "2026-02-19 08:44:25"
  },
  {
    "id": 2,
    "custom_app_id": 2,
    "title": "ยืม/เบิก",
    "description": "เช่น กล้อง Web Cam, ขาตั้งกล้อง, ไมค์กลม, ลำโพง, ปลั๊กไฟ, Card Reader ฯลฯ",
    "icon_type": "class",
    "icon_value": "fa-solid fa-warehouse",
    "icon_class": "text-gradient-peach",
    "sort": 1,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"N\", \"list_col_requester\": \"Y\", \"list_form_col_User\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_3\": \"Y\", \"list_form_col_field_4\": \"N\", \"list_form_col_field_5\": \"N\", \"list_form_col_field_6\": \"N\", \"list_form_col_field_7\": \"N\", \"list_form_col_field_8\": \"N\", \"list_form_col_field_9\": \"N\", \"sr_dash_calendar_date_field\": \"field_3\", \"adm_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"User\", \"adm_dash_calendar_title_field\": \"\"}",
    "created_by": 253,
    "created_at": "2026-02-20 11:45:01"
  },
  {
    "id": 5,
    "custom_app_id": 2,
    "title": "แจ้งปัญหา-อุปกรณ์คอมพิวเตอร์",
    "description": "เช่น คอมเปิดไม่ติด, เครื่องสำรองไฟร้อง, จอคอมเปิดไม่ติด",
    "icon_type": "class",
    "icon_value": "fa-solid fa-desktop",
    "icon_class": "text-gradient-forest",
    "sort": 3,
    "is_active": "Y",
    "settings_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"N\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"\",\"sr_dash_calendar_title_field\":\"\",\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"Y\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"N\",\"adm_dash_calendar_date_field\":\"\",\"adm_dash_calendar_title_field\":\"\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"enable_evaluation\":\"Y\",\"enable_approval_flow\":\"N\",\"enable_service_chat\":\"Y\",\"category_name\":\"อุปกรณ์คอมพิวเตอร์\",\"public_level_sr\":\"all\",\"public_level_adm\":\"dep\",\"list_form_col_Room\":\"N\",\"list_form_col_Problem\":\"N\",\"list_form_col_field_1\":\"N\",\"list_form_col_Building\":\"N\",\"list_form_col_Priority\":\"N\",\"list_form_col_Department\":\"N\",\"list_form_col_Upload File\":\"N\",\"list_form_col_Date of requiment\":\"N\",\"list_form_col_technician request\":\"N\"}",
    "created_by": 253,
    "created_at": "2026-02-23 14:01:06"
  },
  {
    "id": 6,
    "custom_app_id": 2,
    "title": "ขอปรับปรุงระบบ",
    "description": "เช่น ระบบ HSK (ระบบบันทึกการดูแลรักษา/การให้บริการผู้ป่วยใน), ระบบ PMT (ระบบส่งยาไปรษณีย์)",
    "icon_type": "class",
    "icon_value": "fa-solid fa-code",
    "icon_class": "text-gradient-sunset",
    "sort": 4,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"Y\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"N\", \"list_col_department\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_2\": \"N\", \"list_form_col_field_3\": \"N\", \"list_form_col_field_4\": \"N\", \"list_form_col_deadline\": \"N\", \"list_form_col_department\": \"N\", \"sr_dash_calendar_date_field\": \"field_4\", \"sr_dash_calendar_title_field\": \"department\"}",
    "created_by": 253,
    "created_at": "2026-02-23 15:50:22"
  },
  {
    "id": 7,
    "custom_app_id": 2,
    "title": "ขอใช้งาน ระบบการประชุมทางไกล",
    "description": "Teleconference เช่น ระบบ ZOOM, Webex",
    "icon_type": "class",
    "icon_value": "fa-solid fa-video",
    "icon_class": "text-gradient-berry",
    "sort": 5,
    "is_active": "Y",
    "settings_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"Y\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"Timeline (1 Day)\",\"sr_dash_calendar_title_field\":\"subject\",\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"N\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"Y\",\"adm_dash_calendar_date_field\":\"Timeline (1 Day)\",\"adm_dash_calendar_title_field\":\"subject\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"enable_evaluation\":\"N\",\"enable_approval_flow\":\"N\",\"enable_service_chat\":\"Y\",\"category_name\":\"ทั่วไป\",\"public_level_sr\":\"all\",\"public_level_adm\":\"all\",\"list_form_col_User\":\"N\",\"list_form_col_tools\":\"N\",\"list_form_col_address\":\"N\",\"list_form_col_subject\":\"N\",\"list_form_col_Platform\":\"Y\",\"list_form_col_Department\":\"N\",\"list_form_col_tools_other\":\"N\",\"list_form_col_Timeline (1 Day)\":\"Y\",\"list_form_col_ID Line (if forgot)\":\"N\"}",
    "created_by": 253,
    "created_at": "2026-02-25 15:57:37"
  },
  {
    "id": 8,
    "custom_app_id": 2,
    "title": "ขอเพิ่มเมนูบริการ",
    "description": "ขอเพิ่มเมนูสำหรับหน่วยบริการ/สนับสนุน เพื่อสร้างแบบฟอร์มการขอใช้บริการด้วยระบบ WORK",
    "icon_type": "class",
    "icon_value": "fa-solid fa-building",
    "icon_class": "text-gradient-forest",
    "sort": 6,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"N\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "created_by": 253,
    "created_at": "2026-03-09 15:55:42"
  },
  {
    "id": 9,
    "custom_app_id": 2,
    "title": "ติดตั้ง ระบบ/โปรแกรม",
    "description": "เช่น ติดตั้งโปรแกรมสำนักงาน, โประแกรม HIS, โปรแกรมเฉพาะทาง",
    "icon_type": "class",
    "icon_value": "fa-solid fa-desktop-arrow-down",
    "icon_class": "text-gradient-rainbow",
    "sort": 7,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"Y\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"list_form_col_User\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_Detail\": \"N\", \"list_form_col_Location\": \"N\", \"list_form_col_Priority\": \"Y\", \"list_form_col_Software\": \"Y\", \"list_form_col_Department\": \"N\", \"sr_dash_calendar_date_field\": \"\", \"adm_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "created_by": 253,
    "created_at": "2026-03-25 16:33:52"
  },
  {
    "id": 10,
    "custom_app_id": 2,
    "title": "แจ้งปัญหา-ระบบ",
    "description": "HOSxP, Mali, OPDScan, YQ, GTW BackOffice, Adobe PDF, Microsoft Word/Excel/PowerPoint, FlashPDF",
    "icon_type": "class",
    "icon_value": "fa-solid fa-bug",
    "icon_class": "text-danger",
    "sort": 8,
    "is_active": "Y",
    "settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_2\": \"N\", \"list_form_col_field_3\": \"N\", \"list_form_col_field_4\": \"N\", \"list_form_col_field_5\": \"N\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "created_by": 253,
    "created_at": "2026-03-25 16:38:31"
  }
]
```

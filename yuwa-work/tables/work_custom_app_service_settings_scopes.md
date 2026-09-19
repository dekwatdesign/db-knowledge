# `work_custom_app_service_settings_scopes`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | UNI | NULL |  |  |
| custom_app_id | int | NO | MUL | NULL |  |  |
| config_version | int | NO |  | 1 |  |  |
| overview_json | longtext | YES |  | NULL |  |  |
| requester_ui_json | longtext | YES |  | NULL |  |  |
| admin_ui_json | longtext | YES |  | NULL |  |  |
| evaluation_json | longtext | YES |  | NULL |  |  |
| approval_json | longtext | YES |  | NULL |  |  |
| published_settings_json | longtext | YES |  | NULL |  |  |
| overview_version | int | NO |  | 1 |  |  |
| requester_ui_version | int | NO |  | 1 |  |  |
| admin_ui_version | int | NO |  | 1 |  |  |
| evaluation_version | int | NO |  | 1 |  |  |
| approval_version | int | NO |  | 1 |  |  |
| published_trace_id | varchar(64) | YES |  | NULL |  |  |
| published_by | int | YES |  | NULL |  |  |
| published_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_service_settings_scopes_app | custom_app_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_service_settings_scopes_service | service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "service_id": 1,
    "custom_app_id": 1,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"\", \"public_level_sr\": \"all\", \"public_level_adm\": \"dep\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"N\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"Y\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"list_form_col_Room\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_Borrow List\": \"N\", \"adm_dash_calendar_date_field\": \"\", \"list_form_col_Building Floor\": \"N\", \"adm_dash_calendar_title_field\": \"\", \"list_form_col_Datetime of use\": \"Y\", \"list_form_col_Number of people\": \"N\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  },
  {
    "id": 2,
    "service_id": 2,
    "custom_app_id": 2,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"\", \"public_level_sr\": \"all\", \"public_level_adm\": \"dep\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"sr_dash_calendar_date_field\": \"field_3\", \"sr_dash_calendar_title_field\": \"User\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"N\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"N\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"N\", \"list_col_requester\": \"Y\", \"list_form_col_User\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_3\": \"Y\", \"list_form_col_field_4\": \"N\", \"list_form_col_field_5\": \"N\", \"list_form_col_field_6\": \"N\", \"list_form_col_field_7\": \"N\", \"list_form_col_field_8\": \"N\", \"list_form_col_field_9\": \"N\", \"sr_dash_calendar_date_field\": \"field_3\", \"adm_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"User\", \"adm_dash_calendar_title_field\": \"\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  },
  {
    "id": 3,
    "service_id": 5,
    "custom_app_id": 2,
    "config_version": 2,
    "overview_json": "{\"category_name\":\"อุปกรณ์คอมพิวเตอร์\",\"public_level_sr\":\"all\",\"public_level_adm\":\"dep\",\"enable_service_chat\":\"Y\"}",
    "requester_ui_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"N\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"\",\"sr_dash_calendar_title_field\":\"\"}",
    "admin_ui_json": "{\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"Y\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"N\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"adm_dash_calendar_date_field\":\"\",\"adm_dash_calendar_title_field\":\"\"}",
    "evaluation_json": "{\"enable_evaluation\":\"Y\"}",
    "approval_json": "{\"enable_approval_flow\":\"N\"}",
    "published_settings_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"N\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"\",\"sr_dash_calendar_title_field\":\"\",\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"Y\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"N\",\"adm_dash_calendar_date_field\":\"\",\"adm_dash_calendar_title_field\":\"\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"enable_evaluation\":\"Y\",\"enable_approval_flow\":\"N\",\"enable_service_chat\":\"Y\",\"category_name\":\"อุปกรณ์คอมพิวเตอร์\",\"public_level_sr\":\"all\",\"public_level_adm\":\"dep\",\"list_form_col_Room\":\"N\",\"list_form_col_Problem\":\"N\",\"list_form_col_field_1\":\"N\",\"list_form_col_Building\":\"N\",\"list_form_col_Priority\":\"N\",\"list_form_col_Department\":\"N\",\"list_form_col_Upload File\":\"N\",\"list_form_col_Date of requiment\":\"N\",\"list_form_col_technician request\":\"N\"}",
    "overview_version": 2,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "workspace-settings-20260711143507-8b22a335",
    "published_by": 253,
    "published_at": "2026-07-11 14:35:07",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-07-11 14:35:07"
  },
  {
    "id": 4,
    "service_id": 6,
    "custom_app_id": 2,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"โปรแกรม หรือระบบบริการ\", \"public_level_sr\": \"all\", \"public_level_adm\": \"all\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"sr_dash_calendar_date_field\": \"field_4\", \"sr_dash_calendar_title_field\": \"department\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"Y\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"N\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"Y\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"Y\", \"adm_dash_calendar\": \"Y\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"N\", \"adm_recent_requests\": \"N\", \"list_col_department\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_2\": \"N\", \"list_form_col_field_3\": \"N\", \"list_form_col_field_4\": \"N\", \"list_form_col_deadline\": \"N\", \"list_form_col_department\": \"N\", \"sr_dash_calendar_date_field\": \"field_4\", \"sr_dash_calendar_title_field\": \"department\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  },
  {
    "id": 5,
    "service_id": 7,
    "custom_app_id": 2,
    "config_version": 2,
    "overview_json": "{\"category_name\":\"ทั่วไป\",\"public_level_sr\":\"all\",\"public_level_adm\":\"all\",\"enable_service_chat\":\"Y\"}",
    "requester_ui_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"Y\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"Timeline (1 Day)\",\"sr_dash_calendar_title_field\":\"subject\"}",
    "admin_ui_json": "{\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"N\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"Y\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"adm_dash_calendar_date_field\":\"Timeline (1 Day)\",\"adm_dash_calendar_title_field\":\"subject\"}",
    "evaluation_json": "{\"enable_evaluation\":\"N\"}",
    "approval_json": "{\"enable_approval_flow\":\"N\"}",
    "published_settings_json": "{\"sr_stat_summary\":\"Y\",\"sr_recent_requests\":\"Y\",\"sr_dash_new_btn\":\"N\",\"sr_new_request_btn\":\"Y\",\"sr_filter_bar\":\"Y\",\"sr_dash_calendar\":\"Y\",\"sr_dash_calendar_date_field\":\"Timeline (1 Day)\",\"sr_dash_calendar_title_field\":\"subject\",\"adm_stat_summary\":\"Y\",\"adm_recent_requests\":\"N\",\"adm_dash_new_btn\":\"N\",\"adm_dash_calendar\":\"Y\",\"adm_dash_calendar_date_field\":\"Timeline (1 Day)\",\"adm_dash_calendar_title_field\":\"subject\",\"list_col_id\":\"Y\",\"list_col_date\":\"Y\",\"list_col_status\":\"Y\",\"list_col_requester\":\"Y\",\"list_col_department\":\"Y\",\"list_col_action\":\"Y\",\"enable_evaluation\":\"N\",\"enable_approval_flow\":\"N\",\"enable_service_chat\":\"Y\",\"category_name\":\"ทั่วไป\",\"public_level_sr\":\"all\",\"public_level_adm\":\"all\",\"list_form_col_User\":\"N\",\"list_form_col_tools\":\"N\",\"list_form_col_address\":\"N\",\"list_form_col_subject\":\"N\",\"list_form_col_Platform\":\"Y\",\"list_form_col_Department\":\"N\",\"list_form_col_tools_other\":\"N\",\"list_form_col_Timeline (1 Day)\":\"Y\",\"list_form_col_ID Line (if forgot)\":\"N\"}",
    "overview_version": 2,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "workspace-settings-20260711143638-e5afda33",
    "published_by": 253,
    "published_at": "2026-07-11 14:36:38",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-07-11 14:36:38"
  },
  {
    "id": 6,
    "service_id": 8,
    "custom_app_id": 2,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"\", \"public_level_sr\": \"all\", \"public_level_adm\": \"all\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"N\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"N\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"N\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  },
  {
    "id": 7,
    "service_id": 9,
    "custom_app_id": 2,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"โปรแกรม หรือระบบบริการ\", \"public_level_sr\": \"all\", \"public_level_adm\": \"dep\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"Y\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"Y\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"dep\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"Y\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"list_form_col_User\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"list_form_col_Detail\": \"N\", \"list_form_col_Location\": \"N\", \"list_form_col_Priority\": \"Y\", \"list_form_col_Software\": \"Y\", \"list_form_col_Department\": \"N\", \"sr_dash_calendar_date_field\": \"\", \"adm_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  },
  {
    "id": 8,
    "service_id": 10,
    "custom_app_id": 2,
    "config_version": 1,
    "overview_json": "{\"category_name\": \"โปรแกรม หรือระบบบริการ\", \"public_level_sr\": \"all\", \"public_level_adm\": \"all\"}",
    "requester_ui_json": "{\"sr_filter_bar\": \"Y\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"sr_dash_calendar\": \"N\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "admin_ui_json": "{\"list_col_id\": \"Y\", \"list_col_date\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"adm_dash_calendar\": \"N\", \"list_col_requester\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_col_department\": \"Y\", \"adm_dash_calendar_date_field\": \"\", \"adm_dash_calendar_title_field\": \"\"}",
    "evaluation_json": "{\"enable_evaluation\": \"Y\"}",
    "approval_json": "{\"enable_approval_flow\": \"N\"}",
    "published_settings_json": "{\"list_col_id\": \"Y\", \"category_name\": \"โปรแกรม หรือระบบบริการ\", \"list_col_date\": \"Y\", \"sr_filter_bar\": \"Y\", \"list_col_action\": \"Y\", \"list_col_status\": \"Y\", \"public_level_sr\": \"all\", \"sr_dash_new_btn\": \"N\", \"sr_stat_summary\": \"Y\", \"adm_dash_new_btn\": \"N\", \"adm_stat_summary\": \"Y\", \"public_level_adm\": \"all\", \"sr_dash_calendar\": \"N\", \"adm_dash_calendar\": \"N\", \"enable_evaluation\": \"Y\", \"list_col_requester\": \"Y\", \"sr_new_request_btn\": \"Y\", \"sr_recent_requests\": \"Y\", \"adm_recent_requests\": \"Y\", \"list_form_col_field_1\": \"N\", \"list_form_col_field_2\": \"N\", \"list_form_col_field_3\": \"N\", \"list_form_col_field_4\": \"N\", \"list_form_col_field_5\": \"N\", \"sr_dash_calendar_date_field\": \"\", \"sr_dash_calendar_title_field\": \"\"}",
    "overview_version": 1,
    "requester_ui_version": 1,
    "admin_ui_version": 1,
    "evaluation_version": 1,
    "approval_version": 1,
    "published_trace_id": "migration-service-settings-scopes",
    "published_by": null,
    "published_at": "2026-04-23 16:21:42",
    "created_at": "2026-04-23 16:21:42",
    "updated_at": "2026-04-23 16:21:42"
  }
]
```

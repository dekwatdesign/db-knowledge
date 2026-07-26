# `clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| labparam | varchar(10) | YES |  | NULL |  |  |
| icd10 | varchar(6) | YES |  | NULL |  |  |
| chronic | char(1) | YES |  | NULL |  |  |
| clinic_guid | varchar(38) | YES | MUL | NULL |  |  |
| pcu_code | int(11) | YES |  | NULL |  |  |
| oapp_activity_id | varchar(5) | YES |  | NULL |  |  |
| disable_dialog | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| no_export | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| hosxp_clinic_type_id | int(11) | YES |  | NULL |  |  |
| online_register_type_id | int(11) | YES |  | NULL |  |  |
| online_ncd_segment_id | varchar(50) | YES |  | NULL |  |  |
| online_ncd_key | varchar(50) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| location | varchar(200) | YES |  | NULL |  |  |
| phone | varchar(50) | YES |  | NULL |  |  |
| oldcode | varchar(20) | YES |  | NULL |  |  |
| open_time | time | YES |  | NULL |  |  |
| close_time | time | YES |  | NULL |  |  |
| app_limit_qty | int(11) | YES |  | NULL |  |  |
| limit_access | char(1) | YES |  | NULL |  |  |
| sss_clinic_code | char(3) | YES | MUL | NULL |  |  |
| use_app_qs_slot | char(1) | YES |  | NULL |  |  |
| queue_prefix | varchar(5) | YES |  | NULL |  |  |
| kiosk_opd_qs_room_id | int(11) | YES |  | NULL |  |  |
| opd_kios_dep_menu_id | int(11) | YES |  | NULL |  |  |
| opd_qs_schedule_tmpl_type_id | int(11) | YES |  | NULL |  |  |
| moph_vaccine_ncd_id | int(11) | YES |  | NULL |  |  |
| phr_skip | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_guid | clinic_guid | no | 1 |
| ix_name | name | no | 1 |
| ix_sss_clinic_code | sss_clinic_code | no | 1 |
| PRIMARY | clinic | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic": "000",
    "name": "จิตเวชเด็กและวัยรุ่น",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "001",
    "name": "ระบบประสาท(EEG)",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": "DM",
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "002",
    "name": "ผู้สูงอายุ",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": "HT",
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "003",
    "name": "ส่งเสริมพัฒนาการเด็ก",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "009",
    "name": "ทันตกรรม",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": "9",
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": "Y",
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "010",
    "name": "วจีบำบัด (แก้ไขการพูด)",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "011",
    "name": "การศึกษาพิเศษ",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  },
  {
    "clinic": "012",
    "name": "อาชีวบำบัด",
    "labparam": null,
    "icd10": null,
    "chronic": "Y",
    "clinic_guid": null,
    "pcu_code": null,
    "oapp_activity_id": null,
    "disable_dialog": null,
    "hos_guid": null,
    "no_export": null,
    "active_status": null,
    "hosxp_clinic_type_id": 8,
    "online_register_type_id": null,
    "online_ncd_segment_id": null,
    "online_ncd_key": null,
    "depcode": null,
    "location": null,
    "phone": null,
    "oldcode": null,
    "open_time": null,
    "close_time": null,
    "app_limit_qty": null,
    "limit_access": null,
    "sss_clinic_code": null,
    "use_app_qs_slot": null,
    "queue_prefix": null,
    "kiosk_opd_qs_room_id": null,
    "opd_kios_dep_menu_id": null,
    "opd_qs_schedule_tmpl_type_id": null,
    "moph_vaccine_ncd_id": null,
    "phr_skip": null
  }
]
```

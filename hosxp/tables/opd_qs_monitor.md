# `opd_qs_monitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_monitor_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_monitor_name | varchar(100) | YES |  | NULL |  |  |
| opd_qs_location_type_id | int(11) | YES |  | NULL |  |  |
| opd_qs_room_interview_id | int(11) | YES |  | NULL |  |  |
| opd_qs_doctor_depcode_box1 | char(3) | YES |  | NULL |  |  |
| opd_qs_depcode_box1_status | char(1) | YES |  | NULL |  |  |
| opd_qs_doctor_depcode_box2 | char(3) | YES |  | NULL |  |  |
| opd_qs_depcode_box2_status | char(1) | YES |  | NULL |  |  |
| opd_qs_doctor_depcode_box3 | char(3) | YES |  | NULL |  |  |
| opd_qs_depcode_box3_status | char(1) | YES |  | NULL |  |  |
| opd_qs_computer_id | int(11) | YES |  | NULL |  |  |
| opd_qs_monitor_active | char(1) | YES |  | NULL |  |  |
| opd_qs_dispensary_decode | char(3) | YES |  | NULL |  |  |
| opd_qs_finance_decode | char(3) | YES |  | NULL |  |  |
| opd_qs_text_top | varchar(300) | YES |  | NULL |  |  |
| opd_qs_text_bottom | varchar(300) | YES |  | NULL |  |  |
| opd_qs_depcode_box1_speak | varchar(150) | YES |  | NULL |  |  |
| opd_qs_depcode_box2_speak | varchar(150) | YES |  | NULL |  |  |
| opd_qs_depcode_box3_speak | varchar(150) | YES |  | NULL |  |  |
| opd_qs_dispensary_ch1_speak | char(3) | YES |  | NULL |  |  |
| opd_qs_dispensary_ch2_speak | char(3) | YES |  | NULL |  |  |
| opd_qs_doctor_type_single_room | char(1) | YES |  | NULL |  |  |
| opd_qs_dispensary_ch3_speak | char(3) | YES |  | NULL |  |  |
| opd_qs_monitor_ip | varchar(50) | YES |  | NULL |  |  |
| opd_qs_monitor_mac_addres | varchar(50) | YES |  | NULL |  |  |
| opd_qs_device_information | varchar(250) | YES |  | NULL |  |  |
| rtc_port | int(11) | YES |  | NULL |  |  |
| opd_qs_nurse_depcode | char(3) | YES |  | NULL |  |  |
| opd_qs_one_stop_service_text | varchar(255) | YES |  | NULL |  |  |
| opd_qs_dispensary_ch4_speak | char(1) | YES |  | NULL |  |  |
| opd_qs_dispensary_chh4_visible | char(1) | YES |  | NULL |  |  |
| opd_qs_depcode_service | char(3) | YES |  | NULL |  |  |
| opd_qs_doctor_staff_depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | opd_qs_monitor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

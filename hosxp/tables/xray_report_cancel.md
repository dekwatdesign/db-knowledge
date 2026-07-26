# `xray_report_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xn | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| report_date | date | YES | MUL | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| report_rtf | longblob | YES |  | NULL |  |  |
| report_text | longtext | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| examined_date | date | YES |  | NULL |  |  |
| examined_time | time | YES |  | NULL |  |  |
| xray_room_id | int(11) | YES |  | NULL |  |  |
| xray_pt_status | int(11) | YES |  | NULL |  |  |
| xray_type | int(11) | YES |  | NULL |  |  |
| request_doctor | varchar(6) | YES |  | NULL |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| clinical_information | text | YES |  | NULL |  |  |
| request_note | text | YES |  | NULL |  |  |
| xray_items_code | int(11) | YES |  | NULL |  |  |
| request_staff | varchar(25) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| normal | char(1) | YES |  | NULL |  |  |
| xray_side | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| confirm_read_film | char(1) | YES |  | NULL |  |  |
| report_doctor | varchar(10) | YES |  | NULL |  |  |
| doctor_fee | double(15,3) | YES |  | NULL |  |  |
| xray_icd10 | varchar(7) | YES |  | NULL |  |  |
| opitemrece_guid | varchar(38) | YES | MUL | NULL |  |  |
| xray_note | text | YES |  | NULL |  |  |
| request_depcode | varchar(3) | YES |  | NULL |  |  |
| xray_priority_id | int(11) | YES |  | NULL |  |  |
| visit_time_type_id | int(11) | YES |  | NULL |  |  |
| xray_keeper_id | int(11) | YES |  | NULL |  |  |
| request_count_in_year | int(11) | YES |  | NULL |  |  |
| xray_status_id | int(11) | YES |  | NULL |  |  |
| xray_time_type_id | int(11) | YES |  | NULL |  |  |
| xray_try_count | int(11) | YES |  | NULL |  |  |
| pt_xn | int(11) | YES |  | NULL |  |  |
| pt_class_xn | int(11) | YES |  | NULL |  |  |
| clinical_diagnosis | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| finance_lock | char(1) | YES |  | NULL |  |  |
| xray_items_group_count_in_year | int(11) | YES |  | NULL |  |  |
| xray_items_count_in_year | int(11) | YES |  | NULL |  |  |
| xray_icd10_2 | varchar(7) | YES |  | NULL |  |  |
| pack_status | varchar(1) | YES |  | NULL |  |  |
| xray_icd10_3 | varchar(10) | YES |  | NULL |  |  |
| xray_icd10_4 | varchar(10) | YES |  | NULL |  |  |
| pac_request | char(1) | YES |  | NULL |  |  |
| pac_request_datetime | datetime | YES |  | NULL |  |  |
| pac_request_message | varchar(150) | YES |  | NULL |  |  |
| pac_emergency_code | int(11) | YES |  | NULL |  |  |
| walk_id | int(11) | YES |  | NULL |  |  |
| xray_items_service_type_id | int(11) | YES |  | NULL |  |  |
| accept_date | date | YES |  | NULL |  |  |
| accept_time | time | YES |  | NULL |  |  |
| confirm_read_date | date | YES |  | NULL |  |  |
| confirm_read_time | time | YES |  | NULL |  |  |
| confirm_radiology | char(1) | YES |  | NULL |  |  |
| confirm_radiology_date | date | YES |  | NULL |  |  |
| confirm_radiology_time | time | YES |  | NULL |  |  |
| xray_report_status_id | int(11) | YES |  | NULL |  |  |
| cancel_reason | text | YES |  | NULL |  |  |
| xray_cancel_type_id | int(11) | YES |  | NULL |  |  |
| xray_cancel_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opiguid | opitemrece_guid | no | 1 |
| ix_report_date | report_date | no | 1 |
| ix_request_date | request_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | xn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

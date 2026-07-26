# `ovst_seq`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| seq_id | int(11) | YES | UNI | NULL |  |  |
| pttype_check | char(1) | YES |  | NULL |  |  |
| pttype_check_datetime | datetime | YES |  | NULL |  |  |
| pttype_check_staff | varchar(50) | YES |  | NULL |  |  |
| pcu_person_id | varchar(9) | YES |  | NULL |  |  |
| last_opdcard_depcode | varchar(3) | YES |  | NULL |  |  |
| protect_sensitive_data | char(1) | YES |  | NULL |  |  |
| rx_queue_no | int(11) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| stock_department_queue_no | int(11) | YES |  | NULL |  |  |
| last_stock_department_id | int(11) | YES |  | NULL |  |  |
| nhso_seq_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES | MUL | NULL |  |  |
| promote_visit | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| service_cost | double(15,3) | YES |  | NULL |  |  |
| last_rx_operator_staff | varchar(25) | YES |  | NULL |  |  |
| last_check_datetime | datetime | YES |  | NULL |  |  |
| pttype_check_status_id | int(11) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| register_depcode | varchar(3) | YES |  | NULL |  |  |
| register_computer | varchar(50) | YES |  | NULL |  |  |
| doctor_list_text | varchar(250) | YES |  | NULL |  |  |
| er_pt_type | int(11) | YES |  | NULL |  |  |
| er_emergency_type | int(11) | YES |  | NULL |  |  |
| sub_spclty_id | int(11) | YES |  | NULL |  |  |
| doctor_patient_type_id | int(11) | YES |  | NULL |  |  |
| finance_status_flag | int(11) | YES |  | NULL |  |  |
| has_arrear | char(1) | YES |  | NULL |  |  |
| rx_ok | char(1) | YES |  | NULL |  |  |
| has_scan_doc | char(1) | YES |  | NULL |  |  |
| rx_queue_list | varchar(30) | YES |  | NULL |  |  |
| rx_queue_time | datetime | YES |  | NULL |  |  |
| dx_text_list | varchar(250) | YES |  | NULL |  |  |
| opd_qs_slot_id | int(11) | YES | MUL | NULL |  |  |
| rx_transaction_id | int(11) | YES |  | NULL |  |  |
| doctor_dx_list_text | varchar(250) | YES |  | NULL |  |  |
| doctor_rx_list_text | varchar(250) | YES |  | NULL |  |  |
| pttype_list_text | varchar(250) | YES |  | NULL |  |  |
| hospmain_list_text | varchar(100) | YES |  | NULL |  |  |
| edc_approve_list_text | varchar(200) | YES |  | NULL |  |  |
| rx_priority_id | int(11) | YES |  | NULL |  |  |
| ovst_doctor_list_text | varchar(250) | YES |  | NULL |  |  |
| nhso_fee_schedule_list_text | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_qs_slot_id | opd_qs_slot_id | no | 1 |
| ix_seq_id | seq_id | yes | 1 |
| ix_update_datetime | update_datetime | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "",
    "seq_id": null,
    "pttype_check": "Y",
    "pttype_check_datetime": "2023-01-13 11:19:05",
    "pttype_check_staff": "yuwa135",
    "pcu_person_id": null,
    "last_opdcard_depcode": "004",
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": null,
    "promote_visit": null,
    "hos_guid": null,
    "service_cost": null,
    "last_rx_operator_staff": null,
    "last_check_datetime": null,
    "pttype_check_status_id": 1,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "051017175759",
    "seq_id": 266786,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "005747",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2014-08-07 14:01:43",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": 0.0,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2014-08-07 14:01:43",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "240614151330",
    "seq_id": 367163,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "020646",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2013-06-13 15:21:50",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": 0.0,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2013-06-13 15:21:51",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "250101153511",
    "seq_id": 277562,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "013752",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2014-08-07 14:01:43",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": 0.0,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2014-08-07 14:01:43",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "250109164252",
    "seq_id": 278138,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "003780",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2014-08-07 14:01:42",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": 0.0,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2014-08-07 14:01:42",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "250112144831",
    "seq_id": 891986,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "052219",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": 0,
    "update_datetime": "2022-01-11 14:49:18",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": null,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2022-01-11 14:49:18",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "250119130001",
    "seq_id": 280034,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "019258",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2014-08-07 14:01:42",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": 0.0,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2014-08-07 14:01:42",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  },
  {
    "vn": "250201113358",
    "seq_id": 536218,
    "pttype_check": "N",
    "pttype_check_datetime": null,
    "pttype_check_staff": null,
    "pcu_person_id": "048059",
    "last_opdcard_depcode": null,
    "protect_sensitive_data": null,
    "rx_queue_no": null,
    "stock_department_id": null,
    "stock_department_queue_no": null,
    "last_stock_department_id": null,
    "nhso_seq_id": null,
    "update_datetime": "2016-01-29 11:34:38",
    "promote_visit": "N",
    "hos_guid": null,
    "service_cost": null,
    "last_rx_operator_staff": null,
    "last_check_datetime": "2016-01-29 11:34:38",
    "pttype_check_status_id": null,
    "hospital_department_id": null,
    "register_depcode": null,
    "register_computer": null,
    "doctor_list_text": null,
    "er_pt_type": null,
    "er_emergency_type": null,
    "sub_spclty_id": null,
    "doctor_patient_type_id": null,
    "finance_status_flag": null,
    "has_arrear": null,
    "rx_ok": null,
    "has_scan_doc": null,
    "rx_queue_list": null,
    "rx_queue_time": null,
    "dx_text_list": null,
    "opd_qs_slot_id": null,
    "rx_transaction_id": null,
    "doctor_dx_list_text": null,
    "doctor_rx_list_text": null,
    "pttype_list_text": null,
    "hospmain_list_text": null,
    "edc_approve_list_text": null,
    "rx_priority_id": null,
    "ovst_doctor_list_text": null,
    "nhso_fee_schedule_list_text": null
  }
]
```

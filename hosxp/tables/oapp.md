# `oapp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| nextdate | date | YES | MUL | NULL |  |  |
| nexttime | time | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES | MUL | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| app_user | varchar(150) | YES |  | NULL |  |  |
| app_cause | varchar(250) | YES |  | NULL |  |  |
| contact_point | varchar(250) | YES |  | NULL |  |  |
| note1 | text | YES |  | NULL |  |  |
| note2 | text | YES |  | NULL |  |  |
| app_no | tinyint(4) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| endtime | time | YES |  | NULL |  |  |
| label_color | int(11) | YES |  | NULL |  |  |
| doctor_schedule_id | int(11) | YES | MUL | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| patient_visit | char(1) | YES |  | NULL |  |  |
| nexttime_end | time | YES |  | NULL |  |  |
| next_pttype | char(2) | YES |  | NULL |  |  |
| visit_vn | varchar(13) | YES | MUL | NULL |  |  |
| oapp_id_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_vaccine_id | int(11) | YES |  | NULL |  |  |
| provis_aptype_code | varchar(5) | YES |  | NULL |  |  |
| date_count | int(11) | YES |  | NULL |  |  |
| an | char(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| entry_date | date | YES |  | NULL |  |  |
| entry_time | time | YES |  | NULL |  |  |
| operation_appointment | char(1) | YES |  | NULL |  |  |
| operation_patient_type | char(3) | YES |  | NULL |  |  |
| operation_note | varchar(200) | YES |  | NULL |  |  |
| operation_doctor_code | varchar(25) | YES |  | NULL |  |  |
| operation_anes_type | varchar(15) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| oapp_status_id | int(11) | YES |  | NULL |  |  |
| perform_text | text | YES |  | NULL |  |  |
| lab_list_text | text | YES |  | NULL |  |  |
| xray_list_text | text | YES |  | NULL |  |  |
| clinic_visit_type_id | int(11) | YES |  | NULL |  |  |
| visit_no | int(11) | YES | MUL | NULL |  |  |
| opd_queue_slot_id | int(11) | YES |  | NULL |  |  |
| opd_queue_schedule_id | int(11) | YES |  | NULL |  |  |
| opd_qs_slot_id | int(11) | YES | MUL | NULL |  |  |
| oapp_ref_id | int(11) | YES | MUL | NULL |  |  |
| referin_vn | varchar(12) | YES |  | NULL |  |  |
| oapp_week_range_limit_id | int(11) | YES |  | NULL |  |  |
| ext_ref_id | int(11) | YES | MUL | NULL |  |  |
| moph_ic_ref_id | int(11) | YES |  | NULL |  |  |
| is_refill | char(1) | YES |  | NULL |  |  |
| oapp_confirm_method | varchar(15) | YES |  | NULL |  |  |
| oapp_confirm_note | varchar(150) | YES |  | NULL |  |  |
| oapp_confirm_datetime | datetime | YES |  | NULL |  |  |
| oapp_confirm_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_doctor_schedule_id | doctor_schedule_id | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_nextdate | nextdate | no | 1 |
| ix_oapp_id_guid | oapp_id_guid | no | 1 |
| ix_oapp_ref_id | oapp_ref_id | no | 1 |
| ix_qs_slot_id | opd_qs_slot_id | no | 1 |
| ix_vh | vstdate | no | 1 |
| ix_vh | hn | no | 2 |
| ix_vh_index | hn | no | 1 |
| ix_vh_index | vstdate | no | 2 |
| ix_visit_vn | visit_vn | no | 1 |
| ix_visit_vn_no | visit_vn | no | 1 |
| ix_visit_vn_no | visit_no | no | 2 |
| ix_visit_vn_no_index | visit_no | no | 1 |
| ix_visit_vn_no_index | visit_vn | no | 2 |
| ix_vn | vn | no | 1 |
| ix_vn_ext_ref_id | vn | no | 1 |
| ix_vn_ext_ref_id | ext_ref_id | no | 2 |
| ix_vn_ext_ref_id_index | ext_ref_id | no | 1 |
| ix_vn_ext_ref_id_index | vn | no | 2 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | oapp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oapp_id": 0,
    "hn": null,
    "vn": null,
    "vstdate": null,
    "nextdate": null,
    "nexttime": "11:30:08",
    "clinic": null,
    "depcode": null,
    "doctor": null,
    "note": null,
    "spclty": null,
    "app_user": null,
    "app_cause": null,
    "contact_point": null,
    "note1": null,
    "note2": null,
    "app_no": null,
    "print_sticker": null,
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": null,
    "ward": null,
    "patient_visit": null,
    "nexttime_end": null,
    "next_pttype": null,
    "visit_vn": null,
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": null,
    "entry_time": null,
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 7,
    "hn": "600000882",
    "vn": "541011154732",
    "vstdate": "2011-10-11",
    "nextdate": "2011-11-08",
    "nexttime": "14:00:00",
    "clinic": "011",
    "depcode": "026",
    "doctor": "096",
    "note": "089-1178077",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": "กรุณานำบัตร รพ. และบัตรรับรองสิทธิ์ (ถ้ามี) มาด้วย\r\nกรุณานำใบนัดมาด้วย\r\nกรุณานำใบส่งตัว (ถ้ามี) มาด้วย\r\n",
    "note2": null,
    "app_no": 5,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "Y",
    "nexttime_end": "15:00:00",
    "next_pttype": "10",
    "visit_vn": null,
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-06",
    "entry_time": "16:19:54",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 11,
    "hn": "530067647",
    "vn": "541007092204",
    "vstdate": "2011-10-07",
    "nextdate": "2011-11-10",
    "nexttime": "9:30:00",
    "clinic": "009",
    "depcode": "015",
    "doctor": "082",
    "note": "",
    "spclty": "11",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "",
    "note1": null,
    "note2": null,
    "app_no": 1,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "N",
    "nexttime_end": "10:00:00",
    "next_pttype": "10",
    "visit_vn": null,
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-07",
    "entry_time": "11:27:29",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 23,
    "hn": "530085654",
    "vn": "1xxxxxxxxxxxx",
    "vstdate": "2011-08-11",
    "nextdate": "2011-10-10",
    "nexttime": "9:30:00",
    "clinic": "000",
    "depcode": "017",
    "doctor": "069",
    "note": "",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "Other",
    "contact_point": "",
    "note1": null,
    "note2": null,
    "app_no": 2,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": null,
    "nexttime_end": "10:30:00",
    "next_pttype": "10",
    "visit_vn": null,
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-09",
    "entry_time": "11:46:34",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 27,
    "hn": "530067054",
    "vn": "541010060057",
    "vstdate": "2011-10-10",
    "nextdate": "2012-03-19",
    "nexttime": "8:30:00",
    "clinic": "000",
    "depcode": "025",
    "doctor": "064",
    "note": "",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": "กรุณานำใบนัดมาด้วย\r\n",
    "note2": null,
    "app_no": 3,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "Y",
    "nexttime_end": "9:15:00",
    "next_pttype": "10",
    "visit_vn": "550319083004",
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-10",
    "entry_time": "9:02:48",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 29,
    "hn": "600000658",
    "vn": "541010060021",
    "vstdate": "2011-10-10",
    "nextdate": "2012-02-15",
    "nexttime": "8:30:00",
    "clinic": "000",
    "depcode": "025",
    "doctor": "066",
    "note": "",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": "กรุณานำใบนัดมาด้วย\r\nกรุณานำไปส่งตัว (ถ้ามี) มาด้วย\r\n",
    "note2": null,
    "app_no": 1,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "Y",
    "nexttime_end": "9:15:00",
    "next_pttype": "10",
    "visit_vn": "550215083002",
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-10",
    "entry_time": "9:15:41",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 31,
    "hn": "530192246",
    "vn": "541010083003",
    "vstdate": "2011-10-10",
    "nextdate": "2012-02-13",
    "nexttime": "8:30:00",
    "clinic": "000",
    "depcode": "025",
    "doctor": "065",
    "note": "",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": "กรุณานำใบนัดมาด้วย\r\nกรุณานำไปส่งตัว (ถ้ามี) มาด้วย\r\n",
    "note2": null,
    "app_no": 1,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "Y",
    "nexttime_end": "9:15:00",
    "next_pttype": "10",
    "visit_vn": "550213083018",
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-10",
    "entry_time": "9:18:10",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  },
  {
    "oapp_id": 33,
    "hn": "530176350",
    "vn": "541010060032",
    "vstdate": "2011-10-10",
    "nextdate": "2012-02-09",
    "nexttime": "8:30:00",
    "clinic": "000",
    "depcode": "025",
    "doctor": "066",
    "note": "",
    "spclty": "09",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": "กรุณานำบัตร รพ.และบัตรรับรองสิทธิ (ถ้ามี) มาด้วย\r\nกรุณานำใบนัดมาด้วย\r\nกรุณานำไปส่งตัว (ถ้ามี) มาด้วย\r\n",
    "note2": null,
    "app_no": 1,
    "print_sticker": "N",
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": "Y",
    "nexttime_end": "9:15:00",
    "next_pttype": "74",
    "visit_vn": "550209083006",
    "oapp_id_guid": null,
    "person_vaccine_id": null,
    "provis_aptype_code": null,
    "date_count": null,
    "an": null,
    "hos_guid": null,
    "entry_date": "2011-10-10",
    "entry_time": "9:28:07",
    "operation_appointment": null,
    "operation_patient_type": null,
    "operation_note": null,
    "operation_doctor_code": null,
    "operation_anes_type": null,
    "update_datetime": null,
    "oapp_status_id": null,
    "perform_text": null,
    "lab_list_text": null,
    "xray_list_text": null,
    "clinic_visit_type_id": null,
    "visit_no": null,
    "opd_queue_slot_id": null,
    "opd_queue_schedule_id": null,
    "opd_qs_slot_id": null,
    "oapp_ref_id": null,
    "referin_vn": null,
    "oapp_week_range_limit_id": null,
    "ext_ref_id": null,
    "moph_ic_ref_id": null,
    "is_refill": null,
    "oapp_confirm_method": null,
    "oapp_confirm_note": null,
    "oapp_confirm_datetime": null,
    "oapp_confirm_type_id": null
  }
]
```

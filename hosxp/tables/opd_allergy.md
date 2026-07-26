# `opd_allergy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| report_date | date | YES | MUL | NULL |  |  |
| agent | varchar(250) | NO | PRI |  |  |  |
| symptom | varchar(250) | YES |  | NULL |  |  |
| reporter | varchar(250) | YES |  | NULL |  |  |
| relation_level | varchar(50) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| allergy_type | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| allergy_group_id | int(11) | YES |  | NULL |  |  |
| seriousness_id | int(11) | YES |  | NULL |  |  |
| allergy_result_id | int(11) | YES |  | NULL |  |  |
| allergy_relation_id | int(11) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| no_alert | char(1) | YES |  | NULL |  |  |
| naranjo_result_id | int(11) | YES |  | NULL |  |  |
| force_no_order | char(1) | YES |  | NULL |  |  |
| opd_allergy_alert_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| adr_preventable_score | int(11) | YES |  | NULL |  |  |
| preventable | char(1) | YES |  | NULL |  |  |
| patient_cid | varchar(13) | YES | MUL | NULL |  |  |
| adr_consult_dialog_id | int(11) | YES |  | NULL |  |  |
| opd_allergy_report_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| agent_code24 | varchar(24) | YES |  | NULL |  |  |
| officer_confirm | char(1) | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| opd_allergy_symtom_type_id | int(11) | YES |  | NULL |  |  |
| opd_allergy_id | int(11) | YES | MUL | NULL |  |  |
| cross_group_check | char(1) | YES |  | NULL |  |  |
| opd_allergy_source_id | int(11) | YES |  | NULL |  |  |
| opd_allergy_type_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| dosage_text | text | YES |  | NULL |  |  |
| usage_text | text | YES |  | NULL |  |  |
| lab_text | text | YES |  | NULL |  |  |
| sct_disorder_id | varchar(18) | YES |  | NULL |  |  |
| sct_substance_id | varchar(18) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| agent | agent | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_opd_allergy_id | opd_allergy_id | no | 1 |
| ix_patient_cid | patient_cid | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | agent | yes | 2 |
| report_date | report_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "",
    "report_date": "2015-05-06",
    "agent": "Amoxycillin",
    "symptom": "Erythema multiform ผื่นแดงแบบเป้าธนูตามลำตัว ใบหน้า ในปากแดง คอแดงมีตุ่มพอง",
    "reporter": "yuwa024",
    "relation_level": null,
    "note": "ประวัติจากรพ.ไทยนครินทร์ (2547)",
    "allergy_type": null,
    "display_order": null,
    "begin_date": null,
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 1,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2015-05-07 10:44:36",
    "update_datetime": "2015-05-07 10:44:36",
    "depcode": "030",
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": null,
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "",
    "report_date": "2013-06-06",
    "agent": "CEFACLOR",
    "symptom": "มีรอยไหม้ที่บริเวณหลัง",
    "reporter": "yuwa024",
    "relation_level": null,
    "note": null,
    "allergy_type": null,
    "display_order": null,
    "begin_date": null,
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 2,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2013-06-10 16:36:38",
    "update_datetime": "2013-06-10 16:36:38",
    "depcode": null,
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": null,
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "",
    "report_date": "2015-06-10",
    "agent": "EPIATE SYRUP",
    "symptom": "ผู้ป่วยรับประทานอาหารมากขึ้น น้ำหนักเพิ่ม",
    "reporter": "yuwa025",
    "relation_level": null,
    "note": "ผู้ป่วยรายนี้ใช้ DEPAKINE SOLUTION เท่านั้น",
    "allergy_type": null,
    "display_order": null,
    "begin_date": null,
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 2,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2015-06-29 12:17:30",
    "update_datetime": "2015-06-29 12:17:30",
    "depcode": "030",
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 2,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": null,
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "",
    "report_date": "2021-11-03",
    "agent": "Ibuprofen",
    "symptom": "ปากบวม",
    "reporter": "yuwa026",
    "relation_level": null,
    "note": "ผู้ปกครองแจ้ง แพ้ที่ รพ.เปาโล",
    "allergy_type": null,
    "display_order": null,
    "begin_date": "2021-11-05",
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": null,
    "allergy_relation_id": null,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2021-11-05 09:09:50",
    "update_datetime": "2021-11-05 09:09:50",
    "depcode": null,
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": "",
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": null,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "",
    "report_date": "2015-05-06",
    "agent": "Risperidone GPO 1 mg",
    "symptom": "Tardive dyskinesia",
    "reporter": "yuwa025",
    "relation_level": null,
    "note": "BW 73 kg Age 20 Yr. risperidone 1 mg/day ",
    "allergy_type": null,
    "display_order": null,
    "begin_date": "2015-04-15",
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 2,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2015-05-07 10:40:28",
    "update_datetime": "2015-05-07 10:40:28",
    "depcode": "030",
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": null,
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "530000648",
    "report_date": "2008-07-01",
    "agent": "Risperdal Solution",
    "symptom": "Fixed drug eruption",
    "reporter": "yuwa024",
    "relation_level": null,
    "note": "แพ้ส่วนประกอบของยา Risperdal solution ไม่ได้แพ้ยา risperidone กินยาเม็ดได้",
    "allergy_type": null,
    "display_order": null,
    "begin_date": "2008-07-01",
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 1,
    "ward": null,
    "department": "OPD",
    "spclty": "09",
    "entry_datetime": "2016-07-21 14:51:15",
    "update_datetime": "2016-07-21 14:51:15",
    "depcode": null,
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": null,
    "opd_allergy_alert_type_id": 2,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": "1xxxxxxxxxxxx",
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": null,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "530000853",
    "report_date": "2024-01-09",
    "agent": "Ibuprofen",
    "symptom": "ข้อพับแขนดำ คอดำ",
    "reporter": "yuwa025",
    "relation_level": null,
    "note": "ประวัติจาก สำโรงการแพทย์",
    "allergy_type": null,
    "display_order": null,
    "begin_date": null,
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": 1,
    "allergy_relation_id": 2,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2024-01-09 10:23:19",
    "update_datetime": "2024-01-09 10:23:19",
    "depcode": "030",
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": "1xxxxxxxxxxxx",
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  },
  {
    "hn": "530000946",
    "report_date": "2014-07-10",
    "agent": "PENICILLIN",
    "symptom": "ผื่นขึ้นทั้งตัว",
    "reporter": "yuwa026",
    "relation_level": null,
    "note": "มารดาแจ้ง",
    "allergy_type": null,
    "display_order": null,
    "begin_date": "2014-07-10",
    "allergy_group_id": null,
    "seriousness_id": 1,
    "allergy_result_id": null,
    "allergy_relation_id": null,
    "ward": null,
    "department": "OPD",
    "spclty": null,
    "entry_datetime": "2014-07-10 16:22:56",
    "update_datetime": "2014-07-10 16:23:36",
    "depcode": "030",
    "no_alert": null,
    "naranjo_result_id": null,
    "force_no_order": "Y",
    "opd_allergy_alert_type_id": 1,
    "hos_guid": null,
    "adr_preventable_score": null,
    "preventable": null,
    "patient_cid": "1xxxxxxxxxxxx",
    "adr_consult_dialog_id": null,
    "opd_allergy_report_type_id": 1,
    "hos_guid_ext": null,
    "agent_code24": null,
    "officer_confirm": null,
    "icode": null,
    "opd_allergy_symtom_type_id": null,
    "opd_allergy_id": null,
    "cross_group_check": null,
    "opd_allergy_source_id": 1,
    "opd_allergy_type_id": null,
    "doctor_code": null,
    "dosage_text": null,
    "usage_text": null,
    "lab_text": null,
    "sct_disorder_id": null,
    "sct_substance_id": null
  }
]
```

# `ovst_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| person_vaccine_id | int(11) | YES |  | NULL |  |  |
| vaccine_lot_no | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| vaccine_note | text | YES |  | NULL |  |  |
| abnormal_note | text | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| vaccine_complete | char(1) | YES | MUL | NULL |  |  |
| moph_update_status | char(1) | YES |  | NULL |  |  |
| found_reaction | char(1) | YES |  | NULL |  |  |
| vaccine_reaction_type_id | int(11) | YES |  | NULL |  |  |
| serial_no | varchar(30) | YES |  | NULL |  |  |
| vaccine_plan_no | int(11) | YES |  | NULL |  |  |
| ovst_treatment_plan_id | int(11) | YES | MUL | NULL |  |  |
| ovst_treatment_plan_schedule_id | int(11) | YES | MUL | NULL |  |  |
| has_risk_screen | char(1) | YES |  | NULL |  |  |
| immunization_datetime | datetime | YES |  | NULL |  |  |
| moph_update_result | varchar(250) | YES |  | NULL |  |  |
| is_ipt | char(1) | YES |  | NULL |  |  |
| ipt_vcc_guid | varchar(50) | YES |  | NULL |  |  |
| hl7_act_site_code | varchar(10) | YES |  | NULL |  |  |
| hl7_route_of_admin_code | varchar(15) | YES |  | NULL |  |  |
| dose_qty | double(15,2) | YES |  | NULL |  |  |
| dose_unit | varchar(15) | YES |  | NULL |  |  |
| update_moph_phr | char(1) | YES | MUL | NULL |  |  |
| ref_key_code | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_plan_id | ovst_treatment_plan_id | no | 1 |
| ix_ref_key_code | ref_key_code | no | 1 |
| ix_schedule_id | ovst_treatment_plan_schedule_id | no | 1 |
| ix_update_phr | update_moph_phr | no | 1 |
| ix_vcc | vaccine_complete | no | 1 |
| ix_vcc | moph_update_status | no | 2 |
| ix_vn | vn | no | 1 |
| ix_vn_update_phr | vn | no | 1 |
| ix_vn_update_phr | update_moph_phr | no | 2 |
| ix_vn_update_phr_index | update_moph_phr | no | 1 |
| ix_vn_update_phr_index | vn | no | 2 |
| PRIMARY | ovst_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_vaccine_id": 60,
    "vn": "640525060004",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{09C5080F-CC84-4DE1-A88C-14864C84C8BA}",
    "doctor_code": "286",
    "update_datetime": "2021-05-25 08:02:12",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:00:34",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921768554344567",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 47,
    "ovst_treatment_plan_schedule_id": 153,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:50:04",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 63,
    "vn": "640525060002",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{40ABFCF3-311C-48F4-B24B-1C5E013B86D6}",
    "doctor_code": "286",
    "update_datetime": "2021-05-25 08:06:56",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:05:38",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921768554746108",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 49,
    "ovst_treatment_plan_schedule_id": 157,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:54:44",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 67,
    "vn": "640525060354",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{B1FBFF8E-2036-45E7-AFD2-B095D229E12C}",
    "doctor_code": "286",
    "update_datetime": "2021-05-25 08:13:41",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:08:57",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921766692004467",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 50,
    "ovst_treatment_plan_schedule_id": 159,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:59:49",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 68,
    "vn": "640525060006",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{5228AD10-FAD6-44D3-BD25-7E0E0D134B15}",
    "doctor_code": "286",
    "update_datetime": "2021-05-25 08:12:03",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:10:14",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921766692807273",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 51,
    "ovst_treatment_plan_schedule_id": 161,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 08:02:38",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 70,
    "vn": "640525060020",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{0860B3B7-2017-4B61-A211-6475DFF3B97D}",
    "doctor_code": "299",
    "update_datetime": "2021-05-31 15:46:41",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:13:51",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921768557145370",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 52,
    "ovst_treatment_plan_schedule_id": 163,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:50:03",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 71,
    "vn": "640525073000",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{DBDA4D13-EFEC-4377-BF81-466BA425B8C2}",
    "doctor_code": "299",
    "update_datetime": "2021-05-25 08:18:13",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:16:07",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921768556341229",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 43,
    "ovst_treatment_plan_schedule_id": 121,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:55:00",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 3 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 72,
    "vn": "640525060015",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{6F9CFE87-58AB-494B-9886-406CC5B0E9BE}",
    "doctor_code": "286",
    "update_datetime": "2021-05-25 08:18:50",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:17:09",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921768553945547",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 48,
    "ovst_treatment_plan_schedule_id": 155,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 07:48:00",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  },
  {
    "ovst_vaccine_id": 73,
    "vn": "640525060012",
    "person_vaccine_id": 35,
    "vaccine_lot_no": "B202104032",
    "staff": "[MASKED_FULLNAME]",
    "expire_date": "2023-04-04",
    "hos_guid": null,
    "opi_guid": "{C8052CFA-2315-486B-8AD2-26D84B64DA24}",
    "doctor_code": "270",
    "update_datetime": "2021-05-31 15:32:56",
    "vaccine_note": null,
    "abnormal_note": null,
    "entry_datetime": "2021-05-25 08:19:13",
    "vaccine_complete": "Y",
    "moph_update_status": "Y",
    "found_reaction": null,
    "vaccine_reaction_type_id": null,
    "serial_no": "81900921766721614243",
    "vaccine_plan_no": 1,
    "ovst_treatment_plan_id": 54,
    "ovst_treatment_plan_schedule_id": 169,
    "has_risk_screen": "N",
    "immunization_datetime": "2021-05-25 08:03:23",
    "moph_update_result": "Vaccine Update : MOPH Vaccine Update OK plan : 1 vaccine : 1 reaction : 0",
    "is_ipt": null,
    "ipt_vcc_guid": null,
    "hl7_act_site_code": null,
    "hl7_route_of_admin_code": null,
    "dose_qty": null,
    "dose_unit": null,
    "update_moph_phr": "Y",
    "ref_key_code": null
  }
]
```

# `person_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_name | varchar(150) | YES | UNI | NULL |  |  |
| vaccine_code | varchar(20) | YES |  | NULL |  |  |
| vaccine_group | varchar(20) | YES |  | NULL |  |  |
| export_vaccine_code | varchar(10) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| combine_vaccine | char(1) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| update_moph_registry | char(1) | YES |  | NULL |  |  |
| require_plan | char(1) | YES |  | NULL |  |  |
| vaccine_route_id | int(11) | YES |  | NULL |  |  |
| report_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| vaccine_manufacturer | varchar(25) | YES |  | NULL |  |  |
| dx_icd10 | varchar(10) | YES |  | NULL |  |  |
| auto_treatment_plan | char(1) | YES |  | NULL |  |  |
| treatment_plan_type_id | int(11) | YES |  | NULL |  |  |
| use_moph_lot | char(1) | YES |  | NULL |  |  |
| show_serial_lookup | char(1) | YES |  | NULL |  |  |
| def_dose_qty | double(15,2) | YES |  | NULL |  |  |
| def_dose_unit | varchar(10) | YES |  | NULL |  |  |
| vaccine_nickname | varchar(25) | YES |  | NULL |  |  |
| multiple_doses | varchar(1) | YES |  | NULL |  |  |
| dose_per_bottle | int(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_vaccine_code | export_vaccine_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vaccine_name | vaccine_name | yes | 1 |
| PRIMARY | person_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_vaccine_id": 1,
    "vaccine_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 1",
    "vaccine_code": "TT1",
    "vaccine_group": "TT",
    "export_vaccine_code": "101",
    "hos_guid": "{B7C2E5D9-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 2,
    "vaccine_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 2",
    "vaccine_code": "TT2",
    "vaccine_group": "TT",
    "export_vaccine_code": "102",
    "hos_guid": "{B7C2EB58-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 3,
    "vaccine_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 3",
    "vaccine_code": "TT3",
    "vaccine_group": "TT",
    "export_vaccine_code": "103",
    "hos_guid": "{B7C2EF46-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 4,
    "vaccine_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 4",
    "vaccine_code": "TT4",
    "vaccine_group": "TT",
    "export_vaccine_code": "104",
    "hos_guid": "{B7C2F2FB-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 5,
    "vaccine_name": "ให้ BCG ต่ำกว่า 1 ปี",
    "vaccine_code": "BCG",
    "vaccine_group": "BCG",
    "export_vaccine_code": "010",
    "hos_guid": "{B7C2F6A6-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 6,
    "vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 1",
    "vaccine_code": "HBV1",
    "vaccine_group": "HBV",
    "export_vaccine_code": "041",
    "hos_guid": "{B7C30170-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 7,
    "vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 2",
    "vaccine_code": "HBV2",
    "vaccine_group": "HBV",
    "export_vaccine_code": "042",
    "hos_guid": "{B7C30554-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  },
  {
    "person_vaccine_id": 8,
    "vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 3",
    "vaccine_code": "HBV3",
    "vaccine_group": "HBV",
    "export_vaccine_code": "043",
    "hos_guid": "{B7C308FF-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "combine_vaccine": null,
    "icode": null,
    "update_moph_registry": null,
    "require_plan": null,
    "vaccine_route_id": null,
    "report_name": null,
    "active_status": "N",
    "vaccine_manufacturer": "",
    "dx_icd10": null,
    "auto_treatment_plan": null,
    "treatment_plan_type_id": null,
    "use_moph_lot": null,
    "show_serial_lookup": null,
    "def_dose_qty": null,
    "def_dose_unit": null,
    "vaccine_nickname": null,
    "multiple_doses": null,
    "dose_per_bottle": null
  }
]
```

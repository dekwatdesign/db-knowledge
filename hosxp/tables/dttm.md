# `dttm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI |  |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| requiredtc | char(1) | YES |  | NULL |  |  |
| vorder | int(11) | YES |  | NULL |  |  |
| treatment | char(1) | YES | MUL | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| icd9cm | varchar(9) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| opd_price1 | double(15,3) | YES |  | NULL |  |  |
| opd_price2 | double(15,3) | YES |  | NULL |  |  |
| opd_price3 | double(15,3) | YES |  | NULL |  |  |
| ipd_price1 | double(15,3) | YES |  | NULL |  |  |
| ipd_price2 | double(15,3) | YES |  | NULL |  |  |
| ipd_price3 | double(15,3) | YES |  | NULL |  |  |
| dttm_group_id | int(11) | YES |  | NULL |  |  |
| unit | varchar(20) | YES |  | NULL |  |  |
| charge_per_qty | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| dttm_guid | varchar(38) | YES | MUL | NULL |  |  |
| thai_name | varchar(250) | YES |  | NULL |  |  |
| charge_area_qty | char(1) | YES |  | NULL |  |  |
| dttm_subgroup_id | int(11) | YES |  | NULL |  |  |
| icd10tm_operation_code | varchar(15) | YES |  | NULL |  |  |
| dttm_dw_report_group_id | int(11) | YES |  | NULL |  |  |
| export_proced | char(1) | YES |  | NULL |  |  |
| dent2006_item_code | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| search_keyword | varchar(200) | YES |  | NULL |  |  |
| export_eclaim_icd10tm | char(1) | YES |  | NULL |  |  |
| icd10tm_check | char(1) | YES |  | NULL |  |  |
| dt_treatment_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dttm_guid | dttm_guid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_search2 | name | no | 1 |
| ix_search2 | search_keyword | no | 2 |
| name | name | no | 1 |
| PRIMARY | code | yes | 1 |
| treatment | treatment | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "001",
    "name": "ถ่ายภาพรังสี (X-Rayฟันน้ำนม)",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "Z012",
    "icd9cm": "8712",
    "icode": "3000045",
    "opd_price1": 100.0,
    "opd_price2": 80.0,
    "opd_price3": 100.0,
    "ipd_price1": 100.0,
    "ipd_price2": 100.0,
    "ipd_price3": 100.0,
    "dttm_group_id": 210,
    "unit": "ฟิล์ม",
    "charge_per_qty": "",
    "active_status": "N",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "2370500",
    "dttm_dw_report_group_id": null,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "002",
    "name": "อุดฟันชั่วคราว/Pulp capping",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "K021",
    "icd9cm": "232",
    "icode": "3000046",
    "opd_price1": 200.0,
    "opd_price2": 200.0,
    "opd_price3": 200.0,
    "ipd_price1": 200.0,
    "ipd_price2": 200.0,
    "ipd_price3": 200.0,
    "dttm_group_id": 410,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "003",
    "name": "อุดฟันด้วยวัสดุ Amalgam  - ด้านเดียว",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "K021",
    "icd9cm": "232",
    "icode": "3000047",
    "opd_price1": 260.0,
    "opd_price2": 260.0,
    "opd_price3": 260.0,
    "ipd_price1": 260.0,
    "ipd_price2": 260.0,
    "ipd_price3": 260.0,
    "dttm_group_id": 410,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23871A1",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "004",
    "name": "อุดฟันด้วยวัสดุ Amalgam  - 2 ด้าน",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "k021",
    "icd9cm": "232",
    "icode": "3000048",
    "opd_price1": 360.0,
    "opd_price2": 360.0,
    "opd_price3": 360.0,
    "ipd_price1": 360.0,
    "ipd_price2": 360.0,
    "ipd_price3": 360.0,
    "dttm_group_id": 420,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23871A2",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "005",
    "name": "อุดฟันด้วยวัสดุ Amalgam   - 3 ด้าน",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "k021",
    "icd9cm": "232",
    "icode": "3000049",
    "opd_price1": 500.0,
    "opd_price2": 500.0,
    "opd_price3": 500.0,
    "ipd_price1": 500.0,
    "ipd_price2": 500.0,
    "ipd_price3": 500.0,
    "dttm_group_id": 430,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23871A3",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "006",
    "name": "อุดฟันด้วยวัสดุ Amalgam  - ตั้งแต่ 4 ด้านขึ้นไปหรือ Amalgam overlay",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "k021",
    "icd9cm": "232",
    "icode": "3000050",
    "opd_price1": 500.0,
    "opd_price2": 500.0,
    "opd_price3": 500.0,
    "ipd_price1": 500.0,
    "ipd_price2": 500.0,
    "ipd_price3": 500.0,
    "dttm_group_id": 430,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23871A4",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "007",
    "name": "อุดฟันด้วยวัสดุสีเหมือนฟัน (Composite, GI, Flowable composite)  - ด้านเดียว",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "k021",
    "icd9cm": "232",
    "icode": "3000051",
    "opd_price1": 400.0,
    "opd_price2": 400.0,
    "opd_price3": 400.0,
    "ipd_price1": 400.0,
    "ipd_price2": 400.0,
    "ipd_price3": 400.0,
    "dttm_group_id": 410,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23771B1",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  },
  {
    "code": "008",
    "name": "อุดฟันด้วยวัสดุสีเหมือนฟัน (Composite, GI, Flowable composite)  - 2 ด้าน",
    "requiredtc": "",
    "vorder": 0,
    "treatment": "Y",
    "icd10": "k021",
    "icd9cm": "232",
    "icode": "3000052",
    "opd_price1": 500.0,
    "opd_price2": 500.0,
    "opd_price3": 500.0,
    "ipd_price1": 500.0,
    "ipd_price2": 500.0,
    "ipd_price3": 500.0,
    "dttm_group_id": 420,
    "unit": "ซี่",
    "charge_per_qty": "",
    "active_status": "Y",
    "dttm_guid": "",
    "thai_name": "",
    "charge_area_qty": "Y",
    "dttm_subgroup_id": 0,
    "icd10tm_operation_code": "23771B2",
    "dttm_dw_report_group_id": 12,
    "export_proced": "Y",
    "dent2006_item_code": "",
    "hos_guid": "",
    "search_keyword": null,
    "export_eclaim_icd10tm": null,
    "icd10tm_check": null,
    "dt_treatment_type_id": null
  }
]
```

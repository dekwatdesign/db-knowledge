# `er_oper_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_oper_code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| icd9cm | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| er_oper_code_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| has_area_code | char(1) | YES |  | NULL |  |  |
| icd10tm | varchar(7) | YES |  | NULL |  |  |
| export_proced | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| duration_minute | time | YES |  | NULL |  |  |
| er_oper_code_type_id | int(11) | YES |  | NULL |  |  |
| search_keyword | varchar(200) | YES | MUL | NULL |  |  |
| use_opi_price | char(1) | YES |  | NULL |  |  |
| is_investigation | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_er_oper_code_guid | er_oper_code_guid | no | 1 |
| ix_name | name | no | 1 |
| ix_search_keyword | search_keyword | no | 1 |
| PRIMARY | er_oper_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "er_oper_code": 1,
    "name": "ค่าปรึกษาแพทย์เฉพาะทาง (ผู้ป่วยเก่า)",
    "icode": "3000004",
    "icd9cm": "9444",
    "price": 400.0,
    "price2": 400.0,
    "price3": 400.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 2,
    "name": "ค่าบริการให้คำปรึกษาโดยพยาบาล  (>30นาที )",
    "icode": "3000005",
    "icd9cm": "9444",
    "price": 300.0,
    "price2": 300.0,
    "price3": 300.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 3,
    "name": "การตรวจร่างกายเพื่อขอใบรับรองแพทย์",
    "icode": "3000006",
    "icd9cm": "",
    "price": 100.0,
    "price2": 100.0,
    "price3": 100.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 4,
    "name": "ค่าเย็บแผลแห้ง / แผลเย็บ",
    "icode": "3000007",
    "icd9cm": "",
    "price": 70.0,
    "price2": 70.0,
    "price3": 70.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 5,
    "name": "การทำแผลเปิด / แผลติดเชื้อ",
    "icode": "3000008",
    "icd9cm": "",
    "price": 140.0,
    "price2": 140.0,
    "price3": 140.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 6,
    "name": "การฉีดยา IV ((ผู้ป่วยนอกและฉุกเฉิน)",
    "icode": "3000009",
    "icd9cm": "9929",
    "price": 20.0,
    "price2": 20.0,
    "price3": 20.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 7,
    "name": "การฉีดยา IM ((ผู้ป่วยนอกและฉุกเฉิน)",
    "icode": "3000010",
    "icd9cm": "9929",
    "price": 20.0,
    "price2": 20.0,
    "price3": 20.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  },
  {
    "er_oper_code": 8,
    "name": "การฉีดยาใต้ผิวหนัง (ผู้ป่วยนอกและฉุกเฉิน)",
    "icode": "3000011",
    "icd9cm": "",
    "price": 20.0,
    "price2": 20.0,
    "price3": 20.0,
    "er_oper_code_guid": "",
    "active_status": "N",
    "has_area_code": "",
    "icd10tm": "",
    "export_proced": "N",
    "hos_guid": "",
    "duration_minute": null,
    "er_oper_code_type_id": null,
    "search_keyword": "",
    "use_opi_price": "",
    "is_investigation": ""
  }
]
```

# `physic_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_items_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| physic_group_id | int(11) | YES | MUL | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| physic_group_treatment_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_minute | int(11) | YES |  | NULL |  |  |
| f43_rehab_code | varchar(10) | YES |  | NULL |  |  |
| icd10tm_code | varchar(15) | YES |  | NULL |  |  |
| expire_year | int(11) | YES |  | NULL |  |  |
| expire_month | int(11) | YES |  | NULL |  |  |
| physic_items_year | int(11) | YES |  | NULL |  |  |
| physic_items_month | int(11) | YES |  | NULL |  |  |
| price_nondrug | char(1) | YES |  | NULL |  |  |
| icd9_ipd_active_status | char(1) | YES |  | NULL |  |  |
| physic_items_tool_chk | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_physic_group_id | physic_group_id | no | 1 |
| ix_physic_items_tool_chk | physic_items_tool_chk | no | 1 |
| ix_tid | physic_group_treatment_id | no | 1 |
| name | name | no | 1 |
| PRIMARY | physic_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_items_id": 1,
    "name": "Speech defect training (9409620)",
    "icode": "3001893",
    "price": 150.0,
    "physic_group_id": 5,
    "icd10": "9409620",
    "icd9": "9374",
    "active_status": "Y",
    "price2": 150.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409620",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 2,
    "name": "Speech defect training (9409672)",
    "icode": "3001893",
    "price": 150.0,
    "physic_group_id": 5,
    "icd10": "9409672",
    "icd9": "9374",
    "active_status": "Y",
    "price2": 150.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409672",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 3,
    "name": "Communication and Speech assessment and evaluation (9000017)",
    "icode": "3001894",
    "price": 300.0,
    "physic_group_id": 5,
    "icd10": "9000017",
    "icd9": "9374",
    "active_status": "Y",
    "price2": 300.0,
    "price3": 300.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9000017",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 4,
    "name": "Language defects training (dysphasia, dysarthria, etc.) (9409630)",
    "icode": "3001895",
    "price": 300.0,
    "physic_group_id": 5,
    "icd10": "9409630",
    "icd9": "9375",
    "active_status": "Y",
    "price2": 300.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409630",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 5,
    "name": "Language defects training (dysphasia, dysarthria, etc.) (9409675)",
    "icode": "3001895",
    "price": 300.0,
    "physic_group_id": 5,
    "icd10": "9409675",
    "icd9": "9372",
    "active_status": "Y",
    "price2": 300.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409675",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 6,
    "name": "Breathing exercise training for speech therapy (9409622)",
    "icode": "3001896",
    "price": 150.0,
    "physic_group_id": 5,
    "icd10": "9409622",
    "icd9": "9375",
    "active_status": "Y",
    "price2": 150.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409622",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 7,
    "name": "Breathing exercise training for speech therapy (9409674)",
    "icode": "3001896",
    "price": 150.0,
    "physic_group_id": 5,
    "icd10": "9409674",
    "icd9": "9999",
    "active_status": "Y",
    "price2": 150.0,
    "price3": 150.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9409674",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  },
  {
    "physic_items_id": 8,
    "name": "Oral motor stimulation training  (9279601)",
    "icode": "3001897",
    "price": 200.0,
    "physic_group_id": 5,
    "icd10": "9279601",
    "icd9": "9319",
    "active_status": "Y",
    "price2": 200.0,
    "price3": 200.0,
    "hos_guid": "",
    "physic_group_treatment_id": null,
    "physic_items_minute": null,
    "f43_rehab_code": "9279601",
    "icd10tm_code": "",
    "expire_year": null,
    "expire_month": null,
    "physic_items_year": null,
    "physic_items_month": null,
    "price_nondrug": "",
    "icd9_ipd_active_status": "",
    "physic_items_tool_chk": null
  }
]
```

# `lab_items_sub_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_sub_group_code | int(11) | NO | PRI | 0 |  |  |
| lab_items_sub_group_name | varchar(250) | YES | MUL | NULL |  |  |
| lab_items_group_code | int(11) | YES |  | NULL |  |  |
| group_price | double(15,3) | YES |  | NULL |  |  |
| group_icode | varchar(7) | YES |  | NULL |  |  |
| group_price2 | double(15,3) | YES |  | NULL |  |  |
| group_price3 | double(15,3) | YES |  | NULL |  |  |
| group_price_ipd | double(15,3) | YES |  | NULL |  |  |
| group_price_ipd2 | double(15,3) | YES |  | NULL |  |  |
| group_price_ipd3 | double(15,3) | YES |  | NULL |  |  |
| ecode | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| items_list_text | text | YES |  | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| est_wait_minute | int(11) | YES |  | NULL |  |  |
| eclaim_export | char(1) | YES |  | NULL |  |  |
| tmlt_code | varchar(10) | YES |  | NULL |  |  |
| need_npo | char(1) | YES |  | NULL |  |  |
| npo_days_ahead | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| loinc_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active_status | active_status | no | 1 |
| ix_active_status_name | active_status | no | 1 |
| ix_active_status_name | lab_items_sub_group_name | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_items_sub_group_name | lab_items_sub_group_name | no | 1 |
| PRIMARY | lab_items_sub_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_sub_group_code": 1,
    "lab_items_sub_group_name": "CBC (+diff.+RBC morphology+platelet count) by automation",
    "lab_items_group_code": 1,
    "group_price": 130.0,
    "group_icode": "3000505",
    "group_price2": 130.0,
    "group_price3": 130.0,
    "group_price_ipd": 130.0,
    "group_price_ipd2": 130.0,
    "group_price_ipd3": 130.0,
    "ecode": "P1",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 2,
    "lab_items_sub_group_name": "Coagulogram",
    "lab_items_group_code": 1,
    "group_price": 700.0,
    "group_icode": "3002061",
    "group_price2": 700.0,
    "group_price3": 700.0,
    "group_price_ipd": 700.0,
    "group_price_ipd2": 700.0,
    "group_price_ipd3": 700.0,
    "ecode": "P2",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 3,
    "lab_items_sub_group_name": "Urine examination",
    "lab_items_group_code": 8,
    "group_price": 100.0,
    "group_icode": "3000528",
    "group_price2": 100.0,
    "group_price3": 100.0,
    "group_price_ipd": 100.0,
    "group_price_ipd2": 100.0,
    "group_price_ipd3": 100.0,
    "ecode": "P3",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 7,
    "lab_items_sub_group_name": "Renal function test",
    "lab_items_group_code": 3,
    "group_price": 110.0,
    "group_icode": "3002062",
    "group_price2": 110.0,
    "group_price3": 110.0,
    "group_price_ipd": 110.0,
    "group_price_ipd2": 110.0,
    "group_price_ipd3": 110.0,
    "ecode": "P7",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 9,
    "lab_items_sub_group_name": "Liver  Function Test",
    "lab_items_group_code": 3,
    "group_price": 400.0,
    "group_icode": "3002063",
    "group_price2": 400.0,
    "group_price3": 400.0,
    "group_price_ipd": 400.0,
    "group_price_ipd2": 400.0,
    "group_price_ipd3": 400.0,
    "ecode": "P9",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 10,
    "lab_items_sub_group_name": "Lipid profile (Cholesterol, HDL, chol,  LDL ,chol TG)",
    "lab_items_group_code": 3,
    "group_price": 450.0,
    "group_icode": "3002064",
    "group_price2": 450.0,
    "group_price3": 450.0,
    "group_price_ipd": 450.0,
    "group_price_ipd2": 450.0,
    "group_price_ipd3": 450.0,
    "ecode": "P10",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 11,
    "lab_items_sub_group_name": "Thyroid Function Test (Free T4,  T3,  TSH)",
    "lab_items_group_code": 3,
    "group_price": 600.0,
    "group_icode": "3002065",
    "group_price2": 600.0,
    "group_price3": 600.0,
    "group_price_ipd": 600.0,
    "group_price_ipd2": 600.0,
    "group_price_ipd3": 600.0,
    "ecode": "P11",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  },
  {
    "lab_items_sub_group_code": 13,
    "lab_items_sub_group_name": "Electrolyt (NA+,K+,CI-CO2)",
    "lab_items_group_code": 3,
    "group_price": 240.0,
    "group_icode": "3000461",
    "group_price2": 240.0,
    "group_price3": 240.0,
    "group_price_ipd": 240.0,
    "group_price_ipd2": 240.0,
    "group_price_ipd3": 240.0,
    "ecode": "P13",
    "hos_guid": "",
    "items_list_text": "",
    "specimen_code": null,
    "est_wait_minute": null,
    "eclaim_export": "",
    "tmlt_code": "",
    "need_npo": null,
    "npo_days_ahead": null,
    "active_status": null,
    "loinc_code": null
  }
]
```

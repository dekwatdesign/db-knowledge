# `ovst_treatment_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_treatment_plan_id | int(11) | NO | PRI | 0 |  |  |
| treatment_plan_type_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| plan_finish | char(1) | YES |  | NULL |  |  |
| plan_start_date | date | YES |  | NULL |  |  |
| plan_end_date | date | YES |  | NULL |  |  |
| plan_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| ovst_treatment_plan_name | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_treatment_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_treatment_plan_id": 10,
    "treatment_plan_type_id": 1,
    "vn": "640520104342",
    "hn": "630000121",
    "plan_finish": "N",
    "plan_start_date": "2021-05-20",
    "plan_end_date": "2021-06-17",
    "plan_note": null,
    "doctor_code": "315",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 14,
    "treatment_plan_type_id": 1,
    "vn": "640521082233",
    "hn": "530161154",
    "plan_finish": "N",
    "plan_start_date": "2021-05-21",
    "plan_end_date": "2021-06-18",
    "plan_note": null,
    "doctor_code": "187",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 25,
    "treatment_plan_type_id": 1,
    "vn": "640524083951",
    "hn": "560001168",
    "plan_finish": "N",
    "plan_start_date": "2021-05-24",
    "plan_end_date": "2021-06-15",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 259,
    "treatment_plan_type_id": 1,
    "vn": "640525060151",
    "hn": "640000303",
    "plan_finish": "Y",
    "plan_start_date": "2021-05-25",
    "plan_end_date": "2021-06-15",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 29,
    "treatment_plan_type_id": 1,
    "vn": "640524084523",
    "hn": "570000692",
    "plan_finish": "Y",
    "plan_start_date": "2021-05-24",
    "plan_end_date": "2021-06-15",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 46,
    "treatment_plan_type_id": 1,
    "vn": "640524084153",
    "hn": "620000471",
    "plan_finish": "N",
    "plan_start_date": "2021-05-24",
    "plan_end_date": "2021-06-14",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 32,
    "treatment_plan_type_id": 1,
    "vn": "640524084503",
    "hn": "530098254",
    "plan_finish": "N",
    "plan_start_date": "2021-05-24",
    "plan_end_date": "2021-06-16",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ovst_treatment_plan_id": 35,
    "treatment_plan_type_id": 1,
    "vn": "640524084304",
    "hn": "600001091",
    "plan_finish": "N",
    "plan_start_date": "2021-05-24",
    "plan_end_date": "2021-06-15",
    "plan_note": null,
    "doctor_code": "340",
    "ovst_treatment_plan_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "staff": "[MASKED_FULLNAME]"
  }
]
```

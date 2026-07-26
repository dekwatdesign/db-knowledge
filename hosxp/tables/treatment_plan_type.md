# `treatment_plan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| treatment_plan_type_id | int(11) | NO | PRI | 0 |  |  |
| treatment_plan_type_name | varchar(250) | YES |  | NULL |  |  |
| treatment_plan_group_id | int(11) | YES |  | NULL |  |  |
| treatment_plan_ref_id | int(11) | YES |  | NULL |  |  |
| treatment_plan_ref_name | varchar(200) | YES |  | NULL |  |  |
| oapp_clinic | char(3) | YES |  | NULL |  |  |
| oapp_depcode | char(3) | YES |  | NULL |  |  |
| oapp_spclty | char(2) | YES |  | NULL |  |  |
| provis_aptype_code | varchar(5) | YES |  | NULL |  |  |
| priority_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | treatment_plan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "treatment_plan_type_id": 1,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 SINOVAC",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 35,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (SINOVAC)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 2,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 AstraZeneca",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 41,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (AstraZeneca)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 4,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 Sinopharm",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 46,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (Sinopharm)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 5,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 Moderna",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 48,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (Moderna)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 6,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 Pfizer",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 50,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (Pfizer)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 7,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 Johnson & Johnson",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 52,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (Johnson & Johnson)",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": null
  },
  {
    "treatment_plan_type_id": 8,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 AstraZeneca เข็มที่ 2",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 56,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (AstraZeneca) เข็มที่ 2",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": 2
  },
  {
    "treatment_plan_type_id": 10,
    "treatment_plan_type_name": "ฉีดวัคซีน Covid-19 AstraZeneca เข็มที่ 3",
    "treatment_plan_group_id": 1,
    "treatment_plan_ref_id": 58,
    "treatment_plan_ref_name": "วัคซีน Covid-19 (AstraZeneca) เข็มที่ 3",
    "oapp_clinic": "047",
    "oapp_depcode": "064",
    "oapp_spclty": "01",
    "provis_aptype_code": null,
    "priority_id": 3
  }
]
```

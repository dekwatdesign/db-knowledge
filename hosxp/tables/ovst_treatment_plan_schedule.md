# `ovst_treatment_plan_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_treatment_plan_schedule_id | int(11) | NO | PRI | 0 |  |  |
| ovst_treatment_plan_id | int(11) | YES | MUL | NULL |  |  |
| schedule_date | date | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| schedule_status | char(1) | YES |  | NULL |  |  |
| schedule_description | varchar(200) | YES |  | NULL |  |  |
| schedule_note_text | text | YES |  | NULL |  |  |
| treatment_plan_type_schedule_id | int(11) | YES |  | NULL |  |  |
| treatment_number | int(11) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oapp_id | oapp_id | no | 1 |
| ix_ovst_treatment_plan_id | ovst_treatment_plan_id | no | 1 |
| PRIMARY | ovst_treatment_plan_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_treatment_plan_schedule_id": 17,
    "ovst_treatment_plan_id": 9,
    "schedule_date": "2021-05-18",
    "visit_date": null,
    "vn": "640518151523",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 1 ( 0 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 1,
    "treatment_number": 1,
    "oapp_id": null
  },
  {
    "ovst_treatment_plan_schedule_id": 18,
    "ovst_treatment_plan_id": 9,
    "schedule_date": "2021-06-15",
    "visit_date": null,
    "vn": "640518151523",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 2 ( 28 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 2,
    "treatment_number": 2,
    "oapp_id": 951853
  },
  {
    "ovst_treatment_plan_schedule_id": 21,
    "ovst_treatment_plan_id": 10,
    "schedule_date": "2021-05-20",
    "visit_date": "2021-05-24",
    "vn": "640520104342",
    "schedule_status": "C",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 1 ( 0 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 1,
    "treatment_number": 1,
    "oapp_id": null
  },
  {
    "ovst_treatment_plan_schedule_id": 22,
    "ovst_treatment_plan_id": 10,
    "schedule_date": "2021-06-17",
    "visit_date": null,
    "vn": "640520104342",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 2 ( 28 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 2,
    "treatment_number": 2,
    "oapp_id": 951924
  },
  {
    "ovst_treatment_plan_schedule_id": 25,
    "ovst_treatment_plan_id": 11,
    "schedule_date": "2021-05-20",
    "visit_date": "2021-05-20",
    "vn": "640520104331",
    "schedule_status": "C",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 1 ( 0 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 1,
    "treatment_number": 1,
    "oapp_id": null
  },
  {
    "ovst_treatment_plan_schedule_id": 26,
    "ovst_treatment_plan_id": 11,
    "schedule_date": "2021-06-17",
    "visit_date": null,
    "vn": "640520104331",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 2 ( 28 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 2,
    "treatment_number": 2,
    "oapp_id": 951982
  },
  {
    "ovst_treatment_plan_schedule_id": 33,
    "ovst_treatment_plan_id": 14,
    "schedule_date": "2021-05-21",
    "visit_date": null,
    "vn": "640521082233",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 1 ( 0 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 1,
    "treatment_number": 1,
    "oapp_id": null
  },
  {
    "ovst_treatment_plan_schedule_id": 34,
    "ovst_treatment_plan_id": 14,
    "schedule_date": "2021-06-18",
    "visit_date": null,
    "vn": "640521082233",
    "schedule_status": "B",
    "schedule_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 2 ( 28 วัน )",
    "schedule_note_text": null,
    "treatment_plan_type_schedule_id": 2,
    "treatment_number": 2,
    "oapp_id": 952052
  }
]
```

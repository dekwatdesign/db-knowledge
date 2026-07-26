# `treatment_plan_type_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| treatment_plan_type_schedule_id | int(11) | NO | PRI | 0 |  |  |
| treatment_plan_type_id | int(11) | YES | MUL | NULL |  |  |
| treatment_number | int(11) | YES |  | NULL |  |  |
| treatment_day_number | int(11) | YES |  | NULL |  |  |
| treatment_description | varchar(250) | YES |  | NULL |  |  |
| treatment_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_treatment_plan_type_id | treatment_plan_type_id | no | 1 |
| PRIMARY | treatment_plan_type_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "treatment_plan_type_schedule_id": 1,
    "treatment_plan_type_id": 1,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 1 ( 0 วัน )",
    "treatment_note_text": null
  },
  {
    "treatment_plan_type_schedule_id": 2,
    "treatment_plan_type_id": 1,
    "treatment_number": 2,
    "treatment_day_number": 21,
    "treatment_description": "ฉีดวัคซีนโควิด 19 ครั้งที่ 2 ( 21 วัน )",
    "treatment_note_text": null
  },
  {
    "treatment_plan_type_schedule_id": 3,
    "treatment_plan_type_id": 2,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีน Covid-19 AstraZenaca ครั้งที่ 1",
    "treatment_note_text": null
  },
  {
    "treatment_plan_type_schedule_id": 4,
    "treatment_plan_type_id": 2,
    "treatment_number": 2,
    "treatment_day_number": 84,
    "treatment_description": "ฉีดวัคซีน Covid-19 AstraZenaca ครั้งที่ 2",
    "treatment_note_text": null
  },
  {
    "treatment_plan_type_schedule_id": 5,
    "treatment_plan_type_id": 8,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีน Covid-19 เปลี่ยนวัคซีน เข็มที่ 2 จาก Sinovac เป็น AstraZeneca",
    "treatment_note_text": null
  },
  {
    "treatment_plan_type_schedule_id": 7,
    "treatment_plan_type_id": 10,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีน Covid-19 AstraZeneca เข็มที่ 3",
    "treatment_note_text": "หลังจากฉีด Sinovac, Sinopharm เข็มที่ 1-2 เรียบร้อย แล้วฉีดวัคซีน เข็มที่ 3 เป็น AstraZeneca "
  },
  {
    "treatment_plan_type_schedule_id": 17,
    "treatment_plan_type_id": 21,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีน Covid-19 AstraZeneca เข็มกระตุ้นหลังติดเชื้อ",
    "treatment_note_text": "ฉีดวัคซีนเข็มกระตุ้นหลังติดเชื้อ"
  },
  {
    "treatment_plan_type_schedule_id": 8,
    "treatment_plan_type_id": 6,
    "treatment_number": 1,
    "treatment_day_number": 0,
    "treatment_description": "ฉีดวัคซีน COVID-19 (Pfizer) ครั้งที่ 1",
    "treatment_note_text": null
  }
]
```

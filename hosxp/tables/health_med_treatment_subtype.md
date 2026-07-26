# `health_med_treatment_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_treatment_subtype_id | int(11) | NO | PRI | 0 |  |  |
| health_med_treatment_subtype_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_treatment_type_id | int(11) | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| health_med_treatment_subtype_code | varchar(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_treatment_subtype_name | health_med_treatment_subtype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_treatment_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_treatment_subtype_id": 1,
    "health_med_treatment_subtype_name": "ยาสมุนไพร",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 2,
    "health_med_treatment_subtype_name": "นวดเพื่อการรักษา/ฟื้นฟู",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 3,
    "health_med_treatment_subtype_name": "การอบไอน้ำสมุนไพรเพื่อการรักษา/ฟื้นฟู",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 4,
    "health_med_treatment_subtype_name": "การประคบสมุนไพรเพื่อการรักษา/ฟื้นฟู",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 5,
    "health_med_treatment_subtype_name": "การทับหม้อเกลือ",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 6,
    "health_med_treatment_subtype_name": "การรักษาเรื่องอื่นๆ",
    "health_med_treatment_type_id": 1,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 7,
    "health_med_treatment_subtype_name": "การนวนเพื่อสุขภาพ",
    "health_med_treatment_type_id": 2,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  },
  {
    "health_med_treatment_subtype_id": 8,
    "health_med_treatment_subtype_name": "การอบไอน้ำสมุนไพรเพื่อส่งเสริมสุขภาพ",
    "health_med_treatment_type_id": 2,
    "icd10": null,
    "health_med_treatment_subtype_code": null,
    "hos_guid": null
  }
]
```

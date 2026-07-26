# `doctor_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_icd10_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| icd10_note | varchar(250) | YES |  | NULL |  |  |
| icd_order | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| icd10_description_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_icd10_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_icd10_id": 1,
    "doctor": "068",
    "icd10": "F900",
    "icd10_note": "",
    "icd_order": 1,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 2,
    "doctor": "068",
    "icd10": "F840",
    "icd10_note": "",
    "icd_order": 2,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 3,
    "doctor": "068",
    "icd10": "F848",
    "icd10_note": "",
    "icd_order": 3,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 4,
    "doctor": "068",
    "icd10": "F800",
    "icd10_note": "",
    "icd_order": 4,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 5,
    "doctor": "068",
    "icd10": "F91",
    "icd10_note": "",
    "icd_order": 5,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 6,
    "doctor": "068",
    "icd10": "F701",
    "icd10_note": "",
    "icd_order": 6,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 7,
    "doctor": "068",
    "icd10": "F810",
    "icd10_note": "",
    "icd_order": 7,
    "hos_guid": null,
    "icd10_description_text": null
  },
  {
    "doctor_icd10_id": 8,
    "doctor": "068",
    "icd10": "F813",
    "icd10_note": "",
    "icd_order": 8,
    "hos_guid": null,
    "icd10_description_text": null
  }
]
```

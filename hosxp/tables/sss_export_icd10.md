# `sss_export_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sss_export_icd10_id | int(11) | NO | PRI | 0 |  |  |
| sss_export_icd10_code | varchar(10) | YES |  | NULL |  |  |
| icd10_begin | varchar(10) | YES |  | NULL |  |  |
| icd10_end | varchar(10) | YES |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| score | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sss_export_icd10_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sss_export_icd10_id": 1,
    "sss_export_icd10_code": "01",
    "icd10_begin": "E10",
    "icd10_end": "E13999",
    "description": "\r\n\r\n",
    "score": 1.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 2,
    "sss_export_icd10_code": "02",
    "icd10_begin": "I10",
    "icd10_end": "I159999",
    "description": null,
    "score": 1.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 3,
    "sss_export_icd10_code": "03A",
    "icd10_begin": "K73",
    "icd10_end": "K73999",
    "description": null,
    "score": 1.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 4,
    "sss_export_icd10_code": "03Ba",
    "icd10_begin": "B18",
    "icd10_end": "B189999",
    "description": null,
    "score": 1.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 5,
    "sss_export_icd10_code": "03Bb",
    "icd10_begin": "K74",
    "icd10_end": "K749999",
    "description": null,
    "score": 1.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 6,
    "sss_export_icd10_code": "04",
    "icd10_begin": "I50",
    "icd10_end": "I509999",
    "description": null,
    "score": 0.5,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 7,
    "sss_export_icd10_code": "05",
    "icd10_begin": "I69",
    "icd10_end": "I699999",
    "description": "\r\n",
    "score": 2.0,
    "hos_guid": null
  },
  {
    "sss_export_icd10_id": 8,
    "sss_export_icd10_code": "06",
    "icd10_begin": "C00",
    "icd10_end": "C979999",
    "description": null,
    "score": 2.0,
    "hos_guid": null
  }
]
```

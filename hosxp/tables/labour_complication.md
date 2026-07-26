# `labour_complication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_complication_id | int(11) | NO | PRI | 0 |  |  |
| labour_complication_name | varchar(150) | YES | UNI | NULL |  |  |
| labour_stage_id | int(11) | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_complication_name | labour_complication_name | yes | 1 |
| PRIMARY | labour_complication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "labour_complication_id": 1,
    "labour_complication_name": "PIH",
    "labour_stage_id": 1,
    "icd10": null,
    "hos_guid": "{18B1EB90-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 2,
    "labour_complication_name": "APM",
    "labour_stage_id": 1,
    "icd10": null,
    "hos_guid": "{18B1F2C3-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 3,
    "labour_complication_name": "PROM",
    "labour_stage_id": 1,
    "icd10": null,
    "hos_guid": "{18B1F7F4-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 4,
    "labour_complication_name": "GDM",
    "labour_stage_id": 1,
    "icd10": null,
    "hos_guid": "{18B1FD02-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 5,
    "labour_complication_name": "Uterine Rupture",
    "labour_stage_id": 2,
    "icd10": null,
    "hos_guid": "{18B201E6-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 6,
    "labour_complication_name": "Embolism",
    "labour_stage_id": 2,
    "icd10": null,
    "hos_guid": "{18B23458-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 7,
    "labour_complication_name": "น้ำคร่ำเป็นพิษ",
    "labour_stage_id": 2,
    "icd10": null,
    "hos_guid": "{18B239D6-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_complication_id": 8,
    "labour_complication_name": "PPH",
    "labour_stage_id": 3,
    "icd10": null,
    "hos_guid": "{18B23EF3-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```

# `provis_icd10tm_oper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10tm_code | varchar(15) | YES | UNI | NULL |  |  |
| icd9cm_code | varchar(10) | YES | MUL | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icd10tm_code | icd10tm_code | yes | 1 |
| ix_icd9cm_code | icd9cm_code | no | 1 |
| ix_name | name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd10tm_code": "1001500",
    "icd9cm_code": "9339",
    "name": "Massage at head"
  },
  {
    "icd10tm_code": "1001501",
    "icd9cm_code": "9339",
    "name": "Acupressure at head"
  },
  {
    "icd10tm_code": "1001503",
    "icd9cm_code": "9329",
    "name": "Soft tissue stretching head"
  },
  {
    "icd10tm_code": "1001504",
    "icd9cm_code": "9327",
    "name": "Muscle stretching head"
  },
  {
    "icd10tm_code": "1001505",
    "icd9cm_code": "9327",
    "name": "Muscle stretching with coolant spray head"
  },
  {
    "icd10tm_code": "1001506",
    "icd9cm_code": "9327",
    "name": "Tendon stretching head"
  },
  {
    "icd10tm_code": "1001507",
    "icd9cm_code": "9316",
    "name": "Joint manipulation/play head"
  },
  {
    "icd10tm_code": "1010000",
    "icd9cm_code": "8939",
    "name": "Physical examination on scalp"
  }
]
```

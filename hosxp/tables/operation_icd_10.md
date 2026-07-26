# `operation_icd_10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(255) | YES | MUL | NULL |  |  |
| icd10 | varchar(100) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icd10 | icd10 | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "AAA (Abdominal Aorta Aneurysm)       ( I714 )",
    "icd10": "I714",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "Abdominal fluid correction       ( D487 )",
    "icd10": "D487",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "Abdominal mass (Gyn)       ( D487 )",
    "icd10": "D487",
    "hos_guid": null
  },
  {
    "id": 4,
    "name": "Abdominal mass (surg)       ( D487 )",
    "icd10": "D487",
    "hos_guid": null
  },
  {
    "id": 5,
    "name": "Abdominal pain (med)       ( R104 )",
    "icd10": "R104",
    "hos_guid": null
  },
  {
    "id": 6,
    "name": "Abdominal pain (surg)       ( R104 )",
    "icd10": "R104",
    "hos_guid": null
  },
  {
    "id": 7,
    "name": "Abdominal wall  cyst       ( R190 )",
    "icd10": "R190",
    "hos_guid": null
  },
  {
    "id": 8,
    "name": "Abdominal wall hematoma       ( R58 )",
    "icd10": "R58",
    "hos_guid": null
  }
]
```

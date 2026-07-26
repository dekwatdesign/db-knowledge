# `dxa_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_name | varchar(150) | YES |  | NULL |  |  |
| dxa_disease_discription | longtext | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_disease_id": 80,
    "dxa_disease_name": "โรคเหน็บชา",
    "dxa_disease_discription": null,
    "icd10": "R200",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 78,
    "dxa_disease_name": "โรคไตเนโฟรติก",
    "dxa_disease_discription": null,
    "icd10": "N04",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 79,
    "dxa_disease_name": "ครรภ์เป็นพิษ",
    "dxa_disease_discription": null,
    "icd10": "O140",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 75,
    "dxa_disease_name": "มะเร็งลำไส้เล็ก",
    "dxa_disease_discription": null,
    "icd10": "C17",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 76,
    "dxa_disease_name": "โรคพยาธิใบไม้ในตับ",
    "dxa_disease_discription": null,
    "icd10": "B660",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 77,
    "dxa_disease_name": "ตับอักเสบจากไวรัส",
    "dxa_disease_discription": null,
    "icd10": "B19",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 71,
    "dxa_disease_name": "ท่อน้ำดีอักเสบ",
    "dxa_disease_discription": null,
    "icd10": "K830",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_id": 72,
    "dxa_disease_name": "ถุงน้ำดีอักเสบ",
    "dxa_disease_discription": null,
    "icd10": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

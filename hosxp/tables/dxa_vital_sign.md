# `dxa_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_vital_sign_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| vital_sign_name | varchar(150) | YES |  | NULL |  |  |
| vital_sign_condition | varchar(20) | YES |  | NULL |  |  |
| vital_sign_value1 | varchar(200) | YES |  | NULL |  |  |
| vital_sign_value2 | varchar(200) | YES |  | NULL |  |  |
| vital_sign_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dxa_vital_sign_id": 2,
    "dxa_disease_id": 47,
    "vital_sign_name": "BPD",
    "vital_sign_condition": "<=",
    "vital_sign_value1": "90",
    "vital_sign_value2": null,
    "vital_sign_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_vital_sign_id": 1,
    "dxa_disease_id": 47,
    "vital_sign_name": "BPS",
    "vital_sign_condition": ">=",
    "vital_sign_value1": "140",
    "vital_sign_value2": null,
    "vital_sign_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_vital_sign_id": 21,
    "dxa_disease_id": 83,
    "vital_sign_name": "Temperature",
    "vital_sign_condition": "<>",
    "vital_sign_value1": "39",
    "vital_sign_value2": "40",
    "vital_sign_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_vital_sign_id": 28,
    "dxa_disease_id": 133,
    "vital_sign_name": "Temperature",
    "vital_sign_condition": "<>",
    "vital_sign_value1": "39",
    "vital_sign_value2": "40",
    "vital_sign_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_vital_sign_id": 31,
    "dxa_disease_id": 10,
    "vital_sign_name": "Temperature",
    "vital_sign_condition": "<>",
    "vital_sign_value1": "37.51",
    "vital_sign_value2": "38",
    "vital_sign_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

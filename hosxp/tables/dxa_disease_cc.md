# `dxa_disease_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_disease_cc_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_cc_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_cc_score | int(11) | YES |  | NULL |  |  |
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
    "dxa_disease_cc_id": 17,
    "dxa_disease_id": 6,
    "dxa_cc_id": 11,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 16,
    "dxa_disease_id": 5,
    "dxa_cc_id": 14,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 35,
    "dxa_disease_id": 11,
    "dxa_cc_id": 20,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 34,
    "dxa_disease_id": 11,
    "dxa_cc_id": 19,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 33,
    "dxa_disease_id": 11,
    "dxa_cc_id": 11,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 141,
    "dxa_disease_id": 25,
    "dxa_cc_id": 43,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 53,
    "dxa_disease_id": 18,
    "dxa_cc_id": 11,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_cc_id": 47,
    "dxa_disease_id": 15,
    "dxa_cc_id": 11,
    "dxa_disease_cc_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

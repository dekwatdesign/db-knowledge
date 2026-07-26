# `infant_indication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_indication_type_id | int(11) | NO | PRI | 0 |  |  |
| infant_indication_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_infant_indication_type_name | infant_indication_type_name | yes | 1 |
| PRIMARY | infant_indication_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_indication_type_id": 1,
    "infant_indication_type_name": "Prenious c/s",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 2,
    "infant_indication_type_name": "CPD",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 3,
    "infant_indication_type_name": "Prolong 2nd Stage",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 4,
    "infant_indication_type_name": "Fetal distrus",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 5,
    "infant_indication_type_name": "Twin",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 6,
    "infant_indication_type_name": "Transrenelie",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 7,
    "infant_indication_type_name": "Placeta pretic",
    "hos_guid": null
  },
  {
    "infant_indication_type_id": 8,
    "infant_indication_type_name": "PIH",
    "hos_guid": null
  }
]
```

# `validitaken`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dosageform | varchar(100) | YES |  | NULL |  |  |
| stdtaken | varchar(150) | YES |  | NULL |  |  |
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
    "dosageform": "Capsules",
    "stdtaken": "ac",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Capsules",
    "stdtaken": "hs",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Capsules",
    "stdtaken": "pc",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Capsules",
    "stdtaken": "prn",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Dry Powders",
    "stdtaken": "ac",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Dry Powders",
    "stdtaken": "hs",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Dry Powders",
    "stdtaken": "pc",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dosageform": "Dry Powders",
    "stdtaken": "prn",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

# `drugunits`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| units | varchar(50) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | units | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "units": "A-IJ.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (1 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (10 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (2 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (20 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (25 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "units": "Amphule (5 ml.)",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

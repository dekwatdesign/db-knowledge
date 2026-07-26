# `drugstrength`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| strength | varchar(20) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| strength_unique | strength | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "strength": "%",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "% W/V",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "% W/W",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "g.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "g./ml.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "iu.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "iu./dose",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "strength": "iu./ml.",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

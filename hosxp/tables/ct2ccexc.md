# `ct2ccexc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cc10 | char(5) | YES | MUL | NULL |  |  |
| notfor10 | char(5) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cc10 | cc10 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_notfor10_cc10_unique | cc10 | yes | 1 |
| ix_notfor10_cc10_unique | notfor10 | yes | 2 |
| notfor10_cc10_unique | notfor10 | yes | 1 |
| notfor10_cc10_unique | cc10 | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cc10": "A045",
    "notfor10": "A001",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A045",
    "notfor10": "A01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A045",
    "notfor10": "A010",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A045",
    "notfor10": "A014",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A045",
    "notfor10": "A020",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A392",
    "notfor10": "A021",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "A40",
    "notfor10": "A021",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cc10": "B007",
    "notfor10": "A021",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

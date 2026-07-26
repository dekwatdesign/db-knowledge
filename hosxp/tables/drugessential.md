# `drugessential`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | char(7) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode_unique | icode | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "1000001",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000002",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000006",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000007",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000008",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000009",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000010",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000011",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

# `ct2proc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(5) | YES | MUL | NULL |  |  |
| orp | char(1) | YES |  | NULL |  |  |
| orptype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0112",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0114",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0115",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0118",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0119",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0121",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0122",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0123",
    "orp": "Y",
    "orptype": "E",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

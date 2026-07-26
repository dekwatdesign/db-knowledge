# `ct2mscc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| newcode | char(5) | YES | MUL | NULL |  |  |
| rcode | char(5) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_rcode_newcode_unique | newcode | yes | 1 |
| ix_rcode_newcode_unique | rcode | yes | 2 |
| rcode | rcode | no | 1 |
| rcode_newcode_unique | rcode | yes | 1 |
| rcode_newcode_unique | newcode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "newcode": "M050",
    "rcode": "M0500",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0501",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0502",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0503",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0504",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0505",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0506",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "newcode": "M050",
    "rcode": "M0507",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

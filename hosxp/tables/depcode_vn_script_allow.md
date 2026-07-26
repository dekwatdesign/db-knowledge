# `depcode_vn_script_allow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode | varchar(3) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | depcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "depcode": "000",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "002",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "008",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "016",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "018",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "019",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "020",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "depcode": "021",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

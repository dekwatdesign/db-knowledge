# `ndrugdurable`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assetcode | varchar(100) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES | UNI | NULL |  |  |
| inote | text | YES |  | NULL |  |  |
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
    "assetcode": "",
    "depcode": "000",
    "icode": "4400378",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400514",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400567",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400568",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400570",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400572",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400577",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "assetcode": "",
    "depcode": "000",
    "icode": "4400580",
    "inote": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

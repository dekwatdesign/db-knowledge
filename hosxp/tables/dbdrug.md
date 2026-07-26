# `dbdrug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DR_DID | varchar(24) | NO | PRI |  |  |  |
| DR_NAME | varchar(100) | YES |  | NULL |  |  |
| DR_PACK | int(11) | YES |  | NULL |  |  |
| DR_UNIT | varchar(50) | YES |  | NULL |  |  |
| DR_USAGE | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | DR_DID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "DR_DID": "1A01",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 1000,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A02",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 500,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A03",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 1000,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A04",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 1000,
    "DR_UNIT": "CAP",
    "DR_USAGE": "แคปซูล",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A05",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 1000,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A06",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 500,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1A07",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 1000,
    "DR_UNIT": "CAP",
    "DR_USAGE": "แคปซูล",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "DR_DID": "1B01",
    "DR_NAME": "[MASKED_FULLNAME]",
    "DR_PACK": 500,
    "DR_UNIT": "TAB",
    "DR_USAGE": "เม็ด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

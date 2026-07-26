# `icd_o`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(4) | NO | PRI |  |  |  |
| icd_o | varchar(5) | YES |  | NULL |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "000",
    "icd_o": "C00.0",
    "name": "External upper lip",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "001",
    "icd_o": "C00.1",
    "name": "External lower lip",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "002",
    "icd_o": "C00.2",
    "name": "External lip, NOS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "003",
    "icd_o": "C00.3",
    "name": "Mucosa of upper lip",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "004",
    "icd_o": "C00.4",
    "name": "Mucosa of lower lip",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "005",
    "icd_o": "C00.5",
    "name": "Mucosa of lip, NOS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "006",
    "icd_o": "C00.6",
    "name": "Commissure of lip",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "008",
    "icd_o": "C00.8",
    "name": "Overl. lesion of lip",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

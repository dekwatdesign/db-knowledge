# `pcu_drugitems`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| did | varchar(24) | NO | PRI |  |  |  |
| drug_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_name | drug_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icode | icode | no | 1 |
| PRIMARY | did | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "did": "1001",
    "drug_name": "ขมิ้นชัน",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1002",
    "drug_name": "ขิง",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1003",
    "drug_name": "ขี้เหล็ก",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1004",
    "drug_name": "ขลู่",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1005",
    "drug_name": "ชุมเห็ดเทศ",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1006",
    "drug_name": "บอระเพ็ด",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1007",
    "drug_name": "เพชรสังฆาต",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "did": "1008",
    "drug_name": "พลู",
    "icode": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

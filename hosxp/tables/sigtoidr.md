# `sigtoidr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sig | varchar(200) | NO | PRI |  |  |  |
| drugcategory | varchar(150) | YES |  | NULL |  |  |
| idr | varchar(50) | YES |  | NULL |  |  |
| iperday | int(11) | YES |  | NULL |  |  |
| iperdose | double(22,3) | YES |  | NULL |  |  |
| shortname | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | sig | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sig": "1 PO B.I.D PC",
    "drugcategory": "",
    "idr": "PC",
    "iperday": 2,
    "iperdose": 1.0,
    "shortname": "bidpc",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO bid AC",
    "drugcategory": null,
    "idr": "AC",
    "iperday": 2,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD AC",
    "drugcategory": null,
    "idr": "PC",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD AC เที่ยง",
    "drugcategory": null,
    "idr": "ACL",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD AC เย็น",
    "drugcategory": null,
    "idr": "ACD",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD HS",
    "drugcategory": null,
    "idr": "HS",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD PC",
    "drugcategory": null,
    "idr": "PC",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sig": "1 PO OD PC เที่ยง",
    "drugcategory": null,
    "idr": "PCL",
    "iperday": 1,
    "iperdose": 1.0,
    "shortname": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

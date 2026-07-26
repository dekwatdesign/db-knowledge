# `icd9_sss`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(9) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| islocked | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
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
    "name": "THERAPEUTIC ULTRASOUND",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0001",
    "name": "Ther ult head & neck ves",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0002",
    "name": "Ther ultrasound of heart",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0003",
    "name": "Ther ult peripheral ves",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0009",
    "name": "Other therapeutic ultsnd",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "001",
    "name": "PHARMACEUTICALS",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0010",
    "name": "Implant chemothera agent",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0011",
    "name": "Infus drotrecogin alfa",
    "islocked": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

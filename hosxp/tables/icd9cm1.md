# `icd9cm1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(9) | NO | PRI |  |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| export_proced | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "00",
    "name": "PROC & INTERVENTION, NEC",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "000",
    "name": "THERAPEUTIC ULTRASOUND",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0001",
    "name": "Ther ult head & neck ves",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0002",
    "name": "Ther ultrasound of heart",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0003",
    "name": "Ther ult peripheral ves",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0009",
    "name": "Other therapeutic ultsnd",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "001",
    "name": "PHARMACEUTICALS",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0010",
    "name": "Implant chemothera agent",
    "export_proced": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

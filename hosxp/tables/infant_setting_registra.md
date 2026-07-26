# `infant_setting_registra`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_setting_registra_code | varchar(4) | NO | PRI |  |  |  |
| infant_setting_registra_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | infant_setting_registra_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_setting_registra_code": "1000",
    "infant_setting_registra_name": "กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1001",
    "infant_setting_registra_name": "ท้องถิ่นเขตพระนคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1002",
    "infant_setting_registra_name": "ท้องถิ่นเขตดุสิต",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1003",
    "infant_setting_registra_name": "ท้องถิ่นเขตหนองจอก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1004",
    "infant_setting_registra_name": "ท้องถิ่นเขตบางรัก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1005",
    "infant_setting_registra_name": "ท้องถิ่นเขตบางเขน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1006",
    "infant_setting_registra_name": "ท้องถิ่นเขตบางกะปิ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_registra_code": "1007",
    "infant_setting_registra_name": "ท้องถิ่นเขตปทุมวัน",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

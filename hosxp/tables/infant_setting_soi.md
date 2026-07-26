# `infant_setting_soi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_setting_soi_code | varchar(8) | NO | PRI |  |  |  |
| infant_setting_soi_name | varchar(80) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | infant_setting_soi_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_setting_soi_code": "1",
    "infant_setting_soi_name": "เทพารักษ์ 20",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010001",
    "infant_setting_soi_name": "วรพงษ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010002",
    "infant_setting_soi_name": "ท่าเตียน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010003",
    "infant_setting_soi_name": "ประตูนกยูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010004",
    "infant_setting_soi_name": "ท่าข้าม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010005",
    "infant_setting_soi_name": "ดำเนินกลางใต้",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010006",
    "infant_setting_soi_name": "ดำเนินกลางเหนือ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_soi_code": "10010007",
    "infant_setting_soi_name": "วานิช 1",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

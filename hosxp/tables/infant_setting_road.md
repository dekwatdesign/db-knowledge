# `infant_setting_road`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_setting_road_code | varchar(8) | NO | PRI |  |  |  |
| infant_setting_road_name | varchar(80) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | infant_setting_road_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_setting_road_code": "10010001",
    "infant_setting_road_name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010002",
    "infant_setting_road_name": "วิสุทธิ์กษัตริย์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010003",
    "infant_setting_road_name": "สามเสน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010004",
    "infant_setting_road_name": "ประชาธิปไตย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010005",
    "infant_setting_road_name": "ราชดำเนินนอก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010006",
    "infant_setting_road_name": "กรุงเกษม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010007",
    "infant_setting_road_name": "ลำพู",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_road_code": "10010008",
    "infant_setting_road_name": "สามพระยา",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

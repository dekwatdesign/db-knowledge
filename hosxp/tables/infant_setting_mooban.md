# `infant_setting_mooban`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_setting_mooban_code | varchar(8) | NO | PRI |  |  |  |
| infant_setting_mooban_name | varchar(80) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | infant_setting_mooban_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_setting_mooban_code": "10000000",
    "infant_setting_mooban_name": "กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010000",
    "infant_setting_mooban_name": "เขตพระนคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010100",
    "infant_setting_mooban_name": "พระบรมมหาราชวัง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010200",
    "infant_setting_mooban_name": "วังบูรพาภิรมย์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010300",
    "infant_setting_mooban_name": "วัดราชบพิธ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010400",
    "infant_setting_mooban_name": "สำราญราษฎร์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010500",
    "infant_setting_mooban_name": "ศาลเจ้าพ่อเสือ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "infant_setting_mooban_code": "10010600",
    "infant_setting_mooban_name": "เสาชิงช้า",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

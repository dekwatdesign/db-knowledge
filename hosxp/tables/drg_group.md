# `drg_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drg_group | char(2) | NO | PRI |  |  |  |
| drg_group_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drg_group_name | drg_group_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | drg_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drg_group": "00",
    "drg_group_name": "ชันสูตร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "01",
    "drg_group_name": "เอกซ์เรย์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "02",
    "drg_group_name": "ตรวจชันสูตรอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "03",
    "drg_group_name": "ผ่าตัด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "04",
    "drg_group_name": "การรักษาอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "05",
    "drg_group_name": "ยาและเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "06",
    "drg_group_name": "ICU",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg_group": "07",
    "drg_group_name": "ค่าห้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

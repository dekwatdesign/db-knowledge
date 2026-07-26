# `provis_comactivity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_comactivity_code | char(7) | NO | PRI |  |  |  |
| provis_comactivity_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | provis_comactivity_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_comactivity_code": "1A000",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคความดันโลหิตสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A001",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคเบาหวาน ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A002",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคมะเร็ง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A003",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคระบบทางเดินหายใจ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A004",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคสมองเสื่อม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A005",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคหลอดเลือดสมอง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A008",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคเรื้อรังอื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "provis_comactivity_code": "1A009",
    "provis_comactivity_name": "เยี่ยมผู้ป่วยโรคเรื้อรังที่ไม่ระบุรายละเอียด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

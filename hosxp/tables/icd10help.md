# `icd10help`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| begincode | varchar(7) | NO | PRI |  |  |  |
| endcode | varchar(7) | NO | PRI |  |  |  |
| ignorecode | varchar(50) | YES |  | NULL |  |  |
| maingroup | varchar(250) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| subgroup1 | varchar(250) | YES |  | NULL |  |  |
| subgroup2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | begincode | yes | 1 |
| PRIMARY | endcode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "begincode": "M00",
    "endcode": "M03",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของข้อ",
    "subgroup2": "การติดเชื้อของข้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M05",
    "endcode": "M14",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของข้อ",
    "subgroup2": "ข้ออักเสบหลายข้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M15",
    "endcode": "M19",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของข้อ",
    "subgroup2": "โรคข้อเสื่อม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M20",
    "endcode": "M25",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของข้อ",
    "subgroup2": "โรคข้ออื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M30",
    "endcode": "M36",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "ความผิดปกติของเนื้อเยื่อประสานทั่วไป",
    "subgroup2": "ความผิดปกติของเนื้อเยื่อประสานทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M40",
    "endcode": "M43",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของสันหลัง",
    "subgroup2": "สันหลังผิดรูป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M45",
    "endcode": "M49",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของสันหลัง",
    "subgroup2": "สันหลังเสื่อม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "begincode": "M50",
    "endcode": "M54",
    "ignorecode": null,
    "maingroup": "โรคระบบกล้ามเนื้อ กระดูกและเนื้อเยื่อประสาน",
    "note": null,
    "subgroup1": "โรคของสันหลัง",
    "subgroup2": "โรคสันหลังอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

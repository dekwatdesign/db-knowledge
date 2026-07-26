# `dbcasue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idCasue | int(11) | YES |  | NULL |  |  |
| DBcasue | varchar(60) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idCasue": 1,
    "DBcasue": "โรคเบาหวาน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 2,
    "DBcasue": "โรคความดันโลหิตสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 3,
    "DBcasue": "โรคหัวใจขาดเลือด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 4,
    "DBcasue": "โรคหลอดเลือดสมอง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 5,
    "DBcasue": "โรคเรื้อรังระบบทางเดินหายใจ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 6,
    "DBcasue": "เนื้องอก - มะเร็ง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 7,
    "DBcasue": "อุบัติเหตุ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idCasue": 8,
    "DBcasue": "ทำร้ายตัวเอง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

# `provis_race`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "000",
    "name": "ไม่ระบุ",
    "hos_guid": null
  },
  {
    "code": "001",
    "name": "อังกฤษ",
    "hos_guid": null
  },
  {
    "code": "002",
    "name": "ปอร์ตุเกส",
    "hos_guid": null
  },
  {
    "code": "003",
    "name": "ดัตช์",
    "hos_guid": null
  },
  {
    "code": "004",
    "name": "เยอรมัน",
    "hos_guid": null
  },
  {
    "code": "005",
    "name": "ฝรั่งเศส",
    "hos_guid": null
  },
  {
    "code": "006",
    "name": "เดนมาร์ก",
    "hos_guid": null
  },
  {
    "code": "007",
    "name": "สวีเดน",
    "hos_guid": null
  }
]
```

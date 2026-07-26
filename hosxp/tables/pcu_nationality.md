# `pcu_nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | YES | UNI | NULL |  |  |
| nationality | char(3) | NO | PRI |  |  |  |
| nhso_code | varchar(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | nationality | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "ไม่ระบุ",
    "nationality": "00",
    "nhso_code": "000",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "อังกฤษ",
    "nationality": "01",
    "nhso_code": "001",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ปอร์ตุเกส",
    "nationality": "02",
    "nhso_code": "002",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "เนเธอร์แลนด์",
    "nationality": "03",
    "nhso_code": "003",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "เยอรมัน",
    "nationality": "04",
    "nhso_code": "004",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ผรั่งเศส",
    "nationality": "05",
    "nhso_code": "005",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "เดนมาร์ก",
    "nationality": "06",
    "nhso_code": "006",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "สวีเดน",
    "nationality": "07",
    "nhso_code": "007",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

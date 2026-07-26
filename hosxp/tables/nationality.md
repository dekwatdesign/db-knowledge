# `nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | YES | UNI | NULL |  |  |
| nationality | char(3) | NO | PRI |  |  |  |
| nhso_code | varchar(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| zip09_code | varchar(10) | YES |  | NULL |  |  |
| inv_unuse | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
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
    "nhso_code": "999",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "อังกฤษ",
    "nationality": "01",
    "nhso_code": "126",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "ปอร์ตุเกส",
    "nationality": "02",
    "nhso_code": "002",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "เนเธอร์แลนด์",
    "nationality": "03",
    "nhso_code": "003",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "เยอรมัน",
    "nationality": "04",
    "nhso_code": "004",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "ผรั่งเศส",
    "nationality": "05",
    "nhso_code": "005",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "เดนมาร์ก",
    "nationality": "06",
    "nhso_code": "006",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  },
  {
    "name": "สวีเดน",
    "nationality": "07",
    "nhso_code": "007",
    "hos_guid": null,
    "zip09_code": null,
    "inv_unuse": null
  }
]
```

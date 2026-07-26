# `drugusage_line3`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "(  ) คิดราคา 1 เข็ม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(  ) คิดราคา 5 เข็ม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "( ควรฉีดยาให้ตรงเวลาทุกวัน )",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(...) จ่ายเงินครั้งละ 1 โด๊ส",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(กิน 8 เม็ดทันที ครั้งเดียว)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(เช้าไม่ต้องอาบน้ำ)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(ที่เหลือทิ้ง)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(สองอาทิตย์แรก)",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

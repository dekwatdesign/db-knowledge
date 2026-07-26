# `drugstickeridr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idr | varchar(10) | YES | UNI | NULL |  |  |
| dosageform | varchar(50) | YES |  | NULL |  |  |
| dosagename | varchar(50) | YES |  | NULL |  |  |
| pname1 | varchar(150) | YES |  | NULL |  |  |
| pname2 | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idr_unique | idr | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idr": "AC",
    "dosageform": null,
    "dosagename": null,
    "pname1": "RESERVE",
    "pname2": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "AC1",
    "dosageform": "TABLET",
    "dosagename": "เม็ด",
    "pname1": "รับประทานครั้งละ $T เม็ดวันละ $F ครั้ง",
    "pname2": "ก่อนอาหารเย็น",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "ACS1/3",
    "dosageform": "SYRUP",
    "dosagename": "ขวด",
    "pname1": "รับประทานครั้งละ 1 ใน 3 ช้อนชา วันละ $F ครั้ง",
    "pname2": "ก่อนอาหาร $E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "ACS2/3",
    "dosageform": "SYRUP",
    "dosagename": "ขวด",
    "pname1": "รับประทานครั้งละ 2 ใน 3 ช้อนชา วันละ $F ครั้ง",
    "pname2": "ก่อนอาหาร $E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "ACS3/4",
    "dosageform": "SYRUP",
    "dosagename": "ขวด",
    "pname1": "รับประทานครั้งละ 3 ใน 4 ช้อนชา วันละ $F ครั้ง",
    "pname2": "ก่อนอาหาร $E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "ACS7.3",
    "dosageform": "SYRUP",
    "dosagename": "ขวด",
    "pname1": "รับประทานครั้งละ 1 ช้อนชากับอีก 1 ใน สาม ช้อนชา",
    "pname2": "หลังอาหาร $E",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "AP/PRN1",
    "dosageform": "CREAM",
    "dosagename": "ครีม",
    "pname1": "ทาบางๆ บริเวณที่คัน",
    "pname2": "เวลามีอาการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idr": "DAC1",
    "dosageform": "TABLET",
    "dosagename": "เม็ด",
    "pname1": "รับประทานครั้งละ $T $DN วันละ $F ครั้ง",
    "pname2": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

# `moph_price_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_price_item_code | varchar(20) | NO | PRI |  |  |  |
| moph_price_subsection_code | varchar(5) | YES | MUL | NULL |  |  |
| item_seq | int(11) | YES |  | NULL |  |  |
| cs_code | varchar(15) | YES | MUL | NULL |  |  |
| icd9cm | varchar(10) | YES | MUL | NULL |  |  |
| item_name | varchar(500) | YES | MUL | NULL |  |  |
| unit_name | varchar(50) | YES |  | NULL |  |  |
| price_thai | double(10,2) | YES |  | NULL |  |  |
| price_foreigner | double(10,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_cs_code | cs_code | no | 1 |
| ix_idx_icd9cm | icd9cm | no | 1 |
| ix_idx_item_name | item_name | no | 1 |
| ix_idx_subsection | moph_price_subsection_code | no | 1 |
| PRIMARY | moph_price_item_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "moph_price_item_code": "M00001",
    "moph_price_subsection_code": "M00",
    "item_seq": 1,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "จ่ายยาผู้ป่วยนอก",
    "unit_name": "ใบสั่ง",
    "price_thai": 120.0,
    "price_foreigner": 240.0
  },
  {
    "moph_price_item_code": "M00002",
    "moph_price_subsection_code": "M00",
    "item_seq": 2,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "จ่ายยาผู้ป่วยใน (Daily dose)",
    "unit_name": "วันนอน",
    "price_thai": 200.0,
    "price_foreigner": 400.0
  },
  {
    "moph_price_item_code": "M00003",
    "moph_price_subsection_code": "M00",
    "item_seq": 3,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "Aseptic Dispensary TPN (Total Parenteral Nutrition) (คิดค่าเฉลี่ยต่อรายการยา)",
    "unit_name": "ใบสั่ง",
    "price_thai": 550.0,
    "price_foreigner": 1100.0
  },
  {
    "moph_price_item_code": "M00004",
    "moph_price_subsection_code": "M00",
    "item_seq": 4,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "Cytotoxic drug (คิดค่าเฉลี่ยต่อใบสั่งยา)",
    "unit_name": "รายการ",
    "price_thai": 550.0,
    "price_foreigner": 1100.0
  },
  {
    "moph_price_item_code": "M00005",
    "moph_price_subsection_code": "M00",
    "item_seq": 5,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "Telepharmacy",
    "unit_name": "ต่อครั้ง",
    "price_thai": 220.0,
    "price_foreigner": 440.0
  },
  {
    "moph_price_item_code": "M00006",
    "moph_price_subsection_code": "M00",
    "item_seq": 6,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "การบริบาลทางเภสัชกรรมทั่วไป",
    "unit_name": "ต่อวัน",
    "price_thai": 280.0,
    "price_foreigner": 560.0
  },
  {
    "moph_price_item_code": "M00007",
    "moph_price_subsection_code": "M00",
    "item_seq": 7,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "การบริบาลทางเภสัชกรรมเชิงลึกเฉพาะทาง",
    "unit_name": "ต่อวัน",
    "price_thai": 400.0,
    "price_foreigner": 800.0
  },
  {
    "moph_price_item_code": "M00008",
    "moph_price_subsection_code": "M00",
    "item_seq": 8,
    "cs_code": null,
    "icd9cm": null,
    "item_name": "เยี่ยมบ้าน (ทางเภสัชกรรม)",
    "unit_name": "ต่อราย",
    "price_thai": 580.0,
    "price_foreigner": 1160.0
  }
]
```

# `moph_price_category`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_price_category_code | char(1) | YES |  | NULL |  |  |
| category_no | int(11) | YES | UNI | NULL |  |  |
| category_name | varchar(200) | YES |  | NULL |  |  |
| category_label | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uk_category_no | category_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "moph_price_category_code": "0",
    "category_no": 1,
    "category_name": "ค่ายาและบริการเภสัชกรรม",
    "category_label": "Medicine"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 2,
    "category_name": "ค่าบริการสาธารณสุขทางเทคนิคการแพทย์และพยาธิวิทยาคลินิก",
    "category_label": "Lab"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 3,
    "category_name": "ค่าบริการทางรังสีวิทยา (Radiology)",
    "category_label": "X-ray"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 4,
    "category_name": "ค่าบริการตรวจรักษาทั่วไป",
    "category_label": "General"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 5,
    "category_name": "ค่าบริการตรวจรักษาโดยวิธีการพิเศษต่าง ๆ",
    "category_label": "Inspection"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 6,
    "category_name": "ค่าบริการทันตกรรม",
    "category_label": "Dental"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 7,
    "category_name": "ค่าบริการทางด้านวิสัญญี",
    "category_label": "Anesthesia"
  },
  {
    "moph_price_category_code": "0",
    "category_no": 8,
    "category_name": "ค่าบริการด้านศัลยกรรม",
    "category_label": "Surgery"
  }
]
```

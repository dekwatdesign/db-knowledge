# `social_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_item_id | int(11) | NO | PRI | 0 |  |  |
| social_item_name | varchar(250) | YES | MUL | NULL |  |  |
| social_item_price | decimal(10,0) | YES |  | NULL |  |  |
| social_item_minute | int(11) | YES |  | NULL |  |  |
| social_item_active_status | char(1) | YES |  | NULL |  |  |
| social_item_price_nondrug | char(1) | YES |  | NULL |  |  |
| social_activity_type_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES | MUL | NULL |  |  |
| icd9 | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficd10124 | icd10 | no | 1 |
| ix_Reficd9cm125 | icd9 | no | 1 |
| ix_Refnondrugitems23 | icode | no | 1 |
| ix_Refsocial_activity_type22 | social_activity_type_id | no | 1 |
| ix_social_item_social_item_name | social_item_name | no | 1 |
| PRIMARY | social_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "social_item_id": 1,
    "social_item_name": "1-การตรวจประเมินวินิจฉัยปัญหาทางสังคม",
    "social_item_price": "300",
    "social_item_minute": 30,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100001",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 2,
    "social_item_name": "1-การตรวจประเมินวินิจฉัยปัญหาทางสังคมกลุ่มเป้าหมายเฉพาะ",
    "social_item_price": "500",
    "social_item_minute": 60,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100002",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 3,
    "social_item_name": "1-การประเมินปัญหาทางสังคมและความพร้อมของ ผู้ป่วย ครอบครัว ก่อนจำหน่ายผู้ป่วยออกจากโรงพยาบาล",
    "social_item_price": "350",
    "social_item_minute": 45,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100003",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 4,
    "social_item_name": "1-การเตรียมความพร้อมเพื่อส่งประเมินอายุเด็กทางคดี",
    "social_item_price": "600",
    "social_item_minute": 90,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100004",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 5,
    "social_item_name": "1-การเตรียมความพร้อมเพื่อส่งตรวจ พิสูจน์อัตลักษณ์บุคคล (DNA) และความสัมพันธ์ทางสายเลือด",
    "social_item_price": "600",
    "social_item_minute": 90,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100005",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 6,
    "social_item_name": "1-ประเมินจิตสังคม ประเมินความพิการ ความบกพร่อง ความสามารถทางสังคม ทักษะทางสังคม",
    "social_item_price": "350",
    "social_item_minute": 30,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100006",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 7,
    "social_item_name": "1-การเตรียมความพร้อมผู้ป่วยที่มีความรุนแรง (SMIV)",
    "social_item_price": "750",
    "social_item_minute": 90,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 1,
    "icode": "3100007",
    "icd10": null,
    "icd9": null
  },
  {
    "social_item_id": 8,
    "social_item_name": "2-การให้การปรึกษารายบุคคล ",
    "social_item_price": "350",
    "social_item_minute": 45,
    "social_item_active_status": "Y",
    "social_item_price_nondrug": "Y",
    "social_activity_type_id": 2,
    "icode": "3100008",
    "icd10": null,
    "icd9": null
  }
]
```

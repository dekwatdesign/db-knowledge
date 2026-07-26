# `ttmt_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ttmt_code | varchar(10) | NO | PRI |  |  |  |
| active_ingredient | varchar(200) | YES | MUL | NULL |  |  |
| strength | varchar(200) | YES |  | NULL |  |  |
| dosage_form | varchar(100) | YES |  | NULL |  |  |
| dispensing_unit | varchar(50) | YES |  | NULL |  |  |
| trade_name | varchar(200) | YES | MUL | NULL |  |  |
| manufacturer | varchar(200) | YES | MUL | NULL |  |  |
| fsn | varchar(1000) | YES | UNI | NULL |  |  |
| tmt_type | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active_ingredient | active_ingredient | no | 1 |
| ix_fsn | fsn | yes | 1 |
| ix_manufacturer | manufacturer | no | 1 |
| ix_trade_name | trade_name | no | 1 |
| PRIMARY | ttmt_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ttmt_code": "9035125",
    "active_ingredient": "กระเจี๊ยบแดง",
    "strength": "1 กรัม/ซอง",
    "dosage_form": "ยาชง",
    "dispensing_unit": "ซอง",
    "trade_name": "ชาชงกระเจี๊ยบ โรงพยาบาลพนา",
    "manufacturer": "โรงพยาบาลพนา",
    "fsn": "ชาชงกระเจี๊ยบ โรงพยาบาลพนา (โรงพยาบาลพนา) (กระเจี๊ยบแดง 1 กรัม/ซอง) ยาชง",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9035187",
    "active_ingredient": "รางจืด",
    "strength": "1 กรัม/ซอง",
    "dosage_form": "ยาชง",
    "dispensing_unit": "ซอง",
    "trade_name": "ชาชงรางจืด โรงพยาบาลพนา",
    "manufacturer": "โรงพยาบาลพนา",
    "fsn": "ชาชงรางจืด โรงพยาบาลพนา (โรงพยาบาลพนา) (รางจืด 1 กรัม/ซอง) ยาชง",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092460",
    "active_ingredient": "ฟ้าทะลายโจร",
    "strength": "350 มิลลิกรัม/แคปซูล",
    "dosage_form": "ยาแคปซูล",
    "dispensing_unit": "แคปซูล",
    "trade_name": "ฟ้าทะลายโจร",
    "manufacturer": "บริษัท ซีโนฟาร์ม(ไทย) จำกัด",
    "fsn": "ฟ้าทะลายโจร (บริษัท ซีโนฟาร์ม(ไทย) จำกัด) (ฟ้าทะลายโจร 350 มิลลิกรัม/แคปซูล) ยาแคปซูล",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092473",
    "active_ingredient": "มหาหิงคุ์",
    "strength": "สารสกัดมหาหิงคุ์ 20% w/v",
    "dosage_form": "ยาน้ำ",
    "dispensing_unit": "",
    "trade_name": "มหาหิงคุ์ (Asafetida tincture)",
    "manufacturer": "บริษัท วิทยาศรม จำกัด",
    "fsn": "มหาหิงคุ์ (Asafetida tincture) (บริษัท วิทยาศรม จำกัด) (มหาหิงคุ์ สารสกัดมหาหิงคุ์ 20% w/v) ยาน้ำ",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092487",
    "active_ingredient": "มหาหิงคุ์",
    "strength": "ไม่ทราบความแรง",
    "dosage_form": "ยาน้ำ",
    "dispensing_unit": "",
    "trade_name": "มหาหิงคุ์",
    "manufacturer": "บริษัท สหการโอสถ(1996) จำกัด",
    "fsn": "มหาหิงคุ์ (บริษัท สหการโอสถ(1996) จำกัด) (มหาหิงคุ์ ไม่ทราบความแรง) ยาน้ำ",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092494",
    "active_ingredient": "ขมิ้นชัน",
    "strength": "500 มิลลิกรัม/แคปซูล",
    "dosage_form": "ยาแคปซูล",
    "dispensing_unit": "แคปซูล",
    "trade_name": "ยาขมิ้นชัน ชนิดแคปซูล",
    "manufacturer": "ห้างหุ้นส่วนจำกัด โรงงานเภสัชอุตสาหกรรม ค็อกช์",
    "fsn": "ยาขมิ้นชัน ชนิดแคปซูล (ห้างหุ้นส่วนจำกัด โรงงานเภสัชอุตสาหกรรม ค็อกช์) (ขมิ้นชัน 500 มิลลิกรัม/แคปซูล) ยาแคปซูล",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092500",
    "active_ingredient": "น้ำมันมะกอก",
    "strength": "100 มิลลิลิตร/ขวด น้ำมันมะกอก 100% v/v",
    "dosage_form": "ยาเข้าน้ำมัน",
    "dispensing_unit": "ขวด",
    "trade_name": "น้ำมันมะกอก",
    "manufacturer": "องค์การเภสัชกรรม",
    "fsn": "น้ำมันมะกอก (องค์การเภสัชกรรม) (น้ำมันมะกอก 100 มิลลิลิตร/ขวด น้ำมันมะกอก 100% v/v) ยาเข้าน้ำมัน",
    "tmt_type": "SINGLE"
  },
  {
    "ttmt_code": "9092516",
    "active_ingredient": "มะขามแขก",
    "strength": "500 มิลลิกรัม/แคปซูล",
    "dosage_form": "ยาแคปซูล",
    "dispensing_unit": "แคปซูล",
    "trade_name": "ยาแคปซูลใบมะขามแขก",
    "manufacturer": "บริษัท โรงงานเภสัชกรรมแหลมทองการแพทย์ จำกัด",
    "fsn": "ยาแคปซูลใบมะขามแขก (บริษัท โรงงานเภสัชกรรมแหลมทองการแพทย์ จำกัด) (มะขามแขก 500 มิลลิกรัม/แคปซูล) ยาแคปซูล",
    "tmt_type": "SINGLE"
  }
]
```

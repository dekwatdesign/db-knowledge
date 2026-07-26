# `house_survey_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_item_id | int(11) | NO | PRI | 0 |  |  |
| house_survey_item_name | varchar(250) | YES | UNI | NULL |  |  |
| item_data_type | varchar(15) | YES |  | NULL |  |  |
| lookup_table | varchar(30) | YES |  | NULL |  |  |
| lookup_field | varchar(30) | YES |  | NULL |  |  |
| survey_group | varchar(50) | YES | MUL | NULL |  |  |
| lookup_key_field | varchar(30) | YES |  | NULL |  |  |
| export_code | varchar(10) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_code | export_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_survey_item_name | house_survey_item_name | yes | 1 |
| ix_survey_group | survey_group | no | 1 |
| PRIMARY | house_survey_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "house_survey_item_id": 1,
    "house_survey_item_name": "ดื่มน้ำจาก",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_water",
    "lookup_field": "name",
    "survey_group": "การจัดหาน้ำสะอาด",
    "lookup_key_field": "house_survey_water_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 2,
    "house_survey_item_name": "สรุปบ้านมีน้ำดื่มสะอาดพอเพียงตลอดปี",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_yesno",
    "lookup_field": "name",
    "survey_group": "การจัดหาน้ำสะอาด",
    "lookup_key_field": "house_survey_yesno_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 3,
    "house_survey_item_name": "การมีส้วมใช้ในครัวเรือน",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_toilet",
    "lookup_field": "name",
    "survey_group": "การกำจัดสิ่งปฏิกูล",
    "lookup_key_field": "house_survey_toilet_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 4,
    "house_survey_item_name": "สรุปการมี/สามารถใช้ส้วมได้ถูกต้อง",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_yesno",
    "lookup_field": "name",
    "survey_group": "การกำจัดสิ่งปฏิกูล",
    "lookup_key_field": "house_survey_yesno_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 5,
    "house_survey_item_name": "มีที่รองรับขยะประจำบ้าน",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_yesno",
    "lookup_field": "name",
    "survey_group": "ขยะมูลฝอย",
    "lookup_key_field": "house_survey_yesno_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 6,
    "house_survey_item_name": "การกำจัดขยะ",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_garbage",
    "lookup_field": "name",
    "survey_group": "ขยะมูลฝอย",
    "lookup_key_field": "house_survey_garbage_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 7,
    "house_survey_item_name": "สรุปบ้านมีการกำจัดขยะ",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_yesno",
    "lookup_field": "name",
    "survey_group": "ขยะมูลฝอย",
    "lookup_key_field": "house_survey_yesno_id",
    "export_code": null,
    "hos_guid": null
  },
  {
    "house_survey_item_id": 8,
    "house_survey_item_name": "บ้านคงทน",
    "item_data_type": "LookUp",
    "lookup_table": "house_survey_yesno",
    "lookup_field": "name",
    "survey_group": "การสุขาภิบาลที่พักอาศัย",
    "lookup_key_field": "house_survey_yesno_id",
    "export_code": null,
    "hos_guid": null
  }
]
```

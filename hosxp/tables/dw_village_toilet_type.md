# `dw_village_toilet_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_toilet_type_id | int(11) | NO | PRI | 0 |  |  |
| village_toilet_type_name | varchar(250) | YES | UNI | NULL |  |  |
| setting_target | int(11) | YES |  | NULL |  |  |
| setting_has_pass | int(11) | YES |  | NULL |  |  |
| pass_percent | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_village_toilet_type_name | village_toilet_type_name | yes | 1 |
| PRIMARY | village_toilet_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_toilet_type_id": 1,
    "village_toilet_type_name": "แหล่งท่องเที่ยวของกรมอุทยานแห่งชาติ",
    "setting_target": 0,
    "setting_has_pass": 0,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 2,
    "village_toilet_type_name": "สถานีบริการน้ำมันเชื้อเพลิง",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 3,
    "village_toilet_type_name": "ร้านอาหารที่ได้มาตรฐาน CFGT",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 4,
    "village_toilet_type_name": "ตลาดสดน่าซื้อ",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 5,
    "village_toilet_type_name": "โรงเรียนเด็กไทยทำได้",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 6,
    "village_toilet_type_name": "สถานที่ราชการ",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 7,
    "village_toilet_type_name": "สถานีขนส่ง",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  },
  {
    "village_toilet_type_id": 8,
    "village_toilet_type_name": "โรงพยาบาล",
    "setting_target": null,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": null
  }
]
```

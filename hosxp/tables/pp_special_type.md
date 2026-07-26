# `pp_special_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_type_id | int(11) | NO | PRI | 0 |  |  |
| pp_special_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pp_special_code | varchar(6) | YES |  | NULL |  |  |
| f13_nhso_code | varchar(10) | YES |  | NULL |  |  |
| is_active | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_is_active | is_active | no | 1 |
| ix_is_name_active | is_active | no | 1 |
| ix_is_name_active | pp_special_type_name | no | 2 |
| ix_pp_special_type_name | pp_special_type_name | yes | 1 |
| PRIMARY | pp_special_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pp_special_type_id": 1,
    "pp_special_type_name": "1B0030 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลปกติ",
    "hos_guid": "",
    "pp_special_code": "1B0030",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 2,
    "pp_special_type_name": "1B0031 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลผิดปกติ",
    "hos_guid": "",
    "pp_special_code": "1B0031",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 3,
    "pp_special_type_name": "1B0032 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการไม่เคยตรวจด้วยตนเอง",
    "hos_guid": "",
    "pp_special_code": "1B0032",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 4,
    "pp_special_type_name": "1B0033 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ไม่ระบุว่าผู้รับบริการเคยตรวจด้วยตนเองหรือไม่",
    "hos_guid": "",
    "pp_special_code": "1B0033",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 5,
    "pp_special_type_name": "1B0034 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลปกติ",
    "hos_guid": "",
    "pp_special_code": "1B0034",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 6,
    "pp_special_type_name": "1B0035 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลผิดปกติ",
    "hos_guid": "",
    "pp_special_code": "1B0035",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 7,
    "pp_special_type_name": "1B0036 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการไม่เคยตรวจด้วยตนเอง",
    "hos_guid": "",
    "pp_special_code": "1B0036",
    "f13_nhso_code": null,
    "is_active": "Y"
  },
  {
    "pp_special_type_id": 8,
    "pp_special_type_name": "1B0037 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ไม่ระบุว่าผู้รับบริการเคยตรวจด้วยตนเองหรือไม่",
    "hos_guid": "",
    "pp_special_code": "1B0037",
    "f13_nhso_code": null,
    "is_active": "Y"
  }
]
```

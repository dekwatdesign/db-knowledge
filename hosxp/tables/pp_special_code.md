# `pp_special_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(6) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| pp_special_code_group | char(1) | YES |  | NULL |  |  |
| pp_special_code_subgroup | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "1B0030",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลปกติ",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0031",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลผิดปกติ",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0032",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ผู้รับบริการไม่เคยตรวจด้วยตนเอง",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0033",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลปกติ ไม่ระบุว่าผู้รับบริการเคยตรวจด้วยตนเองหรือไม่",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0034",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลปกติ",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0035",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการเคยตรวจด้วยตนเองได้ผลผิดปกติ",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0036",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ผู้รับบริการไม่เคยตรวจด้วยตนเอง",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  },
  {
    "code": "1B0037",
    "name": "ตรวจคัดกรองความเสี่ยง/โรคมะเร็งเต้านมได้ผลผิดปกติ ไม่ระบุว่าผู้รับบริการเคยตรวจด้วยตนเองหรือไม่",
    "pp_special_code_group": "",
    "pp_special_code_subgroup": ""
  }
]
```

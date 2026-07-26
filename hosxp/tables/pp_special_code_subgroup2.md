# `pp_special_code_subgroup2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_code_subgroup2 | char(3) | NO | PRI |  |  |  |
| pp_special_code_subgroup2_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pp_special_code_subgroup2_name | pp_special_code_subgroup2_name | yes | 1 |
| PRIMARY | pp_special_code_subgroup2 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pp_special_code_subgroup2": "1A0",
    "pp_special_code_subgroup2_name": "เยี่ยมผู้ป่วยที่เป็นโรคต่างๆ"
  },
  {
    "pp_special_code_subgroup2": "1A1",
    "pp_special_code_subgroup2_name": "เยี่ยมผู้ป่วยหลังได้รับการรักษา"
  },
  {
    "pp_special_code_subgroup2": "1A2",
    "pp_special_code_subgroup2_name": "เยี่ยม(กลุ่ม)หญิงตั้งครรถ์/หลังคลอด และทารกแรกเกิด"
  },
  {
    "pp_special_code_subgroup2": "1A3",
    "pp_special_code_subgroup2_name": "เยี่ยมกลุ่มผู้พิการ"
  },
  {
    "pp_special_code_subgroup2": "1A4",
    "pp_special_code_subgroup2_name": "เยี่ยมประชากรตามกลุ่มอายุ"
  },
  {
    "pp_special_code_subgroup2": "1A5",
    "pp_special_code_subgroup2_name": "เยี่ยมผู้ประสบภัยพิบัติ"
  },
  {
    "pp_special_code_subgroup2": "1A9",
    "pp_special_code_subgroup2_name": "เยี่ยมบ้านประชาชนสุขภาพดี"
  },
  {
    "pp_special_code_subgroup2": "1B0",
    "pp_special_code_subgroup2_name": "การตรวจคัดกรองความเสี่ยง / โรค / ภาวะสุขภาพ"
  }
]
```

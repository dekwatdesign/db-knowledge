# `pttype_coverage_subgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_coverage_subgroup_code | char(2) | NO | PRI |  |  |  |
| pttype_coverage_subgroup_name | varchar(200) | YES | UNI | NULL |  |  |
| pttype_coverage_group_code | char(3) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_coverage_group_code | pttype_coverage_group_code | no | 1 |
| ix_pttype_coverage_subgroup_name | pttype_coverage_subgroup_name | yes | 1 |
| PRIMARY | pttype_coverage_subgroup_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_coverage_subgroup_code": "61",
    "pttype_coverage_subgroup_name": "บุคคลในครอบครัวของอาสาสมัครมาเลเรีย",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "62",
    "pttype_coverage_subgroup_name": "ช่างสุขภัณฑ์หมู่บ้าน",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "63",
    "pttype_coverage_subgroup_name": "บุคคลในครอบครัวของช่างสุขภัณฑ์หมู่บ้าน",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "64",
    "pttype_coverage_subgroup_name": "ผู้บริหารโรงเรียน และครูของโรงเรียนเอกชนที่สอนศาสนาอิสลาม",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "65",
    "pttype_coverage_subgroup_name": "บุคคลในครอบครัวของผู้บริหารโรงเรียน และครูของโรงเรียนเอกชนที่สอนศาสนาอิสลาม",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "66",
    "pttype_coverage_subgroup_name": "ผู้ได้รับพระราชทานเหรียญราชการชายแดน",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "67",
    "pttype_coverage_subgroup_name": "ผู้ได้รับพระราชทานเหรียญพิทักษ์เสรีชน",
    "pttype_coverage_group_code": "WEL"
  },
  {
    "pttype_coverage_subgroup_code": "68",
    "pttype_coverage_subgroup_name": "สมาชิกผู้บริจาคโลหิตของสภากาชาดไทย ซึ่งบริจาคโลหิตตั้งแต่ 18 ครั้ง ขึ้นไป",
    "pttype_coverage_group_code": "WEL"
  }
]
```

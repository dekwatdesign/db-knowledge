# `f53_cm_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| f53_cm_stage_code | varchar(2) | NO | PRI |  |  |  |
| f53_cm_stage_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_f53_cm_stage_name | f53_cm_stage_name | yes | 1 |
| PRIMARY | f53_cm_stage_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "f53_cm_stage_code": "1",
    "f53_cm_stage_name": "ระยะที่ 1"
  },
  {
    "f53_cm_stage_code": "2",
    "f53_cm_stage_name": "ระยะที่ 2"
  },
  {
    "f53_cm_stage_code": "3",
    "f53_cm_stage_name": "ระยะที่ 3"
  },
  {
    "f53_cm_stage_code": "4",
    "f53_cm_stage_name": "ระยะที่ 4"
  },
  {
    "f53_cm_stage_code": "9",
    "f53_cm_stage_name": "ไม่ทราบระยะ"
  }
]
```

# `ipd_nurse_eval_range`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_eval_range_code | char(2) | YES |  | NULL |  |  |
| ipd_nurse_eval_range_name | varchar(200) | YES | UNI | NULL |  |  |
| illness_level | int(11) | YES |  | NULL |  |  |
| min_score | int(11) | YES |  | NULL |  |  |
| max_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_eval_range_name | ipd_nurse_eval_range_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_eval_range_code": "1c",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อยู่ในระยะพักฟื้น และต้องการการดูแลปานกลาง",
    "illness_level": 1,
    "min_score": 5,
    "max_score": 8
  },
  {
    "ipd_nurse_eval_range_code": "1b",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อยู่ในระยะพักฟื้น แต่ต้องการการดูแลมาก",
    "illness_level": 1,
    "min_score": 9,
    "max_score": 12
  },
  {
    "ipd_nurse_eval_range_code": "1a",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อยู่ในระยะพักฟื้น แต่ต้องการการดูแลมากตลอดเวลา",
    "illness_level": 1,
    "min_score": 13,
    "max_score": 16
  },
  {
    "ipd_nurse_eval_range_code": "2c",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่มีอาการหนักปานกลาง และต้องการการดูแลปานกลาง",
    "illness_level": 2,
    "min_score": 0,
    "max_score": 5
  },
  {
    "ipd_nurse_eval_range_code": "2b",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่มีอาการหนักปานกลาง และต้องการการดูแลมาก",
    "illness_level": 2,
    "min_score": 6,
    "max_score": 10
  },
  {
    "ipd_nurse_eval_range_code": "2a",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อาการหนักปานกลาง และต้องการการดูแลมากตลอดเวลา",
    "illness_level": 2,
    "min_score": 11,
    "max_score": 16
  },
  {
    "ipd_nurse_eval_range_code": "3b",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อาการหนัก และต้องการการดูแลมาก",
    "illness_level": 3,
    "min_score": 0,
    "max_score": 8
  },
  {
    "ipd_nurse_eval_range_code": "3a",
    "ipd_nurse_eval_range_name": "ผู้ป่วยที่อาการหนัก และต้องการการดูแลมากตลอดเวลา",
    "illness_level": 3,
    "min_score": 9,
    "max_score": 16
  }
]
```

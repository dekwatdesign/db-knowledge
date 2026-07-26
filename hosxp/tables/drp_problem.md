# `drp_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_id | int(11) | NO | PRI | 0 |  |  |
| drp_problem_name | varchar(200) | YES | UNI | NULL |  |  |
| std_code | varchar(10) | YES |  | NULL |  |  |
| drp_problem_group_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_problem_name | drp_problem_name | yes | 1 |
| PRIMARY | drp_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "drp_problem_id": 1,
    "drp_problem_name": "ยาไม่ได้ผล แม้จะใช้ถูกต้อง",
    "std_code": "P1.1",
    "drp_problem_group_code": "P1"
  },
  {
    "drp_problem_id": 2,
    "drp_problem_name": "ผลของการรักษาด้วยยาไม่เหมาะสมหรือไม่เต็มที่",
    "std_code": "P1.2",
    "drp_problem_group_code": "P1"
  },
  {
    "drp_problem_id": 3,
    "drp_problem_name": "ไม่พบข้อบ่งใช้ กับอาการหรือโรคของผู้ป่วย",
    "std_code": "P1.3",
    "drp_problem_group_code": "P1"
  },
  {
    "drp_problem_id": 4,
    "drp_problem_name": "อาการที่ไม่พึงประสงค์จากการใช้ยา (หรือที่อาจจะเกิดขึ้น)",
    "std_code": "P2.1",
    "drp_problem_group_code": "P2"
  },
  {
    "drp_problem_id": 5,
    "drp_problem_name": "การรักษาด้วยยาที่ไม่จำเป็น",
    "std_code": "P3.1",
    "drp_problem_group_code": "P3"
  },
  {
    "drp_problem_id": 6,
    "drp_problem_name": "ปัญหา ที่ไม่สามารถระบุได้ชัดเจน",
    "std_code": "P3.2",
    "drp_problem_group_code": "P3"
  }
]
```

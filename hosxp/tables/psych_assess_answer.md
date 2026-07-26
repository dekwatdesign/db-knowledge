# `psych_assess_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_answer_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_answer_name | varchar(255) | YES |  | NULL |  |  |
| psych_assess_answer_score | int(11) | YES |  | NULL |  |  |
| psych_assess_question_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_question_id | psych_assess_question_id | no | 1 |
| PRIMARY | psych_assess_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_assess_answer_id": 1,
    "psych_assess_answer_name": "ไม่มีปัญหา",
    "psych_assess_answer_score": 0,
    "psych_assess_question_id": 1
  },
  {
    "psych_assess_answer_id": 2,
    "psych_assess_answer_name": "มีปัญหาเพียงเล็กน้อยไม่ต้องการการดำเนินการใดๆ",
    "psych_assess_answer_score": 1,
    "psych_assess_question_id": 1
  },
  {
    "psych_assess_answer_id": 3,
    "psych_assess_answer_name": "ปัญหาไม่รุนแรงแต่เห็นได้ชัด",
    "psych_assess_answer_score": 2,
    "psych_assess_question_id": 1
  },
  {
    "psych_assess_answer_id": 4,
    "psych_assess_answer_name": "ปัญหารุนแรงปานกลาง",
    "psych_assess_answer_score": 3,
    "psych_assess_question_id": 1
  },
  {
    "psych_assess_answer_id": 5,
    "psych_assess_answer_name": "รับประทานสม่ำเสมอ/ไม่มีปัญหาอื่น",
    "psych_assess_answer_score": 0,
    "psych_assess_question_id": 13
  },
  {
    "psych_assess_answer_id": 6,
    "psych_assess_answer_name": "รับประทานยาเกือบทุกมื้อ/มีปัญหาอื่นเล็กน้อยแต่มีผลกระทบเล็กน้อย",
    "psych_assess_answer_score": 1,
    "psych_assess_question_id": 13
  },
  {
    "psych_assess_answer_id": 7,
    "psych_assess_answer_name": "ไม่รับประทานยาเป็นบางมื้อและเป็นส่วนน้อย/มีปัญหาอื่นกระทบปานกลาง",
    "psych_assess_answer_score": 2,
    "psych_assess_question_id": 13
  },
  {
    "psych_assess_answer_id": 8,
    "psych_assess_answer_name": "ไม่รับประทานยาเป็นส่วนใหญ่/มีปัญหาอื่นรุนแรง",
    "psych_assess_answer_score": 3,
    "psych_assess_question_id": 13
  }
]
```

# `psych_assess_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_question_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_question_name | text | YES |  | NULL |  |  |
| psych_assess_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_assess_topic_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_topic_id | psych_assess_topic_id | no | 1 |
| ix_psych_assess_type_id | psych_assess_type_id | no | 1 |
| PRIMARY | psych_assess_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_assess_question_id": 1,
    "psych_assess_question_name": "1.1 ปัญหาที่เกิดจากพฤติกรรมที่มากเกินควร หรือเกิดจากพฤติกรรมก้าวร้าว รบกวนผู้อื่นหรือวุ่นวาย อยู่ไม่สงบ",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 2,
    "psych_assess_question_name": "1.2 มีความคิดหรือพฤติกรรมการฆ่าตัวตาย มีการทำร้ายตัวเองที่ไม่ได้ เกิดจากอุบัติเหตุ",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 3,
    "psych_assess_question_name": "1.3 ปัญหาการดื่มสุราหรือการใช้ยาเสพติด",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 4,
    "psych_assess_question_name": "1.4 ปัญหาด้านพุทธิปัญญาาเกี่ยวกับความจำการรู้เวลาสถานที่ บุคคล และความเข้าใจในเรื่องต่างๆ",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 5,
    "psych_assess_question_name": "1.5 ปัญหาที่เกี่ยวข้องกับการเจ็บป่วยหรือพิการทางร่างกาย",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 6,
    "psych_assess_question_name": "1.6 ปัญหาเกี่ยวข้องกับอาการประสาทหลอนและหลงผิด",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 7,
    "psych_assess_question_name": "1.7 อารมณ์ซึมเศร้า",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  },
  {
    "psych_assess_question_id": 8,
    "psych_assess_question_name": "1.8 ปัญหาทางจิตและพฤติกรรมอื่นๆ",
    "psych_assess_type_id": 1,
    "psych_assess_topic_id": 1
  }
]
```

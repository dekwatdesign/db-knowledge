# `psych_answer_ciwa`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_answer_ciwa_id | int(11) | NO | PRI | 0 |  |  |
| psych_answer_ciwa_name | varchar(100) | YES |  | NULL |  |  |
| psych_answer_ciwa_type | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_answer_ciwa_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_answer_ciwa_id": 1,
    "psych_answer_ciwa_name": "0-ไม่มีคลื่นใส้อาเจียน",
    "psych_answer_ciwa_type": 1
  },
  {
    "psych_answer_ciwa_id": 2,
    "psych_answer_ciwa_name": "1-คลื่นใส้เล็กน้อย ไม่อาเจียน",
    "psych_answer_ciwa_type": 1
  },
  {
    "psych_answer_ciwa_id": 3,
    "psych_answer_ciwa_name": "4-คลื่นใส้เป็นพัก ๆ อาเจียนแต่ไม่มีอะไร",
    "psych_answer_ciwa_type": 1
  },
  {
    "psych_answer_ciwa_id": 4,
    "psych_answer_ciwa_name": "7-คลื่นใส้อยู่เรื่อย ๆ อาเจียนบ่อย",
    "psych_answer_ciwa_type": 1
  },
  {
    "psych_answer_ciwa_id": 5,
    "psych_answer_ciwa_name": "0-ไม่มี",
    "psych_answer_ciwa_type": 2
  },
  {
    "psych_answer_ciwa_id": 6,
    "psych_answer_ciwa_name": "1-คันยุบยิบ เหน็บชา ปวดแปล๊บๆ เป็นน้อยมาก",
    "psych_answer_ciwa_type": 2
  },
  {
    "psych_answer_ciwa_id": 7,
    "psych_answer_ciwa_name": "2-คันยุบยิบ เหน็บชา ปวดแปล๊บๆ เป็นน้อย",
    "psych_answer_ciwa_type": 2
  },
  {
    "psych_answer_ciwa_id": 8,
    "psych_answer_ciwa_name": "3-คันยุบยิบ เหน็บชา ปวดแปล๊บๆ เป็นปานกลาง",
    "psych_answer_ciwa_type": 2
  }
]
```

# `psy_assessment_thaihappy_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_thaihappy_question_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_thaihappy_question_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_thaihappy_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_assessment_thaihappy_question_id": 1,
    "psy_assessment_thaihappy_question_name": "ท่านรู้สึกพึงพอใจในชีวิต",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 2,
    "psy_assessment_thaihappy_question_name": "ท่านรู้สึกสบายใจ",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 3,
    "psy_assessment_thaihappy_question_name": "ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 4,
    "psy_assessment_thaihappy_question_name": "ท่านรู้สึกผิดหวังในตัวเอง",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 5,
    "psy_assessment_thaihappy_question_name": "ท่านรู้สึกว่าชีวิตของท่านมีแต่ความทุกข์",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 6,
    "psy_assessment_thaihappy_question_name": "ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 7,
    "psy_assessment_thaihappy_question_name": "ท่านมั่นใจว่าจะสามารถควบคุมอารมณ์ได้เมื่อมีเหตุการณ์คับขันหรือร้ายแรงเกิดขึ้น",
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_question_id": 8,
    "psy_assessment_thaihappy_question_name": "ท่านมั่นใจที่จะเผชิญเหตุการณ์ร้ายแรงที่เกิดชึ้นในชีวิต",
    "hos_guid": null
  }
]
```

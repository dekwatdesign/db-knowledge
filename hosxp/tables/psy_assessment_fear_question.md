# `psy_assessment_fear_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_question_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_fear_question_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_fear_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_assessment_fear_question_id": 1,
    "psy_assessment_fear_question_name": "ฉันรู้สึกตึงเครียด",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 2,
    "psy_assessment_fear_question_name": "ฉันรู้สึกเพลิดเพลินใจกับสิ่งต่างๆที่ฉันเคยชอบได้",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 3,
    "psy_assessment_fear_question_name": "ฉันมีความรู้สึกกลัว คล้ายกับว่ากำลังจะมีเรื่องไม่ดีเกิดขึ้น",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 4,
    "psy_assessment_fear_question_name": "ฉันสามารถหัวเราะ และมีอารมณ์ขันในเรื่องต่างๆ ได้",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 5,
    "psy_assessment_fear_question_name": "ฉันมีความคิดวิตกกังวล",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 6,
    "psy_assessment_fear_question_name": "ฉันรู้สึกเบิกบานแจ่มใส",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 7,
    "psy_assessment_fear_question_name": "ฉันสามารถทำตัวตามสบาย และรู้สึกผ่อนคลาย",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_question_id": 8,
    "psy_assessment_fear_question_name": "ฉันรู้สึกว่าตนเองคิดอะไรทำอะไรเชื่องช้าลงกว่าเดิม",
    "hos_guid": null
  }
]
```

# `psy_assessment_psychosis_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_psychosis_question_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_psychosis_question_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_psychosis_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_assessment_psychosis_question_id": 1,
    "psy_assessment_psychosis_question_name": "พูดเพ้อเจ้อ",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 2,
    "psy_assessment_psychosis_question_name": "แต่งกายที่มีลักษณะแปลกไม่เหมาะสม",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 3,
    "psy_assessment_psychosis_question_name": "ก้าวร้าว วุ่นวาย ทำร้ายผู้อื่น",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 4,
    "psy_assessment_psychosis_question_name": "แยกตัวเองออกจากสังคม ไม่สุงสิงกับใคร",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 5,
    "psy_assessment_psychosis_question_name": "หวาดระแวงโดยไม่มีเหตุผล",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 6,
    "psy_assessment_psychosis_question_name": "คิดว่าตนเองมีความสามารถพิเศษกว่าคนธรรมดา",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 7,
    "psy_assessment_psychosis_question_name": "หูแว่วหรือเห็นภาพหลอน",
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_question_id": 8,
    "psy_assessment_psychosis_question_name": "มีพฤติกรรมอื่นๆ ที่ผิดปกติจากคนทั่วไป",
    "hos_guid": null
  }
]
```

# `teenage_preg_interview_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_interview_question_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_interview_question_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_interview_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_question_name": "สาเหตุของการตั้งครรภ์ครั้งนี้",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 2,
    "teenage_preg_interview_question_name": "มีความคิดจะทำแท้งหรือไม่",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 3,
    "teenage_preg_interview_question_name": "ก่อนท้องครั้งนี้",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 4,
    "teenage_preg_interview_question_name": "การยอมรับของสามี",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 5,
    "teenage_preg_interview_question_name": "การกลับไปเรียนต่อ",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 6,
    "teenage_preg_interview_question_name": "จะเลี้ยงลูกเองถึง 6 เดือนหรือไม่",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 7,
    "teenage_preg_interview_question_name": "การอยู่ร่วมกัน",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_question_id": 8,
    "teenage_preg_interview_question_name": "ตั้งใจจะให้ลูกกินนมแม่",
    "hos_guid": null
  }
]
```

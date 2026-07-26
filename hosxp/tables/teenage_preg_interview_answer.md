# `teenage_preg_interview_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_interview_answer_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_interview_answer_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_interview_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_interview_answer_id": 1,
    "teenage_preg_interview_answer_name": "ตั้งใจอยากให้มี",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 2,
    "teenage_preg_interview_answer_name": "ไม่ได้คุมกำเนิด",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 3,
    "teenage_preg_interview_answer_name": "ไม่รู้วิธีการคุมกำเนิด",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 4,
    "teenage_preg_interview_answer_name": "ไม่คิดว่าจะมีเพศสัมพันธ์",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 5,
    "teenage_preg_interview_answer_name": "คุมแต่พลาด",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 6,
    "teenage_preg_interview_answer_name": "ไม่เคยคิด",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 7,
    "teenage_preg_interview_answer_name": "คิดทำแท้งแต่ไม่ได้ทำ",
    "hos_guid": null
  },
  {
    "teenage_preg_interview_answer_id": 8,
    "teenage_preg_interview_answer_name": "ทำโดย กินยาขับ",
    "hos_guid": null
  }
]
```

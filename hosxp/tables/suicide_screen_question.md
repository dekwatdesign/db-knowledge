# `suicide_screen_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| suicide_screen_question_id | int(11) | NO | PRI | 0 |  |  |
| suicide_screen_question_name | varchar(250) | YES | UNI | NULL |  |  |
| score_yes | int(11) | YES |  | NULL |  |  |
| score_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_suicide_screen_question_name | suicide_screen_question_name | yes | 1 |
| PRIMARY | suicide_screen_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "suicide_screen_question_id": 1,
    "suicide_screen_question_name": "คิดอยากตายหรือคิดว่าตายไปจะดีกว่า",
    "score_yes": 1,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 2,
    "suicide_screen_question_name": "อยากทำร้ายตนเอง หรือทำให้ตนเองบาดเจ็บ",
    "score_yes": 2,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 3,
    "suicide_screen_question_name": "คิดเกี่ยวกับการฆ่าตัวตาย",
    "score_yes": 6,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 4,
    "suicide_screen_question_name": "คิดเกี่ยวกับการฆ่าตัวตาย และไม่สามารถควบคุมความอยากฆ่าตัวตายได้",
    "score_yes": 8,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 5,
    "suicide_screen_question_name": "มีแผนการที่จะฆ่าตัวตาย",
    "score_yes": 8,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 6,
    "suicide_screen_question_name": "ได้เตรียมการที่จะทำร้ายตนเองหรือเตรียมการจะฆ่าตัวตายโดยตั้งใจว่าจะให้ตายจริงๆ",
    "score_yes": 9,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 7,
    "suicide_screen_question_name": "ได้ทำให้ตนเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต",
    "score_yes": 4,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "suicide_screen_question_id": 8,
    "suicide_screen_question_name": "ได้พยายามฆ่าตัวตาย โดยคาดหวัง/ตั้งใจที่จะตาย",
    "score_yes": 10,
    "score_no": 0,
    "hos_guid": null
  }
]
```

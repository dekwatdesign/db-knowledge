# `depression_screen_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depression_screen_question_id | int(11) | NO | PRI | 0 |  |  |
| depression_screen_question_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depression_screen_question_name | depression_screen_question_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | depression_screen_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "depression_screen_question_id": 1,
    "depression_screen_question_name": "เบื่อไม่สนใจอยากทำอะไร",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 2,
    "depression_screen_question_name": "ไม่สนใจ ซึมเศร้า ท้อแท้",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 3,
    "depression_screen_question_name": "หลับยาก หรือหลับๆ ตื่นๆ หรือหลับมากไป",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 4,
    "depression_screen_question_name": "เหนื่อยง่าย หรือ ไม่ค่อยมีแรง",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 5,
    "depression_screen_question_name": "เบื่ออาหาร หรือกินมากเกินไป",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 6,
    "depression_screen_question_name": "รู้สึกไม่ดีกับตนเอง คิดว่าตนเองล้มเหลว หรือ ทำให้ตนเองหรือครอบครัวผิดหวัง",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 7,
    "depression_screen_question_name": "สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ",
    "hos_guid": null
  },
  {
    "depression_screen_question_id": 8,
    "depression_screen_question_name": "พูดช้า ทำอะไรช้าจนคนอื่นสังเกตุเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น",
    "hos_guid": null
  }
]
```

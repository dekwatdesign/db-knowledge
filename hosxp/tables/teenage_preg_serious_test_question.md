# `teenage_preg_serious_test_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_serious_test_question_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_serious_test_question_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_serious_test_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_serious_test_question_id": 1,
    "teenage_preg_serious_test_question_text": "นอนไม่หลับ เพราะคิดมากหรือกังวลใจ",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 2,
    "teenage_preg_serious_test_question_text": "หงุดหงิด รำคาญใจ",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 3,
    "teenage_preg_serious_test_question_text": "ทำอะไรไม่ได้เลย เพราะประสาทตึงเครียด",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 4,
    "teenage_preg_serious_test_question_text": "วุ่นวายใจ",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 5,
    "teenage_preg_serious_test_question_text": "ไม่อยากพบปะผู้คน",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 6,
    "teenage_preg_serious_test_question_text": "ปวดหัวข้างเดียว หรือ ปวดบริเวณขมับทั้ง 2 ข้าง",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 7,
    "teenage_preg_serious_test_question_text": "ไม่มีความสุข และเศร้าหมอง",
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_question_id": 8,
    "teenage_preg_serious_test_question_text": "หมดหวังในชีวิต",
    "hos_guid": null
  }
]
```

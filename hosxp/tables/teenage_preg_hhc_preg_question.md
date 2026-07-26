# `teenage_preg_hhc_preg_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_preg_question_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_preg_question_name | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_hhc_preg_question_head | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_preg_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_hhc_preg_question_id": 2,
    "teenage_preg_hhc_preg_question_name": "พฤติกรรมการรับประทานอาหาร",
    "teenage_preg_hhc_preg_question_head": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 3,
    "teenage_preg_hhc_preg_question_name": "การเพิ่มขึ้นของน้ำหนักตัว(ค่าปกติเฉลี่ย 0.5kgs/สัปดาห์)",
    "teenage_preg_hhc_preg_question_head": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 4,
    "teenage_preg_hhc_preg_question_name": "ลักษณะและสารอาหารที่รับประทานต่อวัน",
    "teenage_preg_hhc_preg_question_head": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 5,
    "teenage_preg_hhc_preg_question_name": "สภาพความเป็นอยู่ภายในครอบครัว",
    "teenage_preg_hhc_preg_question_head": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 7,
    "teenage_preg_hhc_preg_question_name": "ปวดศีรษะ",
    "teenage_preg_hhc_preg_question_head": 6,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 8,
    "teenage_preg_hhc_preg_question_name": "จุกแน่นลิ้นปี่",
    "teenage_preg_hhc_preg_question_head": 6,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 9,
    "teenage_preg_hhc_preg_question_name": "ตาพร่ามัว",
    "teenage_preg_hhc_preg_question_head": 6,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_question_id": 10,
    "teenage_preg_hhc_preg_question_name": "บวมตามใบหน้า แขน ขา",
    "teenage_preg_hhc_preg_question_head": 6,
    "hos_guid": null
  }
]
```

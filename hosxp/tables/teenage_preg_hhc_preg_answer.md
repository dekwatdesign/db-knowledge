# `teenage_preg_hhc_preg_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_preg_answer_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_preg_answer_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_preg_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_hhc_preg_answer_id": 0,
    "teenage_preg_hhc_preg_answer_name": "------------------หัวข้อ",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 1,
    "teenage_preg_hhc_preg_answer_name": "เหมาะสม",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 2,
    "teenage_preg_hhc_preg_answer_name": "ไม่เหมาะสม",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 3,
    "teenage_preg_hhc_preg_answer_name": "ดี",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 4,
    "teenage_preg_hhc_preg_answer_name": "ปานกลาง",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 5,
    "teenage_preg_hhc_preg_answer_name": "ยากจน",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 6,
    "teenage_preg_hhc_preg_answer_name": "มี",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_answer_id": 7,
    "teenage_preg_hhc_preg_answer_name": "ไม่มี",
    "hos_guid": null
  }
]
```

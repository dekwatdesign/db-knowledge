# `teenage_preg_serious_test_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_serious_test_answer_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_serious_test_answer_name | varchar(50) | YES |  | NULL |  |  |
| teenage_preg_serious_test_answer_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_serious_test_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "teenage_preg_serious_test_answer_id": 1,
    "teenage_preg_serious_test_answer_name": "ไม่เคยเลย",
    "teenage_preg_serious_test_answer_score": 0,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_answer_id": 2,
    "teenage_preg_serious_test_answer_name": "เป็นครั้งคราว",
    "teenage_preg_serious_test_answer_score": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_answer_id": 3,
    "teenage_preg_serious_test_answer_name": "เป็นบ่อยๆ",
    "teenage_preg_serious_test_answer_score": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_answer_id": 4,
    "teenage_preg_serious_test_answer_name": "เป็นประจำ",
    "teenage_preg_serious_test_answer_score": 3,
    "hos_guid": null
  }
]
```

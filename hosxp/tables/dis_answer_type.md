# `dis_answer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_answer_type_id | int(11) | NO | PRI | 0 |  |  |
| dis_answer_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_answer_type_name | dis_answer_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_answer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "dis_answer_type_id": 1,
    "dis_answer_type_name": "วาจา",
    "hos_guid": null
  },
  {
    "dis_answer_type_id": 2,
    "dis_answer_type_name": "ลายลักษณ์อักษร",
    "hos_guid": null
  },
  {
    "dis_answer_type_id": 3,
    "dis_answer_type_name": "โทรศัพท์/โทรสาร",
    "hos_guid": null
  },
  {
    "dis_answer_type_id": 4,
    "dis_answer_type_name": "e-mail",
    "hos_guid": null
  },
  {
    "dis_answer_type_id": 5,
    "dis_answer_type_name": "ไปรษณีย์",
    "hos_guid": null
  },
  {
    "dis_answer_type_id": 6,
    "dis_answer_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```

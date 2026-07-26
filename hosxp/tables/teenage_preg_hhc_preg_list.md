# `teenage_preg_hhc_preg_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_preg_list_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_preg_answer_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_preg_question_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc_preg_answer802 | teenage_preg_hhc_preg_answer_id | no | 1 |
| ix_Refteenage_preg_hhc_preg_question812 | teenage_preg_hhc_preg_question_id | no | 1 |
| PRIMARY | teenage_preg_hhc_preg_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_hhc_preg_list_id": 2,
    "teenage_preg_hhc_preg_answer_id": 1,
    "teenage_preg_hhc_preg_question_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 3,
    "teenage_preg_hhc_preg_answer_id": 2,
    "teenage_preg_hhc_preg_question_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 4,
    "teenage_preg_hhc_preg_answer_id": 1,
    "teenage_preg_hhc_preg_question_id": 3,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 5,
    "teenage_preg_hhc_preg_answer_id": 2,
    "teenage_preg_hhc_preg_question_id": 3,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 6,
    "teenage_preg_hhc_preg_answer_id": 1,
    "teenage_preg_hhc_preg_question_id": 4,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 7,
    "teenage_preg_hhc_preg_answer_id": 2,
    "teenage_preg_hhc_preg_question_id": 4,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 8,
    "teenage_preg_hhc_preg_answer_id": 3,
    "teenage_preg_hhc_preg_question_id": 5,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_preg_list_id": 9,
    "teenage_preg_hhc_preg_answer_id": 4,
    "teenage_preg_hhc_preg_question_id": 5,
    "hos_guid": null
  }
]
```

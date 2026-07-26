# `teenage_preg_interview_qa_mapping`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_interview_qa_mapping_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_interview_question_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_interview_answer_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_interview_answer57 | teenage_preg_interview_answer_id | no | 1 |
| ix_Refteenage_preg_interview_question56 | teenage_preg_interview_question_id | no | 1 |
| PRIMARY | teenage_preg_interview_qa_mapping_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_interview_qa_mapping_id": 1,
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_answer_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 2,
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_answer_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 3,
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_answer_id": 3,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 4,
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_answer_id": 4,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 5,
    "teenage_preg_interview_question_id": 1,
    "teenage_preg_interview_answer_id": 5,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 6,
    "teenage_preg_interview_question_id": 2,
    "teenage_preg_interview_answer_id": 6,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 7,
    "teenage_preg_interview_question_id": 2,
    "teenage_preg_interview_answer_id": 7,
    "hos_guid": null
  },
  {
    "teenage_preg_interview_qa_mapping_id": 8,
    "teenage_preg_interview_question_id": 2,
    "teenage_preg_interview_answer_id": 8,
    "hos_guid": null
  }
]
```

# `psy_assessment_fear_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_list_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_fear_question_id | varchar(10) | YES |  | NULL |  |  |
| psy_assessment_fear_choice_id | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_fear_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_assessment_fear_list_id": 1,
    "psy_assessment_fear_question_id": "1",
    "psy_assessment_fear_choice_id": "1",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 2,
    "psy_assessment_fear_question_id": "1",
    "psy_assessment_fear_choice_id": "2",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 3,
    "psy_assessment_fear_question_id": "1",
    "psy_assessment_fear_choice_id": "3",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 4,
    "psy_assessment_fear_question_id": "1",
    "psy_assessment_fear_choice_id": "4",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 5,
    "psy_assessment_fear_question_id": "2",
    "psy_assessment_fear_choice_id": "5",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 6,
    "psy_assessment_fear_question_id": "2",
    "psy_assessment_fear_choice_id": "6",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 7,
    "psy_assessment_fear_question_id": "2",
    "psy_assessment_fear_choice_id": "7",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_list_id": 8,
    "psy_assessment_fear_question_id": "2",
    "psy_assessment_fear_choice_id": "8",
    "hos_guid": null
  }
]
```

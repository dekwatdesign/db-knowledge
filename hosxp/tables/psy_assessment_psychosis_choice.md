# `psy_assessment_psychosis_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_psychosis_choice_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_psychosis_choice_name | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_psychosis_choice_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_psychosis_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psy_assessment_psychosis_choice_id": 1,
    "psy_assessment_psychosis_choice_name": "ไม่มี",
    "psy_assessment_psychosis_choice_score": 0,
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_choice_id": 2,
    "psy_assessment_psychosis_choice_name": "มี",
    "psy_assessment_psychosis_choice_score": 1,
    "hos_guid": null
  }
]
```

# `psy_assessment_psychosis_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_psychosis_answer_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_psychosis_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_psychosis_question_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_psychosis_choice_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref4351 | psy_assessment_psychosis_question_id | no | 1 |
| ix_Ref4554 | psy_assessment_psychosis_id | no | 1 |
| PRIMARY | psy_assessment_psychosis_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

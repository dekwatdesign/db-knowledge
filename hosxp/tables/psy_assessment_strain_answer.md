# `psy_assessment_strain_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_strain_answer_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_strain_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_strain_question_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_strain_choice_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref3040 | psy_assessment_strain_id | no | 1 |
| ix_Ref3337 | psy_assessment_strain_question_id | no | 1 |
| PRIMARY | psy_assessment_strain_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

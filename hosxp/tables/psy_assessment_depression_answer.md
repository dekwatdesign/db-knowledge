# `psy_assessment_depression_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_depression_answer_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_depression_id | int(11) | YES | MUL | NULL |  |  |
| depression_screen_question_id | int(11) | YES | MUL | NULL |  |  |
| depression_screen_choice_score_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depression_screen_id | depression_screen_question_id | no | 1 |
| ix_depression_screen_idx | psy_assessment_depression_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_depression_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

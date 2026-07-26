# `psy_assessment_depression`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_depression_id | int(11) | NO | PRI | 0 |  |  |
| psy_home_visit_id | varchar(12) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| feel_depression_2_week | char(1) | YES |  | NULL |  |  |
| feel_boring_2_week | char(1) | YES |  | NULL |  |  |
| depression_score | int(11) | YES |  | NULL |  |  |
| depression_screen_evaluate_id | int(11) | YES |  | NULL |  |  |
| suicide_score | int(11) | YES |  | NULL |  |  |
| suicide_screen_evaluate_id | int(11) | YES |  | NULL |  |  |
| score_9q_1 | int(11) | YES |  | NULL |  |  |
| score_9q_2 | int(11) | YES |  | NULL |  |  |
| score_9q_3 | int(11) | YES |  | NULL |  |  |
| score_9q_4 | int(11) | YES |  | NULL |  |  |
| score_9q_5 | int(11) | YES |  | NULL |  |  |
| score_9q_6 | int(11) | YES |  | NULL |  |  |
| score_9q_7 | int(11) | YES |  | NULL |  |  |
| score_9q_8 | int(11) | YES |  | NULL |  |  |
| score_9q_9 | int(11) | YES |  | NULL |  |  |
| score_8q_1 | int(11) | YES |  | NULL |  |  |
| score_8q_2 | int(11) | YES |  | NULL |  |  |
| score_8q_3 | int(11) | YES |  | NULL |  |  |
| score_8q_4 | int(11) | YES |  | NULL |  |  |
| score_8q_5 | int(11) | YES |  | NULL |  |  |
| score_8q_6 | int(11) | YES |  | NULL |  |  |
| score_8q_7 | int(11) | YES |  | NULL |  |  |
| score_8q_8 | int(11) | YES |  | NULL |  |  |
| score_8q_9 | int(11) | YES |  | NULL |  |  |
| no_depression | char(1) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_place_id | int(11) | YES |  | NULL |  |  |
| psy_register_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_depression_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

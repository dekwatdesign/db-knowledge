# `psy_assessment_thaihappy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_thaihappy_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_thaihappy_date | date | YES |  | NULL |  |  |
| psy_register_assessment_thaihappy_lastupdate | datetime | YES |  | NULL |  |  |
| psy_assessment_thaihappy_evaluate_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_thaihappy_staff | varchar(10) | YES | MUL | NULL |  |  |
| psy_home_visit_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_note | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_time | time | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_place_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_evaluate_score | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref241 | psy_register_id | no | 1 |
| ix_Ref3239 | psy_assessment_thaihappy_evaluate_id | no | 1 |
| ix_Ref3646 | psy_assessment_thaihappy_staff | no | 1 |
| PRIMARY | psy_assessment_thaihappy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

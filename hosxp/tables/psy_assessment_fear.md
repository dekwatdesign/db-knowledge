# `psy_assessment_fear`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_fear_date | date | YES |  | NULL |  |  |
| psy_register_assessment_fear_lastupdate | datetime | YES |  | NULL |  |  |
| psy_assessment_fear_evaluate_fear | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_fear_staff | varchar(10) | YES | MUL | NULL |  |  |
| psy_home_visit_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_fear_note | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_fear_time | time | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_place_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_fear_evaluate_depression | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref2229 | psy_assessment_fear_evaluate_fear | no | 1 |
| ix_Ref227 | psy_register_id | no | 1 |
| ix_Ref3645 | psy_assessment_fear_staff | no | 1 |
| PRIMARY | psy_assessment_fear_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

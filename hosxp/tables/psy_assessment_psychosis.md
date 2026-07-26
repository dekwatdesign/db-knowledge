# `psy_assessment_psychosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_psychosis_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_psychosis_date | date | YES |  | NULL |  |  |
| psy_register_assessment_psychosis_lastupdate | datetime | YES |  | NULL |  |  |
| psy_assessment_psychosis_evaluate_id | int(11) | YES | MUL | NULL |  |  |
| psy_assessment_psychosis_staff | varchar(100) | YES | MUL | NULL |  |  |
| psy_home_visit_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_psychosis_note | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_psychosis_time | time | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| psy_assessment_place_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref256 | psy_register_id | no | 1 |
| ix_Ref3655 | psy_assessment_psychosis_staff | no | 1 |
| ix_Ref4253 | psy_assessment_psychosis_evaluate_id | no | 1 |
| PRIMARY | psy_assessment_psychosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

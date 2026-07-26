# `psy_register_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_plan_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES | MUL | NULL |  |  |
| psy_register_plan_outdate | date | YES |  | NULL |  |  |
| psy_register_plan_lastupdate | datetime | YES |  | NULL |  |  |
| psy_register_plan_set_id | int(11) | YES | MUL | NULL |  |  |
| psy_register_plan_staff | varchar(10) | YES | MUL | NULL |  |  |
| psy_register_plan_doctor | varchar(6) | YES | MUL | NULL |  |  |
| psy_register_plan_note | text | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| psy_register_plan_assessment_depression | char(1) | YES |  | NULL |  |  |
| psy_register_plan_assessment_fear | char(1) | YES |  | NULL |  |  |
| psy_register_plan_assessment_strain | char(1) | YES |  | NULL |  |  |
| psy_register_plan_assessment_psychosis | char(1) | YES |  | NULL |  |  |
| psy_register_plan_team_volunteer | char(1) | YES |  | NULL |  |  |
| psy_register_plan_team_local | char(1) | YES |  | NULL |  |  |
| psy_register_plan_team_community_leader | char(1) | YES |  | NULL |  |  |
| psy_register_plan_team_monk | char(1) | YES |  | NULL |  |  |
| psy_register_plan_team_police | char(1) | YES |  | NULL |  |  |
| psy_register_plan_status_id | smallint(6) | YES |  | NULL |  |  |
| psy_register_plan_team_sanatorium | char(1) | YES |  | NULL |  |  |
| psy_register_plan_assessment_thaihappy | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref262 | psy_register_id | no | 1 |
| ix_Ref5363 | psy_register_plan_set_id | no | 1 |
| ix_Ref5464 | psy_register_plan_staff | no | 1 |
| ix_Ref6176 | psy_register_plan_doctor | no | 1 |
| PRIMARY | psy_register_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `psy_home_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_home_visit_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES |  | NULL |  |  |
| clinic_member_status_id | int(11) | YES | MUL | NULL |  |  |
| clinic_subtype_id | int(11) | YES | MUL | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| psy_home_visit_team_volunteer | char(1) | YES |  | NULL |  |  |
| psy_home_visit_team_local | char(1) | YES |  | NULL |  |  |
| psy_home_visit_community_leader | char(1) | YES |  | NULL |  |  |
| psy_home_visit_team_monk | char(1) | YES |  | NULL |  |  |
| psy_home_visit_team_police | char(1) | YES |  | NULL |  |  |
| psy_home_visit_staff | varchar(50) | YES |  | NULL |  |  |
| psy_home_visit_lastupdate | datetime | YES |  | NULL |  |  |
| psy_home_visit_team_sanatorium | char(1) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref279 | clinic_member_status_id | no | 1 |
| ix_Ref5783 | clinic_subtype_id | no | 1 |
| PRIMARY | psy_home_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

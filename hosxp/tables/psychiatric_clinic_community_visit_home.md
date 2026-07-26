# `psychiatric_clinic_community_visit_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_community_visit_home_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_community_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_project | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_discharge | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_hospcode | varchar(9) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_date | datetime | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_symptom | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_help_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_durg_allergy | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_durg_allergy_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_visit_home_durg_allergy2 | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_community_visit_home_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

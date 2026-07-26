# `psychiatric_form_tracehome`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_tracehome_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_symptom | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_drug | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_drug_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_activity | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_continuecare | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_continuecare_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_family_care | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_family_care_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_occupation | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_occupation_status | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_occupation_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_community | char(2) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_community_activity | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_community_family_activity | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_community_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_problems_visit | varchar(500) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_comment | varchar(500) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_visit_name | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_visit_date | date | YES |  | NULL |  |  |
| psychiatric_form_tracehome_hospcode | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_hospcode_phone | varchar(15) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_staff | varchar(50) | YES |  | NULL |  |  |
| psychiatric_form_tracehome_last_update | datetime | YES |  | NULL |  |  |
| psychiatric_form_patientcare_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_tracehome_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

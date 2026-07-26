# `cancer_register_home_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_home_visit_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_home_visit_date | date | YES |  | NULL |  |  |
| cancer_register_home_visit_time | time | YES |  | NULL |  |  |
| cancer_register_home_visit_patient_status_id | int(11) | YES |  | NULL |  |  |
| cancer_register_home_visit_has_tool | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_tool_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_has_relative_skill | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_relative_skill_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_lesion | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_lesion_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_treatment_incomplete | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_treatment_incomplete_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_re_admit | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_re_admit_amount | int(11) | YES |  | NULL |  |  |
| cancer_register_home_visit_risk_suicide | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_house | int(11) | YES |  | NULL |  |  |
| cancer_register_home_visit_house_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_body | char(10) | YES |  | NULL |  |  |
| cancer_register_home_visit_body_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_mind | int(11) | YES |  | NULL |  |  |
| cancer_register_home_visit_mind_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_food | int(11) | YES |  | NULL |  |  |
| cancer_register_home_visit_food_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_other | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_complication | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_complication_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_drug | varchar(255) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| transfer_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_home_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

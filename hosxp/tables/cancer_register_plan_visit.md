# `cancer_register_plan_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_plan_visit_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_plan_visit_date | date | YES |  | NULL |  |  |
| cancer_register_plan_visit_mind | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_body | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_social | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_other | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_date_visit | date | YES |  | NULL |  |  |
| cancer_register_plan_visit_has_tool | char(1) | YES |  | NULL |  |  |
| cancer_register_plan_visit_has_tool_text | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_relative_skill | char(1) | YES |  | NULL |  |  |
| cancer_register_plan_visit_relative_skill_text | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_lesion | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_risk_suicide | char(1) | YES |  | NULL |  |  |
| cancer_register_plan_visit_re_admit | char(1) | YES |  | NULL |  |  |
| cancer_register_plan_visit_treatment_incomplete | char(1) | YES |  | NULL |  |  |
| cancer_register_plan_visit_other_text | varchar(255) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| append_datetime | date | YES |  | NULL |  |  |
| edit_datetime | date | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| cancer_register_plan_visit_complication | varchar(255) | YES |  | NULL |  |  |
| cancer_home_visit_consider_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| cancer_register_plan_status_type_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_plan_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `patient_hhc_plan_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_visit_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES | MUL | NULL |  |  |
| patient_found | char(1) | YES |  | NULL |  |  |
| patient_visit | char(1) | YES |  | NULL |  |  |
| patient_visit_text | text | YES |  | NULL |  |  |
| home_visit | char(1) | YES |  | NULL |  |  |
| home_visit_text | text | YES |  | NULL |  |  |
| continue_care | char(1) | YES |  | NULL |  |  |
| continue_care_text | text | YES |  | NULL |  |  |
| problem_text | text | YES |  | NULL |  |  |
| staff_name | varchar(100) | YES |  | NULL |  |  |
| patient_hhc_plan_visit_date | date | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_plan_id | patient_hhc_plan_id | no | 1 |
| PRIMARY | patient_hhc_plan_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

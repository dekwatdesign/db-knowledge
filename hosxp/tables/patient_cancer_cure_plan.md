# `patient_cancer_cure_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_cure_plan_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(15) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| doctor_note_text | text | YES |  | NULL |  |  |
| technician_note_text | text | YES |  | NULL |  |  |
| pass_simulation_status | varchar(1) | YES |  | NULL |  |  |
| pass_planning_status | varchar(1) | YES |  | NULL |  |  |
| pass_treatment_status | varchar(1) | YES |  | NULL |  |  |
| cancer_plan_status_id | int(11) | YES |  | NULL |  |  |
| plan_name | varchar(50) | YES |  | NULL |  |  |
| plan_note_text | text | YES |  | NULL |  |  |
| plan_start_date | date | YES |  | NULL |  |  |
| plan_end_date | date | YES |  | NULL |  |  |
| cancer_machine_id | int(11) | YES |  | NULL |  |  |
| plan_cure_type | varchar(1) | YES |  | NULL |  |  |
| plan_icd10 | varchar(5) | YES |  | NULL |  |  |
| cancer_stage2_id | int(11) | YES |  | NULL |  |  |
| plan_icd10_como | varchar(5) | YES |  | NULL |  |  |
| create_plan_date | date | YES |  | NULL |  |  |
| doctor_code_update | varchar(15) | YES |  | NULL |  |  |
| last_update_plan | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_cure_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

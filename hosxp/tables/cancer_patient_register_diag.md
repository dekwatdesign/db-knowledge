# `cancer_patient_register_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_patient_register_diag_id | int(11) | NO | PRI | 0 |  |  |
| cancer_patient_register_diag_date | date | YES |  | NULL |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_lab_name | varchar(255) | YES |  | NULL |  |  |
| cancer_patient_register_diag_code | char(10) | YES |  | NULL |  |  |
| cancer_patient_register_diag_type_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_position_code | char(10) | YES |  | NULL |  |  |
| cancer_patient_register_diag_organ_code | char(10) | YES |  | NULL |  |  |
| cancer_patient_register_diag_grade_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_laterality_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_stage_first_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_stage_appoint_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_stage_treatment_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_extend_id | int(11) | YES |  | NULL |  |  |
| cancer_patient_register_diag_metastasis_id | int(11) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| cancer_patient_register_diag_image1 | longblob | YES |  | NULL |  |  |
| cancer_patient_register_diag_image2 | longblob | YES |  | NULL |  |  |
| cancer_appoint_register_date | date | YES |  | NULL |  |  |
| cancer_appoint_treatment_date | date | YES |  | NULL |  |  |
| cancer_treatment_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_patient_register_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

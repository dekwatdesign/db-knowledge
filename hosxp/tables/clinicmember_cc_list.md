# `clinicmember_cc_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cc_list_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cancer_id | int(11) | YES | MUL | NULL |  |  |
| cm_cancer_diag_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_organ_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_grade_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_field_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_stage_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_tumor_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_node_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_meta_type_id | int(11) | YES |  | NULL |  |  |
| doctor_diag_date | date | YES |  | NULL |  |  |
| cancer_icd_o | varchar(10) | YES |  | NULL |  |  |
| cancer_registry_no | varchar(20) | YES |  | NULL |  |  |
| cancer_extend_id | int(11) | YES |  | NULL |  |  |
| cancer_metastasis_id | int(11) | YES |  | NULL |  |  |
| surgery_status | char(1) | YES |  | NULL |  |  |
| radio_therapy_status | char(1) | YES |  | NULL |  |  |
| chemo_therapy_status | char(1) | YES |  | NULL |  |  |
| targeted_therapy_status | char(1) | YES |  | NULL |  |  |
| hormone_therapy_status | char(1) | YES |  | NULL |  |  |
| immuno_therapy_status | char(1) | YES |  | NULL |  |  |
| intervention_treatment_status | char(1) | YES |  | NULL |  |  |
| other_treatment_status | char(1) | YES |  | NULL |  |  |
| supportive_treatment_status | char(1) | YES |  | NULL |  |  |
| surgery_rt_status | char(1) | YES |  | NULL |  |  |
| surgery_cmt_status | char(1) | YES |  | NULL |  |  |
| rt_cmt_status | char(1) | YES |  | NULL |  |  |
| other_status | char(1) | YES |  | NULL |  |  |
| surgery_date | date | YES |  | NULL |  |  |
| radio_therapy_date | date | YES |  | NULL |  |  |
| chemo_therapy_date | date | YES |  | NULL |  |  |
| targeted_therapy_date | date | YES |  | NULL |  |  |
| hormone_therapy_date | date | YES |  | NULL |  |  |
| immuno_therapy_date | date | YES |  | NULL |  |  |
| intervention_treatment_date | date | YES |  | NULL |  |  |
| other_treatment_date | date | YES |  | NULL |  |  |
| supportive_treatment_date | date | YES |  | NULL |  |  |
| surgery_rt_date | date | YES |  | NULL |  |  |
| surgery_cmt_date | date | YES |  | NULL |  |  |
| rt_cmt_date | date | YES |  | NULL |  |  |
| other_treatment_text | text | YES |  | NULL |  |  |
| pathology_no | varchar(50) | YES |  | NULL |  |  |
| cm_cancer_number_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cancer_id | clinicmember_cancer_id | no | 1 |
| PRIMARY | clinicmember_cc_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

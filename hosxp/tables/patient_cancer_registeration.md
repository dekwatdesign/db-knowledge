# `patient_cancer_registeration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_registeration_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_registeration_no | varchar(10) | YES |  | NULL |  |  |
| clinicmember_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| in_no | varchar(10) | YES |  | NULL |  |  |
| cn_no | varchar(10) | YES |  | NULL |  |  |
| rn_no | varchar(10) | YES |  | NULL |  |  |
| gn_no | varchar(10) | YES |  | NULL |  |  |
| xn_no | varchar(10) | YES |  | NULL |  |  |
| patient_cancer_first_meet_doctor_date | date | YES |  | NULL |  |  |
| patient_cancer_first_cure_date | date | YES |  | NULL |  |  |
| patient_cancer_first_diag_cancer_date | date | YES |  | NULL |  |  |
| patient_cancer_lab_name | varchar(30) | YES |  | NULL |  |  |
| patient_cancer_pathology_no | varchar(10) | YES |  | NULL |  |  |
| patient_cancer_diag_method_text | varchar(30) | YES |  | NULL |  |  |
| pathology_result_id | int(11) | YES |  | NULL |  |  |
| cancer_grade_id | int(11) | YES |  | NULL |  |  |
| cancer_laterality_id | int(11) | YES |  | NULL |  |  |
| cancer_stage2_id | int(11) | YES |  | NULL |  |  |
| cancer_extend_id | int(11) | YES |  | NULL |  |  |
| cancer_metastasis_id | int(11) | YES |  | NULL |  |  |
| cancer_cure_id | int(11) | YES |  | NULL |  |  |
| cancer_person_live_status_id | int(11) | YES |  | NULL |  |  |
| cancer_death_cause_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_last_visit_date | date | YES |  | NULL |  |  |
| patient_cancer_book_date | date | YES |  | NULL |  |  |
| patient_cancer_editor_cid | varchar(13) | YES |  | NULL |  |  |
| patient_cancer_editor_name | varchar(80) | YES |  | NULL |  |  |
| patient_cancer_doctor_code | varchar(10) | YES |  | NULL |  |  |
| cancer_clinic_id | int(11) | YES |  | NULL |  |  |
| t_value | int(11) | YES |  | NULL |  |  |
| n_value | int(11) | YES |  | NULL |  |  |
| m_value | int(11) | YES |  | NULL |  |  |
| patient_cancer_register_date | date | YES |  | NULL |  |  |
| patient_cancer_last_meet_date | date | YES |  | NULL |  |  |
| patient_cancer_next_meet_date | date | YES |  | NULL |  |  |
| cancer_sex_id | int(11) | YES |  | NULL |  |  |
| cancer_religion_id | int(11) | YES |  | NULL |  |  |
| cancer_marital_status_id | int(11) | YES |  | NULL |  |  |
| cancer_citizenship_id | int(11) | YES |  | NULL |  |  |
| addr_part | varchar(10) | YES |  | NULL |  |  |
| moo_part | varchar(2) | YES |  | NULL |  |  |
| soi_part | varchar(20) | YES |  | NULL |  |  |
| road_part | varchar(30) | YES |  | NULL |  |  |
| chwpart | varchar(2) | YES |  | NULL |  |  |
| amppart | varchar(2) | YES |  | NULL |  |  |
| tmbpart | varchar(2) | YES |  | NULL |  |  |
| zippart | varchar(5) | YES |  | NULL |  |  |
| cancer_diagnosis_type_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_registeration_remark | varchar(100) | YES |  | NULL |  |  |
| collector_data_user | varchar(50) | YES |  | NULL |  |  |
| editor_data_user | varchar(50) | YES |  | NULL |  |  |
| editor_data_modify_date | date | YES |  | NULL |  |  |
| icd_o | varchar(5) | YES |  | NULL |  |  |
| pathology_code | varchar(5) | YES |  | NULL |  |  |
| cancer_organ_id | int(11) | YES |  | NULL |  |  |
| concurrent_value | varchar(1) | YES |  | NULL |  |  |
| concurrent_other | varchar(80) | YES |  | NULL |  |  |
| surgery_status | varchar(1) | YES |  | NULL |  |  |
| surgery_date | date | YES |  | NULL |  |  |
| radio_therapy_status | varchar(1) | YES |  | NULL |  |  |
| radio_therapy_date | date | YES |  | NULL |  |  |
| chemo_therapy_status | varchar(1) | YES |  | NULL |  |  |
| chemo_therapy_date | date | YES |  | NULL |  |  |
| targeted_therapy_status | varchar(1) | YES |  | NULL |  |  |
| targeted_therapy_date | date | YES |  | NULL |  |  |
| hormone_therapy_status | varchar(1) | YES |  | NULL |  |  |
| hormone_therapy_date | date | YES |  | NULL |  |  |
| immuno_therapy_status | varchar(1) | YES |  | NULL |  |  |
| immuno_therapy_date | date | YES |  | NULL |  |  |
| intervention_treatment_stauts | varchar(1) | YES |  | NULL |  |  |
| intervention_treatment_date | date | YES |  | NULL |  |  |
| other_treatment_status | varchar(1) | YES |  | NULL |  |  |
| other_treatment_date | date | YES |  | NULL |  |  |
| supportive_treatment_status | varchar(1) | YES |  | NULL |  |  |
| supportive_treatment_date | date | YES |  | NULL |  |  |
| cancer_stage_appoint_id | int(11) | YES |  | NULL |  |  |
| cancer_stage_first_cure_id | int(11) | YES |  | NULL |  |  |
| surgery_rt_status | varchar(1) | YES |  | NULL |  |  |
| surgery_rt_date | date | YES |  | NULL |  |  |
| surgery_cmt_status | varchar(1) | YES |  | NULL |  |  |
| surgery_cmt_date | date | YES |  | NULL |  |  |
| rt_cmt_status | varchar(1) | YES |  | NULL |  |  |
| rt_cmt_date | date | YES |  | NULL |  |  |
| other_status | varchar(1) | YES |  | NULL |  |  |
| other_text | varchar(100) | YES |  | NULL |  |  |
| remark_text | text | YES |  | NULL |  |  |
| canreg_collector | varchar(10) | YES |  | NULL |  |  |
| canreg_editor | varchar(10) | YES |  | NULL |  |  |
| start_register_date | date | YES |  | NULL |  |  |
| doctor_code_update | varchar(100) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| patient_from | varchar(20) | YES |  | NULL |  |  |
| patient_cancer_registeration_consider_id | int(11) | YES |  | NULL |  |  |
| cancer_register_last_pain_score | int(11) | YES |  | NULL |  |  |
| cancer_register_discharge | char(1) | YES |  | NULL |  |  |
| cancer_register_discharge_date | date | YES |  | NULL |  |  |
| cancer_discharge_type_id | int(11) | YES |  | NULL |  |  |
| cancer_register_auto_hhc_registration | char(1) | YES |  | NULL |  |  |
| online_patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_patient_cancer_registeration_check | char(1) | YES |  | NULL |  |  |
| online_patient_cancer_registeration_hospcode | varchar(9) | YES |  | NULL |  |  |
| online_patient_cancer_registeration_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_registeration_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

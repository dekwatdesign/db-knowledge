# `person_anc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_anc_no | int(11) | YES |  | NULL |  |  |
| anc_register_date | date | YES |  | NULL |  |  |
| anc_register_staff | varchar(25) | YES |  | NULL |  |  |
| vaccine_tt1_date | date | YES |  | NULL |  |  |
| vaccine_tt2_date | date | YES |  | NULL |  |  |
| vaccine_tt3_date | date | YES |  | NULL |  |  |
| vaccine_tt4_date | date | YES |  | NULL |  |  |
| vaccine_tt_complete | char(1) | YES |  | NULL |  |  |
| blood_check1_date | date | YES |  | NULL |  |  |
| blood_check2_date | date | YES |  | NULL |  |  |
| blood_vdrl1_result | varchar(25) | YES |  | NULL |  |  |
| blood_vdrl2_result | varchar(25) | YES |  | NULL |  |  |
| blood_hiv1_result | varchar(25) | YES |  | NULL |  |  |
| blood_hiv2_result | varchar(25) | YES |  | NULL |  |  |
| blood_of_result | varchar(10) | YES |  | NULL |  |  |
| blood_hct_result | varchar(10) | YES |  | NULL |  |  |
| blood_hct_grade | int(11) | YES |  | NULL |  |  |
| pre_labor_service1_date | date | YES |  | NULL |  |  |
| pre_labor_service2_date | date | YES |  | NULL |  |  |
| pre_labor_service3_date | date | YES |  | NULL |  |  |
| pre_labor_service4_date | date | YES |  | NULL |  |  |
| first_doctor_date | date | YES |  | NULL |  |  |
| risk_list | varchar(250) | YES |  | NULL |  |  |
| risk_refer_date | date | YES |  | NULL |  |  |
| psycho_eval_score | int(11) | YES |  | NULL |  |  |
| anc_vc_result_id | int(11) | YES |  | NULL |  |  |
| post_labor_service1_date | date | YES |  | NULL |  |  |
| post_labor_service2_date | date | YES |  | NULL |  |  |
| preg_no | int(11) | YES |  | NULL |  |  |
| preg_begin_date | date | YES |  | NULL |  |  |
| labor_date | date | YES |  | NULL |  |  |
| labor_place_id | int(11) | YES |  | NULL |  |  |
| labor_doctor_type_id | int(11) | YES |  | NULL |  |  |
| alive_child_count | int(11) | YES |  | NULL |  |  |
| dead_child_count | int(11) | YES |  | NULL |  |  |
| current_preg_age | int(11) | YES |  | NULL |  |  |
| anc_finish | char(1) | YES | MUL | NULL |  |  |
| labor_status_id | int(11) | YES |  | NULL |  |  |
| edc | date | YES |  | NULL |  |  |
| lmp | date | YES |  | NULL |  |  |
| post_labor_service3_date | date | YES | MUL | NULL |  |  |
| labour_type_id | int(11) | YES |  | NULL |  |  |
| labour_hospcode | varchar(9) | YES |  | NULL |  |  |
| labor_icd10 | varchar(7) | YES |  | NULL |  |  |
| ga | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES | MUL | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| risk_level | int(11) | YES |  | NULL |  |  |
| out_region | char(1) | YES | MUL | NULL |  |  |
| thalassaemia_result_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| new_book | char(1) | YES |  | NULL |  |  |
| pre_labor_service_percent | double(15,3) | YES |  | NULL |  |  |
| post_labor_service_percent | double(15,3) | YES |  | NULL |  |  |
| thalasseima_preg_age | int(11) | YES |  | NULL |  |  |
| thalasseima_wife_of_result | char(1) | YES |  | NULL |  |  |
| thalasseima_husband_of_result | char(1) | YES |  | NULL |  |  |
| thalasseima_wife_dcip_result | char(1) | YES |  | NULL |  |  |
| thalasseima_husband_dcip_result | char(1) | YES |  | NULL |  |  |
| thalasseima_wife_hbtyping_result | char(1) | YES |  | NULL |  |  |
| thalasseima_husband_hbtyping_result | char(1) | YES |  | NULL |  |  |
| thalasseima_wife_alpha1_result | char(1) | YES |  | NULL |  |  |
| thalasseima_husband_alpha1_result | char(1) | YES |  | NULL |  |  |
| thalasseima_wife_dx_icd10 | varchar(9) | YES |  | NULL |  |  |
| thalasseima_husband_dx_icd10 | varchar(9) | YES |  | NULL |  |  |
| husband_pname | varchar(30) | YES |  | NULL |  |  |
| husband_fname | varchar(60) | YES |  | NULL |  |  |
| husband_lname | varchar(60) | YES |  | NULL |  |  |
| husband_person_id | int(11) | YES |  | NULL |  |  |
| dental_tx_date | date | YES |  | NULL |  |  |
| husban_thalassaemia_result_id | int(11) | YES |  | NULL |  |  |
| pre_labor_service5_date | date | YES |  | NULL |  |  |
| thalassemia_screen_date | date | YES |  | NULL |  |  |
| thalassemia_confirm_date | date | YES |  | NULL |  |  |
| thalassemia_prenatal_date | date | YES |  | NULL |  |  |
| thalassemia_prenatal_confirm | char(1) | YES |  | NULL |  |  |
| thalassemia_prenatal_confirm_date | date | YES |  | NULL |  |  |
| lmp_from_us | char(1) | YES |  | NULL |  |  |
| vaccine_dtanc1_date | date | YES |  | NULL |  |  |
| vaccine_dtanc2_date | date | YES |  | NULL |  |  |
| vaccine_dtanc3_date | date | YES |  | NULL |  |  |
| vaccine_dtanc4_date | date | YES |  | NULL |  |  |
| vaccine_dtanc5_date | date | YES |  | NULL |  |  |
| ultrasound_text | text | YES |  | NULL |  |  |
| force_complete_export | char(1) | YES | MUL | NULL |  |  |
| force_complete_date | date | YES |  | NULL |  |  |
| send_nhso | char(1) | YES |  | NULL |  |  |
| nhso_send_date | date | YES |  | NULL |  |  |
| nhso_send_time | time | YES |  | NULL |  |  |
| nhso_send_staff | varchar(20) | YES |  | NULL |  |  |
| nhso_data_ok | char(1) | YES |  | NULL |  |  |
| nhso_reply_error | char(1) | YES |  | NULL |  |  |
| nhso_error_code | varchar(50) | YES |  | NULL |  |  |
| nhso_reply_update_datetime | datetime | YES |  | NULL |  |  |
| thalassaemia_wife_location_type_id | int(11) | YES |  | NULL |  |  |
| service_count | int(11) | YES |  | NULL |  |  |
| wife_thalassaemia_risk_type_id | int(11) | YES |  | NULL |  |  |
| husband_thalassaemia_risk_type_id | int(11) | YES |  | NULL |  |  |
| has_risk | char(1) | YES |  | NULL |  |  |
| force_labor_complete_export | char(1) | YES |  | NULL |  |  |
| force_labor_complete_date | date | YES | MUL | NULL |  |  |
| planned_delivery_hospital_code | varchar(9) | YES |  | NULL |  |  |
| planned_delivery_hospital_note | varchar(2000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_finish | anc_finish | no | 1 |
| ix_discharge | discharge | no | 1 |
| ix_force_complete_export | force_complete_export | no | 1 |
| ix_force_labor_complete_date | force_labor_complete_date | no | 1 |
| ix_force_labor_complete_date2 | force_labor_complete_date | no | 1 |
| ix_force_labor_complete_date2 | force_labor_complete_export | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_out_region | out_region | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_post_labor_service3_date | post_labor_service3_date | no | 1 |
| PRIMARY | person_anc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

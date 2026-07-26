# `sti_patient_counseling`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_counseling_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| patient_type | char(2) | YES |  | NULL |  |  |
| check_pregnant_women | char(1) | YES |  | NULL |  |  |
| check_calve | char(1) | YES |  | NULL |  |  |
| check_husband_pregnant | char(1) | YES |  | NULL |  |  |
| check_doctor_doubt | char(1) | YES |  | NULL |  |  |
| check_tuberculosis_patient | char(1) | YES |  | NULL |  |  |
| check_useservice_std | char(1) | YES |  | NULL |  |  |
| check_sex_couple_std | char(1) | YES |  | NULL |  |  |
| check_couple_hiv | char(1) | YES |  | NULL |  |  |
| check_sex_abuse | char(1) | YES |  | NULL |  |  |
| check_medical_personnel | char(1) | YES |  | NULL |  |  |
| sent_agency_check | char(1) | YES |  | NULL |  |  |
| sent_agency_name | varchar(100) | YES |  | NULL |  |  |
| sent_agency_code | varchar(30) | YES |  | NULL |  |  |
| check_health | char(1) | YES |  | NULL |  |  |
| check_before_surgery | char(1) | YES |  | NULL |  |  |
| check_havesex _without_condom | char(1) | YES |  | NULL |  |  |
| check_blood_transfusion_history | char(1) | YES |  | NULL |  |  |
| check_blood_from_syringe | char(1) | YES |  | NULL |  |  |
| check_blood_talisman | char(1) | YES |  | NULL |  |  |
| check_transmission_motherchild | char(1) | YES |  | NULL |  |  |
| check_other | char(1) | YES |  | NULL |  |  |
| other | varchar(100) | YES |  | NULL |  |  |
| check_user_request | char(1) | YES |  | NULL |  |  |
| check_staff_present | char(1) | YES |  | NULL |  |  |
| check_one_person | char(1) | YES |  | NULL |  |  |
| check_group | char(1) | YES |  | NULL |  |  |
| check_unuse_service | char(1) | YES |  | NULL |  |  |
| check_pretest | char(1) | YES |  | NULL |  |  |
| pretest_duration | char(20) | YES |  | NULL |  |  |
| check_hiv | char(1) | YES |  | NULL |  |  |
| hiv_duration | char(20) | YES |  | NULL |  |  |
| check_posttest | char(1) | YES |  | NULL |  |  |
| posttest_duration | char(20) | YES |  | NULL |  |  |
| check_result_hiv | char(1) | YES |  | NULL |  |  |
| result_duration | char(20) | YES |  | NULL |  |  |
| check_use_pretest | char(1) | YES |  | NULL |  |  |
| check_behavior_hiv | char(1) | YES |  | NULL |  |  |
| check_decision | char(1) | YES |  | NULL |  |  |
| check_blood_doc | char(1) | YES |  | NULL |  |  |
| check_use_hiv | char(1) | YES |  | NULL |  |  |
| check_anti_hiv | char(1) | YES |  | NULL |  |  |
| anti_hiv_howto | char(1) | YES |  | NULL |  |  |
| check_negative | char(1) | YES |  | NULL |  |  |
| check_indeterminate | char(1) | YES |  | NULL |  |  |
| check_positive | char(1) | YES |  | NULL |  |  |
| check_use_posttest | char(1) | YES |  | NULL |  |  |
| posttest_date | datetime | YES |  | NULL |  |  |
| check_service_counseling | char(1) | YES |  | NULL |  |  |
| check_window_period | char(1) | YES |  | NULL |  |  |
| check_blood_duplicate | char(1) | YES |  | NULL |  |  |
| check_prep | char(1) | YES |  | NULL |  |  |
| prep_type | varchar(100) | YES |  | NULL |  |  |
| check_pep | char(1) | YES |  | NULL |  |  |
| pep_type | char(1) | YES |  | NULL |  |  |
| check_due_blood_duplicate | char(1) | YES |  | NULL |  |  |
| check_counseling | char(1) | YES |  | NULL |  |  |
| check_user_kill | char(1) | YES |  | NULL |  |  |
| check_care | char(1) | YES |  | NULL |  |  |
| check_cd4 | char(1) | YES |  | NULL |  |  |
| cd4_date | datetime | YES |  | NULL |  |  |
| check_sent_agency | char(1) | YES |  | NULL |  |  |
| agency_name | varchar(100) | YES |  | NULL |  |  |
| due_date | datetime | YES |  | NULL |  |  |
| status | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_counseling_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

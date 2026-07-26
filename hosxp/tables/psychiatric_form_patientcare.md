# `psychiatric_form_patientcare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientcare_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_date | date | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admit_number | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_last_date | date | YES |  | NULL |  |  |
| psychiatric_form_patientcare_now_date | date | YES |  | NULL |  |  |
| psychiatric_form_patientcare_sum_day | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_marrystatus | char(1) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_address_now | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_address_goldcard | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admit_num | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_pdx | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_history | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_cc | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admin_care | char(1) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_income | char(1) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_pttype | char(2) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_economic_problems | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_live | char(1) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_live_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_hospital_near_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_hospital_near_name | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_landmark | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_map_image | longblob | YES |  | NULL |  |  |
| psychiatric_form_patientcare_staff | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_last_update | datetime | YES |  | NULL |  |  |
| psychiatric_form_patientcare_problems | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_effect | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_physical_ailment | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_accident | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_relation_problems | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_emotion_problems | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_emption_problems_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_hallucination | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_repair | varchar(500) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_learn_private | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_other | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_symptom | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_continue_care | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_injection | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_injection_date | date | YES |  | NULL |  |  |
| psychiatric_form_patientcare_doctor_appoint | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_appoint_date | date | YES |  | NULL |  |  |
| psychiatric_form_patientcare_appoint_time | time | YES |  | NULL |  |  |
| psychiatric_form_patientcare_appoint_location | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_assent_name | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_assent | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_consent | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientcare_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

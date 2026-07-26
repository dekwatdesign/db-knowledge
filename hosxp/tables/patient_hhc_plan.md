# `patient_hhc_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic | varchar(3) | YES |  | NULL |  |  |
| patient_hhc_discharge_type_id | int(11) | YES |  | NULL |  |  |
| current_diagnosis_text | text | YES |  | NULL |  |  |
| patient_person_name | varchar(200) | YES |  | NULL |  |  |
| patient_person_relation | varchar(100) | YES |  | NULL |  |  |
| patient_person_phone | varchar(50) | YES |  | NULL |  |  |
| medication_advice_text | text | YES |  | NULL |  |  |
| environment_advice_text | text | YES |  | NULL |  |  |
| economic_advice_text | text | YES |  | NULL |  |  |
| treatment_cause_text | text | YES |  | NULL |  |  |
| treatment_care_text | text | YES |  | NULL |  |  |
| treatment_symptom_care_text | text | YES |  | NULL |  |  |
| health_complication_prevention_text | text | YES |  | NULL |  |  |
| health_exercise_text | text | YES |  | NULL |  |  |
| health_daily_text | text | YES |  | NULL |  |  |
| diet_avoid_food_text | text | YES |  | NULL |  |  |
| diet_advice_food_text | text | YES |  | NULL |  |  |
| staff_name | varchar(100) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| refer_hospcode | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| dw_guid | varchar(38) | YES |  | NULL |  |  |
| plan_date | date | YES |  | NULL |  |  |
| house_interest_place_text | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| patient_hhc_plan_type_id | int(11) | YES |  | NULL |  |  |
| additional_information | text | YES |  | NULL |  |  |
| problems_encountered | text | YES |  | NULL |  |  |
| mission_name | text | YES |  | NULL |  |  |
| patient_hhc_app_mission_id | text | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_time | time | YES |  | NULL |  |  |
| patient_hhc_app_status_id | int(11) | YES |  | NULL |  |  |
| recommendations_ai | text | YES |  | NULL |  |  |
| patient_hhc_plan_summary_id | int(11) | YES |  | NULL |  |  |
| additional_health_problems | text | YES |  | NULL |  |  |
| appointment_mission | text | YES |  | NULL |  |  |
| appointment_mission_id | text | YES |  | NULL |  |  |
| appointment_doctor | varchar(10) | YES |  | NULL |  |  |
| appointment_status_id | int(11) | YES |  | NULL |  |  |
| active_status_date | date | YES |  | NULL |  |  |
| social_environmental_aspects | text | YES |  | NULL |  |  |
| recommendations_ai_check | varchar(255) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| reject_reason | varchar(250) | YES |  | NULL |  |  |
| call_confirm_status | char(1) | YES |  | NULL |  |  |
| visit_depcode_requests | char(3) | YES |  | NULL |  |  |
| visit_location_address | text | YES |  | NULL |  |  |
| person_visit_address_id | int(11) | YES | MUL | NULL |  |  |
| receiver_doctor | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_visit_address_id | person_visit_address_id | no | 1 |
| PRIMARY | patient_hhc_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

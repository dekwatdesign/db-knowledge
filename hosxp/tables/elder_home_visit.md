# `elder_home_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_home_visit_id | int(11) | NO | PRI | 0 |  |  |
| elder_patient_register_id | int(11) | YES | MUL | NULL |  |  |
| elder_home_visit_date | date | YES |  | NULL |  |  |
| elder_home_visit_time | time | YES |  | NULL |  |  |
| elder_home_visit_round | int(11) | YES |  | NULL |  |  |
| elder_home_visit_last_date | date | YES |  | NULL |  |  |
| elder_type_visit | char(15) | YES |  | NULL |  |  |
| elder_home_visit_poor | char(1) | YES |  | NULL |  |  |
| elder_home_visit_stigma | char(1) | YES |  | NULL |  |  |
| elder_home_visit_no_chance | char(1) | YES |  | NULL |  |  |
| elder_home_visit_allowance | char(1) | YES |  | NULL |  |  |
| elder_home_visit_pension | char(1) | YES |  | NULL |  |  |
| elder_home_visit_never | char(1) | YES |  | NULL |  |  |
| elder_home_visit_handicapped | char(1) | YES |  | NULL |  |  |
| elder_home_visit_welfare_other | char(1) | YES |  | NULL |  |  |
| elder_home_visit_welfare_other_detail | varchar(100) | YES |  | NULL |  |  |
| elder_home_visit_club_elder | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_health | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_cremate | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_occupation | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_wife | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_saving | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_other | char(1) | YES |  | NULL |  |  |
| elder_home_visit_club_other_detail | varchar(100) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_doctor_local | char(1) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_scholars_local | char(1) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_handmage | char(1) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_musical | char(1) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_art | char(1) | YES |  | NULL |  |  |
| elder_home_visit_knowledge_other | varchar(100) | YES |  | NULL |  |  |
| elder_home_visit_exercise_taigeg | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_qigong | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_yoga | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_aerobic | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_musical | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_stretching | char(1) | YES |  | NULL |  |  |
| elder_home_visit_exercise_other | varchar(100) | YES |  | NULL |  |  |
| elder_home_visit_smoke | char(1) | YES |  | NULL |  |  |
| elder_home_visit_drinking | char(1) | YES |  | NULL |  |  |
| elder_home_visit_drug | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_food | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_drug | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_house_work | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_money | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_washing | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_walk_out_house | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_shoping | char(1) | YES |  | NULL |  |  |
| elder_home_visit_activity_used_telephone | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_bathe | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_urine | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_draping | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_eating | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_care_yourself | char(1) | YES |  | NULL |  |  |
| elder_home_visit_basic_activity_movement | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_diabetes | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_hypertension | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_heart | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_Cerebrovascular | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_bone | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_gastritis | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_hypercholesterolemia | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_alzheimer | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_sleepless | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_vibration | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_cancer | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_liver | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_kidney | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_cataract | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_ear | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_stools | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_bph | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_copd | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_depression | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_psychosis | char(1) | YES |  | NULL |  |  |
| elder_home_visit_disease_other | varchar(100) | YES |  | NULL |  |  |
| elder_home_visit_waist_circumference | char(11) | YES |  | NULL |  |  |
| elder_home_visit_teeth_count | char(11) | YES |  | NULL |  |  |
| elder_home_visit_denture | char(1) | YES |  | NULL |  |  |
| elder_home_visit_Oral_health | char(1) | YES |  | NULL |  |  |
| elder_home_visit_Impaired_health | char(1) | YES |  | NULL |  |  |
| elder_home_visit_healthy | char(1) | YES |  | NULL |  |  |
| elder_disability_id | int(11) | YES | MUL | NULL |  |  |
| elder_main_income_id | int(11) | YES | MUL | NULL |  |  |
| elder_activiies_daily_life_id | int(11) | YES | MUL | NULL |  |  |
| elder_exercise_type_id | int(11) | YES | MUL | NULL |  |  |
| elder_health_service_id | int(11) | YES | MUL | NULL |  |  |
| elder_get_information_id | int(11) | YES | MUL | NULL |  |  |
| elder_join_club_id | int(11) | YES | MUL | NULL |  |  |
| elder_entry_home_visit_id | int(11) | YES |  | NULL |  |  |
| elder_join_exercise_id | int(11) | YES |  | NULL |  |  |
| elder_home_visit_update_name | char(15) | YES |  | NULL |  |  |
| elder_home_visit_last_update | datetime | YES |  | NULL |  |  |
| elder_relation_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refelder_activiies_daily_life26 | elder_activiies_daily_life_id | no | 1 |
| ix_Refelder_disability22 | elder_disability_id | no | 1 |
| ix_Refelder_exercise_type27 | elder_exercise_type_id | no | 1 |
| ix_Refelder_get_information29 | elder_get_information_id | no | 1 |
| ix_Refelder_health_service28 | elder_health_service_id | no | 1 |
| ix_Refelder_join_club30 | elder_join_club_id | no | 1 |
| ix_Refelder_main_income23 | elder_main_income_id | no | 1 |
| ix_Refelder_patient_register8 | elder_patient_register_id | no | 1 |
| PRIMARY | elder_home_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

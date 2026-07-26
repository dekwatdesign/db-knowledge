# `psy_home_visit_screen_community`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_home_visit_screen_community_id | int(11) | NO | PRI | 0 |  |  |
| psy_home_visit_screen_community_informant_parent | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_couple | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_child | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_relative | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_neighbor | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_volunteer | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_other | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_informant_other_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_medication_continue | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_medication_discontinuous | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_medication_allergy | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_medication_other | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_medication_other_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_narcotic_use | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_narcotic_use_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_normal | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_sleep | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_appreciation | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_laugh_alway | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_aggressive | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_grieve | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_stray | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_other | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_other_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_routine_can_self | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_routine_can_tell | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_routine_cannot | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_routine_other | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_routine_other_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_housework_can_self | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_housework_can_tell | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_housework_cannot | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_housework_other | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_housework_other_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_career_can | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_career_can_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_career_cannot | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_career_other | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_career_other_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_good_cheer | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_bore | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_good_suffer | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_problem | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_problem_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_family_eco | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_mental_health_family_eco_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_neighbor_accept_accept | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_neighbor_accept_irrelevant | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_neighbor_accept_decline | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_neighbor_accept_decline_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_problem_yes | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_problem_yes_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_hos_help_detail | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_drug_receive | text | YES |  | NULL |  |  |
| psy_home_visit_screen_community_visit_abstract_good | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_visit_abstract_no | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_patient_no | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_treatment | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_disappear | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative_no | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative_dead | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative_drug_no | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative_refer | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition_palliative_pm_drug | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_doctor | varchar(6) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_staff | varchar(6) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_lastupdate | datetime | YES |  | NULL |  |  |
| psy_home_visit_id | int(11) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_solid | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_play_walk | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_summary | varchar(50) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_condition | varchar(50) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_drug | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_chaotic | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_destroy | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_detail | varchar(255) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_trace_other | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_hallucination | char(1) | YES |  | NULL |  |  |
| psy_home_visit_screen_community_symptom_leak | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_home_visit_screen_community_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

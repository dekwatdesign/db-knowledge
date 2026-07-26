# `school_health_promotion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_health_promotion_id | int(11) | NO | PRI | 0 |  |  |
| school_health_promotion_year | int(11) | YES |  | NULL |  |  |
| school_health_promotion_date | date | YES |  | NULL |  |  |
| village_school_id | int(11) | YES |  | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| school_type_id | int(11) | YES |  | NULL |  |  |
| environment_school_pass | char(1) | YES |  | NULL |  |  |
| cafeteria_school_pass | char(1) | YES |  | NULL |  |  |
| toilet_school_pass | char(1) | YES |  | NULL |  |  |
| playground_school_pass | char(1) | YES |  | NULL |  |  |
| school_project_health | char(1) | YES |  | NULL |  |  |
| school_health_promotion_total_id | int(11) | YES |  | NULL |  |  |
| standard_school_health_promotion1_pass | char(1) | YES |  | NULL |  |  |
| standard_school_health_promotion2_pass | char(1) | YES |  | NULL |  |  |
| standard_school_health_promotion3_pass | char(1) | YES |  | NULL |  |  |
| standard_school_health_promotion4_pass | char(1) | YES |  | NULL |  |  |
| volunteer_public_health_school | int(11) | YES |  | NULL |  |  |
| volunteer_public_health_school_training_pass | int(11) | YES |  | NULL |  |  |
| youth_public_health_school | int(11) | YES |  | NULL |  |  |
| youth_public_health_school_training_pass | int(11) | YES |  | NULL |  |  |
| acciden_school_kindergarten_count | int(11) | YES |  | NULL |  |  |
| acciden_school_p1_6_count | int(11) | YES |  | NULL |  |  |
| acciden_school_m1_3_count | int(11) | YES |  | NULL |  |  |
| acciden_school_m4_6_count | int(11) | YES |  | NULL |  |  |
| acciden_admit_kindergarten_count | int(11) | YES |  | NULL |  |  |
| acciden_admit_p1_6_count | int(11) | YES |  | NULL |  |  |
| acciden_admit_m1_3_count | int(11) | YES |  | NULL |  |  |
| acciden_admit_m4_6_count | int(11) | YES |  | NULL |  |  |
| non_acciden_kindergarten_count | int(11) | YES |  | NULL |  |  |
| non_acciden_p1_6_count | int(11) | YES |  | NULL |  |  |
| non_acciden_m1_3_count | int(11) | YES |  | NULL |  |  |
| non_acciden_m4_6_count | int(11) | YES |  | NULL |  |  |
| non_exercise_kindergarten_count | int(11) | YES |  | NULL |  |  |
| non_exercise_p1_6_count | int(11) | YES |  | NULL |  |  |
| non_exercise_m1_3_count | int(11) | YES |  | NULL |  |  |
| non_exercise_m4_6_count | int(11) | YES |  | NULL |  |  |
| exercise_less_3_per_week_kindergarten_count | int(11) | YES |  | NULL |  |  |
| exercise_less_3_per_week_p1_6_count | int(11) | YES |  | NULL |  |  |
| exercise_less_3_per_week_m1_3_count | int(11) | YES |  | NULL |  |  |
| exercise_less_3_per_week_m4_6_count | int(11) | YES |  | NULL |  |  |
| exercise_3_per_week_kindergarten_count | int(11) | YES |  | NULL |  |  |
| exercise_3_per_week_p1_6_count | int(11) | YES |  | NULL |  |  |
| exercise_3_per_week_m1_3_count | int(11) | YES |  | NULL |  |  |
| exercise_3_per_week_m4_6_count | int(11) | YES |  | NULL |  |  |
| exercise_more_3_per_week_kindergarten_count | int(11) | YES |  | NULL |  |  |
| exercise_more_3_per_week_p1_6_count | int(11) | YES |  | NULL |  |  |
| exercise_more_3_per_week_m1_3_count | int(11) | YES |  | NULL |  |  |
| exercise_more_3_per_week_m4_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_kindergarten_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_p1_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_m1_3_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_m4_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_kindergarten_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_p1_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_m1_3_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_m4_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_good_kindergarten_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_good_p1_6_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_good_m1_3_count | int(11) | YES |  | NULL |  |  |
| evaluate_eq_pass_good_m4_6_count | int(11) | YES |  | NULL |  |  |
| non_evaluate_eq_kindergarten_count | int(11) | YES |  | NULL |  |  |
| non_evaluate_eq_p1_6_count | int(11) | YES |  | NULL |  |  |
| non_evaluate_eq_m1_3_count | int(11) | YES |  | NULL |  |  |
| non_evaluate_eq_m4_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_non_test_kindergarten_count | int(11) | YES |  | NULL |  |  |
| efficiency_non_test_p1_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_non_test_m1_3_count | int(11) | YES |  | NULL |  |  |
| efficiency_non_test_m4_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_pass_kindergarten_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_pass_p1_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_pass_m1_3_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_pass_m4_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_no_pass_kindergarten_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_no_pass_p1_6_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_no_pass_m1_3_count | int(11) | YES |  | NULL |  |  |
| efficiency_test_no_pass_m4_6_count | int(11) | YES |  | NULL |  |  |
| non_efficiency_kindergarten_count | int(11) | YES |  | NULL |  |  |
| non_efficiency_p1_6_count | int(11) | YES |  | NULL |  |  |
| non_efficiency_m1_3_count | int(11) | YES |  | NULL |  |  |
| non_efficiency_m4_6_count | int(11) | YES |  | NULL |  |  |
| no_bcg_count | int(11) | YES |  | NULL |  |  |
| no_dtp_count | int(11) | YES |  | NULL |  |  |
| dent1_p1_count | int(11) | YES |  | NULL |  |  |
| dent2_kindergarten_count | int(11) | YES |  | NULL |  |  |
| dent2_p1_6_count | int(11) | YES |  | NULL |  |  |
| result_element1_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element2_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element3_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element4_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element5_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element6_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element7_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element8_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element9_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| result_element10_step_evaluate_pass_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | school_health_promotion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `physic_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_treatment_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| physic_treatment_date | date | YES |  | NULL |  |  |
| physic_treatment_doctor | varchar(6) | YES |  | NULL |  |  |
| physic_treatment_history_now | text | YES |  | NULL |  |  |
| physic_treatment_cc | text | YES |  | NULL |  |  |
| physic_treatment_pt_dx | text | YES |  | NULL |  |  |
| physic_treatment_prohibition | text | YES |  | NULL |  |  |
| physic_treatment_observation | text | YES |  | NULL |  |  |
| physic_treatment_palpation | text | YES |  | NULL |  |  |
| physic_treatment_arom | text | YES |  | NULL |  |  |
| physic_treatment_prom | text | YES |  | NULL |  |  |
| physic_treatment_muscle_power | text | YES |  | NULL |  |  |
| physic_treatment_access_move | text | YES |  | NULL |  |  |
| physic_treatment_other | text | YES |  | NULL |  |  |
| physic_treatment_pa | text | YES |  | NULL |  |  |
| physic_treatment_gpt | text | YES |  | NULL |  |  |
| physic_treatment_text | text | YES |  | NULL |  |  |
| physic_treatment_staff | varchar(255) | YES |  | NULL |  |  |
| physic_treatment_lastupdate | datetime | YES |  | NULL |  |  |
| treat_cc_check_type_list | varchar(255) | YES |  | NULL |  |  |
| treat_prohib_type_list | varchar(255) | YES |  | NULL |  |  |
| other_check_list | text | YES |  | NULL |  |  |
| other_pain_test_pos_type_id | int(11) | YES | MUL | NULL |  |  |
| other_pain_side_type_id | int(11) | YES | MUL | NULL |  |  |
| other_circum_test_pos_type_id | int(11) | YES | MUL | NULL |  |  |
| other_circum_side_type_id | int(11) | YES | MUL | NULL |  |  |
| treat_prob_analy_type_list | varchar(255) | YES |  | NULL |  |  |
| treat_count | int(11) | YES |  | NULL |  |  |
| pain_score | double(10,3) | YES |  | NULL |  |  |
| radius_score | double(10,3) | YES |  | NULL |  |  |
| walk_test_score | double(10,3) | YES |  | NULL |  |  |
| time_go_score | double(10,3) | YES |  | NULL |  |  |
| step_test_score | double(10,3) | YES |  | NULL |  |  |
| sit_reach_score | double(10,3) | YES |  | NULL |  |  |
| physic_treament_recommen | text | YES |  | NULL |  |  |
| physic_treament_history | text | YES |  | NULL |  |  |
| physic_treament_sum_and_dis | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | physic_register_id | no | 1 |
| ix_other_circum_side_type_id | other_circum_side_type_id | no | 1 |
| ix_other_circum_test_pos_type_id | other_circum_test_pos_type_id | no | 1 |
| ix_other_pain_side_type_id | other_pain_side_type_id | no | 1 |
| ix_other_pain_test_pos_type_id | other_pain_test_pos_type_id | no | 1 |
| PRIMARY | physic_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

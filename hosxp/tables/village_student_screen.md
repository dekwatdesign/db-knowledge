# `village_student_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_student_screen_id | int(11) | NO | PRI | 0 |  |  |
| village_student_id | int(11) | YES | MUL | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| height_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| school_trimester_id | int(11) | YES |  | NULL |  |  |
| thalassemia_score | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| count_in_year | int(11) | YES |  | NULL |  |  |
| nutrition_low_level_yr_count | int(11) | YES |  | NULL |  |  |
| nutrition_high_level_yr_count | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| self_check_normal | char(1) | YES |  | NULL |  |  |
| ear_check_normal | char(1) | YES |  | NULL |  |  |
| eye_check_normal | char(1) | YES |  | NULL |  |  |
| student_hair_result_id | int(11) | YES |  | NULL |  |  |
| student_eye_result_id | int(11) | YES |  | NULL |  |  |
| student_ear_result_id | int(11) | YES |  | NULL |  |  |
| student_nose_result_id | int(11) | YES |  | NULL |  |  |
| student_mouth_result_id | int(11) | YES |  | NULL |  |  |
| student_neck_result_id | int(11) | YES |  | NULL |  |  |
| student_skin_result_id | int(11) | YES |  | NULL |  |  |
| student_hct_result_id | int(11) | YES |  | NULL |  |  |
| student_hct_result_value | double(15,3) | YES |  | NULL |  |  |
| student_thyroid_result_id | int(11) | YES |  | NULL |  |  |
| student_right_eye_score | varchar(25) | YES |  | NULL |  |  |
| student_left_eye_score | varchar(25) | YES |  | NULL |  |  |
| student_hear_result_id | int(11) | YES |  | NULL |  |  |
| student_teeth_result_id | int(11) | YES |  | NULL |  |  |
| student_teeth_decayed_count | int(11) | YES |  | NULL |  |  |
| give_behavior_advice | char(1) | YES |  | NULL |  |  |
| treatment_refer | char(1) | YES |  | NULL |  |  |
| head_circum_cm | int(11) | YES |  | NULL |  |  |
| person_nutrition_childdevelop_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_food_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_bottle_type_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| screen_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_student_id | village_student_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | village_student_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

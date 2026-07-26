# `person_dmht_nhso_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_nhso_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_screen_summary_id | int(11) | YES |  | NULL |  |  |
| family_parent_dm_disease | char(1) | YES |  | NULL |  |  |
| family_parent_ht_disease | char(1) | YES |  | NULL |  |  |
| family_parent_gout_disease | char(1) | YES |  | NULL |  |  |
| family_parent_crf_disease | char(1) | YES |  | NULL |  |  |
| family_parent_mi_disease | char(1) | YES |  | NULL |  |  |
| family_parent_stroke_disease | char(1) | YES |  | NULL |  |  |
| family_parent_copd_disease | char(1) | YES |  | NULL |  |  |
| family_parent_unknown_disease | char(1) | YES |  | NULL |  |  |
| family_parent_disease_other | varchar(100) | YES |  | NULL |  |  |
| family_relate_dm_disease | char(1) | YES |  | NULL |  |  |
| family_relate_ht_disease | char(1) | YES |  | NULL |  |  |
| family_relate_gout_disease | char(1) | YES |  | NULL |  |  |
| family_relate_crf_disease | char(1) | YES |  | NULL |  |  |
| family_relate_mi_disease | char(1) | YES |  | NULL |  |  |
| family_relate_stroke_disease | char(1) | YES |  | NULL |  |  |
| family_relate_copd_disease | char(1) | YES |  | NULL |  |  |
| family_relate_unknown_disease | char(1) | YES |  | NULL |  |  |
| family_relate_disease_other | varchar(100) | YES |  | NULL |  |  |
| history_dm_disease | char(1) | YES |  | NULL |  |  |
| history_ht_disease | char(1) | YES |  | NULL |  |  |
| history_liver_disease | char(1) | YES |  | NULL |  |  |
| history_palsy_disease | char(1) | YES |  | NULL |  |  |
| history_heart_disease | char(1) | YES |  | NULL |  |  |
| history_lipid_disease | char(1) | YES |  | NULL |  |  |
| history_leg_dm_operation | char(1) | YES |  | NULL |  |  |
| history_deliver_over_4kg | char(1) | YES |  | NULL |  |  |
| history_water_thirst | char(1) | YES |  | NULL |  |  |
| history_eat_thin | char(1) | YES |  | NULL |  |  |
| history_weight_lost | char(1) | YES |  | NULL |  |  |
| history_lip_disease | char(1) | YES |  | NULL |  |  |
| history_skin_genital_itch | char(1) | YES |  | NULL |  |  |
| history_eye_blur | char(1) | YES |  | NULL |  |  |
| history_hand_leg_nerve | char(1) | YES |  | NULL |  |  |
| history_care_type_id | int(11) | YES |  | NULL |  |  |
| present_smoking | char(1) | YES |  | NULL |  |  |
| present_smoking_roll_perday | int(11) | YES |  | NULL |  |  |
| present_smoking_pack_peryear | int(11) | YES |  | NULL |  |  |
| present_smoking_brand | varchar(100) | YES |  | NULL |  |  |
| present_smoking_duration_year | int(11) | YES |  | NULL |  |  |
| present_smoking_and_stop | char(1) | YES |  | NULL |  |  |
| present_smoking_and_stop_brand | varchar(100) | YES |  | NULL |  |  |
| present_smoking_and_stop_duration_year | int(11) | YES |  | NULL |  |  |
| present_drinking_alcohol | char(1) | YES |  | NULL |  |  |
| present_drinking_alcohol_count_perweek | int(11) | YES |  | NULL |  |  |
| present_drinking_once_and_stop | char(1) | YES |  | NULL |  |  |
| present_exercise_type_id | int(11) | YES |  | NULL |  |  |
| present_favorite_food_sweet | char(1) | YES |  | NULL |  |  |
| present_favorite_food_salt | char(1) | YES |  | NULL |  |  |
| present_favorite_food_fat | char(1) | YES |  | NULL |  |  |
| present_favorite_food_normal | char(1) | YES |  | NULL |  |  |
| history_urine_night | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| present_non_smoking | char(1) | YES |  | NULL |  |  |
| present_non_drinking_alcohol | char(1) | YES |  | NULL |  |  |
| black_axilla | char(1) | YES |  | NULL |  |  |
| history_high_fpg_ogtt | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_dmht_nhso_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `risk_screen_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_assessment_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_family_parent_dm | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_ht | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_gout | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_crf | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_mi | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_stroke | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_copd | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_unknown | char(1) | YES |  | NULL |  |  |
| risk_screen_family_parent_other | varchar(100) | YES |  | NULL |  |  |
| risk_screen_family_relate_dm | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_ht | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_gout | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_crf | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_mi | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_stroke | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_copd | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_unknown | char(1) | YES |  | NULL |  |  |
| risk_screen_family_relate_other | varchar(100) | YES |  | NULL |  |  |
| risk_screen_history_medicine | char(1) | YES |  | NULL |  |  |
| risk_screen_history_dm | char(1) | YES |  | NULL |  |  |
| risk_screen_history_dm_year | int(11) | YES |  | NULL |  |  |
| risk_screen_history_ht | char(1) | YES |  | NULL |  |  |
| risk_screen_history_ht_year | int(11) | YES |  | NULL |  |  |
| risk_screen_history_liver | char(1) | YES |  | NULL |  |  |
| risk_screen_history_liver_year | int(11) | YES |  | NULL |  |  |
| risk_screen_history_palsy | char(1) | YES |  | NULL |  |  |
| risk_screen_history_palsy_year | int(11) | YES |  | NULL |  |  |
| risk_screen_history_heart | char(1) | YES |  | NULL |  |  |
| risk_screen_history_heart_year | int(11) | YES |  | NULL |  |  |
| risk_screen_treatment_lipid | char(1) | YES |  | NULL |  |  |
| risk_screen_treatment_high_fpg_ogtt | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_leg_dm_operation | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_water_thirst | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_urine_night | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_eat_thin | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_weight_lost | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_lip | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_skin_genital_itch | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_eye_blur | char(1) | YES |  | NULL |  |  |
| risk_screen_indication_hand_leg_nerve | char(1) | YES |  | NULL |  |  |
| risk_screen_over_weight | char(1) | YES |  | NULL |  |  |
| risk_screen_family_dm | char(1) | YES |  | NULL |  |  |
| risk_screen_black_axilla | char(1) | YES |  | NULL |  |  |
| risk_screen_ht | char(1) | YES |  | NULL |  |  |
| risk_screen_deliver_over_4kg | char(1) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_risk_screen_assessment_create_date_idx | create_date | no | 1 |
| ix_risk_screen_assessment_doctor_code_idx | doctor_code | no | 1 |
| ix_risk_screen_assessment_hn_idx | hn | no | 1 |
| PRIMARY | risk_screen_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

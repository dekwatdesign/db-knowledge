# `ckup_scr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_scr_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_scr_date | date | YES |  | NULL |  |  |
| ckup_scr_time | time | YES |  | NULL |  |  |
| ckup_scr_bpd | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_bps | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_pulse | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_weight | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_height | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_temperature | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_waist | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_bmi | double(13,3) | YES |  | NULL |  |  |
| ckup_scr_physical_exam | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_drink | char(1) | YES |  | NULL |  |  |
| ckup_scr_drink_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_smoke | char(1) | YES |  | NULL |  |  |
| ckup_scr_smoke_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_exercise | char(1) | YES |  | NULL |  |  |
| ckup_scr_exercise_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_nutrition | char(1) | YES |  | NULL |  |  |
| ckup_scr_nutrition_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_drugs | char(1) | YES |  | NULL |  |  |
| ckup_scr_drugs_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_operate | char(1) | YES |  | NULL |  |  |
| ckup_scr_operate_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_dm | char(1) | YES |  | NULL |  |  |
| ckup_scr_ht | char(1) | YES |  | NULL |  |  |
| ckup_scr_heart | char(1) | YES |  | NULL |  |  |
| ckup_scr_hyperlipidemia | char(1) | YES |  | NULL |  |  |
| ckup_scr_cancer | char(1) | YES |  | NULL |  |  |
| ckup_scr_anemia | char(1) | YES |  | NULL |  |  |
| ckup_scr_gout | char(1) | YES |  | NULL |  |  |
| ckup_scr_other | varchar(255) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| ckup_scr_menses_first_age | int(11) | YES |  | NULL |  |  |
| ckup_scr_women_no_menses | char(1) | YES |  | NULL |  |  |
| ckup_reason_menses_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_scr_women_hormon | char(1) | YES |  | NULL |  |  |
| ckup_scr_women_hormon_text | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_coffee | char(1) | YES |  | NULL |  |  |
| ckup_scr_coffee_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_food_fried | char(1) | YES |  | NULL |  |  |
| ckup_scr_food_fried_note | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_drug_use | varchar(255) | YES |  | NULL |  |  |
| ckup_scr_xray_check | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_tb | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_asthma | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_track | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_kidney | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_sex | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_epilepsy | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_brain | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_allergy | char(1) | YES |  | NULL |  |  |
| ckup_scr_his_med_allergy_note | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_admit | char(1) | YES |  | NULL |  |  |
| ckup_scr_admit_note | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_disabled | char(1) | YES |  | NULL |  |  |
| ckup_scr_disabled_note | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_accident | char(1) | YES |  | NULL |  |  |
| ckup_scr_accident_note | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_old_workplace | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_old_position | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_access_position | varchar(250) | YES |  | NULL |  |  |
| ckup_scr_low_ht | char(1) | YES |  | NULL |  |  |
| ckup_scr_filariasis | char(1) | YES |  | NULL |  |  |
| ckup_scr_syphilis | char(1) | YES |  | NULL |  |  |
| ckup_scr_leprosy | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_reason_menses_type_id | ckup_reason_menses_type_id | no | 1 |
| PRIMARY | ckup_scr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

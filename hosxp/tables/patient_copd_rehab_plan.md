# `patient_copd_rehab_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_copd_rehab_plan_id | int(11) | NO | PRI | 0 |  |  |
| plan_start_date | date | YES |  | NULL |  |  |
| plan_end_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pre_copd_rehab_exercise_evel_level | double(15,3) | YES |  | NULL |  |  |
| pre_copd_mrc_dyspnea_scale_type_id | int(11) | YES |  | NULL |  |  |
| pre_quality_of_life_score | int(11) | YES |  | NULL |  |  |
| post_copd_rehab_exercise_evel_level | double(15,3) | YES |  | NULL |  |  |
| post_copd_mrc_dyspnea_scale_type_id | int(11) | YES |  | NULL |  |  |
| post_quality_of_life_score | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| plan_note | varchar(200) | YES |  | NULL |  |  |
| visit_count | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_copd_rehab_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

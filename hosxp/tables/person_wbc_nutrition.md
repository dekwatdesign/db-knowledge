# `person_wbc_nutrition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_nutrition_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_date | date | YES |  | NULL |  |  |
| person_epi_place_id | int(11) | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| trimester | int(11) | YES |  | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| height_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| nutrition_low_level_yr_count | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| nutrition_high_level_yr_count | int(11) | YES |  | NULL |  |  |
| bdgyear_trimester | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| head_circum_cm | int(11) | YES |  | NULL |  |  |
| person_nutrition_childdevelop_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_food_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_bottle_type_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| nutrition_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_wbc_id | person_wbc_id | no | 1 |
| PRIMARY | person_wbc_nutrition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

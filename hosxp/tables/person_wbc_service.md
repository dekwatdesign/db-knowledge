# `person_wbc_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_service_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_id | int(11) | YES | MUL | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| service_note | varchar(250) | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| weight_grade | int(11) | YES |  | NULL |  |  |
| wbc_period_id | int(11) | YES |  | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| cc_text | text | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| head_length | int(11) | YES |  | NULL |  |  |
| teeth_count | int(11) | YES |  | NULL |  |  |
| teeth_decayed_count | int(11) | YES |  | NULL |  |  |
| old_visitno | int(11) | YES | MUL | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| nutrition_low_level_yr_count | int(11) | YES |  | NULL |  |  |
| nutrition_high_level_yr_count | int(11) | YES |  | NULL |  |  |
| dental_prevention | char(1) | YES |  | NULL |  |  |
| wbc_location_type_id | int(11) | YES |  | NULL |  |  |
| provider_hospcode | varchar(9) | YES |  | NULL |  |  |
| father_school_check | char(1) | YES |  | NULL |  |  |
| mother_school_check | char(1) | YES |  | NULL |  |  |
| relative_school_check | char(1) | YES |  | NULL |  |  |
| wbc_development_assess_id | int(11) | YES |  | NULL |  |  |
| wbc_breast_feed_type_id | int(11) | YES |  | NULL |  |  |
| transfer_other | char(1) | YES |  | NULL |  |  |
| wbc_transfer_id | int(11) | YES |  | NULL |  |  |
| epi_autistic_screen_type_id | int(11) | YES |  | NULL |  |  |
| height_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| bdgyear_trimester | int(11) | YES |  | NULL |  |  |
| trimester | int(11) | YES |  | NULL |  |  |
| wbc_service_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_bottle_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_old_visitno | old_visitno | no | 1 |
| ix_person_wbc_id | person_wbc_id | no | 1 |
| PRIMARY | person_wbc_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

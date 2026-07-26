# `person_labour`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_id | int(11) | NO | PRI | 0 |  |  |
| gravida | int(11) | YES |  | NULL |  |  |
| person_labour_place_id | int(11) | YES |  | NULL |  |  |
| labour_hospcode | varchar(9) | YES |  | NULL |  |  |
| person_labour_type_id | int(11) | YES |  | NULL |  |  |
| person_labour_doctor_type_id | int(11) | YES |  | NULL |  |  |
| birth_weight | int(11) | YES |  | NULL |  |  |
| has_asphyxia | char(1) | YES |  | NULL |  |  |
| has_vitk | char(1) | YES |  | NULL |  |  |
| labour_status | char(1) | YES |  | NULL |  |  |
| body_length | int(11) | YES |  | NULL |  |  |
| head_length | int(11) | YES |  | NULL |  |  |
| apgar_score_1 | int(11) | YES |  | NULL |  |  |
| apgar_score_5 | int(11) | YES |  | NULL |  |  |
| thyroid_result | int(11) | YES |  | NULL |  |  |
| thyroid_test_hospcode | varchar(9) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| labor_ba_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| thyroid_screen | char(1) | YES |  | NULL |  |  |
| thyroid_treatment | char(1) | YES |  | NULL |  |  |
| thyroid_screen_date | date | YES |  | NULL |  |  |
| thyroid_confirm | char(1) | YES |  | NULL |  |  |
| thyroid_confirm_date | date | YES |  | NULL |  |  |
| thyroid_treatment_date | date | YES |  | NULL |  |  |
| baby_no | int(11) | YES |  | NULL |  |  |
| thalassaemia_wife_location_type_id | int(11) | YES |  | NULL |  |  |
| ga | int(11) | YES |  | NULL |  |  |
| person_labour_birth_no_id | int(11) | YES |  | NULL |  |  |
| tsh_result | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

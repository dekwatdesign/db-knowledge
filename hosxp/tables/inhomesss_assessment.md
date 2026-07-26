# `inhomesss_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inhomesss_assessment_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |
| inhomesss_immobility | smallint(6) | YES |  | NULL |  |  |
| inhomesss_shape | smallint(6) | YES |  | NULL |  |  |
| inhomesss_food_favor | varchar(250) | YES |  | NULL |  |  |
| inhomesss_food_amount | smallint(6) | YES |  | NULL |  |  |
| inhomesss_food_caregiver | varchar(250) | YES |  | NULL |  |  |
| inhomesss_food_taste | smallint(6) | YES |  | NULL |  |  |
| inhomesss_food_source | smallint(6) | YES |  | NULL |  |  |
| inhomesss_food_source_text | varchar(250) | YES |  | NULL |  |  |
| inhomesss_alcohol | smallint(6) | YES |  | NULL |  |  |
| inhomesss_alcohol_amount | smallint(6) | YES |  | NULL |  |  |
| inhomesss_smoking | smallint(6) | YES |  | NULL |  |  |
| inhomesss_smoking_amount | smallint(6) | YES |  | NULL |  |  |
| inhomesss_home_environment | smallint(6) | YES |  | NULL |  |  |
| inhomesss_home_area | smallint(6) | YES |  | NULL |  |  |
| inhomesss_home_area_text | varchar(250) | YES |  | NULL |  |  |
| inhomesss_er_relation | smallint(6) | YES |  | NULL |  |  |
| inhomesss_er_relation_text | varchar(250) | YES |  | NULL |  |  |
| inhomesss_decision_name | varchar(250) | YES |  | NULL |  |  |
| inhomesss_decision_tel | varchar(15) | YES |  | NULL |  |  |
| inhomesss_care_giver | smallint(6) | YES |  | NULL |  |  |
| inhomesss_med_by_whom | smallint(6) | YES |  | NULL |  |  |
| inhomesss_med_by_whom_text | varchar(250) | YES |  | NULL |  |  |
| inhomesss_med_supplement | varchar(255) | YES |  | NULL |  |  |
| inhomesss_med_received | smallint(6) | YES |  | NULL |  |  |
| inhomesss_med_herb | varchar(250) | YES |  | NULL |  |  |
| inhomesss_med_regular | varchar(250) | YES |  | NULL |  |  |
| inhomesss_exam_temp | float | YES |  | NULL |  |  |
| inhomesss_exam_bp | smallint(6) | YES |  | NULL |  |  |
| inhomesss_exam_pr | smallint(6) | YES |  | NULL |  |  |
| inhomesss_exam_rr | smallint(6) | YES |  | NULL |  |  |
| inhomesss_exam_lab | varchar(250) | YES |  | NULL |  |  |
| inhomesss_exam_pe | varchar(250) | YES |  | NULL |  |  |
| inhomesss_safety | smallint(6) | YES |  | NULL |  |  |
| inhomesss_spiritual_health | varchar(250) | YES |  | NULL |  |  |
| inhomesss_services | smallint(6) | YES |  | NULL |  |  |
| inhomesss_services_text | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inhomesss_assessment_create_date_idx | create_date | no | 1 |
| ix_inhomesss_assessment_doctor_code_idx | doctor_code | no | 1 |
| ix_inhomesss_assessment_hn_idx | hn | no | 1 |
| ix_inhomesss_assessment_vn_idx | vn | no | 1 |
| PRIMARY | inhomesss_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `risk_screen_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_head_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_year_id | int(11) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| dept_sid | int(11) | YES |  | NULL |  |  |
| dept_id | varchar(5) | YES |  | NULL |  |  |
| company_ac | varchar(12) | YES |  | NULL |  |  |
| company_br | varchar(8) | YES |  | NULL |  |  |
| result_bmi | char(1) | YES |  | NULL |  |  |
| result_bp | char(1) | YES |  | NULL |  |  |
| result_family_dm | char(1) | YES |  | NULL |  |  |
| result_fat | char(1) | YES |  | NULL |  |  |
| result_gravid_dm | char(1) | YES |  | NULL |  |  |
| result_glucose | char(1) | YES |  | NULL |  |  |
| result_smoke | char(1) | YES |  | NULL |  |  |
| result_dm | char(1) | YES |  | NULL |  |  |
| result_dm10 | char(1) | YES |  | NULL |  |  |
| result_np | char(1) | YES |  | NULL |  |  |
| result_car | char(1) | YES |  | NULL |  |  |
| result_disability | char(1) | YES |  | NULL |  |  |
| result_family_fat | char(1) | YES |  | NULL |  |  |
| result_family_cvd | char(1) | YES |  | NULL |  |  |
| result_sex_less | char(1) | YES |  | NULL |  |  |
| result_sex_than | char(1) | YES |  | NULL |  |  |
| result_risk | char(1) | YES |  | NULL |  |  |
| result_sick | char(1) | YES |  | NULL |  |  |
| result_date | datetime | YES |  | NULL |  |  |
| screening_date | date | YES |  | NULL |  |  |
| occupation | varchar(512) | YES |  | NULL |  |  |
| occupation_id3 | varchar(512) | YES |  | NULL |  |  |
| risk_perform_id | int(11) | YES |  | NULL |  |  |
| risk_is_smoking_id | int(11) | YES |  | NULL |  |  |
| risk_smoking_type_id | int(11) | YES |  | NULL |  |  |
| risk_drink_type_id | int(11) | YES |  | NULL |  |  |
| risk_exercise_type_id | int(11) | YES |  | NULL |  |  |
| risk_drive_type_id | int(11) | YES |  | NULL |  |  |
| risk_condom_type_id | int(11) | YES |  | NULL |  |  |
| wt | double(15,3) | YES |  | NULL |  |  |
| ht | double(15,3) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| bph_1 | double(15,3) | YES |  | NULL |  |  |
| bpl_1 | double(15,3) | YES |  | NULL |  |  |
| bph_2 | double(15,3) | YES |  | NULL |  |  |
| bpl_2 | double(15,3) | YES |  | NULL |  |  |
| bph_avg | double(15,3) | YES |  | NULL |  |  |
| bpl_avg | double(15,3) | YES |  | NULL |  |  |
| waist_cm | double(15,3) | YES |  | NULL |  |  |
| waist_inch | double(15,3) | YES |  | NULL |  |  |
| post_pandril | double(15,3) | YES |  | NULL |  |  |
| post_pandril_food | int(11) | YES |  | NULL |  |  |
| fbs | double(15,3) | YES |  | NULL |  |  |
| capillary_blood | double(15,3) | YES |  | NULL |  |  |
| general_check | text | YES |  | NULL |  |  |
| pale | char(1) | YES |  | NULL |  |  |
| risk_more_check | text | YES |  | NULL |  |  |
| screening_name | varchar(50) | YES |  | NULL |  |  |
| hmain | varchar(5) | YES |  | NULL |  |  |
| smoking_amount | int(11) | YES |  | NULL |  |  |
| smoking_interval | int(11) | YES |  | NULL |  |  |
| drink_amount | int(11) | YES |  | NULL |  |  |
| doctor_comment | char(1) | YES |  | NULL |  |  |
| not_occupation | char(1) | YES |  | NULL |  |  |
| risk_disease | varchar(50) | YES |  | NULL |  |  |
| risk_chronic | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

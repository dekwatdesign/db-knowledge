# `risk_screen_pp_allscreening`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hmain | varchar(5) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| fname | longtext | YES |  | NULL |  |  |
| lname | longtext | YES |  | NULL |  |  |
| sex | varchar(1) | YES |  | NULL |  |  |
| entry_birthdate | date | YES |  | NULL |  |  |
| entry_age_y | int(11) | YES |  | NULL |  |  |
| entry_age_m | int(11) | YES |  | NULL |  |  |
| entry_age_d | int(11) | YES |  | NULL |  |  |
| occupation | longtext | YES |  | NULL |  |  |
| occupation_id1 | longtext | YES |  | NULL |  |  |
| occupation_id2 | longtext | YES |  | NULL |  |  |
| occupation_id3 | longtext | YES |  | NULL |  |  |
| screening_date | date | YES |  | NULL |  |  |
| screening_year | int(11) | YES |  | NULL |  |  |
| maininscl | longtext | YES |  | NULL |  |  |
| family11_dm | varchar(1) | YES |  | NULL |  |  |
| family11_ht | varchar(1) | YES |  | NULL |  |  |
| family11_gout | varchar(1) | YES |  | NULL |  |  |
| family11_crf | varchar(1) | YES |  | NULL |  |  |
| family11_mi | varchar(1) | YES |  | NULL |  |  |
| family11_stroke | varchar(1) | YES |  | NULL |  |  |
| family11_copd | varchar(1) | YES |  | NULL |  |  |
| family11_none | varchar(1) | YES |  | NULL |  |  |
| family11_other | varchar(1) | YES |  | NULL |  |  |
| family11_other_desc | varchar(200) | YES |  | NULL |  |  |
| family12_dm | varchar(1) | YES |  | NULL |  |  |
| family12_ht | varchar(1) | YES |  | NULL |  |  |
| family12_gout | varchar(1) | YES |  | NULL |  |  |
| family12_crf | varchar(1) | YES |  | NULL |  |  |
| family12_mi | varchar(1) | YES |  | NULL |  |  |
| family12_stroke | varchar(1) | YES |  | NULL |  |  |
| family12_copd | varchar(1) | YES |  | NULL |  |  |
| family12_none | varchar(1) | YES |  | NULL |  |  |
| family12_other | varchar(1) | YES |  | NULL |  |  |
| family12_other_desc | longtext | YES |  | NULL |  |  |
| history_dm | varchar(1) | YES |  | NULL |  |  |
| history_ht | varchar(1) | YES |  | NULL |  |  |
| history_liver | varchar(1) | YES |  | NULL |  |  |
| history_cvd | varchar(1) | YES |  | NULL |  |  |
| history_heart | varchar(1) | YES |  | NULL |  |  |
| history_cholesterol | varchar(1) | YES |  | NULL |  |  |
| history_sore | varchar(1) | YES |  | NULL |  |  |
| history_deliver | varchar(1) | YES |  | NULL |  |  |
| history_drink | varchar(1) | YES |  | NULL |  |  |
| history_urine | varchar(1) | YES |  | NULL |  |  |
| history_thin | varchar(1) | YES |  | NULL |  |  |
| history_tired | varchar(1) | YES |  | NULL |  |  |
| history_lip | varchar(1) | YES |  | NULL |  |  |
| history_scrape | varchar(1) | YES |  | NULL |  |  |
| history_dim | varchar(1) | YES |  | NULL |  |  |
| history_numb | varchar(1) | YES |  | NULL |  |  |
| history_practice | varchar(1) | YES |  | NULL |  |  |
| smoking | varchar(1) | YES |  | NULL |  |  |
| smoking_amount | int(11) | YES |  | NULL |  |  |
| smoking_type | varchar(1) | YES |  | NULL |  |  |
| smoking_interval | int(11) | YES |  | NULL |  |  |
| smoking_pack | double(15,3) | YES |  | NULL |  |  |
| drink | varchar(1) | YES |  | NULL |  |  |
| drink_amount | int(11) | YES |  | NULL |  |  |
| exercise | varchar(1) | YES |  | NULL |  |  |
| taste_sweet | varchar(1) | YES |  | NULL |  |  |
| taste_salt | varchar(1) | YES |  | NULL |  |  |
| taste_oily | varchar(1) | YES |  | NULL |  |  |
| taste_none | varchar(1) | YES |  | NULL |  |  |
| drived | varchar(1) | YES |  | NULL |  |  |
| condom | varchar(1) | YES |  | NULL |  |  |
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
| pale | varchar(1) | YES |  | NULL |  |  |
| post_pandril | double(15,3) | YES |  | NULL |  |  |
| post_pandril_food | int(11) | YES |  | NULL |  |  |
| fbs | double(15,3) | YES |  | NULL |  |  |
| capillary_blood | double(15,3) | YES |  | NULL |  |  |
| general_check | longtext | YES |  | NULL |  |  |
| doctor_comment | longtext | YES |  | NULL |  |  |
| risk_disease | longtext | YES |  | NULL |  |  |
| risk_chronic | longtext | YES |  | NULL |  |  |
| risk_comment | longtext | YES |  | NULL |  |  |
| risk_more_check | longtext | YES |  | NULL |  |  |
| risk_refer | longtext | YES |  | NULL |  |  |
| risk_no_refer | longtext | YES |  | NULL |  |  |
| screening_name | longtext | YES |  | NULL |  |  |
| status | varchar(1) | YES |  | NULL |  |  |
| create_date | date | YES |  | NULL |  |  |
| create_user | longtext | YES |  | NULL |  |  |
| create_password | longtext | YES |  | NULL |  |  |
| source | longtext | YES |  | NULL |  |  |
| pid_user | longtext | YES |  | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |
| risk_screen_year_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `pm25_screening`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| exp_smoke_indoor | char(1) | YES |  | NULL |  |  |
| exp_vehicle_dust | char(1) | YES |  | NULL |  |  |
| exp_burning_field | char(1) | YES |  | NULL |  |  |
| exp_factory | char(1) | YES |  | NULL |  |  |
| exp_factory_type | varchar(100) | YES |  | NULL |  |  |
| exp_pm25_air | char(1) | YES |  | NULL |  |  |
| comorbidity_ht | char(1) | YES |  | NULL |  |  |
| comorbidity_dm | char(1) | YES |  | NULL |  |  |
| comorbidity_cvd | char(1) | YES |  | NULL |  |  |
| comorbidity_lung | char(1) | YES |  | NULL |  |  |
| comorbidity_cold | char(1) | YES |  | NULL |  |  |
| comorbidity_other | varchar(100) | YES |  | NULL |  |  |
| prelim_positive | char(1) | YES | MUL | NULL |  |  |
| resp_dyspnea | char(1) | YES |  | NULL |  |  |
| resp_wheeze_1y | char(1) | YES |  | NULL |  |  |
| resp_breathless | char(1) | YES |  | NULL |  |  |
| resp_wheeze_nocold | char(1) | YES |  | NULL |  |  |
| resp_chest_tight | char(1) | YES |  | NULL |  |  |
| resp_asthma_attack | char(1) | YES |  | NULL |  |  |
| resp_positive | char(1) | YES |  | NULL |  |  |
| card_chest_pain | char(1) | YES |  | NULL |  |  |
| card_pain_walking | char(1) | YES |  | NULL |  |  |
| card_pain_climbing | char(1) | YES |  | NULL |  |  |
| card_positive | char(1) | YES |  | NULL |  |  |
| eye_red | char(1) | YES |  | NULL |  |  |
| eye_burning | char(1) | YES |  | NULL |  |  |
| eye_irritation | char(1) | YES |  | NULL |  |  |
| eye_tearing | char(1) | YES |  | NULL |  |  |
| eye_itching | char(1) | YES |  | NULL |  |  |
| eye_discharge | char(1) | YES |  | NULL |  |  |
| eye_blurred | char(1) | YES |  | NULL |  |  |
| eye_other | varchar(100) | YES |  | NULL |  |  |
| eye_positive | char(1) | YES |  | NULL |  |  |
| skin_red_rash | char(1) | YES |  | NULL |  |  |
| skin_itching | char(1) | YES |  | NULL |  |  |
| skin_red_papule | char(1) | YES |  | NULL |  |  |
| skin_blister | char(1) | YES |  | NULL |  |  |
| skin_scaling | char(1) | YES |  | NULL |  |  |
| skin_urticaria | char(1) | YES |  | NULL |  |  |
| skin_other | varchar(100) | YES |  | NULL |  |  |
| skin_positive | char(1) | YES |  | NULL |  |  |
| treatment_action | char(1) | YES |  | NULL |  |  |
| pm25_alert_value | decimal(10,0) | YES |  | NULL |  |  |
| result_z58_1 | char(1) | YES |  | NULL |  |  |
| result_y97 | char(1) | YES |  | NULL |  |  |
| mirror_status | char(1) | YES | MUL | NULL |  |  |
| mirror_attempts | tinyint(4) | YES |  | NULL |  |  |
| mirror_last_error | varchar(250) | YES |  | NULL |  |  |
| review_status | char(1) | YES | MUL | NULL |  |  |
| reviewed_by | varchar(15) | YES |  | NULL |  |  |
| reviewed_at | datetime | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn_vstdate | hn | no | 1 |
| ix_hn_vstdate | vstdate | no | 2 |
| ix_mirror_status | mirror_status | no | 1 |
| ix_prelim_positive | prelim_positive | no | 1 |
| ix_review_status | review_status | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

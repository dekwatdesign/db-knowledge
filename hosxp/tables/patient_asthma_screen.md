# `patient_asthma_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_asthma_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| asthma_smoking_advice_type_id | int(11) | YES |  | NULL |  |  |
| screen_caugh_history | char(1) | YES |  | NULL |  |  |
| screen_asthma_progress | char(1) | YES |  | NULL |  |  |
| asthma_dyspnea_scale_type_id | int(11) | YES |  | NULL |  |  |
| rx_bronchodilator | char(1) | YES |  | NULL |  |  |
| asthma_assessment_test_level | int(11) | YES |  | NULL |  |  |
| fev1_percent | double(15,3) | YES |  | NULL |  |  |
| rx_influenza_vaccine | char(1) | YES |  | NULL |  |  |
| six_minute_walk_distance_level | double(15,3) | YES |  | NULL |  |  |
| service_long_term_oxygen_therapy | char(1) | YES |  | NULL |  |  |
| service_end_of_life_plan | char(1) | YES |  | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| screen_note | varchar(200) | YES |  | NULL |  |  |
| education_bronchodilator | char(1) | YES |  | NULL |  |  |
| patient_asthma_pefr_status_id | int(11) | YES |  | NULL |  |  |
| pefr | int(11) | YES |  | NULL |  |  |
| pef_percent_predicted | int(11) | YES |  | NULL |  |  |
| patient_asthma_day_symptom_type_id | int(11) | YES |  | NULL |  |  |
| patient_asthma_night_symptom_type_id | int(11) | YES |  | NULL |  |  |
| patient_asthma_broncho_dilator_type_id | int(11) | YES |  | NULL |  |  |
| patient_asthma_exa_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pefr_std_value | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | patient_asthma_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

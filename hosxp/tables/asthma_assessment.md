# `asthma_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asthma_assessment_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| asthma_assessment_type | int(11) | YES |  | NULL |  |  |
| asthma_assessment_score | int(11) | YES |  | NULL |  |  |
| asthma_activity_limit_freq | int(11) | YES |  | NULL |  |  |
| asthma_shortbreath_freq | int(11) | YES |  | NULL |  |  |
| asthma_night_symptom_freq | int(11) | YES |  | NULL |  |  |
| asthma_rescue_med_freq | int(11) | YES |  | NULL |  |  |
| asthma_control_level | int(11) | YES |  | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| ref_code | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_asthma_assessment_create_date_idx | create_date | no | 1 |
| ix_asthma_assessment_doctor_code_idx | doctor_code | no | 1 |
| ix_asthma_assessment_hn_idx | hn | no | 1 |
| ix_asthma_assessment_ref_code | ref_code | no | 1 |
| ix_asthma_assessment_vn | vn | no | 1 |
| PRIMARY | asthma_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

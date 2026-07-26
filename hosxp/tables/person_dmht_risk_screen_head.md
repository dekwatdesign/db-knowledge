# `person_dmht_risk_screen_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_risk_screen_head_id | int(11) | NO | PRI | 0 |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| dm_risk_count | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| body_height | double(15,3) | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| waist | double(15,3) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| last_bps | int(11) | YES |  | NULL |  |  |
| last_bpd | int(11) | YES |  | NULL |  |  |
| person_dmht_screen_summary_id | int(11) | YES | MUL | NULL |  |  |
| cormobidity_count | int(11) | YES |  | NULL |  |  |
| last_fpg | int(11) | YES |  | NULL |  |  |
| last_fgc | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| general_pe_text | text | YES |  | NULL |  |  |
| ppg | double(15,3) | YES |  | NULL |  |  |
| ppg_hour | int(11) | YES |  | NULL |  |  |
| dm_screen_score | int(11) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| in_hospital | char(1) | YES |  | NULL |  |  |
| last_fgc_no_food_limit | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| screen_hospcode | varchar(9) | YES |  | NULL |  |  |
| auth_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_screen_summary_id | person_dmht_screen_summary_id | no | 1 |
| PRIMARY | person_dmht_risk_screen_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

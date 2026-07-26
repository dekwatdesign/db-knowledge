# `person_wbc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| person_wbc_no | varchar(20) | YES |  | NULL |  |  |
| birth_weight | double(15,3) | YES |  | NULL |  |  |
| baby_service1_date | date | YES |  | NULL |  |  |
| baby_service2_date | date | YES |  | NULL |  |  |
| breast_feed_status_id | int(11) | YES |  | NULL |  |  |
| period1_bw | int(11) | YES |  | NULL |  |  |
| period1_grade | int(11) | YES |  | NULL |  |  |
| period2_bw | int(11) | YES |  | NULL |  |  |
| period2_grade | int(11) | YES |  | NULL |  |  |
| period3_bw | int(11) | YES |  | NULL |  |  |
| period3_grade | int(11) | YES |  | NULL |  |  |
| period4_bw | int(11) | YES |  | NULL |  |  |
| period4_grade | int(11) | YES |  | NULL |  |  |
| period5_bw | int(11) | YES |  | NULL |  |  |
| period5_grade | int(11) | YES |  | NULL |  |  |
| vaccine_bcg_date | date | YES |  | NULL |  |  |
| vaccine_hbv1_date | date | YES |  | NULL |  |  |
| vaccine_hbv2_date | date | YES |  | NULL |  |  |
| vaccine_hbv3_date | date | YES |  | NULL |  |  |
| vaccine_dtp1_date | date | YES |  | NULL |  |  |
| vaccine_dtp2_date | date | YES |  | NULL |  |  |
| vaccine_dtp3_date | date | YES |  | NULL |  |  |
| vaccine_opv1_date | date | YES |  | NULL |  |  |
| vaccine_opv2_date | date | YES |  | NULL |  |  |
| vaccine_opv3_date | date | YES |  | NULL |  |  |
| vaccine_mmr_date | date | YES |  | NULL |  |  |
| baby_status_id | int(11) | YES |  | NULL |  |  |
| ba_status_id | int(11) | YES |  | NULL |  |  |
| person_wbc_regdate | date | YES |  | NULL |  |  |
| baby_service3_date | date | YES | MUL | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| vaccine_percent | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES | MUL | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| baby_service4_date | date | YES |  | NULL |  |  |
| out_region | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| post_labor_service_percent | double(15,3) | YES |  | NULL |  |  |
| vaccine_dtphb1_date | date | YES |  | NULL |  |  |
| vaccine_dtphb2_date | date | YES |  | NULL |  |  |
| vaccine_dtphb3_date | date | YES |  | NULL |  |  |
| force_complete_export | char(1) | YES | MUL | NULL |  |  |
| force_complete_date | date | YES |  | NULL |  |  |
| send_nhso | char(1) | YES |  | NULL |  |  |
| nhso_send_date | date | YES |  | NULL |  |  |
| nhso_send_time | time | YES |  | NULL |  |  |
| nhso_send_staff | varchar(20) | YES |  | NULL |  |  |
| nhso_data_ok | char(1) | YES |  | NULL |  |  |
| nhso_reply_error | char(1) | YES |  | NULL |  |  |
| nhso_reply_update_datetime | datetime | YES |  | NULL |  |  |
| nhso_error_code | varchar(50) | YES |  | NULL |  |  |
| vaccine_measles_date | date | YES |  | NULL |  |  |
| height_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| vaccine_ipv_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_baby_service3_date | baby_service3_date | no | 1 |
| ix_discharge | discharge | no | 1 |
| ix_force_complete_export | force_complete_export | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_out_region | out_region | no | 1 |
| PRIMARY | person_wbc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

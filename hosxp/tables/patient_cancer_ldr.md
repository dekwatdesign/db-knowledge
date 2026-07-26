# `patient_cancer_ldr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_ldr_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| cancer_region_id | int(11) | YES |  | NULL |  |  |
| cancer_plan_status_id | int(11) | YES |  | NULL |  |  |
| ldr_no | int(11) | YES |  | NULL |  |  |
| point_a_dose | int(11) | YES |  | NULL |  |  |
| sound | int(11) | YES |  | NULL |  |  |
| tandem_length | int(11) | YES |  | NULL |  |  |
| active_pellets_tandem | varchar(50) | YES |  | NULL |  |  |
| active_pellets_ovoids | varchar(50) | YES |  | NULL |  |  |
| activity_mci | int(11) | YES |  | NULL |  |  |
| ovoid_separation | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| ldr_start_date | date | YES |  | NULL |  |  |
| ldr_stop_date | date | YES |  | NULL |  |  |
| cancer_icrt_pv_id | int(11) | YES |  | NULL |  |  |
| ovoid_tube_no1 | varchar(50) | YES |  | NULL |  |  |
| ovoid_tube_no2 | varchar(50) | YES |  | NULL |  |  |
| half_ovoid_no1 | varchar(50) | YES |  | NULL |  |  |
| half_ovoid_no2 | varchar(50) | YES |  | NULL |  |  |
| cylender_diameter | double(22,3) | YES |  | NULL |  |  |
| cylender_length | double(22,3) | YES |  | NULL |  |  |
| cancer_icrt_position_id | int(11) | YES |  | NULL |  |  |
| doctor_start | varchar(10) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_ldr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

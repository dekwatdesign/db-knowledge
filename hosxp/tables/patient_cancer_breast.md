# `patient_cancer_breast`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_breast_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| cancer_plan_status_id | int(11) | YES |  | NULL |  |  |
| cancer_cure_technic_id | int(11) | YES |  | NULL |  |  |
| cancer_machine_id | int(11) | YES |  | NULL |  |  |
| cancer_region_id | int(11) | YES |  | NULL |  |  |
| breast_cure_technic_id | int(11) | YES |  | NULL |  |  |
| breast_bolus_status | varchar(1) | YES |  | NULL |  |  |
| breast_bolus_depth | int(11) | YES |  | NULL |  |  |
| breast_bolus_day_type | varchar(1) | YES |  | NULL |  |  |
| breast_daily_dose | int(11) | YES |  | NULL |  |  |
| breast_total_dose | int(11) | YES |  | NULL |  |  |
| breast_boost_electron_back | int(11) | YES |  | NULL |  |  |
| breast_boost_electron_back_daily_dose | int(11) | YES |  | NULL |  |  |
| breast_boost_electron_back_total_dose | int(11) | YES |  | NULL |  |  |
| breast_boost_auxillary_back | int(11) | YES |  | NULL |  |  |
| breast_boost_auxillary_back_daily_dose | int(11) | YES |  | NULL |  |  |
| breast_boost_auxillary_back_total_dose | int(11) | YES |  | NULL |  |  |
| spc_cure_technic_id | int(11) | YES |  | NULL |  |  |
| spc_depth | int(11) | YES |  | NULL |  |  |
| spc_midline_status | varchar(1) | YES |  | NULL |  |  |
| spc_daily_dose | int(11) | YES |  | NULL |  |  |
| spc_total_dose | int(11) | YES |  | NULL |  |  |
| spc_bolus_status | varchar(1) | YES |  | NULL |  |  |
| spe_bolus_depth | int(11) | YES |  | NULL |  |  |
| other_status | varchar(1) | YES |  | NULL |  |  |
| other_text | text | YES |  | NULL |  |  |
| crt_status | varchar(2) | YES |  | NULL |  |  |
| patient_cancer_breast_order_date | date | YES |  | NULL |  |  |
| crt_action | varchar(10) | YES |  | NULL |  |  |
| doctor_start | varchar(10) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_breast_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

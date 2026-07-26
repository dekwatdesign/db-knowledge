# `patient_cancer_pelvis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_pelvis_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| cancer_plan_status_id | int(11) | YES |  | NULL |  |  |
| cancer_cure_technic_id | int(11) | YES |  | NULL |  |  |
| cancer_machine_id | int(11) | YES |  | NULL |  |  |
| cancer_region_id | int(11) | YES |  | NULL |  |  |
| daily_dose | int(11) | YES |  | NULL |  |  |
| total_dose | int(11) | YES |  | NULL |  |  |
| depth | int(11) | YES |  | NULL |  |  |
| lay_style_id | int(11) | YES |  | NULL |  |  |
| fs_back | int(11) | YES |  | NULL |  |  |
| anus_wire_status | varchar(1) | YES |  | NULL |  |  |
| cystogram_status | varchar(1) | YES |  | NULL |  |  |
| other_status | varchar(1) | YES |  | NULL |  |  |
| other_text | text | YES |  | NULL |  |  |
| crt_status | varchar(2) | YES |  | NULL |  |  |
| patient_cancer_pelvis_order_date | date | YES |  | NULL |  |  |
| crt_action | varchar(10) | YES |  | NULL |  |  |
| doctor_start | varchar(10) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_pelvis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

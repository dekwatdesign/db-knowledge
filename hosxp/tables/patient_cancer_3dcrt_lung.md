# `patient_cancer_3dcrt_lung`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_3dcrt_lung_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_lung_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| cancer_plan_status_id | int(11) | YES |  | NULL |  |  |
| cancer_region_id | int(11) | YES |  | NULL |  |  |
| cancer_machine_id | int(11) | YES |  | NULL |  |  |
| cancer_cure_technic_id | int(11) | YES |  | NULL |  |  |
| daily_dose | double(22,3) | YES |  | NULL |  |  |
| total_dose | double(22,3) | YES |  | NULL |  |  |
| previous_dose | double(22,3) | YES |  | NULL |  |  |
| gtv | double(22,3) | YES |  | NULL |  |  |
| ctv | double(22,3) | YES |  | NULL |  |  |
| ptv | double(22,3) | YES |  | NULL |  |  |
| phase1_dose | double(22,3) | YES |  | NULL |  |  |
| phase1_organ | varchar(100) | YES |  | NULL |  |  |
| phase1_limit_dose | double(22,3) | YES |  | NULL |  |  |
| phase2_dose | double(22,3) | YES |  | NULL |  |  |
| phase2_organ | varchar(100) | YES |  | NULL |  |  |
| phase2_limit_dose | double(22,3) | YES |  | NULL |  |  |
| phase3_dose | double(22,3) | YES |  | NULL |  |  |
| phase3_organ | varchar(100) | YES |  | NULL |  |  |
| phase3_limit_dose | double(22,3) | YES |  | NULL |  |  |
| other_status | varchar(1) | YES |  | NULL |  |  |
| other_text | text | YES |  | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_3dcrt_lung_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

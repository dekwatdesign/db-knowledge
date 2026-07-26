# `patient_cancer_ldr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_ldr_detail_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_ldr_id | int(11) | YES |  | NULL |  |  |
| plan_ar | float | YES |  | NULL |  |  |
| plan_al | float | YES |  | NULL |  |  |
| plan_br | float | YES |  | NULL |  |  |
| plan_bl | float | YES |  | NULL |  |  |
| plan_bd | float | YES |  | NULL |  |  |
| plan_a_average | float | YES |  | NULL |  |  |
| plan_b_average | float | YES |  | NULL |  |  |
| plan_rectal_dose1 | float | YES |  | NULL |  |  |
| plan_rectal_dose2 | float | YES |  | NULL |  |  |
| plan_rectal_dose3 | float | YES |  | NULL |  |  |
| plan_rectal_dose4 | float | YES |  | NULL |  |  |
| plan_rectal_dose5 | float | YES |  | NULL |  |  |
| plan_rectal_average | float | YES |  | NULL |  |  |
| plan_staff_code | float | YES |  | NULL |  |  |
| sim_preloading_time | float | YES |  | NULL |  |  |
| sim_start_treatment_time | time | YES |  | NULL |  |  |
| sim_start_on_date | date | YES |  | NULL |  |  |
| sim_stop_treatment_time | time | YES |  | NULL |  |  |
| sim_stop_on_date | date | YES |  | NULL |  |  |
| sim_remaining_time | float | YES |  | NULL |  |  |
| sim_staff_code | varchar(15) | YES |  | NULL |  |  |
| dosage_absorb_rate_point_a | float | YES |  | NULL |  |  |
| dosage_insertion_time | float | YES |  | NULL |  |  |
| dosage_total_absorb_point_a | float | YES |  | NULL |  |  |
| dosage_film_count | int(11) | YES |  | NULL |  |  |
| dosage_field_count | int(11) | YES |  | NULL |  |  |
| dosage_staff_code | varchar(15) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_ldr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

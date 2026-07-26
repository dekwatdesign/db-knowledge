# `iclaim_ipd_admission_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_admission_screen_id | int(11) | NO | PRI | 0 |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| pulse | double(15,3) | YES |  | NULL |  |  |
| o2sat | int(11) | YES |  | NULL |  |  |
| rr | double(15,3) | YES |  | NULL |  |  |
| pre_pain_score | int(11) | YES |  | NULL |  |  |
| gcs_e | double(15,3) | YES |  | NULL |  |  |
| gcs_v | double(15,3) | YES |  | NULL |  |  |
| gcs_m | double(15,3) | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| dx_free_text | text | YES |  | NULL |  |  |
| plan_treatment | text | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| ipt_doctor_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| an | varchar(10) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| coma_score | varchar(10) | YES |  | NULL |  |  |
| alcohol_related | char(1) | YES |  | NULL |  |  |
| addiction_related | char(1) | YES |  | NULL |  |  |
| pregnant | char(1) | YES |  | NULL |  |  |
| child_birth | char(1) | YES |  | NULL |  |  |
| infertiliy | char(1) | YES |  | NULL |  |  |
| caesarean_section | char(1) | YES |  | NULL |  |  |
| miscarriage | char(1) | YES |  | NULL |  |  |
| nervous | char(1) | YES |  | NULL |  |  |
| mental | char(1) | YES |  | NULL |  |  |
| emotional | char(1) | YES |  | NULL |  |  |
| sleeping_disorder | char(1) | YES |  | NULL |  |  |
| cosmetic_resason | char(1) | YES |  | NULL |  |  |
| dental_care | char(1) | YES |  | NULL |  |  |
| refractive_errors_correction | char(1) | YES |  | NULL |  |  |
| congenital | char(1) | YES |  | NULL |  |  |
| hereditary_disease | char(1) | YES |  | NULL |  |  |
| aids | char(1) | YES |  | NULL |  |  |
| iclaim_ipd_admission_id | int(11) | YES | MUL | NULL |  |  |
| expected_day_of_recovery | int(11) | YES |  | NULL |  |  |
| dsc_date_time | datetime | YES |  | NULL |  |  |
| expected_los | int(11) | YES |  | NULL |  |  |
| indication_for_admission | varchar(100) | YES |  | NULL |  |  |
| indication_for_admission_note | text | YES |  | NULL |  |  |
| previous_hospital | varchar(250) | YES |  | NULL |  |  |
| previous_expense_amt | double(15,3) | YES |  | NULL |  |  |
| previous_hospital_date | date | YES |  | NULL |  |  |
| previous_treatment_detail | varchar(500) | YES |  | NULL |  |  |
| can_managed_under_opd | char(1) | YES |  | NULL |  |  |
| cannot_managed_reason | varchar(500) | YES |  | NULL |  |  |
| case_of_injury | varchar(500) | YES |  | NULL |  |  |
| place_of_accident | varchar(250) | YES |  | NULL |  |  |
| detail_of_injury | varchar(500) | YES |  | NULL |  |  |
| symptom_detail | varchar(500) | YES |  | NULL |  |  |
| sympton_duration | int(11) | YES |  | NULL |  |  |
| sympton_duration_desc | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_ipd_admission1 | iclaim_ipd_admission_id | no | 1 |
| PRIMARY | iclaim_ipd_admission_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

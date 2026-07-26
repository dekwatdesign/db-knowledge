# `patient_qrisk3`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_qrisk3_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | UNI | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| qrisk3_ethnicity_id | int(11) | YES |  | NULL |  |  |
| qrisk3_smoking_id | int(11) | YES |  | NULL |  |  |
| qrisk3_dm_id | int(11) | YES |  | NULL |  |  |
| angina_or_heart_attack | char(1) | YES |  | NULL |  |  |
| ckd_stage_345 | char(1) | YES |  | NULL |  |  |
| atrial_fibrillation | char(1) | YES |  | NULL |  |  |
| bp_treatment | char(1) | YES |  | NULL |  |  |
| rheumatoid_arthritis | char(1) | YES |  | NULL |  |  |
| sle | char(1) | YES |  | NULL |  |  |
| severe_mental_illness | char(1) | YES |  | NULL |  |  |
| atypical_antipsychotic_medication | char(1) | YES |  | NULL |  |  |
| steroid_tablet_medication | char(1) | YES |  | NULL |  |  |
| migraine | char(1) | YES |  | NULL |  |  |
| erectile_disfunction | char(1) | YES |  | NULL |  |  |
| cholesterol_hdl_ratio | double(15,3) | YES |  | NULL |  |  |
| blood_pressure_systolic | int(11) | YES |  | NULL |  |  |
| most_recent_bp_sd | double(15,3) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| score_2017 | double(15,3) | YES |  | NULL |  |  |
| score_description | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | yes | 1 |
| PRIMARY | patient_qrisk3_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

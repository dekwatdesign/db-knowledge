# `person_bc_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_register_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| cancer_diagnosis_text | varchar(200) | YES |  | NULL |  |  |
| cancer_diagnosis_year_bc | int(11) | YES |  | NULL |  |  |
| person_bc_stage_type_id | int(11) | YES |  | NULL |  |  |
| death_year_bc | int(11) | YES |  | NULL |  |  |
| person_bc_status_id | int(11) | YES |  | NULL |  |  |
| found_breast_tumor | char(1) | YES |  | NULL |  |  |
| ultrasound_tumor_size_cm | double(15,3) | YES |  | NULL |  |  |
| mamogram_tumor_size_cm | double(15,3) | YES |  | NULL |  |  |
| biopsy_tumor_size_cm | int(11) | YES |  | NULL |  |  |
| cancer_diagnosis_month | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | yes | 1 |
| PRIMARY | person_bc_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

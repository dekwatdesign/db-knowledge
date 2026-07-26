# `patient_copd_rehab_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_copd_rehab_visit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| education_copd_disease | char(1) | YES |  | NULL |  |  |
| education_medication | char(1) | YES |  | NULL |  |  |
| education_behavior | char(1) | YES |  | NULL |  |  |
| education_breathing_exercise | char(1) | YES |  | NULL |  |  |
| education_strength_exercise | char(1) | YES |  | NULL |  |  |
| education_endurance_exercise | char(1) | YES |  | NULL |  |  |
| rehab_visit_note | text | YES |  | NULL |  |  |
| patient_copd_rehab_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_copd_rehab_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

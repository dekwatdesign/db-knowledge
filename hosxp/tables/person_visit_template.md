# `person_visit_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_visit_template_id | int(11) | NO | PRI | 0 |  |  |
| template_name | varchar(255) | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES | MUL | NULL |  |  |
| visit_history | longtext | YES |  | NULL |  |  |
| visit_exam | longtext | YES |  | NULL |  |  |
| visit_psych | longtext | YES |  | NULL |  |  |
| visit_problem | longtext | YES |  | NULL |  |  |
| visit_plan | longtext | YES |  | NULL |  |  |
| visit_education | longtext | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_pvt_disease_group | patient_hhc_disease_group_id | no | 1 |
| ix_idx_pvt_lastupdate | lastupdate | no | 1 |
| ix_idx_pvt_update_by | doctor_code | no | 1 |
| PRIMARY | person_visit_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

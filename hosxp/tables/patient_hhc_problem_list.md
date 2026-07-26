# `patient_hhc_problem_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_problem_list_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_problem_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_problem_text | longtext | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_problem_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

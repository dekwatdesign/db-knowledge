# `ipd_problem_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_problem_care_id | int(11) | NO | PRI | 0 |  |  |
| ipd_problem_plan_id | int(11) | YES | MUL | NULL |  |  |
| ipd_problem_care_type_id | int(11) | YES |  | NULL |  |  |
| ipd_multidisciplinary_type_id | int(11) | YES |  | NULL |  |  |
| problem_care_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| problem_care_text | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_plan_id | ipd_problem_plan_id | no | 1 |
| PRIMARY | ipd_problem_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

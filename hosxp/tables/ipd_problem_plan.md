# `ipd_problem_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_problem_plan_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| plan_date | date | YES |  | NULL |  |  |
| plan_note | text | YES |  | NULL |  |  |
| ipd_problem_status_type_id | int(11) | YES |  | NULL |  |  |
| solve_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ipd_problem_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

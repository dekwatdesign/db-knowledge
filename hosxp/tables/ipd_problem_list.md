# `ipd_problem_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_problem_list_id | int(11) | NO | PRI | 0 |  |  |
| ipd_problem_type_id | int(11) | YES |  | NULL |  |  |
| ipd_problem_plan_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_plan_id | ipd_problem_plan_id | no | 1 |
| PRIMARY | ipd_problem_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

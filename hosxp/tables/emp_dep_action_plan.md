# `emp_dep_action_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_dep_action_plan_id | int(11) | NO | PRI | 0 |  |  |
| emp_dep_action_plan_name | varchar(100) | YES |  | NULL |  |  |
| emp_dep_action_plan_revenue | double(22,3) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_dep_action_plan_sdate | date | YES |  | NULL |  |  |
| emp_dep_action_plan_edate | date | YES |  | NULL |  |  |
| emp_dep_action_plan_detail | text | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_dep_action_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

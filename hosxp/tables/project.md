# `project`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_id | int(11) | NO | PRI | 0 |  |  |
| project_name | varchar(250) | YES |  | NULL |  |  |
| project_goal_text | text | YES |  | NULL |  |  |
| project_objective_text | text | YES |  | NULL |  |  |
| project_status_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| project_start_date | date | YES |  | NULL |  |  |
| project_finish_date | date | YES |  | NULL |  |  |
| project_progress_percent | double(15,3) | YES |  | NULL |  |  |
| project_budget | double(15,3) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| project_department_id | int(11) | YES |  | NULL |  |  |
| project_outcome_text | text | YES |  | NULL |  |  |
| project_group_id | int(11) | YES |  | NULL |  |  |
| manual_calc_budget | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| project_subgroup_id | int(11) | YES |  | NULL |  |  |
| project_budget_type_id | int(11) | YES |  | NULL |  |  |
| is_approve | char(1) | YES |  | NULL |  |  |
| approve_date | date | YES |  | NULL |  |  |
| project_start_bdg_year | int(11) | YES |  | NULL |  |  |
| project_finish_bdg_year | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | project_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

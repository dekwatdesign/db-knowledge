# `project_act_est_date`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_act_est_date_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_id | int(11) | YES | MUL | NULL |  |  |
| project_est_type_id | int(11) | YES |  | NULL |  |  |
| project_act_est_trimester | int(11) | YES |  | NULL |  |  |
| project_act_est_start_date | date | YES |  | NULL |  |  |
| project_act_est_finish_date | date | YES |  | NULL |  |  |
| project_act_est_note | text | YES |  | NULL |  |  |
| project_est_status_type_id | int(11) | YES |  | NULL |  |  |
| is_postpone | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_activity_id | project_activity_id | no | 1 |
| PRIMARY | project_act_est_date_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

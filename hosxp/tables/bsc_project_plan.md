# `bsc_project_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_project_plan_id | int(11) | NO | PRI | 0 |  |  |
| bsc_project_id | int(11) | YES | MUL | NULL |  |  |
| project_plan_start_date | date | YES |  | NULL |  |  |
| project_plan_finish_date | date | YES |  | NULL |  |  |
| bsc_project_plan_name | varchar(200) | YES |  | NULL |  |  |
| bsc_project_plan_desc_text | longtext | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| employee_id | int(11) | YES |  | NULL |  |  |
| plan_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bsc_project_id | bsc_project_id | no | 1 |
| PRIMARY | bsc_project_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

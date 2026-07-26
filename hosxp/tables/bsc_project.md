# `bsc_project`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_project_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| employee_id | int(11) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| project_start_date | date | YES |  | NULL |  |  |
| project_finish_date | date | YES |  | NULL |  |  |
| bsc_project_name | varchar(200) | YES |  | NULL |  |  |
| bsc_project_desc_text | longtext | YES |  | NULL |  |  |
| bsc_objective_id | int(11) | YES | MUL | NULL |  |  |
| est_budget | double(15,3) | YES |  | NULL |  |  |
| est_income | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | bsc_objective_id | no | 1 |
| PRIMARY | bsc_project_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

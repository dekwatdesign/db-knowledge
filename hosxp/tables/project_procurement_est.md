# `project_procurement_est`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_procurement_est_id | int(11) | NO | PRI | 0 |  |  |
| project_procurement_id | int(11) | YES | MUL | NULL |  |  |
| project_est_type_id | int(11) | YES |  | NULL |  |  |
| project_est_status_type_id | int(11) | YES |  | NULL |  |  |
| project_est_trimester | int(11) | YES |  | NULL |  |  |
| project_est_start_date | date | YES |  | NULL |  |  |
| project_est_finish_date | date | YES |  | NULL |  |  |
| is_postpone | char(1) | YES |  | NULL |  |  |
| project_est_note | text | YES |  | NULL |  |  |
| project_pc_postpone_type_id | int(11) | YES |  | NULL |  |  |
| is_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_procurement_id | project_procurement_id | no | 1 |
| PRIMARY | project_procurement_est_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

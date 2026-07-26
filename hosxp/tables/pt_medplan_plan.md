# `pt_medplan_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medplan_plan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(20) | YES | MUL | NULL |  |  |
| plan_status | varchar(20) | YES |  | NULL |  |  |
| created_at | datetime | YES | MUL | NULL |  |  |
| created_by | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| careplan_fhir_id | varchar(64) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_plan_created | created_at | no | 1 |
| ix_idx_plan_hn_status | hn | no | 1 |
| ix_idx_plan_hn_status | plan_status | no | 2 |
| PRIMARY | pt_medplan_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `work_plan_kpi_targets`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| kpi_id | int | NO | MUL | NULL |  |  |
| period_id | int | NO | MUL | NULL |  |  |
| target_value | decimal(14,4) | YES |  | NULL |  |  |
| target_note | text | YES |  | NULL |  |  |
| revision_no | int | NO |  | 1 |  |  |
| source_change_request_id | int | YES |  | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_target_period | period_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_plan_kpi_target_period | kpi_id | yes | 1 |
| uk_plan_kpi_target_period | period_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| kpi_id | `work_plan_kpis.id` | fk_plan_kpi_targets_kpi |
| period_id | `work_plan_kpi_periods.id` | fk_plan_kpi_targets_period |

## Sample rows (0)

```json
[]
```

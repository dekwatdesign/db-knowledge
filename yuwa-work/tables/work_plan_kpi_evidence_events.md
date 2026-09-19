# `work_plan_kpi_evidence_events`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| kpi_id | int | NO | MUL | NULL |  |  |
| result_id | int | YES | MUL | NULL |  |  |
| event_id | int | NO | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_evidence_event | event_id | no | 1 |
| idx_plan_kpi_evidence_result | result_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_plan_kpi_evidence_event | kpi_id | yes | 1 |
| uk_plan_kpi_evidence_event | result_id | yes | 2 |
| uk_plan_kpi_evidence_event | event_id | yes | 3 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| event_id | `work_events.id` | fk_plan_kpi_evidence_event |
| kpi_id | `work_plan_kpis.id` | fk_plan_kpi_evidence_kpi |
| result_id | `work_plan_kpi_results.id` | fk_plan_kpi_evidence_result |

## Sample rows (0)

```json
[]
```

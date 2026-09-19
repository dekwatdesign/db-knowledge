# `work_plan_kpi_results`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| kpi_id | int | NO | MUL | NULL |  |  |
| period_id | int | NO | MUL | NULL |  |  |
| actual_value | decimal(14,4) | YES |  | NULL |  |  |
| progress_percent | decimal(8,2) | YES |  | NULL |  |  |
| result_note | text | YES |  | NULL |  |  |
| status | enum('draft','pending','approved','rejected') | NO | MUL | draft |  |  |
| revision_no | int | NO |  | 1 |  |  |
| source_change_request_id | int | YES |  | NULL |  |  |
| submitted_by | int | YES |  | NULL |  |  |
| submitted_at | datetime | YES |  | NULL |  |  |
| approved_by | int | YES |  | NULL |  |  |
| approved_at | datetime | YES |  | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_result_period | period_id | no | 1 |
| idx_plan_kpi_result_status | status | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_plan_kpi_result_period | kpi_id | yes | 1 |
| uk_plan_kpi_result_period | period_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| kpi_id | `work_plan_kpis.id` | fk_plan_kpi_results_kpi |
| period_id | `work_plan_kpi_periods.id` | fk_plan_kpi_results_period |

## Sample rows (1)

```json
[
  {
    "id": 1,
    "kpi_id": 1,
    "period_id": 1,
    "actual_value": "2.0000",
    "progress_percent": "200.00",
    "result_note": null,
    "status": "approved",
    "revision_no": 1,
    "source_change_request_id": 2,
    "submitted_by": 253,
    "submitted_at": "2026-04-25 00:31:04",
    "approved_by": 253,
    "approved_at": "2026-04-25 00:31:04",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-25 00:31:04",
    "updated_at": "2026-04-25 00:31:04"
  }
]
```

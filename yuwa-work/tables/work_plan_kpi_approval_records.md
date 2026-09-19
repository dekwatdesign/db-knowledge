# `work_plan_kpi_approval_records`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| change_request_id | int | NO | MUL | NULL |  |  |
| step_id | int | YES | MUL | NULL |  |  |
| step_order | int | NO |  | 1 |  |  |
| step_name | varchar(255) | NO |  | NULL |  |  |
| approver_type | varchar(50) | NO |  | permission |  |  |
| approver_ref_id | varchar(255) | YES |  | NULL |  |  |
| approver_label | varchar(255) | YES |  | NULL |  |  |
| status | enum('pending','approved','rejected','skipped') | NO | MUL | pending |  |  |
| acted_by | int | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| acted_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| fk_plan_kpi_approval_records_step | step_id | no | 1 |
| idx_plan_kpi_approval_change | change_request_id | no | 1 |
| idx_plan_kpi_approval_change | step_order | no | 2 |
| idx_plan_kpi_approval_pending | status | no | 1 |
| idx_plan_kpi_approval_pending | approver_type | no | 2 |
| idx_plan_kpi_approval_pending | approver_ref_id | no | 3 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| change_request_id | `work_plan_kpi_change_requests.id` | fk_plan_kpi_approval_records_change |
| step_id | `work_plan_kpi_approval_steps.id` | fk_plan_kpi_approval_records_step |

## Sample rows (3)

```json
[
  {
    "id": 1,
    "change_request_id": 1,
    "step_id": 1,
    "step_order": 1,
    "step_name": "ตรวจสอบและอนุมัติ KPI",
    "approver_type": "permission",
    "approver_ref_id": "plan_kpi_approve",
    "approver_label": "ผู้มีสิทธิ์อนุมัติ KPI",
    "status": "approved",
    "acted_by": 253,
    "note": "",
    "acted_at": "2026-04-25 00:11:36",
    "created_at": "2026-04-25 00:11:17"
  },
  {
    "id": 2,
    "change_request_id": 2,
    "step_id": 1,
    "step_order": 1,
    "step_name": "ตรวจสอบและอนุมัติ KPI",
    "approver_type": "permission",
    "approver_ref_id": "plan_kpi_approve",
    "approver_label": "ผู้มีสิทธิ์อนุมัติ KPI",
    "status": "approved",
    "acted_by": 253,
    "note": "",
    "acted_at": "2026-04-25 00:31:04",
    "created_at": "2026-04-25 00:11:47"
  },
  {
    "id": 3,
    "change_request_id": 3,
    "step_id": 1,
    "step_order": 1,
    "step_name": "ตรวจสอบและอนุมัติ KPI",
    "approver_type": "permission",
    "approver_ref_id": "plan_kpi_approve",
    "approver_label": "ผู้มีสิทธิ์อนุมัติ KPI",
    "status": "approved",
    "acted_by": 253,
    "note": "",
    "acted_at": "2026-04-25 00:31:33",
    "created_at": "2026-04-25 00:31:18"
  }
]
```

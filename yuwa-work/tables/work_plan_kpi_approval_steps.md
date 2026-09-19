# `work_plan_kpi_approval_steps`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| template_id | int | NO | MUL | NULL |  |  |
| step_order | int | NO |  | 1 |  |  |
| step_name | varchar(255) | NO |  | NULL |  |  |
| approver_type | varchar(50) | NO |  | permission |  |  |
| approver_ref_id | varchar(255) | YES |  | NULL |  |  |
| approver_label | varchar(255) | YES |  | NULL |  |  |
| allow_skip | char(1) | NO |  | N |  |  |
| require_note | char(1) | NO |  | N |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_approval_step_template | template_id | no | 1 |
| idx_plan_kpi_approval_step_template | step_order | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| template_id | `work_plan_kpi_approval_templates.id` | fk_plan_kpi_approval_steps_template |

## Sample rows (1)

```json
[
  {
    "id": 1,
    "template_id": 1,
    "step_order": 1,
    "step_name": "ตรวจสอบและอนุมัติ KPI",
    "approver_type": "permission",
    "approver_ref_id": "plan_kpi_approve",
    "approver_label": "ผู้มีสิทธิ์อนุมัติ KPI",
    "allow_skip": "N",
    "require_note": "N",
    "created_at": "2026-04-25 00:09:13"
  }
]
```

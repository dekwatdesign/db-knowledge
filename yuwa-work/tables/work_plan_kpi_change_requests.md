# `work_plan_kpi_change_requests`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| entity_type | enum('kpi','target','result') | NO |  | NULL |  |  |
| entity_id | int | YES |  | NULL |  |  |
| action_type | enum('create','update','delete') | NO |  | NULL |  |  |
| payload_json | longtext | NO |  | NULL |  |  |
| summary | varchar(600) | YES |  | NULL |  |  |
| status | enum('draft','pending','approved','rejected','cancelled') | NO | MUL | draft |  |  |
| requested_by | int | YES | MUL | NULL |  |  |
| requested_at | datetime | YES |  | NULL |  |  |
| submitted_at | datetime | YES |  | NULL |  |  |
| final_by | int | YES |  | NULL |  |  |
| final_at | datetime | YES |  | NULL |  |  |
| reject_note | text | YES |  | NULL |  |  |
| current_step_order | int | NO |  | 1 |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_change_requester | requested_by | no | 1 |
| idx_plan_kpi_change_requester | created_at | no | 2 |
| idx_plan_kpi_change_status | status | no | 1 |
| idx_plan_kpi_change_status | entity_type | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "entity_type": "kpi",
    "entity_id": 1,
    "action_type": "create",
    "payload_json": "{\"kpi_code\":\"KPI001\",\"title\":\"มาตรการรักษาความปลอดภัยไซเบอร์\",\"description\":\"\",\"owner_type\":\"organization\",\"owner_dep_index\":null,\"owner_dep_id\":null,\"owner_gtw_user_id\":null,\"unit\":\"โครงการ\",\"direction\":\"higher_better\",\"target_value\":1,\"weight\":1,\"status\":\"active\"}",
    "summary": "เพิ่ม KPI: มาตรการรักษาความปลอดภัยไซเบอร์",
    "status": "approved",
    "requested_by": 253,
    "requested_at": "2026-04-25 00:11:17",
    "submitted_at": "2026-04-25 00:11:17",
    "final_by": 253,
    "final_at": "2026-04-25 00:11:36",
    "reject_note": null,
    "current_step_order": 1,
    "created_at": "2026-04-25 00:11:17",
    "updated_at": "2026-04-25 00:11:36"
  },
  {
    "id": 2,
    "entity_type": "result",
    "entity_id": 1,
    "action_type": "create",
    "payload_json": "{\"kpi_id\":1,\"period_id\":1,\"actual_value\":2,\"result_note\":\"\",\"kpi_title\":\"มาตรการรักษาความปลอดภัยไซเบอร์\"}",
    "summary": "เพิ่ม ผลดำเนินงาน: มาตรการรักษาความปลอดภัยไซเบอร์",
    "status": "approved",
    "requested_by": 253,
    "requested_at": "2026-04-25 00:11:47",
    "submitted_at": "2026-04-25 00:11:47",
    "final_by": 253,
    "final_at": "2026-04-25 00:31:04",
    "reject_note": null,
    "current_step_order": 1,
    "created_at": "2026-04-25 00:11:47",
    "updated_at": "2026-04-25 00:31:04"
  },
  {
    "id": 3,
    "entity_type": "kpi",
    "entity_id": 1,
    "action_type": "update",
    "payload_json": "{\"kpi_code\":\"KPI001\",\"title\":\"มาตรการรักษาความปลอดภัยไซเบอร์\",\"description\":\"\",\"owner_type\":\"organization\",\"owner_dep_index\":null,\"owner_dep_id\":null,\"owner_gtw_user_id\":null,\"unit\":\"โครงการ\",\"direction\":\"higher_better\",\"target_value\":1,\"weight\":2,\"status\":\"active\"}",
    "summary": "แก้ไข KPI: มาตรการรักษาความปลอดภัยไซเบอร์",
    "status": "approved",
    "requested_by": 253,
    "requested_at": "2026-04-25 00:31:18",
    "submitted_at": "2026-04-25 00:31:18",
    "final_by": 253,
    "final_at": "2026-04-25 00:31:33",
    "reject_note": null,
    "current_step_order": 1,
    "created_at": "2026-04-25 00:31:18",
    "updated_at": "2026-04-25 00:31:33"
  }
]
```

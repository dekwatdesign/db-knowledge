# `work_custom_app_approval_flow_steps`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | MUL | NULL |  |  |
| step_order | int | NO |  | 1 |  |  |
| step_name | varchar(255) | NO |  | NULL |  |  |
| approver_type | varchar(50) | NO |  | user |  |  |
| approver_ref_id | varchar(255) | YES |  | NULL |  |  |
| approver_label | varchar(255) | YES |  | NULL |  |  |
| trigger_field_name | varchar(255) | YES |  | NULL |  |  |
| trigger_field_label | varchar(255) | YES |  | NULL |  |  |
| trigger_match_value | varchar(255) | YES |  | NULL |  |  |
| allow_skip | char(1) | NO |  | N |  |  |
| require_note | char(1) | NO |  | N |  |  |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_afsteps_service_id | service_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 9,
    "service_id": 12,
    "step_order": 1,
    "step_name": "หัวหน้ากลุ่มงาน อนุมัติ/รับทราบ",
    "approver_type": "requester_dep_1_leader",
    "approver_ref_id": "",
    "approver_label": "",
    "trigger_field_name": "",
    "trigger_field_label": "",
    "trigger_match_value": "",
    "allow_skip": "N",
    "require_note": "N",
    "created_at": "2026-04-10 17:05:42"
  },
  {
    "id": 10,
    "service_id": 12,
    "step_order": 2,
    "step_name": "กลุ่มงานทรัพยากรบุคคล อนุมัติ/รับทราบ",
    "approver_type": "dep_1",
    "approver_ref_id": "5",
    "approver_label": "กลุ่มงานทรัพยากรบุคคล",
    "trigger_field_name": "field_1",
    "trigger_field_label": "เหตุผล",
    "trigger_match_value": "ลืมสแกนลายนิ้วมือ (เฉพาะผู้สแสกนลงเวลางานที่ IPD)",
    "allow_skip": "N",
    "require_note": "N",
    "created_at": "2026-04-10 17:05:42"
  }
]
```

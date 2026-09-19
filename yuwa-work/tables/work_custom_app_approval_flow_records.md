# `work_custom_app_approval_flow_records`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| request_id | int | NO | MUL | NULL |  |  |
| step_id | int | NO |  | NULL |  |  |
| step_order | int | NO |  | NULL |  |  |
| step_name | varchar(255) | NO |  | NULL |  |  |
| approver_type | varchar(50) | NO |  | user |  |  |
| approver_ref_id | varchar(255) | YES |  | NULL |  |  |
| approver_label | varchar(255) | YES |  | NULL |  |  |
| status | varchar(50) | NO | MUL | pending |  |  |
| approved_by | int | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| approved_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_afrecords_pending | status | no | 1 |
| idx_afrecords_pending | approver_type | no | 2 |
| idx_afrecords_pending | approver_ref_id | no | 3 |
| idx_afrecords_request_id | request_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "request_id": 79,
    "step_id": 7,
    "step_order": 1,
    "step_name": "หัวหน้ากลุ่มงาน อนุมัติ/รับทราบ",
    "approver_type": "user",
    "approver_ref_id": "59",
    "approver_label": "[MASKED_FULLNAME]",
    "status": "approved",
    "approved_by": 59,
    "note": "",
    "approved_at": "2026-04-09 11:03:21",
    "created_at": "2026-04-09 11:01:35"
  },
  {
    "id": 2,
    "request_id": 79,
    "step_id": 8,
    "step_order": 2,
    "step_name": "กลุ่มงานทรัพยากรบุคคล อนุมัติ/รับทราบ",
    "approver_type": "dep_1",
    "approver_ref_id": "5",
    "approver_label": "กลุ่มงานทรัพยากรบุคคล",
    "status": "approved",
    "approved_by": 302,
    "note": "",
    "approved_at": "2026-04-09 11:04:34",
    "created_at": "2026-04-09 11:03:21"
  },
  {
    "id": 3,
    "request_id": 80,
    "step_id": 7,
    "step_order": 1,
    "step_name": "หัวหน้ากลุ่มงาน อนุมัติ/รับทราบ",
    "approver_type": "user",
    "approver_ref_id": "59",
    "approver_label": "[MASKED_FULLNAME]",
    "status": "pending",
    "approved_by": null,
    "note": null,
    "approved_at": null,
    "created_at": "2026-04-09 11:26:50"
  },
  {
    "id": 4,
    "request_id": 101,
    "step_id": 9,
    "step_order": 1,
    "step_name": "หัวหน้ากลุ่มงาน อนุมัติ/รับทราบ",
    "approver_type": "user",
    "approver_ref_id": "133",
    "approver_label": "[MASKED_FULLNAME]",
    "status": "pending",
    "approved_by": null,
    "note": null,
    "approved_at": null,
    "created_at": "2026-07-11 14:41:45"
  }
]
```

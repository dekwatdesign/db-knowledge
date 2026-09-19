# `work_approval_steps`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| approval_id | int | NO | MUL | NULL |  | FK to work_approvals.id |
| approver_role_id | int | YES | MUL | NULL |  | Role ที่ต้องอนุมัติ |
| approver_user_id | int | YES | MUL | NULL |  | User ที่ต้องอนุมัติ (gtw_user_id) |
| step_order | int | NO |  | 1 |  | ลำดับการอนุมัติ |
| status | enum('pending','approved','rejected','skipped') | YES | MUL | pending |  |  |
| approved_at | datetime | YES |  | NULL |  | วันที่อนุมัติ/ปฏิเสธ |
| remarks | text | YES |  | NULL |  | หมายเหตุจากผู้อนุมัติ |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_approval | approval_id | no | 1 |
| idx_approver_role | approver_role_id | no | 1 |
| idx_approver_user | approver_user_id | no | 1 |
| idx_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| approval_id | `work_approvals.id` | work_approval_steps_ibfk_1 |

## Sample rows (0)

```json
[]
```

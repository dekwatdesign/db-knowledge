# `work_approvals`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| approval_type | varchar(50) | NO | MUL | NULL |  | ประเภท: leave, expense, purchase, project, etc. |
| requester_id | int | NO | MUL | NULL |  | ผู้ขออนุมัติ (gtw_user_id) |
| title | varchar(255) | NO |  | NULL |  | หัวข้อคำขอ |
| details | text | YES |  | NULL |  | รายละเอียด |
| reference_table | varchar(50) | YES | MUL | NULL |  | ตารางอ้างอิง |
| reference_id | int | YES |  | NULL |  | ID อ้างอิง |
| status | enum('pending','approved','rejected','cancelled') | YES | MUL | pending |  |  |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_reference | reference_table | no | 1 |
| idx_reference | reference_id | no | 2 |
| idx_requester | requester_id | no | 1 |
| idx_status | status | no | 1 |
| idx_type | approval_type | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

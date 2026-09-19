# `work_project_milestones`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| project_id | int | NO | MUL | NULL |  | FK to work_projects.id |
| milestone_name | varchar(255) | NO |  | NULL |  | ชื่อ milestone |
| description | text | YES |  | NULL |  | รายละเอียด |
| target_date | date | NO | MUL | NULL |  | วันที่กำหนด |
| completed_date | date | YES |  | NULL |  | วันที่เสร็จจริง |
| status | enum('pending','completed','overdue') | YES | MUL | pending |  |  |
| milestone_order | int | YES |  | 0 |  | ลำดับ |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_project | project_id | no | 1 |
| idx_status | status | no | 1 |
| idx_target_date | target_date | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| project_id | `work_projects.id` | work_project_milestones_ibfk_1 |

## Sample rows (0)

```json
[]
```

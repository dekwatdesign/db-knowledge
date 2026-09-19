# `work_project_tasks`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| project_id | int | NO | MUL | NULL |  | FK to work_projects.id |
| task_name | varchar(255) | NO |  | NULL |  | ชื่องาน |
| description | text | YES |  | NULL |  | รายละเอียด |
| assigned_to | int | YES | MUL | NULL |  | ผู้รับผิดชอบ (gtw_user_id) |
| status | enum('todo','in_progress','review','completed','cancelled') | YES | MUL | todo |  |  |
| priority | enum('low','medium','high','urgent') | YES |  | medium |  |  |
| start_date | date | YES |  | NULL |  |  |
| due_date | date | YES |  | NULL |  |  |
| completed_date | date | YES |  | NULL |  |  |
| progress_pct | int | YES |  | 0 |  | ความคืบหน้า 0-100 |
| parent_task_id | int | YES | MUL | NULL |  | FK to self for sub-tasks |
| task_order | int | YES |  | 0 |  | ลำดับการแสดงผล |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_assigned | assigned_to | no | 1 |
| idx_parent | parent_task_id | no | 1 |
| idx_project | project_id | no | 1 |
| idx_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| project_id | `work_projects.id` | work_project_tasks_ibfk_1 |
| parent_task_id | `work_project_tasks.id` | work_project_tasks_ibfk_2 |

## Sample rows (0)

```json
[]
```

# `work_plan_feedback`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| feedback_code | varchar(80) | YES |  | NULL |  |  |
| title | varchar(600) | NO |  | NULL |  |  |
| detail | text | YES |  | NULL |  |  |
| department_dep_index | tinyint | YES | MUL | NULL |  |  |
| department_dep_id | int | YES |  | NULL |  |  |
| feedback_type | enum('complaint','suggestion','compliment','other') | NO |  | other |  |  |
| channel | varchar(80) | YES |  | NULL |  |  |
| sentiment | enum('positive','neutral','negative') | NO |  | neutral |  |  |
| status | enum('pending','in_progress','completed','archived') | NO | MUL | pending |  |  |
| rating | decimal(4,2) | YES |  | NULL |  |  |
| received_at | datetime | YES | MUL | NULL |  |  |
| closed_at | datetime | YES |  | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_feedback_department | department_dep_index | no | 1 |
| idx_plan_feedback_department | department_dep_id | no | 2 |
| idx_plan_feedback_received | received_at | no | 1 |
| idx_plan_feedback_status | status | no | 1 |
| idx_plan_feedback_status | feedback_type | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

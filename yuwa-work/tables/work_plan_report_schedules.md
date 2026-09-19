# `work_plan_report_schedules`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| template_id | int | YES | MUL | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| format | varchar(20) | NO |  | pdf |  |  |
| schedule_type | enum('monthly','quarterly','yearly') | NO |  | monthly |  |  |
| recipients_json | longtext | YES |  | NULL |  |  |
| next_run_at | datetime | YES |  | NULL |  |  |
| is_active | char(1) | NO |  | Y |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_report_schedule_template | template_id | no | 1 |
| idx_plan_report_schedule_template | is_active | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

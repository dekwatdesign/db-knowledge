# `refill_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| plan_id | int(11) | NO | PRI | 0 |  |  |
| plan_code | varchar(20) | YES |  | NULL |  |  |
| plan_name | varchar(255) | YES |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| interval_days | int(11) | YES |  | NULL |  |  |
| appointment_interval_days | int(11) | YES |  | NULL |  |  |
| require_lab_check | char(1) | YES |  | NULL |  |  |
| lab_check_days | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

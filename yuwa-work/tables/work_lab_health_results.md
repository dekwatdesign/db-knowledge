# `work_lab_health_results`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| target_gtw_user_id | int | NO | MUL | NULL |  |  |
| target_person_id | int | YES |  | NULL |  |  |
| health_year | smallint | NO | MUL | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_lab_result_target_user | target_gtw_user_id | no | 1 |
| idx_lab_result_year | health_year | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_lab_result_user_year | target_gtw_user_id | yes | 1 |
| uk_lab_result_user_year | health_year | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

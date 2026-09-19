# `work_lab_health_result_files`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| result_id | int | NO | MUL | NULL |  |  |
| stored_name | varchar(255) | NO |  | NULL |  |  |
| original_name | varchar(255) | NO |  | NULL |  |  |
| mime_type | varchar(100) | YES |  | NULL |  |  |
| file_size | bigint | NO |  | 0 |  |  |
| sort_order | int | NO |  | 0 |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_lab_result_file_result_id | result_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| result_id | `work_lab_health_results.id` | fk_lab_result_files_result |

## Sample rows (0)

```json
[]
```

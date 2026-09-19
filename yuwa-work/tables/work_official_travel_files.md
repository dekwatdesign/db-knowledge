# `work_official_travel_files`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| travel_id | int | NO | MUL | NULL |  |  |
| file_type | varchar(50) | NO |  | evidence |  |  |
| file_name | varchar(500) | NO |  | NULL |  |  |
| original_name | varchar(500) | YES |  | NULL |  |  |
| mime_type | varchar(150) | YES |  | NULL |  |  |
| file_size | bigint | YES |  | NULL |  |  |
| uploaded_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_ot_files_travel | travel_id | no | 1 |
| idx_ot_files_travel | file_type | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| travel_id | `work_official_travel.id` | fk_ot_files_travel |

## Sample rows (0)

```json
[]
```

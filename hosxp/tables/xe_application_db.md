# `xe_application_db`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_db_id | int(11) | NO | PRI | 0 |  |  |
| xe_application_file_name | varchar(250) | YES | MUL | NULL |  |  |
| xe_application_file_md5 | varchar(50) | YES | MUL | NULL |  |  |
| xe_application_file_datetime | datetime | YES |  | NULL |  |  |
| xe_application_file_size | int(11) | YES |  | NULL |  |  |
| xe_application_file_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_db | xe_application_file_name | no | 1 |
| ix_db | xe_application_file_md5 | no | 2 |
| ix_db_index | xe_application_file_md5 | no | 1 |
| ix_db_index | xe_application_file_name | no | 2 |
| PRIMARY | xe_application_db_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

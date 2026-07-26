# `xe_application_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_file_id | int(11) | NO | PRI | 0 |  |  |
| xe_application_version_id | int(11) | YES | MUL | NULL |  |  |
| xe_application_file_name | varchar(250) | YES |  | NULL |  |  |
| xe_application_file_md5 | varchar(50) | YES |  | NULL |  |  |
| xe_application_file_extension | varchar(20) | YES |  | NULL |  |  |
| xe_application_file_type | varchar(20) | YES |  | NULL |  |  |
| xe_application_file_location | varchar(250) | YES |  | NULL |  |  |
| xe_application_file_size | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_application_version_id | xe_application_version_id | no | 1 |
| PRIMARY | xe_application_file_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

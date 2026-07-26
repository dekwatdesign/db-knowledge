# `file_monitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| file_monitor_id | int(11) | NO | PRI | 0 |  |  |
| file_name | varchar(200) | YES | MUL | NULL |  |  |
| file_date | datetime | YES |  | NULL |  |  |
| file_data | longblob | YES |  | NULL |  |  |
| computer_name | varchar(200) | YES |  | NULL |  |  |
| update_flag | char(1) | YES | MUL | NULL |  |  |
| file_md5 | varchar(50) | YES |  | NULL |  |  |
| process_officer_id | int(11) | YES |  | NULL |  |  |
| process_datetime | datetime | YES |  | NULL |  |  |
| process_computer_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_file_name | file_name | no | 1 |
| ix_update_flag | update_flag | no | 1 |
| PRIMARY | file_monitor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

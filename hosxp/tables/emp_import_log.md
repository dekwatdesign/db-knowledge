# `emp_import_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_import_log_id | int(11) | NO | PRI | 0 |  |  |
| emp_import_log_datetime | datetime | YES |  | NULL |  |  |
| emp_import_log_staff | varchar(20) | YES |  | NULL |  |  |
| emp_import_log_file | blob | YES |  | NULL |  |  |
| emp_import_log_filename | varchar(250) | YES |  | NULL |  |  |
| emp_import_log_type | varchar(250) | YES |  | NULL |  |  |
| emp_import_log_insert | varchar(100) | YES |  | NULL |  |  |
| emp_import_log_edit | varchar(100) | YES |  | NULL |  |  |
| emp_import_log_detail | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_import_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

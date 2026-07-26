# `moph_fdh_import_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_fdh_import_log_id | int(11) | NO | PRI | 0 |  |  |
| moph_fdh_import_date | date | YES |  | NULL |  |  |
| moph_fdh_import_time | time | YES |  | NULL |  |  |
| moph_fdh_import_ip_address | varchar(100) | YES |  | NULL |  |  |
| moph_fdh_computer_name | varchar(100) | YES |  | NULL |  |  |
| moph_fdh_import_filename | varchar(250) | YES |  | NULL |  |  |
| moph_fdh_import_output | text | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | moph_fdh_import_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

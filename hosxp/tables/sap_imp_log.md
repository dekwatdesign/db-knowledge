# `sap_imp_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sap_imp_log_id | int(11) | NO | PRI | 0 |  |  |
| file_monitor_id | int(11) | YES | MUL | NULL |  |  |
| file_name | varchar(200) | YES |  | NULL |  |  |
| file_date | date | YES |  | NULL |  |  |
| imp_datetime | datetime | YES |  | NULL |  |  |
| all_record | int(11) | YES |  | NULL |  |  |
| add_record | int(11) | YES |  | NULL |  |  |
| delete_record | int(11) | YES |  | NULL |  |  |
| error_record | int(11) | YES |  | NULL |  |  |
| imp_status | varchar(20) | YES |  | NULL |  |  |
| error_list | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_file_monitor_id | file_monitor_id | no | 1 |
| PRIMARY | sap_imp_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

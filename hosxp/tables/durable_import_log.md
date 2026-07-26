# `durable_import_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_import_log_id | int(11) | NO | PRI | 0 |  |  |
| durable_import_log_date | date | YES |  | NULL |  |  |
| durable_import_log_time | time | YES |  | NULL |  |  |
| durable_import_log_file | text | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| durable_import_log_sap | int(11) | YES |  | NULL |  |  |
| durable_import_log_hos | int(11) | YES |  | NULL |  |  |
| durable_import_log_fdate | date | YES |  | NULL |  |  |
| durable_import_log_ftime | time | YES |  | NULL |  |  |
| durable_import_log_ins | int(11) | YES |  | NULL |  |  |
| durable_import_log_edt | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_import_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

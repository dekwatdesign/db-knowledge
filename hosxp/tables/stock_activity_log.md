# `stock_activity_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_activity_log_id | int(11) | NO | PRI | 0 |  |  |
| log_datetime | datetime | YES | MUL | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| module_name | varchar(200) | YES |  | NULL |  |  |
| operation_type | varchar(50) | YES |  | NULL |  |  |
| operation_key | varchar(200) | YES |  | NULL |  |  |
| version_name | varchar(50) | YES |  | NULL |  |  |
| login_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_log_datetime | log_datetime | no | 1 |
| PRIMARY | stock_activity_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

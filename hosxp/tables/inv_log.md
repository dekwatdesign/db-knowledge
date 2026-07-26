# `inv_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_log_id | int(11) | NO | PRI | 0 |  |  |
| inv_log_datetime | datetime | YES |  | NULL |  |  |
| inv_log_module | varchar(100) | YES |  | NULL |  |  |
| inv_log_message | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

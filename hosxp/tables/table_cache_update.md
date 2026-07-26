# `table_cache_update`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(100) | YES | MUL | NULL |  |  |
| update_computer_name | varchar(100) | YES | MUL | NULL |  |  |
| update_time_start | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_table_name | table_name | no | 1 |
| ix_table_name_start | table_name | no | 1 |
| ix_table_name_start | update_time_start | no | 2 |
| ix_ucn | update_computer_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

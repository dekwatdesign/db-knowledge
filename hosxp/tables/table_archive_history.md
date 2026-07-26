# `table_archive_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_archive_history_id | int(11) | NO | PRI | 0 |  |  |
| table_archive_id | int(11) | YES | MUL | NULL |  |  |
| table_archive_datetime | datetime | YES |  | NULL |  |  |
| table_archive_user | varchar(200) | YES |  | NULL |  |  |
| table_archive_year | varchar(4) | YES |  | NULL |  |  |
| table_archive_record_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_table_archive_id | table_archive_id | no | 1 |
| PRIMARY | table_archive_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

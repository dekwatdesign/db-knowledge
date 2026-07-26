# `etl_table_merge_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| etl_table_merge_stat_id | int(11) | NO | PRI | 0 |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| merge_datetime | datetime | YES |  | NULL |  |  |
| table_name | varchar(200) | YES | MUL | NULL |  |  |
| record_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_table_name | table_name | no | 1 |
| PRIMARY | etl_table_merge_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

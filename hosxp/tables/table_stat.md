# `table_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(150) | YES | MUL | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| row_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_tablename | table_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

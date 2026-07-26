# `cmdb_batch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cmdb_batch_id | int(11) | NO | PRI | 0 |  |  |
| batch_date | date | YES |  | NULL |  |  |
| batch_file_name | varchar(200) | YES |  | NULL |  |  |
| record_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cmdb_batch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `ovst_queue_server_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode | varchar(3) | NO | PRI |  |  |  |
| date_limit | date | NO | PRI | 0000-00-00 |  |  |
| total_limit | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | depcode | yes | 1 |
| PRIMARY | date_limit | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

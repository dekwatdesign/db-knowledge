# `stat_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | varchar(13) | NO | PRI |  |  |  |
| queue_type | varchar(25) | YES | MUL | NULL |  |  |
| queue_date_time | datetime | YES | MUL | NULL |  |  |
| process_count | tinyint(4) | YES |  | NULL |  |  |
| error | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | id | yes | 1 |
| queue_date_time | queue_date_time | no | 1 |
| queue_type | queue_type | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

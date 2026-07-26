# `pcu_replicate_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| event_id | int(11) | YES | UNI | NULL |  |  |
| event_time | datetime | YES |  | NULL |  |  |
| client | varchar(20) | YES |  | NULL |  |  |
| sql | text | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| event_id_unique | event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

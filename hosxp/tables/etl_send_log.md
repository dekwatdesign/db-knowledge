# `etl_send_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospcode | varchar(9) | YES |  | NULL |  |  |
| send_datetime | datetime | YES | MUL | NULL |  |  |
| person_count | int(11) | YES |  | NULL |  |  |
| visit_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_send_datetime | send_datetime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

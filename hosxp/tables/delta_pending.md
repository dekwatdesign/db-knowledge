# `delta_pending`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| delta_pending_id | int(11) | NO | PRI | 0 |  |  |
| receive_datetime | datetime | YES |  | NULL |  |  |
| update_sql | longtext | YES |  | NULL |  |  |
| delta_value | longblob | YES |  | NULL |  |  |
| sync_complete | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_syncomplete | sync_complete | no | 1 |
| PRIMARY | delta_pending_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

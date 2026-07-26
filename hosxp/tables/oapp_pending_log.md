# `oapp_pending_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_pending_log_id | int(11) | NO | PRI | 0 |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| old_nextdate | date | YES |  | NULL |  |  |
| old_nexttime | time | YES |  | NULL |  |  |
| new_nextdate | date | YES |  | NULL |  |  |
| new_nexttime | time | YES |  | NULL |  |  |
| pending_reason | varchar(150) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| pending_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| old_nexttime_end | time | YES |  | NULL |  |  |
| new_nexttime_end | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| PRIMARY | oapp_pending_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

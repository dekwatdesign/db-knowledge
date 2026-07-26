# `operation_anes_monitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anes_monitor_id | int(11) | NO | PRI | 0 |  |  |
| anes_monitor_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anes_monitor_name | anes_monitor_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anes_monitor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

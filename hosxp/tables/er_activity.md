# `er_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_activity_id | int(11) | NO | PRI | 0 |  |  |
| activity_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| activity_name | activity_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `ba_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ba_status_id | int(11) | NO | PRI | 0 |  |  |
| ba_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ba_status_name | ba_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ba_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

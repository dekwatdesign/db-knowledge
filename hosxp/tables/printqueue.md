# `printqueue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| documentname | varchar(250) | YES |  | NULL |  |  |
| documentparam | varchar(250) | YES |  | NULL |  |  |
| queueno | int(11) | NO | PRI | 0 |  |  |
| data | blob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | queueno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

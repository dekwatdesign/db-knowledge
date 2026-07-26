# `stock_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(100) | YES | UNI | NULL |  |  |
| stock_user_position | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_user_role_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_loginname | loginname | yes | 1 |
| PRIMARY | stock_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

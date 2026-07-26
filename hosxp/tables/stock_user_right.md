# `stock_user_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_right_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_id | int(11) | YES | MUL | NULL |  |  |
| stock_right_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | stock_user_id | yes | 1 |
| ix_unique | stock_right_id | yes | 2 |
| ix_unique_index | stock_right_id | yes | 1 |
| ix_unique_index | stock_user_id | yes | 2 |
| PRIMARY | stock_user_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

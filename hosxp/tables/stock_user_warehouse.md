# `stock_user_warehouse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_warehouse_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_id | int(11) | YES | MUL | NULL |  |  |
| stock_warehouse_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_user_id | stock_user_id | no | 1 |
| ix_stock_user_idw | stock_user_id | no | 1 |
| ix_stock_user_idw | stock_warehouse_id | no | 2 |
| PRIMARY | stock_user_warehouse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

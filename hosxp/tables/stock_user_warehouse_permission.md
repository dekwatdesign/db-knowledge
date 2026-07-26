# `stock_user_warehouse_permission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_role_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_warehouse_permission_access | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_user_role_id | yes | 1 |
| PRIMARY | warehouse_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

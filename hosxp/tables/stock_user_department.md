# `stock_user_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_department_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_id | int(11) | YES | MUL | NULL |  |  |
| stock_department_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_department_id | stock_department_id | no | 1 |
| ix_stock_user_id | stock_user_id | no | 1 |
| PRIMARY | stock_user_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

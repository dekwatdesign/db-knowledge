# `stock_dep_return_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_return_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_return_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,5) | YES |  | NULL |  |  |
| total_qty | int(11) | YES |  | NULL |  |  |
| total_price | double(15,5) | YES |  | NULL |  |  |
| lot_no | varchar(100) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sdri | stock_dep_return_id | no | 1 |
| PRIMARY | stock_dep_return_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_return_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_item_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| stock_return_id | int(11) | YES | MUL | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| total_price | double(15,5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_price | double(22,2) | YES |  | NULL |  |  |
| stock_draw_id | int(11) | YES |  | NULL |  |  |
| typeprice_id | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_stock_return_id | stock_return_id | no | 1 |
| PRIMARY | stock_return_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_manual_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_manual_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_manual_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| unit_price | double(15,5) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| difference_qty | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_manual_id | stock_manual_id | no | 1 |
| PRIMARY | stock_manual_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

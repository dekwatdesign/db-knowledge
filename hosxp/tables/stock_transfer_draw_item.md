# `stock_transfer_draw_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_transfer_draw_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_transfer_draw_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_transfer_draw_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| total_price | float | YES |  | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| different_qty | int(11) | YES |  | NULL |  |  |
| req_stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| req_unit_remain_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_transfer_draw_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_return_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_return_id | int(11) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_return_qty | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_return_unit_qty | int(11) | YES |  | NULL |  |  |
| stock_return_item_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| total_price | double(15,8) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_stock_draw_list_id | stock_draw_list_id | no | 1 |
| ix_stock_return_id | stock_return_id | no | 1 |
| ix_stock_return_item_id | stock_return_item_id | no | 1 |
| PRIMARY | stock_return_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_item_unit_price_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_unit_price_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| not_morethan_qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| qty_start | int(11) | YES |  | NULL |  |  |
| qty_end | int(11) | YES |  | NULL |  |  |
| customer_level_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_si_id | stock_item_unit_id | no | 1 |
| PRIMARY | stock_item_unit_price_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_item_price_change`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_price_change_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| change_datetime | datetime | YES |  | NULL |  |  |
| old_price | double(15,3) | YES |  | NULL |  |  |
| new_price | double(15,3) | YES |  | NULL |  |  |
| old_unit_cost | double(15,3) | YES |  | NULL |  |  |
| new_unit_cost | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_item_price_change_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

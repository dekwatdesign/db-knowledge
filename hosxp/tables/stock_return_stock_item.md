# `stock_return_stock_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| return_stock_item_id | int(11) | NO | PRI | 0 |  |  |
| return_stock_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| return_stock_item_qty | int(11) | YES |  | NULL |  |  |
| return_stock_unit_price | double(15,3) | YES |  | NULL |  |  |
| return_stock_item_unit | varchar(50) | YES |  | NULL |  |  |
| return_stock_total_price | double(15,3) | YES |  | NULL |  |  |
| return_stock_item_lotno | varchar(50) | YES |  | NULL |  |  |
| return_stock_item_expire | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | return_stock_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

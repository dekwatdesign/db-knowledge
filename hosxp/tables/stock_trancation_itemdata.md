# `stock_trancation_itemdata`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_trancation_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| issue_qty | int(11) | YES |  | NULL |  |  |
| adj_qty | int(11) | YES |  | NULL |  |  |
| stock_trancation_date | datetime | YES |  | NULL |  |  |
| total_qty | int(11) | YES |  | NULL |  |  |
| remain_price | double(22,3) | YES |  | NULL |  |  |
| receive_price | double(22,3) | YES |  | NULL |  |  |
| issue_price | double(22,3) | YES |  | NULL |  |  |
| adj_price | double(22,3) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_trancation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

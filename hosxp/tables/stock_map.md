# `stock_map`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_map_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| inv_date | date | YES |  | NULL |  |  |
| purchase_qty | int(11) | YES |  | NULL |  |  |
| purchase_unit_price | double(15,5) | YES |  | NULL |  |  |
| purchase_total_price | double(15,5) | YES |  | NULL |  |  |
| sale_qty | int(11) | YES |  | NULL |  |  |
| sale_price | double(15,5) | YES |  | NULL |  |  |
| sale_total_price | double(15,5) | YES |  | NULL |  |  |
| balance_qty | int(11) | YES |  | NULL |  |  |
| balance_price | double(15,5) | YES |  | NULL |  |  |
| balance_cost | double(15,5) | YES |  | NULL |  |  |
| map_type | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_date | item_id | no | 1 |
| ix_id_date | inv_date | no | 2 |
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

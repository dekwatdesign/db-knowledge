# `refill_order_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_item_id | int(11) | NO | PRI | 0 |  |  |
| order_disease_id | int(11) | YES | MUL | NULL |  |  |
| plan_drug_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| qty | decimal(10,0) | YES |  | NULL |  |  |
| unit_price | decimal(10,0) | YES |  | NULL |  |  |
| is_adhoc | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_order_item_disease | order_disease_id | no | 1 |
| ix_idx_order_item_icode | icode | no | 1 |
| PRIMARY | order_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

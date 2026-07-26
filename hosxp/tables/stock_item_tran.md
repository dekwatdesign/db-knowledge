# `stock_item_tran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_tran_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| warehouse_mul_qty | int(11) | YES |  | NULL |  |  |
| department_mul_qty | int(11) | YES |  | NULL |  |  |
| dep_stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| active_status_department | char(1) | YES |  | NULL |  |  |
| warehouse_tran_type_id | int(11) | YES |  | NULL |  |  |
| dep_tran_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_item_tran_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

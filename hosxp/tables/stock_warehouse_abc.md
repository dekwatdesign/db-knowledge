# `stock_warehouse_abc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_warehouse_abc_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| abc | char(1) | YES |  | NULL |  |  |
| percent_of_value | double(15,3) | YES |  | NULL |  |  |
| percent_of_qty | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | warehouse_id | no | 1 |
| ix_unique | item_id | no | 2 |
| ix_unique_index | item_id | no | 1 |
| ix_unique_index | warehouse_id | no | 2 |
| PRIMARY | stock_warehouse_abc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `supply_item_set`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_item_set_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_set_qty | int(11) | YES |  | NULL |  |  |
| supply_item_type_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_set_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item61 | supply_item_id | no | 1 |
| ix_Refsupply_item_type60 | supply_item_type_id | no | 1 |
| PRIMARY | supply_item_set_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `supply_return_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_return_item_id | int(11) | NO | PRI | 0 |  |  |
| supply_return_item_qty | int(11) | YES |  | NULL |  |  |
| supply_return_item_remainqty | int(11) | YES |  | NULL |  |  |
| supply_return_id | int(11) | YES | MUL | NULL |  |  |
| supply_return_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_substock_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_return_receive_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item50 | supply_item_id | no | 1 |
| ix_Refsupply_item_list41 | supply_item_list_id | no | 1 |
| ix_Refsupply_return38 | supply_return_id | no | 1 |
| ix_Refsupply_return_list39 | supply_return_list_id | no | 1 |
| ix_Refsupply_return_receive59 | supply_return_receive_id | no | 1 |
| ix_Refsupply_substock_list40 | supply_substock_list_id | no | 1 |
| PRIMARY | supply_return_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

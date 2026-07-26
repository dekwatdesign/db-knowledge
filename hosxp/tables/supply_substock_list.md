# `supply_substock_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_substock_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_substock_list_qty | int(11) | YES |  | NULL |  |  |
| supply_substock_list_remainqty | int(11) | YES |  | NULL |  |  |
| supply_request_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_substock_id | int(11) | YES | MUL | NULL |  |  |
| supply_request_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item_list24 | supply_item_list_id | no | 1 |
| ix_Refsupply_request31 | supply_request_id | no | 1 |
| ix_Refsupply_request_item27 | supply_request_item_id | no | 1 |
| ix_Refsupply_substock26 | supply_substock_id | no | 1 |
| PRIMARY | supply_substock_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

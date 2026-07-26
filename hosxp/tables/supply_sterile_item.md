# `supply_sterile_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_sterile_item_id | int(11) | NO | PRI | 0 |  |  |
| supply_sterile_item_qty | int(11) | YES |  | NULL |  |  |
| supply_sterile_item_remainqty | int(11) | YES |  | NULL |  |  |
| supply_sterile_id | int(11) | YES | MUL | NULL |  |  |
| supply_sterile_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_substock_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_sterile_receive_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item51 | supply_item_id | no | 1 |
| ix_Refsupply_item_list32 | supply_item_list_id | no | 1 |
| ix_Refsupply_sterile21 | supply_sterile_id | no | 1 |
| ix_Refsupply_sterile_list22 | supply_sterile_list_id | no | 1 |
| ix_Refsupply_sterile_receive53 | supply_sterile_receive_id | no | 1 |
| ix_Refsupply_substock_list36 | supply_substock_list_id | no | 1 |
| PRIMARY | supply_sterile_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

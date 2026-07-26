# `supply_item_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_item_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_list_depcode | int(11) | YES |  | NULL |  |  |
| supply_item_list_lotno | varchar(60) | YES |  | NULL |  |  |
| supply_item_list_qty | int(11) | YES |  | NULL |  |  |
| supply_item_list_unitcost | decimal(10,0) | YES |  | NULL |  |  |
| supply_item_list_expire_date | date | YES |  | NULL |  |  |
| supply_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_reg_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item2 | supply_item_id | no | 1 |
| ix_Refsupply_reg_list49 | supply_reg_list_id | no | 1 |
| PRIMARY | supply_item_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

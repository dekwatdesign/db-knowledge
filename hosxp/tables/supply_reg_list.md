# `supply_reg_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_reg_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_reg_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES | MUL | NULL |  |  |
| supply_reg_list_expire_date | date | YES |  | NULL |  |  |
| supply_reg_list_lotno | varchar(60) | YES |  | NULL |  |  |
| supply_reg_list_qty | int(11) | YES |  | NULL |  |  |
| supply_reg_list_unitcost | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_list_discount | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_list_amt | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_list_net | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_list_type | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item9 | supply_item_id | no | 1 |
| ix_Refsupply_reg8 | supply_reg_id | no | 1 |
| PRIMARY | supply_reg_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

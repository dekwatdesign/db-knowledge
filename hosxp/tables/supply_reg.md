# `supply_reg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_reg_id | int(11) | NO | PRI | 0 |  |  |
| supply_reg_staff | int(11) | YES |  | NULL |  |  |
| supply_reg_depcode | char(10) | YES |  | NULL |  |  |
| supply_reg_refno | varchar(60) | YES |  | NULL |  |  |
| supply_reg_date | date | YES |  | NULL |  |  |
| supply_reg_amt | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_net | decimal(10,0) | YES |  | NULL |  |  |
| supply_reg_remark | varchar(200) | YES |  | NULL |  |  |
| supply_reg_confirm | varchar(1) | YES |  | NULL |  |  |
| supply_reg_status | varchar(1) | YES |  | NULL |  |  |
| supply_reg_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_reg_type1 | supply_reg_type_id | no | 1 |
| PRIMARY | supply_reg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

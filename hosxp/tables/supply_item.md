# `supply_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_item_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_name | char(100) | YES |  | NULL |  |  |
| supply_item_code | varchar(100) | YES |  | NULL |  |  |
| supply_item_barcode | varchar(100) | YES |  | NULL |  |  |
| supply_item_reusenum | int(11) | YES |  | NULL |  |  |
| supply_item_date | date | YES |  | NULL |  |  |
| supply_item_type_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_status_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| supply_sterile_type_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item_group62 | supply_item_group_id | no | 1 |
| ix_Refsupply_item_status7 | supply_item_status_id | no | 1 |
| ix_Refsupply_item_type3 | supply_item_type_id | no | 1 |
| ix_Refsupply_item_unit12 | supply_item_unit_id | no | 1 |
| ix_Refsupply_sterile_type13 | supply_sterile_type_id | no | 1 |
| PRIMARY | supply_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

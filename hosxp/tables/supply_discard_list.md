# `supply_discard_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_discard_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |
| supply_discard_list_lotno | varchar(60) | YES |  | NULL |  |  |
| supply_discard_list_qty | int(11) | YES |  | NULL |  |  |
| supply_discard_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_discard47 | supply_discard_id | no | 1 |
| ix_Refsupply_item_list48 | supply_item_list_id | no | 1 |
| PRIMARY | supply_discard_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

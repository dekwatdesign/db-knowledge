# `supply_sterile_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_sterile_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |
| supply_sterile_list_lotno | varchar(60) | YES |  | NULL |  |  |
| supply_sterile_list_qty | int(11) | YES |  | NULL |  |  |
| supply_sterile_list_complete | char(1) | YES |  | NULL |  |  |
| supply_sterile_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_sterile45 | supply_sterile_id | no | 1 |
| PRIMARY | supply_sterile_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

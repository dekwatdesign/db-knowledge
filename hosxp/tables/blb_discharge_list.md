# `blb_discharge_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_discharge_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_discharge_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_warehouse_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_discharge_id | blb_discharge_id | no | 1 |
| ix_blb_warehouse_id | blb_warehouse_id | no | 1 |
| PRIMARY | blb_discharge_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

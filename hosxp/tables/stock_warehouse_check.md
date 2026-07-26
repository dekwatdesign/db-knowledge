# `stock_warehouse_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_warehouse_check_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| check_date | date | YES |  | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| stock_warehouse_adj_head_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_itemid | item_id | no | 1 |
| ix_warehouse | warehouse_id | no | 1 |
| ix_warehouse_adj_id | stock_warehouse_adj_head_id | no | 1 |
| ix_warehouse_item | warehouse_id | no | 1 |
| ix_warehouse_item | item_id | no | 2 |
| ix_warehouse_item_index | item_id | no | 1 |
| ix_warehouse_item_index | warehouse_id | no | 2 |
| PRIMARY | stock_warehouse_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

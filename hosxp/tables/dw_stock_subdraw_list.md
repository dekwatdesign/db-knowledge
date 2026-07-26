# `dw_stock_subdraw_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_subdraw_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_subdraw_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_subdraw_qty | int(11) | YES |  | NULL |  |  |
| confirm_empty | char(1) | YES |  | NULL |  |  |
| stock_subdraw_price | double(15,3) | YES |  | NULL |  |  |
| stock_subdraw_unitcost | double(15,5) | YES |  | NULL |  |  |
| remain | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| substock_remain_qty | int(11) | YES |  | NULL |  |  |
| warehouse_remain_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_subdraw_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

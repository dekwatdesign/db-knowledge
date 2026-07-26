# `stock_draw_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_list_id | int(11) | NO | PRI | 0 |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_qty | int(11) | YES |  | NULL |  |  |
| stock_draw_left_qty | int(11) | YES | MUL | NULL |  |  |
| stock_draw_unitqty | int(11) | YES |  | NULL |  |  |
| confirm_empty | char(1) | YES | MUL | NULL |  |  |
| stock_draw_price | double(15,3) | YES |  | NULL |  |  |
| stock_draw_unitcost | double(15,8) | YES |  | NULL |  |  |
| last_activity | datetime | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_item_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| stock_transfer_draw_list_id | int(11) | YES |  | NULL |  |  |
| draw_cancel | char(1) | YES |  | NULL |  |  |
| warehouse_remain_qty | int(11) | YES |  | NULL |  |  |
| sp_stock_subdraw_list_id | int(11) | YES | MUL | NULL |  |  |
| check_key | varchar(100) | YES | MUL | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| real_draw_left_qty | int(11) | YES |  | NULL |  |  |
| last_check_tick | int(11) | YES |  | NULL |  |  |
| item_lot_no | varchar(25) | YES |  | NULL |  |  |
| item_expire_date | date | YES |  | NULL |  |  |
| item_info | varchar(50) | YES |  | NULL |  |  |
| item_id_x | int(11) | YES |  | NULL |  |  |
| department_id_x | int(11) | YES | MUL | NULL |  |  |
| item_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_check_key | check_key | no | 1 |
| ix_department_id_ok | department_id_x | no | 1 |
| ix_department_id_ok | item_ok | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_ix_confirm_empty | confirm_empty | no | 1 |
| ix_list_id_draw | item_list_id | no | 1 |
| ix_list_id_draw | stock_draw_id | no | 2 |
| ix_sp_stock_subdraw_list_id | sp_stock_subdraw_list_id | no | 1 |
| ix_stock_draw_id | stock_draw_id | no | 1 |
| ix_stock_draw_item_id | stock_draw_item_id | no | 1 |
| ix_stock_draw_left_qty | stock_draw_left_qty | no | 1 |
| ix_stock_item_unit_id | stock_item_unit_id | no | 1 |
| PRIMARY | stock_draw_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

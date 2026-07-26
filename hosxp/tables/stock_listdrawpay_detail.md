# `stock_listdrawpay_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_listdrawpay_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_subdraw_id | int(11) | YES |  | NULL |  |  |
| stock_subdraw_list_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| draw_qty | int(11) | YES |  | NULL |  |  |
| stock_draw_id | int(11) | YES |  | NULL |  |  |
| department_qty | int(11) | YES |  | NULL |  |  |
| warehouse_qty | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| subdraw_qty | int(11) | YES |  | NULL |  |  |
| sum_pay_qty | int(11) | YES |  | NULL |  |  |
| item_max | int(11) | YES |  | NULL |  |  |
| stock_listdrawpay_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_listdrawpay_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_subcard`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_substockcard_id | int(11) | NO | PRI | 0 |  |  |
| stock_substockcard_date | date | YES |  | NULL |  |  |
| stock_substockcard_type | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| ref_no | varchar(50) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| stock_substockcard_group | varchar(10) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| lot_no | varchar(30) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| stock_substockcard_name | varchar(100) | YES |  | NULL |  |  |
| in_unit_name | varchar(50) | YES |  | NULL |  |  |
| out_unit_name | varchar(50) | YES |  | NULL |  |  |
| stock_item_unit_name | varchar(50) | YES |  | NULL |  |  |
| in_unit_id | int(11) | YES |  | NULL |  |  |
| out_unit_id | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| price | double(22,5) | YES |  | NULL |  |  |
| in_price | double(22,5) | YES |  | NULL |  |  |
| out_price | double(22,5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| left_price | double(22,5) | YES |  | NULL |  |  |
| totalqty | int(11) | YES |  | NULL |  |  |
| order_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id_dep_id | item_id | no | 1 |
| ix_item_id_dep_id | department_id | no | 2 |
| ix_item_id_dep_id_index | department_id | no | 1 |
| ix_item_id_dep_id_index | item_id | no | 2 |
| PRIMARY | stock_substockcard_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

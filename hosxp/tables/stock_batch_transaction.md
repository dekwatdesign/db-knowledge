# `stock_batch_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| batch_no | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| docdate | date | YES |  | NULL |  |  |
| doctype | int(11) | YES |  | NULL |  |  |
| docgroup | varchar(10) | YES |  | NULL |  |  |
| docname | varchar(200) | YES |  | NULL |  |  |
| transaction_module | varchar(100) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| ref_no | varchar(150) | YES |  | NULL |  |  |
| ref_id | int(11) | YES |  | NULL |  |  |
| lot_no | varchar(150) | YES |  | NULL |  |  |
| unit_id | int(11) | YES |  | NULL |  |  |
| unit_name | varchar(150) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| price | double(22,3) | YES |  | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| in_unit_id | int(11) | YES |  | NULL |  |  |
| in_unit_name | varchar(150) | YES |  | NULL |  |  |
| in_price | double(22,3) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| out_unit_id | int(11) | YES |  | NULL |  |  |
| out_unit_name | varchar(150) | YES |  | NULL |  |  |
| out_price | double(22,3) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| left_price | double(22,3) | YES |  | NULL |  |  |
| totalqty | int(11) | YES |  | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| item_price | double(22,3) | YES |  | NULL |  |  |
| onhand_balance_qty | int(11) | YES |  | NULL |  |  |
| onhand_balance_amt | double(22,3) | YES |  | NULL |  |  |
| onhand_balance_carried_forward_qty | int(11) | YES |  | NULL |  |  |
| onhand_balance_carried_forward_amt | double(22,3) | YES |  | NULL |  |  |
| cal_flag | int(11) | YES |  | NULL |  |  |
| record_flag | char(1) | YES |  | NULL |  |  |
| ref_status | varchar(5) | YES |  | NULL |  |  |
| ref_flag | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_sap_trans_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_sap_trans_list_id | int(11) | NO | PRI | 0 |  |  |
| entrydate | date | YES |  | NULL |  |  |
| postingdate | date | YES |  | NULL |  |  |
| barcode | varchar(100) | YES | MUL | NULL |  |  |
| movement_type | varchar(10) | YES |  | NULL |  |  |
| material_code | varchar(50) | YES |  | NULL |  |  |
| batch_number | varchar(50) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unit_name | varchar(50) | YES |  | NULL |  |  |
| expiredate | date | YES |  | NULL |  |  |
| cost_center | varchar(50) | YES |  | NULL |  |  |
| department_code | varchar(10) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_item_unt_id | int(11) | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |
| process_datetime | datetime | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| selected | char(1) | YES |  | NULL |  |  |
| lot_no | varchar(25) | YES |  | NULL |  |  |
| exp_date | date | YES |  | NULL |  |  |
| sap_tran_type_id | int(11) | YES |  | NULL |  |  |
| mul_qty | int(11) | YES |  | NULL |  |  |
| item_extra | int(11) | YES |  | NULL |  |  |
| item_max_point | int(11) | YES |  | NULL |  |  |
| item_min_point | int(11) | YES |  | NULL |  |  |
| stock_deliver_detail_id | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | barcode | no | 1 |
| ix_uni | movement_type | no | 2 |
| ix_uni | material_code | no | 3 |
| ix_uni | batch_number | no | 4 |
| ix_uni | cost_center | no | 5 |
| ix_uni | department_code | no | 6 |
| ix_uni_index | barcode | no | 1 |
| ix_uni_index | batch_number | no | 2 |
| ix_uni_index | cost_center | no | 3 |
| ix_uni_index | department_code | no | 4 |
| ix_uni_index | material_code | no | 5 |
| ix_uni_index | movement_type | no | 6 |
| PRIMARY | stock_sap_trans_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_cutpay_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cutpay_item_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| warehouse_remain_qty | int(11) | YES |  | NULL |  |  |
| stock_cutpay_id | int(11) | YES | MUL | NULL |  |  |
| total_price | double(22,8) | YES |  | NULL |  |  |
| cutpay_item_id | int(11) | YES |  | NULL |  |  |
| cutpay_id | int(11) | YES |  | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| cutpay_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| item_remark | varchar(200) | YES |  | NULL |  |  |
| unit_cost | double(15,3) | YES |  | NULL |  |  |
| inc_expire | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_cutpay_id | stock_cutpay_id | no | 1 |
| PRIMARY | stock_cutpay_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

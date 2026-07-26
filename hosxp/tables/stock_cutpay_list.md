# `stock_cutpay_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cutpay_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_cutpay_id | int(11) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_cutpay_qty | int(11) | YES |  | NULL |  |  |
| stock_cutpay_unitcost | double(15,5) | YES |  | NULL |  |  |
| stock_cutpay_price | double(15,3) | YES |  | NULL |  |  |
| stock_cutpay_left_qty | int(11) | YES |  | NULL |  |  |
| stock_cutpay_unitqty | int(11) | YES |  | NULL |  |  |
| stock_cutpay_item_id | int(11) | YES | MUL | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| reference_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| statusadjust | varchar(10) | YES |  | NULL |  |  |
| stock_package_qty_balance | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_stock_cutpay_id | stock_cutpay_id | no | 1 |
| ix_stock_cutpay_item_id | stock_cutpay_item_id | no | 1 |
| PRIMARY | stock_cutpay_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

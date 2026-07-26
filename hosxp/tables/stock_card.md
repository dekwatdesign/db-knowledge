# `stock_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_card_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| inv_no | varchar(150) | YES | MUL | NULL |  |  |
| transaction_date | date | YES | MUL | NULL |  |  |
| lotno | varchar(150) | YES |  | NULL |  |  |
| expire_date | date | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| transaction_type | varchar(150) | YES |  | NULL |  |  |
| inv_name | varchar(200) | YES | MUL | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| display_id | int(11) | YES |  | NULL |  |  |
| stock_card_type | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| in_money | double(15,3) | YES |  | NULL |  |  |
| out_money | double(15,3) | YES |  | NULL |  |  |
| left_unit_display | varchar(250) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| unit_in_qty | int(11) | YES |  | NULL |  |  |
| unit_out_qty | int(11) | YES |  | NULL |  |  |
| unit_total | int(11) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| string_unitname | varchar(30) | YES |  | NULL |  |  |
| total_money | double(22,8) | YES |  | NULL |  |  |
| left_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| expire_date | expire_date | no | 1 |
| inv_name | inv_name | no | 1 |
| inv_no | inv_no | no | 1 |
| item_id | item_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_card_id | yes | 1 |
| transaction_date | transaction_date | no | 1 |
| warehouse_id | warehouse_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

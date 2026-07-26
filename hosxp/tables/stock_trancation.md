# `stock_trancation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_trancation_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| inv_no | varchar(150) | YES |  | NULL |  |  |
| transaction_date | date | YES |  | NULL |  |  |
| lotno | varchar(150) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| transaction_type | varchar(150) | YES |  | NULL |  |  |
| inv_name | varchar(200) | YES |  | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| display_id | int(11) | YES |  | NULL |  |  |
| stock_card_type | varchar(20) | YES |  | NULL |  |  |
| left_unit_display | varchar(250) | YES |  | NULL |  |  |
| transaction_datetime | date | YES |  | NULL |  |  |
| unit_in_qty | int(11) | YES |  | NULL |  |  |
| unit_out_qty | int(11) | YES |  | NULL |  |  |
| unit_total | int(11) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| string_unitname | varchar(30) | YES |  | NULL |  |  |
| price | double(22,8) | YES |  | NULL |  |  |
| in_money | double(22,8) | YES |  | NULL |  |  |
| out_money | double(22,8) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_trancation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_wh_donation_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_donation_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_wh_donation_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| package_qty | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| package_unit_price | double(15,3) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| lotno | varchar(100) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_did | stock_wh_donation_id | no | 1 |
| PRIMARY | stock_wh_donation_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

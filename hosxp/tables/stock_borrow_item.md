# `stock_borrow_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| borrow_item_id | int(11) | NO | PRI | 0 |  |  |
| borrow_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| borrow_item_qty | int(11) | YES |  | NULL |  |  |
| borrow_item_status | char(1) | YES |  | NULL |  |  |
| borrow_unit_price | double(15,3) | YES |  | NULL |  |  |
| borrow_item_unit | varchar(50) | YES |  | NULL |  |  |
| borrow_total_price | double(15,3) | YES |  | NULL |  |  |
| borrow_item_lotno | varchar(50) | YES |  | NULL |  |  |
| borrow_item_expire | date | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | borrow_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

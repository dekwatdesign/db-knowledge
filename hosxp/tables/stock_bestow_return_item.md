# `stock_bestow_return_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_bestow_return_id | int(11) | YES |  | NULL |  |  |
| stock_bestow_return_item_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| return_package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| stock_bestow_expire | date | YES |  | NULL |  |  |
| stock_bestow_lotno | varchar(50) | YES |  | NULL |  |  |
| bestow_item_status | char(1) | YES |  | NULL |  |  |
| stock_bestow_item_id | int(11) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| item_price | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_bestow_return_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

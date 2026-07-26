# `stock_bestow_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_bestow_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_bestow_item_id | int(11) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| stock_pack_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| stock_bestow_id | int(11) | YES | MUL | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| stock_bestow_unitcost | double(15,8) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_stock_bestow_id | stock_bestow_id | no | 1 |
| ix_stock_bestow_item_id | stock_bestow_item_id | no | 1 |
| PRIMARY | stock_bestow_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

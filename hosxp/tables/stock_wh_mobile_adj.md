# `stock_wh_mobile_adj`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_mobile_adj_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_package_qty_balance | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| check_date | date | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| selected | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_check_date | check_date | no | 1 |
| PRIMARY | stock_wh_mobile_adj_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

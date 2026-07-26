# `stock_adjust_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adjust_item_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_balance_qty | int(11) | YES |  | NULL |  |  |
| stock_adj_head_id | int(11) | YES | MUL | NULL |  |  |
| item_adj_qty | int(11) | YES |  | NULL |  |  |
| item_remain_qty | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,5) | YES |  | NULL |  |  |
| total_balance_price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(100) | YES |  | NULL |  |  |
| item_expire | date | YES |  | NULL |  |  |
| stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| stock_adjust_item_type_id | int(11) | YES |  | NULL |  |  |
| old_expire_date | date | YES |  | NULL |  |  |
| new_lotno | varchar(100) | YES |  | NULL |  |  |
| create_po | char(1) | YES |  | NULL |  |  |
| last_left_qty | int(11) | YES |  | NULL |  |  |
| adj_stat_qty | int(11) | YES |  | NULL |  |  |
| item_code | varchar(25) | YES |  | NULL |  |  |
| item_code1 | varchar(2) | YES |  | NULL |  |  |
| item_code2 | varchar(2) | YES |  | NULL |  |  |
| item_name_ref | varchar(150) | YES |  | NULL |  |  |
| item_code3 | varchar(2) | YES |  | NULL |  |  |
| adj_check_no_change | char(1) | YES |  | NULL |  |  |
| adj_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_adj_head_id | stock_adj_head_id | no | 1 |
| PRIMARY | stock_adjust_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

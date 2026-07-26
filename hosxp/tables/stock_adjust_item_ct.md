# `stock_adjust_item_ct`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adjust_item_ct_id | int(11) | NO | PRI | 0 |  |  |
| stock_adj_head_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_balance_qty | int(11) | YES |  | NULL |  |  |
| item_adj_qty | int(11) | YES |  | NULL |  |  |
| item_remain_qty | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,5) | YES |  | NULL |  |  |
| total_balance_price | double(15,3) | YES |  | NULL |  |  |
| item1_lotno | varchar(100) | YES |  | NULL |  |  |
| item1_expire | date | YES |  | NULL |  |  |
| item1_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item2_lotno | varchar(100) | YES |  | NULL |  |  |
| item2_expire | date | YES |  | NULL |  |  |
| item2_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item3_lotno | varchar(100) | YES |  | NULL |  |  |
| item3_expire | date | YES |  | NULL |  |  |
| item3_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item4_lotno | varchar(100) | YES |  | NULL |  |  |
| item4_expire | date | YES |  | NULL |  |  |
| item4_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item5_lotno | varchar(100) | YES |  | NULL |  |  |
| item5_expire | date | YES |  | NULL |  |  |
| item5_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item6_lotno | varchar(100) | YES |  | NULL |  |  |
| item6_expire | date | YES |  | NULL |  |  |
| item6_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item7_lotno | varchar(100) | YES |  | NULL |  |  |
| item7_expire | date | YES |  | NULL |  |  |
| item7_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item8_lotno | varchar(100) | YES |  | NULL |  |  |
| item8_expire | date | YES |  | NULL |  |  |
| item8_stock_package_qty | int(11) | YES |  | NULL |  |  |
| item9_lotno | varchar(100) | YES |  | NULL |  |  |
| item9_expire | date | YES |  | NULL |  |  |
| item9_stock_package_qty | int(11) | YES |  | NULL |  |  |
| last_left_qty | int(11) | YES |  | NULL |  |  |
| adj_stat_qty | int(11) | YES |  | NULL |  |  |
| item_code | varchar(25) | YES |  | NULL |  |  |
| item_code1 | varchar(2) | YES |  | NULL |  |  |
| item_code2 | varchar(2) | YES |  | NULL |  |  |
| item1_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item2_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item3_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item4_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item5_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item6_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item7_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item8_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item9_stock_draw_stat_id | int(11) | YES |  | NULL |  |  |
| item_change | char(1) | YES |  | NULL |  |  |
| item_name_ref | varchar(150) | YES |  | NULL |  |  |
| item_code3 | varchar(2) | YES |  | NULL |  |  |
| total_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_adj_head_id | stock_adj_head_id | no | 1 |
| PRIMARY | stock_adjust_item_ct_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

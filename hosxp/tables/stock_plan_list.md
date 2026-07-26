# `stock_plan_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_plan_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_plan_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| period1_qty | int(11) | YES |  | NULL |  |  |
| period2_qty | int(11) | YES |  | NULL |  |  |
| period3_qty | int(11) | YES |  | NULL |  |  |
| period4_qty | int(11) | YES |  | NULL |  |  |
| total_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_name | varchar(250) | YES |  | NULL |  |  |
| item_unit | varchar(100) | YES |  | NULL |  |  |
| period1_amount | double(15,3) | YES |  | NULL |  |  |
| period2_amount | double(15,3) | YES |  | NULL |  |  |
| period3_amount | double(15,3) | YES |  | NULL |  |  |
| period4_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| last_1_year_qty | int(11) | YES |  | NULL |  |  |
| last_2_year_qty | int(11) | YES |  | NULL |  |  |
| last_3_year_qty | int(11) | YES |  | NULL |  |  |
| current_qty | int(11) | YES |  | NULL |  |  |
| unit_cost | double(15,3) | YES |  | NULL |  |  |
| inc_percent | double(15,3) | YES |  | NULL |  |  |
| item_type_name | varchar(100) | YES |  | NULL |  |  |
| period1_po_qty | int(11) | YES |  | NULL |  |  |
| period2_po_qty | int(11) | YES |  | NULL |  |  |
| period3_po_qty | int(11) | YES |  | NULL |  |  |
| period4_po_qty | int(11) | YES |  | NULL |  |  |
| period1_po_amount | double(15,3) | YES |  | NULL |  |  |
| period2_po_amount | double(15,3) | YES |  | NULL |  |  |
| period3_po_amount | double(15,3) | YES |  | NULL |  |  |
| period4_po_amount | double(15,3) | YES |  | NULL |  |  |
| total_po_qty | int(11) | YES |  | NULL |  |  |
| total_po_amount | double(15,3) | YES |  | NULL |  |  |
| year_qty | int(11) | YES |  | NULL |  |  |
| trend_1_yr_b0 | double(15,3) | YES |  | NULL |  |  |
| trend_1_yr_b1 | double(15,3) | YES |  | NULL |  |  |
| trend_3_yr_b0 | double(15,3) | YES |  | NULL |  |  |
| trend_3_yr_b1 | double(15,3) | YES |  | NULL |  |  |
| trend_1_yr_point | int(11) | YES |  | NULL |  |  |
| trend_1_yr_rsd | double(15,3) | YES |  | NULL |  |  |
| trend_1_yr_r2 | double(15,3) | YES |  | NULL |  |  |
| trend_1_yr_mean | double(15,3) | YES |  | NULL |  |  |
| trend_1_yr_sd | double(15,3) | YES |  | NULL |  |  |
| incoming_balance_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| manual_calc | char(1) | YES |  | NULL |  |  |
| package_unit_cost | double(15,3) | YES |  | NULL |  |  |
| package_incoming_balance_qty | int(11) | YES |  | NULL |  |  |
| package_current_qty | int(11) | YES |  | NULL |  |  |
| package_total_qty | int(11) | YES |  | NULL |  |  |
| package_total_amount | double(15,3) | YES |  | NULL |  |  |
| package_period1_qty | int(11) | YES |  | NULL |  |  |
| package_period2_qty | int(11) | YES |  | NULL |  |  |
| package_period3_qty | int(11) | YES |  | NULL |  |  |
| package_period4_qty | int(11) | YES |  | NULL |  |  |
| forcast_qty | int(11) | YES |  | NULL |  |  |
| stock_sub_class_name | varchar(100) | YES |  | NULL |  |  |
| stock_class_name | varchar(200) | YES |  | NULL |  |  |
| stock_item_ed_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_plan_id | stock_plan_id | no | 1 |
| ix_stock_plan_id_item_id | stock_plan_id | no | 1 |
| ix_stock_plan_id_item_id | item_id | no | 2 |
| ix_stock_plan_id_item_id_index | item_id | no | 1 |
| ix_stock_plan_id_item_id_index | stock_plan_id | no | 2 |
| PRIMARY | stock_plan_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

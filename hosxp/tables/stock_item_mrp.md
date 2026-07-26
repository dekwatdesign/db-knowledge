# `stock_item_mrp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_mrp_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| avg_day | int(11) | YES |  | NULL |  |  |
| rate_qty | int(11) | YES |  | NULL |  |  |
| extra_factor | double(15,3) | YES |  | NULL |  |  |
| max_factor | double(15,3) | YES |  | NULL |  |  |
| min_qty | int(11) | YES |  | NULL |  |  |
| max_qty | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| rate_day_qty | double(15,5) | YES |  | NULL |  |  |
| rate_month_qty | double(15,5) | YES |  | NULL |  |  |
| onhand_qty | int(11) | YES |  | NULL |  |  |
| reorder_qty | int(11) | YES |  | NULL |  |  |
| need_order | char(1) | YES |  | NULL |  |  |
| last_draw_date | date | YES |  | NULL |  |  |
| last_draw_qty | int(11) | YES |  | NULL |  |  |
| po_pr_qty | int(11) | YES |  | NULL |  |  |
| lot_size_qty | int(11) | YES |  | NULL |  |  |
| manual_cac_min_max | char(1) | YES |  | NULL |  |  |
| remain_month | double(15,3) | YES |  | NULL |  |  |
| expire_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | item_id | yes | 1 |
| ix_uni | department_id | yes | 2 |
| ix_uni_index | department_id | yes | 1 |
| ix_uni_index | item_id | yes | 2 |
| PRIMARY | stock_item_mrp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_draw_prepack`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_prepack_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| prepack_date | date | YES |  | NULL |  |  |
| mfg_date | date | YES |  | NULL |  |  |
| best_before_date | date | YES |  | NULL |  |  |
| prepack_batch_no | varchar(200) | YES |  | NULL |  |  |
| prepack_officer_id | int(11) | YES |  | NULL |  |  |
| prepack_batch_qty | int(11) | YES |  | NULL |  |  |
| prepack_qty | int(11) | YES |  | NULL |  |  |
| prepack_usage_line1 | varchar(200) | YES |  | NULL |  |  |
| prepack_usage_line2 | varchar(200) | YES |  | NULL |  |  |
| prepack_usage_line3 | varchar(200) | YES |  | NULL |  |  |
| prepack_usage_line4 | varchar(200) | YES |  | NULL |  |  |
| prepack_usage_line5 | varchar(200) | YES |  | NULL |  |  |
| prepack_lot_no | varchar(100) | YES |  | NULL |  |  |
| prepack_item_left_qty | int(11) | YES |  | NULL |  |  |
| prepack_item_use_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_draw_prepack_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

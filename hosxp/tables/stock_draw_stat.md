# `stock_draw_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_stat_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(100) | YES |  | NULL |  |  |
| item_expire | date | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | no | 1 |
| ix_item_id_dep_id | item_id | no | 1 |
| ix_item_id_dep_id | department_id | no | 2 |
| ix_item_id_dep_id_index | department_id | no | 1 |
| ix_item_id_dep_id_index | item_id | no | 2 |
| ix_item_lot_exp_unique | item_id | yes | 1 |
| ix_item_lot_exp_unique | department_id | yes | 2 |
| ix_item_lot_exp_unique | stock_item_unit_id | yes | 3 |
| ix_item_lot_exp_unique | item_lotno | yes | 4 |
| ix_item_lot_exp_unique | item_expire | yes | 5 |
| ix_item_lot_exp_unique_index | department_id | yes | 1 |
| ix_item_lot_exp_unique_index | item_expire | yes | 2 |
| ix_item_lot_exp_unique_index | item_id | yes | 3 |
| ix_item_lot_exp_unique_index | item_lotno | yes | 4 |
| ix_item_lot_exp_unique_index | stock_item_unit_id | yes | 5 |
| PRIMARY | stock_draw_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

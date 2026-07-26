# `dt_lab_cost`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_cost_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_cost_qty | int(11) | YES |  | NULL |  |  |
| dt_lab_cost_sum_price | double(13,3) | YES |  | NULL |  |  |
| dt_lab_cost_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_items_id | int(11) | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_cost_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_wh_cf_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_cf_head_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| stock_cf_month | int(11) | YES | MUL | NULL |  |  |
| stock_cf_year | int(11) | YES |  | NULL |  |  |
| stock_cf_date | date | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| total_amount | double(22,3) | YES |  | NULL |  |  |
| stock_cf_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | warehouse_id | no | 1 |
| ix_unique | stock_cf_year | no | 2 |
| ix_unique | stock_cf_month | no | 3 |
| ix_unique_index | stock_cf_month | no | 1 |
| ix_unique_index | stock_cf_year | no | 2 |
| ix_unique_index | warehouse_id | no | 3 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | stock_wh_cf_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

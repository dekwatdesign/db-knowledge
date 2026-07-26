# `stock_wh_cf_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_cf_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_wh_cf_head_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| package_qty | double(15,3) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_wh_cf_head_id | stock_wh_cf_head_id | no | 1 |
| PRIMARY | stock_wh_cf_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

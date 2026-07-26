# `stock_return_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_return_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| reference_id | int(11) | YES |  | NULL |  |  |
| stock_return_item_id | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_return_id | stock_return_id | no | 1 |
| ix_stock_draw_list_id | stock_draw_list_id | no | 1 |
| PRIMARY | stock_return_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

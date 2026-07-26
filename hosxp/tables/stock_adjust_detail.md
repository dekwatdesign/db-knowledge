# `stock_adjust_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adj_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_adj_head_id | int(11) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| original_qty | int(11) | YES |  | NULL |  |  |
| stock_adjust_item_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| stock_adjust_item_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_search | stock_draw_list_id | no | 1 |
| ix_search | stock_adjust_item_type_id | no | 2 |
| ix_search_index | stock_adjust_item_type_id | no | 1 |
| ix_search_index | stock_draw_list_id | no | 2 |
| ix_stock_adjust_item_id | stock_adjust_item_id | no | 1 |
| PRIMARY | stock_adj_detail_id | yes | 1 |
| stock_draw_list_id | stock_draw_list_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

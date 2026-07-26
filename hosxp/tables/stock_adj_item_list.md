# `stock_adj_item_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adj_item_list_id | int(11) | NO | PRI | 0 |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| user_id | int(11) | YES |  | NULL |  |  |
| trancation_date | datetime | YES |  | NULL |  |  |
| before_amount | int(11) | YES |  | NULL |  |  |
| after_amount | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| after_price | double(22,3) | YES |  | NULL |  |  |
| before_price | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_adj_item_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

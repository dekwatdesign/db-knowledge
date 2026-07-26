# `stock_dep_adj_stat_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_adj_stat_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_adj_stat_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(100) | YES |  | NULL |  |  |
| package_qty | int(11) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| item_code | varchar(25) | YES |  | NULL |  |  |
| item_code1 | varchar(2) | YES |  | NULL |  |  |
| item_code2 | varchar(2) | YES |  | NULL |  |  |
| item_order_no | int(11) | YES |  | NULL |  |  |
| item_code3 | char(2) | YES |  | NULL |  |  |
| item_name_ref | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_dep_adj_stat_id | no | 1 |
| PRIMARY | stock_dep_adj_stat_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

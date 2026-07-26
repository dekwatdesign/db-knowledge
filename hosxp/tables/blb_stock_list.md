# `blb_stock_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_stock_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_stock_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_stock_id | blb_stock_id | no | 1 |
| PRIMARY | blb_stock_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

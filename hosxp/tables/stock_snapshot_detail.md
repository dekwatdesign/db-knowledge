# `stock_snapshot_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_snapshot_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_snapshot_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| total_price | double(15,5) | YES |  | NULL |  |  |
| avg_unit_cost | double(15,5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_snapshot_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_item_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_history_id | int(11) | NO | PRI | 0 |  |  |
| snapshot_period | int(11) | YES | MUL | NULL |  |  |
| transfer_qty | int(11) | YES |  | NULL |  |  |
| use_qty | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| left_price | double(15,5) | YES |  | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_snapshot_period | snapshot_period | no | 1 |
| PRIMARY | stock_item_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

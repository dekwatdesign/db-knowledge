# `stock_item_balance_chk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_balance_chk_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| last_change_tick | int(11) | YES | MUL | NULL |  |  |
| last_update_tick | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_change_update | last_change_tick | no | 1 |
| ix_change_update | last_update_tick | no | 2 |
| ix_item_id_whid | item_id | yes | 1 |
| ix_item_id_whid | warehouse_id | yes | 2 |
| PRIMARY | stock_item_balance_chk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

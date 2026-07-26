# `stock_dep_lot_tran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_lot_tran_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| tran_staff | varchar(50) | YES |  | NULL |  |  |
| tran_datetime | datetime | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_dep_lot_tran_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

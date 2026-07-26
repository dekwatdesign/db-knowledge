# `stock_dep_lot_tran_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_lot_tran_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_lot_tran_id | int(11) | YES | MUL | NULL |  |  |
| lotno | varchar(100) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_dep_lot_tran_id | no | 1 |
| PRIMARY | stock_dep_lot_tran_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_lend`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_lend_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| return_ok | char(1) | YES |  | NULL |  |  |
| return_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_po_id | stock_po_id | no | 1 |
| PRIMARY | stock_lend_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

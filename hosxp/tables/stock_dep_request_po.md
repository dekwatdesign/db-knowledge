# `stock_dep_request_po`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_po_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_id | int(11) | YES | MUL | NULL |  |  |
| po_no | varchar(50) | YES |  | NULL |  |  |
| po_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_dep_request_id | stock_dep_request_id | no | 1 |
| PRIMARY | stock_dep_request_po_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

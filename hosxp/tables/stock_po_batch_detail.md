# `stock_po_batch_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_batch_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_batch_head_id | int(11) | YES | MUL | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_head_id | stock_po_batch_head_id | no | 1 |
| PRIMARY | stock_po_batch_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_po_batch_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_batch_head_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_batch_date | date | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| detail_count | int(11) | YES |  | NULL |  |  |
| batch_note | text | YES |  | NULL |  |  |
| sum_po_amount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_po_batch_date | stock_po_batch_date | no | 1 |
| PRIMARY | stock_po_batch_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

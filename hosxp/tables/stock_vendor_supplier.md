# `stock_vendor_supplier`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_supplier_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| supplier_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_supplier | supplier_id | no | 1 |
| ix_supplier_vendor | stock_vendor_id | no | 1 |
| ix_supplier_vendor | supplier_id | no | 2 |
| ix_vendor | stock_vendor_id | no | 1 |
| PRIMARY | stock_vendor_supplier_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `stock_vendor_qt_premium`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_qt_premium_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_quotation_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| premium_qty | int(11) | YES |  | NULL |  |  |
| stock_vendor_premium_type_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_qt_ppp_id | int(11) | YES | MUL | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_qt_ppp_id | stock_vendor_qt_ppp_id | no | 1 |
| ix_stock_vendor_quotation_id | stock_vendor_quotation_id | no | 1 |
| PRIMARY | stock_vendor_qt_premium_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

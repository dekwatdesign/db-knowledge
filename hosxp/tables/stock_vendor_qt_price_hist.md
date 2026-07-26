# `stock_vendor_qt_price_hist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_qt_price_hist_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| price_start_date | date | YES |  | NULL |  |  |
| price_end_date | date | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| price_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vendor_id | stock_vendor_id | no | 1 |
| PRIMARY | stock_vendor_qt_price_hist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

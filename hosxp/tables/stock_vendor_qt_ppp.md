# `stock_vendor_qt_ppp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_qt_ppp_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_qt_ppp_name | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_quotation_id | int(11) | YES | MUL | NULL |  |  |
| stock_vendor_qt_ppp_min_qty | int(11) | YES |  | NULL |  |  |
| ppp_start_date | date | YES |  | NULL |  |  |
| ppp_end_date | date | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| bill_discount | double(15,3) | YES |  | NULL |  |  |
| total_price_no_vat | double(15,3) | YES |  | NULL |  |  |
| discount_baht | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_vendor_quotation_id | no | 1 |
| PRIMARY | stock_vendor_qt_ppp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

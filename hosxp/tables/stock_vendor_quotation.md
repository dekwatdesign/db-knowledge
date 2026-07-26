# `stock_vendor_quotation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_quotation_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| unit_price_no_vat | double(15,3) | YES |  | NULL |  |  |
| unit_price_incl_vat | double(15,3) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| premium_qty | int(11) | YES |  | NULL |  |  |
| quotation_date | date | YES |  | NULL |  |  |
| quotation_start_date | date | YES |  | NULL |  |  |
| quotation_finish_date | date | YES |  | NULL |  |  |
| deliver_day | int(11) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| show_alert_check_price | char(1) | YES |  | NULL |  |  |
| quotation_active | char(1) | YES |  | NULL |  |  |
| base_unit_price_incl_vat | double(15,3) | YES |  | NULL |  |  |
| base_unit_price_no_vat | double(15,3) | YES |  | NULL |  |  |
| quoation_vat_percent | double(15,3) | YES |  | NULL |  |  |
| min_eff_date | date | YES |  | NULL |  |  |
| max_eff_date | date | YES |  | NULL |  |  |
| sum_price_no_vat | double(15,3) | YES |  | NULL |  |  |
| sum_price_incl_vat | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_id | stock_vendor_id | no | 1 |
| PRIMARY | stock_vendor_quotation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

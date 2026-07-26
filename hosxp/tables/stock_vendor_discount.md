# `stock_vendor_discount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_discount_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| stock_vendor_dscount_name | varchar(200) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| stock_paid_type_id | int(11) | YES |  | NULL |  |  |
| discount_condition_amount | double(15,3) | YES |  | NULL |  |  |
| stock_disc_condition_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_id | stock_vendor_id | no | 1 |
| PRIMARY | stock_vendor_discount_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

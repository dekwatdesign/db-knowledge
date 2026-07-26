# `customer_prsc_dt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_prsc_dt_id | int(11) | NO | PRI | 0 |  |  |
| customer_prsc_id | int(11) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unit_cost | double(15,3) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| discount_price | double(15,3) | YES |  | NULL |  |  |
| total_unit_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| item_code | varchar(50) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| vat_percent | double(15,3) | YES |  | NULL |  |  |
| vat_price | double(15,3) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| request_ok | char(1) | YES |  | NULL |  |  |
| package_qty | int(11) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cpid | customer_prsc_id | no | 1 |
| PRIMARY | customer_prsc_dt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

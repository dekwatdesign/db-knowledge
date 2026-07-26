# `stock_vendor_contract`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_contract_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| contract_begin_date | date | YES |  | NULL |  |  |
| contract_end_date | date | YES |  | NULL |  |  |
| max_package_qty | int(11) | YES |  | NULL |  |  |
| contract_no | varchar(100) | YES | MUL | NULL |  |  |
| po_package_qty | int(11) | YES |  | NULL |  |  |
| remain_package_qty | int(11) | YES |  | NULL |  |  |
| package_unit_price | double(15,3) | YES |  | NULL |  |  |
| package_total_price | double(15,3) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| contract_note | text | YES |  | NULL |  |  |
| contract_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_contract_on | contract_no | no | 1 |
| ix_vendor_id | stock_vendor_id | no | 1 |
| PRIMARY | stock_vendor_contract_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

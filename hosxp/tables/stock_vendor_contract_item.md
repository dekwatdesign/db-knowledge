# `stock_vendor_contract_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_contract_item_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_contract_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| max_package_qty | int(11) | YES |  | NULL |  |  |
| po_package_qty | int(11) | YES |  | NULL |  |  |
| remain_package_qty | int(11) | YES |  | NULL |  |  |
| package_unit_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_contract_id | stock_vendor_contract_id | no | 1 |
| PRIMARY | stock_vendor_contract_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

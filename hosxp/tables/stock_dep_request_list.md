# `stock_dep_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| stock_package_qty | int(11) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| request_note | varchar(200) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| monthly_rate_qty | int(11) | YES |  | NULL |  |  |
| previous_price | double(15,3) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_mtr_id | int(11) | YES |  | NULL |  |  |
| last_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| ref_request_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ref_request_list_id | ref_request_list_id | no | 1 |
| ix_stock_dep_request_id | stock_dep_request_id | no | 1 |
| ix_stock_po_id | stock_po_id | no | 1 |
| PRIMARY | stock_dep_request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

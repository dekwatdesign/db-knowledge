# `stock_wh_sap_imp_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_sap_imp_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_wh_sap_imp_list_id | int(11) | YES | MUL | NULL |  |  |
| mat_code | varchar(50) | YES |  | NULL |  |  |
| mat_name | varchar(200) | YES |  | NULL |  |  |
| unit_name | varchar(100) | YES |  | NULL |  |  |
| avg_price | double(15,3) | YES |  | NULL |  |  |
| mat_status | varchar(50) | YES |  | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |
| onhand_qty | int(11) | YES |  | NULL |  |  |
| warehouse_qty | int(11) | YES |  | NULL |  |  |
| diff_qty | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| imp_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_list_id | stock_wh_sap_imp_list_id | no | 1 |
| PRIMARY | stock_wh_sap_imp_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

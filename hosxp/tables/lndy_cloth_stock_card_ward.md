# `lndy_cloth_stock_card_ward`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_stock_card_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_stock_card_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_stock_card_name | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_stock_card_text | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_stock_card_no | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_stock_in_qty | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_stock_out_qty | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_stock_total_qty | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_department_id | lndy_cloth_department_id | no | 1 |
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_stock_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

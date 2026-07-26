# `stock_supplier_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supplier_item_id | int(11) | NO | PRI | 0 |  |  |
| supplier_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| item_price | double(15,3) | YES |  | NULL |  |  |
| item_note | varchar(200) | YES |  | NULL |  |  |
| trade_name | varchar(150) | YES |  | NULL |  |  |
| item_date | date | YES |  | NULL |  |  |
| item_tax | char(1) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| po_min_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| item_refno | varchar(50) | YES |  | NULL |  |  |
| item_barcode | varchar(30) | YES | MUL | NULL |  |  |
| tmt_tpu_code | varchar(6) | YES |  | NULL |  |  |
| supplier_item_code | varchar(30) | YES |  | NULL |  |  |
| vendor_item_code | varchar(30) | YES |  | NULL |  |  |
| manufacturer_id | int(11) | YES | MUL | NULL |  |  |
| stock_representative_id | int(11) | YES |  | NULL |  |  |
| tmt_gpu_code | varchar(6) | YES |  | NULL |  |  |
| trade_name_supplier_name | varchar(200) | YES |  | NULL |  |  |
| innovation_reg_date | date | YES |  | NULL |  |  |
| innovation_end_date | date | YES |  | NULL |  |  |
| stock_item_dit_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| item_id | item_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_barcode | item_barcode | no | 1 |
| ix_manufac_id | manufacturer_id | no | 1 |
| ix_supp_uni | supplier_id | yes | 1 |
| ix_supp_uni | stock_item_unit_id | yes | 2 |
| ix_supp_uni_index | stock_item_unit_id | yes | 1 |
| ix_supp_uni_index | supplier_id | yes | 2 |
| PRIMARY | supplier_item_id | yes | 1 |
| supplier_id | supplier_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

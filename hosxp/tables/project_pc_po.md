# `project_pc_po`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_po_id | int(11) | NO | PRI | 0 |  |  |
| project_procurement_id | int(11) | YES | MUL | NULL |  |  |
| project_pc_po_date | date | YES |  | NULL |  |  |
| po_document_no | varchar(50) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| project_pc_po_type_id | int(11) | YES |  | NULL |  |  |
| quotation_no | varchar(200) | YES |  | NULL |  |  |
| vat_percent | double(15,3) | YES |  | NULL |  |  |
| price_inc_vat | char(1) | YES |  | NULL |  |  |
| project_vendor_id | int(11) | YES | MUL | NULL |  |  |
| po_note_text | text | YES |  | NULL |  |  |
| total_price_before_vat | double(22,3) | YES |  | NULL |  |  |
| vat_price | double(22,3) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pc_id | project_procurement_id | no | 1 |
| ix_vendor_id | project_vendor_id | no | 1 |
| PRIMARY | project_pc_po_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

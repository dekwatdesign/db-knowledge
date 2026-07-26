# `stock_dep_donation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_donation_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_donation_date | date | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| donation_note | text | YES |  | NULL |  |  |
| donation_complete | char(1) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| donation_doc_number | varchar(100) | YES |  | NULL |  |  |
| donation_doc_number_dn | varchar(100) | YES |  | NULL |  |  |
| donor_name | varchar(200) | YES |  | NULL |  |  |
| stock_draw_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| donation_department_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_dep_donation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

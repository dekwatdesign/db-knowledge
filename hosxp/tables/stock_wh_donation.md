# `stock_wh_donation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_donation_id | int(11) | NO | PRI | 0 |  |  |
| stock_wh_donation_date | date | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| donation_note | text | YES |  | NULL |  |  |
| donation_complete | char(1) | YES |  | NULL |  |  |
| donation_doc_number | varchar(100) | YES |  | NULL |  |  |
| donation_doc_number_dn | varchar(100) | YES |  | NULL |  |  |
| donor_name | varchar(200) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| stock_wh_donation_type_id | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_wh_donation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

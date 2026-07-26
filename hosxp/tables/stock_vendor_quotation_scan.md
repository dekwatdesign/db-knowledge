# `stock_vendor_quotation_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_quotation_scan_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_quotation_id | int(11) | YES | MUL | NULL |  |  |
| scan_data_blob | longblob | YES |  | NULL |  |  |
| stock_vendor_quotation_name | varchar(200) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| file_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_vendor_quotation_id | no | 1 |
| PRIMARY | stock_vendor_quotation_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

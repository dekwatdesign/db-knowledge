# `stock_cutpay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cutpay_id | int(11) | NO | PRI | 0 |  |  |
| stock_cutpay_date | date | YES | MUL | NULL |  |  |
| stock_cutpay_no | varchar(50) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_cutpay_officer_name | varchar(100) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| cutpay_type_id | int(11) | YES | MUL | NULL |  |  |
| reference_id | int(11) | YES | MUL | NULL |  |  |
| cutpay_id | int(11) | YES |  | NULL |  |  |
| cutpay_date | date | YES |  | NULL |  |  |
| cutpay_no | varchar(50) | YES |  | NULL |  |  |
| cutpay_officer_name | varchar(100) | YES |  | NULL |  |  |
| dest_warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| cutpay_item_id | varchar(10) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_cutpay_document_id | varchar(50) | YES |  | NULL |  |  |
| stock_subtransfer_id | int(11) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cutpaytypeid | cutpay_type_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_reference_id | reference_id | no | 1 |
| ix_stock_cutpay_date | stock_cutpay_date | no | 1 |
| PRIMARY | stock_cutpay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

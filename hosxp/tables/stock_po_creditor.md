# `stock_po_creditor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_creditor_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| creditor_date | date | YES |  | NULL |  |  |
| creditor_document_no | varchar(100) | YES |  | NULL |  |  |
| creditor_amount | double(15,3) | YES |  | NULL |  |  |
| payment_date | date | YES |  | NULL |  |  |
| stock_po_payment_status_id | int(11) | YES |  | NULL |  |  |
| payment_document_no | varchar(100) | YES |  | NULL |  |  |
| stock_po_document_status_id | int(11) | YES |  | NULL |  |  |
| transfer_finance | char(1) | YES |  | NULL |  |  |
| transfer_account | char(1) | YES |  | NULL |  |  |
| finance_check_datetime | datetime | YES |  | NULL |  |  |
| finance_document_status_id | int(11) | YES |  | NULL |  |  |
| acc_creditor_date | date | YES |  | NULL |  |  |
| acc_creditor_confirm | char(1) | YES |  | NULL |  |  |
| acc_creditor_refno | varchar(100) | YES |  | NULL |  |  |
| stock_payment_type_id | int(11) | YES |  | NULL |  |  |
| po_note | varchar(250) | YES |  | NULL |  |  |
| finance_note | varchar(250) | YES |  | NULL |  |  |
| acc_note | varchar(250) | YES |  | NULL |  |  |
| paid_confirm | char(1) | YES |  | NULL |  |  |
| step_1_staff | varchar(25) | YES |  | NULL |  |  |
| step_2_staff | varchar(25) | YES |  | NULL |  |  |
| step_3_staff | varchar(25) | YES |  | NULL |  |  |
| step_4_staff | varchar(25) | YES |  | NULL |  |  |
| acc_po_invoice_doc_type_name | varchar(100) | YES |  | NULL |  |  |
| acc_po_invoice_status_name | varchar(100) | YES |  | NULL |  |  |
| acc_invoice_check_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_po_id | stock_po_id | no | 1 |
| PRIMARY | stock_po_creditor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

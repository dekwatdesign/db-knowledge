# `stock_deliver`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_deliver_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| stock_deliver_date | date | YES |  | NULL |  |  |
| stock_receive_date | date | YES |  | NULL |  |  |
| stock_deliver_no | varchar(50) | YES |  | NULL |  |  |
| stock_deliver_paid_date | date | YES |  | NULL |  |  |
| stock_deliver_complete | char(1) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| cancel_confirm | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| inv_receive_no | varchar(25) | YES | MUL | NULL |  |  |
| stock_bill_no | varchar(50) | YES |  | NULL |  |  |
| stock_ref_no | varchar(50) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_deliver_document_id | varchar(50) | YES |  | NULL |  |  |
| stock_deliver_note | text | YES |  | NULL |  |  |
| stock_deliver_remark1 | varchar(250) | YES |  | NULL |  |  |
| stock_deliver_remark2 | varchar(250) | YES |  | NULL |  |  |
| request_tag_no | varchar(20) | YES |  | NULL |  |  |
| invoice_no | varchar(200) | YES |  | NULL |  |  |
| recv_department | char(1) | YES |  | NULL |  |  |
| recv_department_id | int(11) | YES |  | NULL |  |  |
| stock_deliver_doc_no | varchar(25) | YES | MUL | NULL |  |  |
| stock_wh_recv_date | date | YES |  | NULL |  |  |
| gfmis_deliver_no | varchar(50) | YES |  | NULL |  |  |
| acc_posted | char(1) | YES |  | NULL |  |  |
| acc_posted_datetime | datetime | YES |  | NULL |  |  |
| deliver_total_price | double(22,2) | YES |  | NULL |  |  |
| amount_before_vat | double(22,2) | YES |  | NULL |  |  |
| vat_amount | double(22,2) | YES |  | NULL |  |  |
| stock_deliver_due_date | date | YES |  | NULL |  |  |
| confirm_duplicate_deliver_no | char(1) | YES |  | NULL |  |  |
| round_total_price | char(1) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| examine_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doc_no | stock_deliver_doc_no | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_inv_receive_no | inv_receive_no | no | 1 |
| ix_stock_po_id | stock_po_id | no | 1 |
| PRIMARY | stock_deliver_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

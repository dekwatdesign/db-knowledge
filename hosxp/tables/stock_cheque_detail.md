# `stock_cheque_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cheque_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_cheque_head_id | int(11) | YES | MUL | NULL |  |  |
| stock_cheque_no | varchar(50) | YES |  | NULL |  |  |
| stock_po_type | int(11) | YES |  | NULL |  |  |
| stock_cheque_date | date | YES |  | NULL |  |  |
| stock_deliver_no | varchar(50) | YES |  | NULL |  |  |
| stock_deliver_price | double(22,8) | YES |  | NULL |  |  |
| stock_vat | int(11) | YES |  | NULL |  |  |
| stock_cheque_total_price | double(22,8) | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| suppler_type | varchar(50) | YES |  | NULL |  |  |
| stock_po_document_id | varchar(50) | YES | MUL | NULL |  |  |
| stock_remark_price | double(22,8) | YES |  | NULL |  |  |
| payment_no | varchar(50) | YES |  | NULL |  |  |
| money_discount | double(22,8) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| supplier_agent_name | varchar(150) | YES |  | NULL |  |  |
| stock_cheque_documment_id | varchar(50) | YES |  | NULL |  |  |
| po_amount | double(22,8) | YES |  | NULL |  |  |
| stock_deliver_date | date | YES |  | NULL |  |  |
| stock_cheque_check_detail_id | int(11) | YES |  | NULL |  |  |
| stock_cheque_receive_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pay_amount | double(15,3) | YES |  | NULL |  |  |
| stock_cheque_detail_paytype | int(11) | YES |  | NULL |  |  |
| po_vat_amt | double(22,8) | YES |  | NULL |  |  |
| po_tax_type | varchar(1) | YES |  | NULL |  |  |
| po_netamount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_head_id | stock_cheque_head_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_po_doc_id | stock_po_document_id | no | 1 |
| PRIMARY | stock_cheque_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

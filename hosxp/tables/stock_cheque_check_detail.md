# `stock_cheque_check_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cheque_check_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_cheque_check_head_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| stock_po_document_id | varchar(50) | YES |  | NULL |  |  |
| stock_po_type | int(11) | YES |  | NULL |  |  |
| stock_deliver_price | double(22,8) | YES |  | NULL |  |  |
| po_amount | double(22,8) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_deliver_date | date | YES |  | NULL |  |  |
| supplier_id | int(11) | YES |  | NULL |  |  |
| comfirm_po | char(1) | YES |  | NULL |  |  |
| stock_remark_price | double(22,8) | YES |  | NULL |  |  |
| status | int(11) | YES |  | NULL |  |  |
| stock_ref_no | varchar(50) | YES |  | NULL |  |  |
| stock_status_cheque | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pay_amount | double(18,4) | YES |  | NULL |  |  |
| stock_cheque_check_detail_type | varchar(3) | YES |  | NULL |  |  |
| po_receive_amount | double(18,4) | YES |  | NULL |  |  |
| stock_cheque_check_calflag | double(18,4) | YES |  | NULL |  |  |
| po_amount_diff | double(18,4) | YES |  | NULL |  |  |
| po_netamount | double(18,4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_cheque_check_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

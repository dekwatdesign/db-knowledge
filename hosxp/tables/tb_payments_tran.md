# `tb_payments_tran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payments_tran_id | varchar(20) | NO | PRI |  |  |  |
| payments_doc_no | varchar(10) | NO | PRI |  |  |  |
| vn | varchar(15) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| privilege_paid | double(11,3) | YES |  | NULL |  |  |
| cash_paid | double(11,3) | YES |  | NULL |  |  |
| total_price | double(11,3) | YES |  | NULL |  |  |
| payments_sum | double(11,3) | YES |  | NULL |  |  |
| payments_tran_user | varchar(50) | YES |  | NULL |  |  |
| payments_tran_datetime | datetime | YES |  | NULL |  |  |
| edit_payments_tran_user | varchar(50) | YES |  | NULL |  |  |
| edit_payments_tran_datetime | datetime | YES |  | NULL |  |  |
| payments_user | varchar(50) | YES |  | NULL |  |  |
| payments_datetime | datetime | YES |  | NULL |  |  |
| payments_tran_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| payments_doc_no | payments_doc_no | no | 1 |
| payments_tran_id | payments_tran_id | no | 1 |
| PRIMARY | payments_tran_id | yes | 1 |
| PRIMARY | payments_doc_no | yes | 2 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

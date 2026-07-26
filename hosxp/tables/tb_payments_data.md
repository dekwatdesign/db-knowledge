# `tb_payments_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payments_tran_id | varchar(20) | NO | PRI |  |  |  |
| payments_doc_no | varchar(10) | NO | PRI |  |  |  |
| vn | varchar(15) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| type | char(2) | NO | PRI |  |  |  |
| tid | varchar(10) | NO | PRI |  |  |  |
| mid | varchar(20) | NO | PRI |  |  |  |
| apprcode | varchar(10) | NO | PRI |  |  |  |
| traceinvno | varchar(10) | NO | PRI |  |  |  |
| finance_number | varchar(10) | YES |  | NULL |  |  |
| rcpno | varchar(25) | YES |  | NULL |  |  |
| book_number | varchar(10) | YES |  | NULL |  |  |
| bill_number | varchar(10) | YES |  | NULL |  |  |
| payments_data_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | payments_tran_id | yes | 1 |
| PRIMARY | payments_doc_no | yes | 2 |
| PRIMARY | type | yes | 3 |
| PRIMARY | tid | yes | 4 |
| PRIMARY | mid | yes | 5 |
| PRIMARY | apprcode | yes | 6 |
| PRIMARY | traceinvno | yes | 7 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

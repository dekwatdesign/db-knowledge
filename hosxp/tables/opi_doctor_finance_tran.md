# `opi_doctor_finance_tran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_doctor_finance_tran_id | int(11) | NO | PRI | 0 |  |  |
| opi_doctor_finance_list_id | int(11) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| tran_date | date | YES |  | NULL |  |  |
| tran_price | double(15,3) | YES |  | NULL |  |  |
| tran_ok | char(1) | YES |  | NULL |  |  |
| rcpt_no | varchar(100) | YES |  | NULL |  |  |
| finance_number | varchar(100) | YES | MUL | NULL |  |  |
| tran_vn | varchar(12) | YES | MUL | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fn | finance_number | no | 1 |
| ix_tran_id | opi_doctor_finance_list_id | no | 1 |
| ix_vn | tran_vn | no | 1 |
| PRIMARY | opi_doctor_finance_tran_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

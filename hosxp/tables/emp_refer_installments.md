# `emp_refer_installments`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_refer_installments_id | int(11) | NO | PRI | 0 |  |  |
| emp_refer_installments_date | char(4) | YES |  | NULL |  |  |
| emp_refer_installments_total | double(18,2) | YES |  | NULL |  |  |
| emp_refer_installments_money | double(18,2) | YES |  | NULL |  |  |
| emp_refer_installments_year | int(11) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| emp_refer_cert_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refrefer_certification2 | emp_refer_cert_id | no | 1 |
| PRIMARY | emp_refer_installments_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `patient_arrear_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_arrear_detail_id | int(11) | NO | PRI | 0 |  |  |
| patient_arrear_id | int(11) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| status_ok | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| selected | char(1) | YES |  | NULL |  |  |
| clear_datetime | datetime | YES |  | NULL |  |  |
| clear_staff | varchar(25) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| origin_finance_number | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| ix_origin_finance_number | origin_finance_number | no | 1 |
| ix_patient_arrear_id | patient_arrear_id | no | 1 |
| PRIMARY | patient_arrear_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

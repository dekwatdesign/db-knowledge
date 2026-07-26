# `patient_arrear`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_arrear_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| arrear_date | date | YES |  | NULL |  |  |
| arrear_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| arrear_datetime | datetime | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_numbre | finance_number | no | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | patient_arrear_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `patient_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_pttype_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| pttypeno | varchar(50) | YES |  | NULL |  |  |
| pttype_number | int(11) | YES |  | NULL |  |  |
| company_id | int(11) | YES |  | NULL |  |  |
| contract_id | int(11) | YES |  | NULL |  |  |
| max_debt_amount | double(15,3) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| authorize_staff | varchar(25) | YES |  | NULL |  |  |
| authorize_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pttype_note | text | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| emp_privilege | char(1) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_finance_max | double(15,3) | YES |  | NULL |  |  |
| emp_finance_use | double(15,3) | YES |  | NULL |  |  |
| emp_finance_remain | double(15,3) | YES |  | NULL |  |  |
| emp_finance_start_date | date | YES |  | NULL |  |  |
| auto_update | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

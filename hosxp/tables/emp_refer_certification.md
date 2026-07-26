# `emp_refer_certification`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_refer_cert_id | int(11) | NO | PRI | 0 |  |  |
| emp_refer_cert_date | date | YES |  | NULL |  |  |
| emp_refer_cert_regis_date | date | YES |  | NULL |  |  |
| emp_refer_cert_hos_start_date | date | YES |  | NULL |  |  |
| emp_refer_cert_no | varchar(50) | YES |  | NULL |  |  |
| emp_refer_cert_hos_end_date | date | YES |  | NULL |  |  |
| emp_refer_cert_expense | double(15,2) | YES |  | NULL |  |  |
| emp_refer_cert_print_amount | int(11) | YES |  | NULL |  |  |
| emp_refer_cert_cause | varchar(100) | YES |  | NULL |  |  |
| emp_refer_cert_emp_status | char(1) | YES |  | NULL |  |  |
| emp_refer_cert_roomfood_money | double(15,2) | YES |  | NULL |  |  |
| emp_refer_cert_entry_type | int(11) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| emp_mate_id | int(11) | YES |  | NULL |  |  |
| emp_family_id | int(11) | YES |  | NULL |  |  |
| emp_status | char(1) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| emp_refer_person_type_id | int(11) | YES |  | NULL |  |  |
| emp_refer_person_son_id | int(11) | YES |  | NULL |  |  |
| emp_expense_hos_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_patient_type_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_refer_discharge_type_id | int(11) | YES |  | NULL |  |  |
| emp_pay_true | char(1) | YES |  | NULL |  |  |
| emp_relation_id | int(11) | YES |  | NULL |  |  |
| emp_refer_head_id | int(11) | YES |  | NULL |  |  |
| expense_status | char(1) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_refer_cert_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

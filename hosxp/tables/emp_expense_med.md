# `emp_expense_med`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_med_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| emp_expense_med_start_date | date | YES | MUL | NULL |  |  |
| emp_expense_med_end_date | date | YES | MUL | NULL |  |  |
| emp_expense_med_no | varchar(50) | YES |  | NULL |  |  |
| emp_expense_med_date | date | YES |  | NULL |  |  |
| emp_expense_med_receive_date | date | YES |  | NULL |  |  |
| emp_expense_med_print_amount | int(11) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| emp_expense_med_disease | varchar(100) | YES |  | NULL |  |  |
| emp_expense_med_draw_money | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_doctor_money | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_bill_draw | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_doctor_service | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_general_money | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_general_amount | int(11) | YES |  | NULL |  |  |
| emp_expense_med_icu_amount | int(11) | YES |  | NULL |  |  |
| emp_expense_med_icu_money | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_bill_amount | int(11) | YES |  | NULL |  |  |
| emp_expense_med_kidney_money | double(18,0) | YES |  | NULL |  |  |
| emp_expense_med_kindey_time | int(11) | YES |  | NULL |  |  |
| emp_expense_med_violate_chk | char(1) | YES |  | NULL |  |  |
| emp_expense_med_acc_inwork_chk | char(1) | YES |  | NULL |  |  |
| emp_expense_med_acc_chk | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| emp_expense_med_entry_type | int(11) | YES |  | NULL |  |  |
| emp_expense_med_money_chk | char(1) | YES |  | NULL |  |  |
| emp_id | int(11) | YES | MUL | NULL |  |  |
| emp_expense_patient_type_id | int(11) | YES | MUL | NULL |  |  |
| emp_expense_hos_type_id | int(11) | YES | MUL | NULL |  |  |
| emp_expense_cause_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_discharge_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_timework_type_id | int(11) | YES |  | NULL |  |  |
| emp_expense_med_end_time | time | YES |  | NULL |  |  |
| emp_expense_med_accident_chk | char(1) | YES |  | NULL |  |  |
| emp_expense_med_acc_prb_chk | char(1) | YES |  | NULL |  |  |
| emp_expense_med_acc_one | char(1) | YES |  | NULL |  |  |
| emp_mate_id | int(11) | YES |  | NULL |  |  |
| emp_family_id | int(11) | YES |  | NULL |  |  |
| emp_status | char(1) | YES |  | NULL |  |  |
| emp_relation_id | int(11) | YES | MUL | NULL |  |  |
| emp_refer_person_type_id | char(1) | YES |  | NULL |  |  |
| emp_refer_cert_id | int(11) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| export_sap_status | char(1) | YES |  | NULL |  |  |
| emp_expense_med_dental | double(15,2) | YES |  | NULL |  |  |
| emp_expense_med_cost_center | varchar(20) | YES |  | NULL |  |  |
| export_sap_date | date | YES |  | NULL |  |  |
| export_sap_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_expense_med_end_date | emp_expense_med_end_date | no | 1 |
| ix_emp_expense_med_start_date | emp_expense_med_start_date | no | 1 |
| ix_emp_relation_id | emp_relation_id | no | 1 |
| ix_Refemployee_MEA6 | emp_id | no | 1 |
| ix_Refexpense_hos_type12 | emp_expense_hos_type_id | no | 1 |
| ix_Refexpense_patient_type13 | emp_expense_patient_type_id | no | 1 |
| PRIMARY | emp_expense_med_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

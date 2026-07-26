# `emp_wf_nurse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_nurse_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_nurse_year | char(4) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_date | date | YES |  | NULL |  |  |
| emp_wf_nurse_time | time | YES |  | NULL |  |  |
| emp_wf_nurse_person_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_child_rep_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_social_minor | char(1) | YES |  | NULL |  |  |
| emp_wf_nurse_social_divorce | char(1) | YES |  | NULL |  |  |
| emp_wf_nurse_social_separate | char(1) | YES |  | NULL |  |  |
| emp_wf_nurse_social_incomp | char(1) | YES |  | NULL |  |  |
| emp_wf_nurse_disease | text | YES |  | NULL |  |  |
| emp_wf_nurse_treatment | text | YES |  | NULL |  |  |
| emp_wf_nurse_hospcode | varchar(9) | YES |  | NULL |  |  |
| emp_wf_nurse_hospitalname | varchar(100) | YES |  | NULL |  |  |
| emp_hostype_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_sdate | date | YES |  | NULL |  |  |
| emp_wf_nurse_edate | date | YES |  | NULL |  |  |
| emp_wf_nurse_last_update | date | YES |  | NULL |  |  |
| emp_wf_status_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_person_age | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_child_replace | char(1) | YES |  | NULL |  |  |
| emp_wf_nurse_exp_right_price | double(22,3) | YES |  | NULL |  |  |
| emp_wf_nurse_right_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_right_type_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_emp_mate_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_staff | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_nurse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

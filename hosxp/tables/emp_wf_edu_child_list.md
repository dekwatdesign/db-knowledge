# `emp_wf_edu_child_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_edu_list_id | int(11) | NO | PRI | 0 |  |  |
| emp_relation_id | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_rep | char(1) | YES |  | NULL |  |  |
| emp_wf_edu_list_rep_no | int(11) | YES |  | NULL |  |  |
| emp_relation_id2 | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_rep_reason_id | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_institute | varchar(150) | YES |  | NULL |  |  |
| emp_wf_edu_list_institute_type | varchar(10) | YES |  | NULL |  |  |
| emp_wf_edu_list_chwpart | char(2) | YES |  | NULL |  |  |
| emp_wf_edu_list_amppart | char(2) | YES |  | NULL |  |  |
| emp_education_id | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_educate_class | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_price | double(22,3) | YES |  | NULL |  |  |
| emp_wf_edu_list_age_y | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_age_m | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_age_d | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_list_staff | varchar(20) | YES |  | NULL |  |  |
| emp_wf_edu_list_lastupdate | date | YES |  | NULL |  |  |
| emp_wf_edu_list_rep_birthdate | date | YES |  | NULL |  |  |
| emp_wf_edu_child_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_edu_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

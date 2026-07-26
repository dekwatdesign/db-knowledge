# `emp_his_education`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_his_education_id | int(11) | NO | PRI | 0 |  |  |
| emp_his_education_academy | varchar(250) | YES |  | NULL |  |  |
| emp_his_education_startdate | date | YES |  | NULL |  |  |
| emp_his_education_graduate | date | YES |  | NULL |  |  |
| emp_his_education_depart | varchar(250) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_education_id | int(11) | YES |  | NULL |  |  |
| emp_his_education_update | date | YES |  | NULL |  |  |
| emp_his_education_grade | varchar(5) | YES |  | NULL |  |  |
| emp_his_education_detail | text | YES |  | NULL |  |  |
| emp_his_education_fund | char(1) | YES |  | NULL |  |  |
| emp_his_other_fund_detail | varchar(100) | YES |  | NULL |  |  |
| emp_institute_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_his_education_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

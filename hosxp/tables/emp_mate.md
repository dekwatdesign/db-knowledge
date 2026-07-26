# `emp_mate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_mate_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_prename_id | int(11) | YES |  | NULL |  |  |
| emp_mate_fname | varchar(100) | YES |  | NULL |  |  |
| emp_mate_lname | varchar(100) | YES |  | NULL |  |  |
| emp_mate_cid | varchar(13) | YES |  | NULL |  |  |
| emp_mate_address | varchar(150) | YES |  | NULL |  |  |
| emp_mate_birthdate | date | YES |  | NULL |  |  |
| emp_mate_job_type_id | int(11) | YES |  | NULL |  |  |
| emp_mate_job_occupation | varchar(4) | YES |  | NULL |  |  |
| emp_mate_job_agency | varchar(150) | YES |  | NULL |  |  |
| emp_mate_marry_date | date | YES |  | NULL |  |  |
| emp_mate_divorce | char(1) | YES |  | NULL |  |  |
| emp_mate_divorce_date | date | YES |  | NULL |  |  |
| emp_mate_divorce_reason | text | YES |  | NULL |  |  |
| emp_mate_lastupdate | date | YES |  | NULL |  |  |
| emp_mate_job_level | varchar(50) | YES |  | NULL |  |  |
| emp_sex_id | int(11) | YES |  | NULL |  |  |
| emp_mate_tel | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_mate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

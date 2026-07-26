# `emp_social_sick`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_sick_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_sick_regis_date | date | YES |  | NULL |  |  |
| emp_social_sick_date | date | YES |  | NULL |  |  |
| emp_social_sick_detail | varchar(100) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| emp_social_sick_disease | varchar(255) | YES |  | NULL |  |  |
| emp_social_sick_work_str_date | date | YES |  | NULL |  |  |
| emp_social_sick_work_date | date | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |
| emp_id | int(11) | YES | MUL | NULL |  |  |
| emp_social_discharge_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_social_welfare_id | emp_social_welfare_id | no | 1 |
| ix_Refsocial_welfare24 | emp_id | no | 1 |
| PRIMARY | emp_social_sick_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

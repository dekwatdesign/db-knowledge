# `emp_resign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_resign_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_resign_date | date | YES |  | NULL |  |  |
| emp_resign_type_id | int(11) | YES |  | NULL |  |  |
| emp_resign_reason | text | YES |  | NULL |  |  |
| emp_resign_save_date | date | YES |  | NULL |  |  |
| emp_resign_salary_type_id | int(11) | YES |  | NULL |  |  |
| emp_resign_lastupdate | date | YES |  | NULL |  |  |
| emp_resign_save_staff | varchar(20) | YES |  | NULL |  |  |
| emp_resign_back_date | date | YES |  | NULL |  |  |
| emp_resign_file_reference | longblob | YES |  | NULL |  |  |
| emp_resign_back_file_reference | longblob | YES |  | NULL |  |  |
| emp_resign_detail | text | YES |  | NULL |  |  |
| emp_resign_workage_cal | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_resign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

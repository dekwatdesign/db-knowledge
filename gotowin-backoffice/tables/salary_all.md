# `salary_all`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SALARYALL_ID | int | NO | PRI | NULL | auto_increment |  |
| SALARYALL_YEAR_ID | varchar(10) | YES |  |  |  |  |
| SALARYALL_MONTH_ID | varchar(11) | YES |  |  |  |  |
| SALARYALL_PERSON_ID | varchar(50) | YES |  |  |  |  |
| SALARYALL_PERSON_NAME | varchar(100) | YES |  | NULL |  |  |
| SALARYALL_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| SALARYALL_BOOK_NUM | varchar(50) | YES |  | NULL |  |  |
| SALARYALL_TOTAL | varchar(20) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SALARYALL_HEAD_ID | int | YES |  | NULL |  |  |
| SALARYALL_DAY_ID | varchar(10) | YES |  | NULL |  |  |
| SALARYALL_TYPE | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SALARYALL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

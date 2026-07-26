# `salary_all_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SALARYALL_HEAD_ID | int | NO | PRI | NULL | auto_increment |  |
| SALARYALL_HEAD_YEAR_ID | varchar(20) | YES |  | NULL |  |  |
| SALARYALL_HEAD_MONTH_ID | varchar(20) | YES |  | NULL |  |  |
| SALARYALL_HEAD_DAY_ID | varchar(20) | YES |  | NULL |  |  |
| SALARYALL_HEAD_TYPE | varchar(255) | YES |  | NULL |  |  |
| SALARYALL_HEAD_HR_SAVE | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SALARYALL_IS_SENDED | tinyint(1) | YES |  | 0 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SALARYALL_HEAD_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

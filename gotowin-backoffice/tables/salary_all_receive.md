# `salary_all_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SALARYALL_RECEIVE_ID | int | NO | PRI | NULL | auto_increment |  |
| SALARYALL_ID | varchar(10) | YES |  |  |  |  |
| SALARYALL_RECEIVE_YEAR | varchar(11) | YES |  | NULL |  |  |
| SALARYALL_RECEIVE_MONTH | varchar(11) | YES |  | NULL |  |  |
| SALARYALL_RECEIVE_LISTNAME | varchar(200) | YES |  |  |  |  |
| SALARYALL_RECEIVE_AMOUNT | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SALARYALL_RECEIVE_DAY | varchar(255) | YES |  | NULL |  |  |
| SALARYALL_RECEIVE_TYPE | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SALARYALL_RECEIVE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

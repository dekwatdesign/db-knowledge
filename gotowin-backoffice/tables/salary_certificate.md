# `salary_certificate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CER_ID | int | NO | PRI | NULL | auto_increment |  |
| CER_NUMBER | varchar(50) | YES |  | NULL |  |  |
| CER_DATE | date | YES |  | NULL |  |  |
| CER_YEAR | varchar(11) | YES |  |  |  |  |
| CER_HR_PERSON_ID | varchar(100) | YES |  |  |  |  |
| CER_HR_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| CER_HR_DEP_SUB_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| CER_COMMENT | varchar(255) | YES |  | NULL |  |  |
| CER_STATUS | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| CER_MY_HR_PERSON_ID | varchar(11) | YES |  | NULL |  |  |
| CER_MY_HR_PERSON_NAME | varchar(100) | YES |  | NULL |  |  |
| CER_POSITION_IN_WORK | varchar(100) | YES |  | NULL |  |  |
| CER_HR_SALARY | decimal(10,2) | YES |  | NULL |  |  |
| CER_MONEY_POSITION | decimal(10,2) | YES |  | NULL |  |  |
| CER_BORROW_MONEY | varchar(100) | YES |  | NULL |  |  |
| CER_HR_LEVEL_NAME | varchar(100) | YES |  | NULL |  |  |
| CER_HR_STARTWORK_DATE | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

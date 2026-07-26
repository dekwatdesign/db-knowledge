# `salary_borrow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BORROW_ID | int | NO | PRI | NULL | auto_increment |  |
| BORROW_DATE | date | YES |  | NULL |  |  |
| BORROW_BACK_DATE | date | YES |  | NULL |  |  |
| BORROW_YEAR | varchar(11) | YES |  |  |  |  |
| BORROW_HR_PERSON_ID | varchar(100) | YES |  |  |  |  |
| BORROW_HR_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| BORROW_HR_DEP_SUB_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| BORROW_COMMENT | varchar(255) | YES |  | NULL |  |  |
| BORROW_STATUS | varchar(255) | YES |  | NULL |  |  |
| BORROW_NUMBER | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| BORROW_TYPE_MONEY | varchar(100) | YES |  | NULL |  |  |
| BORROW_LOCATION | varchar(100) | YES |  | NULL |  |  |
| BORROW_TIME | time | YES |  | NULL |  |  |
| BORROW_MY_HR_PERSON_NAME | varchar(200) | YES |  | NULL |  |  |
| BORROW_POSITION_IN_WORK | varchar(200) | YES |  | NULL |  |  |
| BORROW_GOVERNMENT_BOOK | varchar(255) | YES |  | NULL |  |  |
| BORROW_GOVERNMENT_GO | varchar(255) | YES |  | NULL |  |  |
| BORROW_START_DATE | date | YES |  | NULL |  |  |
| BORROW_END_DATE | date | YES |  | NULL |  |  |
| BORROW_AT_LOCATION | varchar(255) | YES |  | NULL |  |  |
| BORROW_AFFILIATION | varchar(255) | YES |  | NULL |  |  |
| BORROW_FUND | varchar(255) | YES |  | NULL |  |  |
| BORROW_PROVINCE | varchar(100) | YES |  | NULL |  |  |
| BORROW_DATE_AMOUNT | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BORROW_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

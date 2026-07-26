# `salary_slip`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SLIP_ID | int | NO | PRI | NULL | auto_increment |  |
| SLIP_DATE | date | YES |  | NULL |  |  |
| SLIP_MONTH | varchar(50) | YES |  | NULL |  |  |
| SLIP_YEAR | varchar(11) | YES |  |  |  |  |
| SLIP_HR_PERSON_ID | varchar(100) | YES |  |  |  |  |
| SLIP_HR_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| SLIP_HR_DEP_SUB_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| SLIP_COMMENT | varchar(255) | YES |  | NULL |  |  |
| SLIP_STATUS | varchar(255) | YES |  | NULL |  |  |
| SLIP_NUMBER | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SLIP_MY_HR_PERSON_ID | varchar(11) | YES |  | NULL |  |  |
| SLIP_MY_HR_PERSON_NAME | varchar(100) | YES |  | NULL |  |  |
| SLIP_MOUNT | varchar(100) | YES |  | NULL |  |  |
| SLIP_POSITION_IN_WORK | varchar(100) | YES |  | NULL |  |  |
| SLIP_HR_LEVEL_NAME | varchar(100) | YES |  | NULL |  |  |
| SLIP_START_DATE | date | YES |  | NULL |  |  |
| SLIP_END_DATE | date | YES |  | NULL |  |  |
| SLIP_TEL | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SLIP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

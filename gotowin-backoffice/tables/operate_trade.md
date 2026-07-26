# `operate_trade`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATETRADE_ID | int | NO | PRI | NULL | auto_increment |  |
| OPERATETRADE_USERTRADE | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_POSITION_TRADE | varchar(100) | YES |  | NULL |  |  |
| OPERATETRADE_DATE_JOB | date | YES |  | NULL |  |  |
| OPERATETRADE_OPERATE_JOB | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_CHANG_USERID | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_CHANG_USERNAME | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_CHANG_POSITION | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_DATE_JOBCNANG | date | YES |  | NULL |  |  |
| OPERATETRADE_OPERATE_JOBCHANG | varchar(255) | YES |  | NULL |  |  |
| OPERATETRADE_OPERATE_JOBCHANG_NAME | varchar(100) | YES |  | NULL |  |  |
| OPERATETRADE_STATUS | varchar(100) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| OPERATETRADE_YEAR | varchar(100) | YES |  | NULL |  |  |
| OPERATETRADE_MOUNT | varchar(100) | YES |  | NULL |  |  |
| OPERATETRADE_COMMENT | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATETRADE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

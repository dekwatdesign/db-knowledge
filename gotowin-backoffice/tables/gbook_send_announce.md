# `gbook_send_announce`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_ID | varchar(100) | YES |  |  |  |  |
| HR_PERSON_ID | varchar(10) | YES |  |  |  |  |
| READ_BY_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_READ | datetime | YES |  | NULL |  |  |
| READ_STATUS | enum('True','False') | YES |  | NULL |  |  |
| COMMENT | varchar(255) | YES |  |  |  |  |
| SEND_BY_ID | varchar(11) | YES |  | NULL |  |  |
| SEND_BY_NAME | varchar(100) | YES |  | NULL |  |  |
| SEND_DATE_TIME | datetime | YES |  | NULL |  |  |
| SEND_TYPE | varchar(10) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

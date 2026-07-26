# `gbook_send_announce_depart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_ID | varchar(100) | YES |  |  |  |  |
| HR_DEPARTMENT_ID | varchar(10) | YES |  |  |  |  |
| READ_BY_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_READ | datetime | YES |  | NULL |  |  |
| READ_STATUS | enum('True','False') | YES |  | NULL |  |  |
| COMMENT | varchar(255) | YES |  |  |  |  |
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

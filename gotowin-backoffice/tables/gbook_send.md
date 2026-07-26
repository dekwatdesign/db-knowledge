# `gbook_send`

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

## Sample rows (4)

```json
[
  {
    "ID": 4,
    "BOOK_ID": "1",
    "HR_DEPARTMENT_ID": "1",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-04-26 10:51:41",
    "created_at": "2022-04-26 10:51:41"
  },
  {
    "ID": 8,
    "BOOK_ID": "4",
    "HR_DEPARTMENT_ID": "1",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-04-28 07:43:45",
    "created_at": "2022-04-28 07:43:45"
  },
  {
    "ID": 9,
    "BOOK_ID": "7",
    "HR_DEPARTMENT_ID": "1",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-04-28 08:40:06",
    "created_at": "2022-04-28 08:40:06"
  },
  {
    "ID": 10,
    "BOOK_ID": "8",
    "HR_DEPARTMENT_ID": null,
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-05-03 15:44:08",
    "created_at": "2022-05-03 15:44:08"
  }
]
```

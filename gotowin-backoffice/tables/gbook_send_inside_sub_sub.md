# `gbook_send_inside_sub_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_ID | varchar(100) | YES |  |  |  |  |
| HR_DEPARTMENT_SUB_SUB_ID | varchar(10) | YES |  |  |  |  |
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

## Sample rows (3)

```json
[
  {
    "ID": 2751,
    "BOOK_ID": "1",
    "HR_DEPARTMENT_SUB_SUB_ID": "25",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-01-26 11:06:39",
    "created_at": "2022-01-26 11:06:39"
  },
  {
    "ID": 2750,
    "BOOK_ID": "1",
    "HR_DEPARTMENT_SUB_SUB_ID": "18",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-01-26 11:06:39",
    "created_at": "2022-01-26 11:06:39"
  },
  {
    "ID": 2752,
    "BOOK_ID": "1",
    "HR_DEPARTMENT_SUB_SUB_ID": "5",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": null,
    "COMMENT": "",
    "updated_at": "2022-01-26 11:06:39",
    "created_at": "2022-01-26 11:06:39"
  }
]
```

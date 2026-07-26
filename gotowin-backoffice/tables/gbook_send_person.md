# `gbook_send_person`

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
| SEND_BY_ID | varchar(10) | YES |  |  |  |  |
| SEND_BY_NAME | varchar(100) | YES |  |  |  |  |
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

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "50",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "63",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-25 11:41:02",
    "SEND_TYPE": "3",
    "updated_at": "2022-04-26 08:57:37",
    "created_at": "2022-04-25 11:41:02"
  },
  {
    "ID": 2,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "209",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "63",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-25 11:41:02",
    "SEND_TYPE": "3",
    "updated_at": "2022-04-28 14:32:26",
    "created_at": "2022-04-25 11:41:02"
  },
  {
    "ID": 3,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "1",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 02:55:54",
    "created_at": "2022-04-26 02:55:54"
  },
  {
    "ID": 4,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "6",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 02:55:54",
    "created_at": "2022-04-26 02:55:54"
  },
  {
    "ID": 5,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "53",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 02:55:54",
    "created_at": "2022-04-26 02:55:54"
  },
  {
    "ID": 6,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "131",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 02:55:54",
    "created_at": "2022-04-26 02:55:54"
  },
  {
    "ID": 7,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "132",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 02:55:54",
    "created_at": "2022-04-26 02:55:54"
  },
  {
    "ID": 8,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "203",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-04-26 02:55:54",
    "SEND_TYPE": "1",
    "updated_at": "2022-04-26 10:00:08",
    "created_at": "2022-04-26 02:55:54"
  }
]
```

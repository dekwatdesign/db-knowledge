# `gbook_send_inside`

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

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "63",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "63",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-20 17:22:23",
    "SEND_TYPE": "3",
    "updated_at": "2022-01-26 11:10:28",
    "created_at": "2022-01-20 17:22:23"
  },
  {
    "ID": 2,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "64",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "63",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-20 17:22:23",
    "SEND_TYPE": "3",
    "updated_at": "2022-02-21 08:37:24",
    "created_at": "2022-01-20 17:22:23"
  },
  {
    "ID": 3,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "209",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 10:53:43",
    "SEND_TYPE": "4",
    "updated_at": "2022-01-26 11:10:35",
    "created_at": "2022-01-26 10:53:43"
  },
  {
    "ID": 4,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "50",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "True",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 10:53:43",
    "SEND_TYPE": "4",
    "updated_at": "2022-01-26 11:24:37",
    "created_at": "2022-01-26 10:53:43"
  },
  {
    "ID": 5,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "8",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "50",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 10:53:43",
    "SEND_TYPE": "4",
    "updated_at": "2022-01-26 10:53:43",
    "created_at": "2022-01-26 10:53:43"
  },
  {
    "ID": 6,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "9",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "209",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 11:03:53",
    "SEND_TYPE": "3",
    "updated_at": "2022-01-26 11:03:53",
    "created_at": "2022-01-26 11:03:53"
  },
  {
    "ID": 7,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "10",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "209",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 11:03:53",
    "SEND_TYPE": "3",
    "updated_at": "2022-01-26 11:03:53",
    "created_at": "2022-01-26 11:03:53"
  },
  {
    "ID": 8,
    "BOOK_ID": "1",
    "HR_PERSON_ID": "11",
    "READ_BY_ID": "",
    "DATE_TIME_READ": null,
    "READ_STATUS": "False",
    "COMMENT": "",
    "SEND_BY_ID": "209",
    "SEND_BY_NAME": "[MASKED_FULLNAME]",
    "SEND_DATE_TIME": "2022-01-26 11:03:53",
    "SEND_TYPE": "3",
    "updated_at": "2022-01-26 11:03:53",
    "created_at": "2022-01-26 11:03:53"
  }
]
```

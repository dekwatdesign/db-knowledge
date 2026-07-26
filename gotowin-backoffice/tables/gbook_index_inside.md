# `gbook_index_inside`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_NUM_IN | int | YES |  | NULL |  |  |
| BOOK_NUMBER | varchar(100) | YES |  |  |  |  |
| BOOK_DATE | date | YES |  | NULL |  |  |
| BOOK_URGENT_ID | varchar(10) | YES |  |  |  |  |
| BOOK_TYPE_ID | varchar(10) | YES |  |  |  |  |
| BOOK_NAME | varchar(200) | YES |  |  |  |  |
| BOOK_DETAIL | text | YES |  | NULL |  |  |
| BOOK_ORG_ID | int | YES |  | NULL |  |  |
| BOOK_ORG_TO_ID | int | YES |  | NULL |  |  |
| PERSON_SAVE_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| BOOK_YEAR_ID | varchar(10) | YES |  |  |  |  |
| BOOK_SECRET_ID | int | YES |  | NULL |  |  |
| IMAGE | longblob | YES |  | NULL |  |  |
| BOOK_DATE_EXPIRE | date | YES |  | NULL |  |  |
| DATE_SAVE | date | YES |  | NULL |  |  |
| BOOK_HAVE_FILE | enum('True','False') | YES |  | False |  |  |
| BOOK_FILE_SIZE | varchar(100) | YES |  |  |  |  |
| BOOK_READ | enum('True','False') | YES |  | False |  | อ่านแล้วหรือยัง นับการอ่าน 1 ครั้งขึ้นไป |
| SEND_LD_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_BY_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_DETAIL | varchar(500) | YES |  |  |  |  |
| SEND_STATUS | varchar(20) | YES |  |  |  | สถานะการส่งผอ.เกษียร |
| SEND_LD_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_DATE | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME | datetime | YES |  | NULL |  |  |
| TIME_SAVE | time | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| BOOK_FILE_NAME | varchar(255) | YES |  | NULL |  |  |
| BOOK_REFER_NUM_1 | varchar(255) | YES |  | NULL |  |  |
| BOOK_REFER_DATE_1 | date | YES |  | NULL |  |  |
| BOOK_REFER_NAME_1 | varchar(500) | YES |  | NULL |  |  |
| BOOK_REFER_NUM_2 | varchar(255) | YES |  | NULL |  |  |
| BOOK_REFER_DATE_2 | date | YES |  | NULL |  |  |
| BOOK_REFER_NAME_2 | varchar(500) | YES |  | NULL |  |  |
| BOOK_USE | enum('true','false') | YES |  | true |  |  |
| BOOK_NOTE | varchar(600) | YES |  | NULL |  |  |
| BOOK_HAVE_FILE_2 | varchar(255) | YES |  | NULL |  |  |
| BOOK_FILE_NAME_2 | varchar(255) | YES |  | NULL |  |  |
| BOOK_FILE_NAME_OLD | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "BOOK_ID": 1,
    "BOOK_NUM_IN": 1,
    "BOOK_NUMBER": "1",
    "BOOK_DATE": "2022-01-14",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "2",
    "BOOK_NAME": "คู่มือการใช้งานระบบ Go To Win Backoffice",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 4,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "209",
    "DATE_TIME_SAVE": "2022-01-26 11:05:08",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-01-14",
    "BOOK_HAVE_FILE": "False",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "2",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "15:35:00",
    "updated_at": "2022-01-26 11:05:28",
    "created_at": "2022-01-14 15:42:23",
    "BOOK_FILE_NAME": null,
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": "True",
    "BOOK_FILE_NAME_2": "inside2_1.pdf",
    "BOOK_FILE_NAME_OLD": "GTW-คู่มือใช้งานระบบงานสารบรรณ.pdf"
  },
  {
    "BOOK_ID": 2,
    "BOOK_NUM_IN": 2,
    "BOOK_NUMBER": "2",
    "BOOK_DATE": "2022-04-25",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "2",
    "BOOK_NAME": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2",
    "BOOK_DETAIL": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2",
    "BOOK_ORG_ID": 5,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "63",
    "DATE_TIME_SAVE": "2022-04-25 11:44:52",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-25",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "1",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "11:31:00",
    "updated_at": "2022-04-25 11:44:52",
    "created_at": "2022-04-25 11:35:07",
    "BOOK_FILE_NAME": "inside_2.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": "True",
    "BOOK_FILE_NAME_2": "inside2_2.pdf",
    "BOOK_FILE_NAME_OLD": "002.pdf"
  }
]
```

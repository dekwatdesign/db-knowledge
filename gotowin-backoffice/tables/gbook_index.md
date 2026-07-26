# `gbook_index`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_NUM_IN | int | YES |  | NULL |  |  |
| BOOK_NUMBER | varchar(100) | YES | MUL |  |  |  |
| BOOK_DATE | date | YES |  | NULL |  |  |
| BOOK_URGENT_ID | varchar(10) | YES |  |  |  |  |
| BOOK_TYPE_ID | varchar(10) | YES |  |  |  |  |
| BOOK_NAME | varchar(200) | YES | MUL |  |  |  |
| BOOK_DETAIL | text | YES |  | NULL |  |  |
| BOOK_ORG_ID | int | YES |  | NULL |  |  |
| BOOK_ORG_TO_ID | int | YES |  | NULL |  |  |
| PERSON_SAVE_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| BOOK_YEAR_ID | varchar(10) | YES | MUL |  |  |  |
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
| BOOK_FILE_NAME | varchar(100) | YES |  | NULL |  |  |
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
| BOOK_LINK | varchar(600) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| BOOK_NAME | BOOK_NAME | no | 1 |
| BOOK_NUMBER | BOOK_NUMBER | no | 1 |
| BOOK_YEAR_ID | BOOK_YEAR_ID | no | 1 |
| PRIMARY | BOOK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "BOOK_ID": 1,
    "BOOK_NUM_IN": 0,
    "BOOK_NUMBER": "1",
    "BOOK_DATE": "2022-04-25",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "2",
    "BOOK_NAME": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2",
    "BOOK_DETAIL": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2",
    "BOOK_ORG_ID": 4,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "50",
    "DATE_TIME_SAVE": "2022-04-26 10:27:38",
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
    "SEND_STATUS": "3",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "11:35:00",
    "updated_at": "2022-04-26 11:49:25",
    "created_at": "2022-04-25 11:38:18",
    "BOOK_FILE_NAME": "receipt_1.pdf",
    "BOOK_REFER_NUM_1": "1",
    "BOOK_REFER_DATE_1": "2022-04-25",
    "BOOK_REFER_NAME_1": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2",
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": "True",
    "BOOK_FILE_NAME_2": "receipt2_1.pdf",
    "BOOK_FILE_NAME_OLD": "ทดสอบระบบสารบรรณอิเล็กทรอนิกส์ ครั้งที่ 2.pdf",
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 2,
    "BOOK_NUM_IN": 0,
    "BOOK_NUMBER": "0832.101",
    "BOOK_DATE": "2022-04-26",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "ทดสอบระบบ",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 5,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "50",
    "DATE_TIME_SAVE": "2022-04-26 10:26:49",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-26",
    "BOOK_HAVE_FILE": "False",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "1",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "10:23:00",
    "updated_at": "2022-04-26 10:26:49",
    "created_at": "2022-04-26 10:26:49",
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
    "BOOK_FILE_NAME_2": "receipt2_2.pdf",
    "BOOK_FILE_NAME_OLD": "receipt_1.pdf",
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 3,
    "BOOK_NUM_IN": 0,
    "BOOK_NUMBER": "1/1",
    "BOOK_DATE": null,
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "ทดสอบระบบ",
    "BOOK_DETAIL": "ทดสอบระบบหนังสือภายนอก",
    "BOOK_ORG_ID": 6,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "209",
    "DATE_TIME_SAVE": "2022-04-26 10:51:41",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": null,
    "BOOK_HAVE_FILE": "False",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "1",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "10:49:00",
    "updated_at": "2022-04-26 10:51:41",
    "created_at": "2022-04-26 10:51:41",
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
    "BOOK_FILE_NAME_2": "receipt2_3.pdf",
    "BOOK_FILE_NAME_OLD": "แบบตอบรับเชิญประชุมพัฒนา(จัดทำรายงานผลตรวจราชการ)นพ.ทวีศักดิ์.pdf",
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 4,
    "BOOK_NUM_IN": 0,
    "BOOK_NUMBER": "0832.101",
    "BOOK_DATE": "2022-04-26",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "ทดลองระบบ",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 6,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "8",
    "DATE_TIME_SAVE": "2022-04-26 11:03:38",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-26",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "3",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "11:02:00",
    "updated_at": "2022-04-28 07:44:42",
    "created_at": "2022-04-26 11:02:46",
    "BOOK_FILE_NAME": "receipt_4.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": "True",
    "BOOK_FILE_NAME_2": "receipt2_4.pdf",
    "BOOK_FILE_NAME_OLD": "1212 ขอความร่วมมือตอบแบบสำรวจ.pdf",
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 5,
    "BOOK_NUM_IN": 1,
    "BOOK_NUMBER": "อว 67.25/ล.ว.0708",
    "BOOK_DATE": "2022-04-26",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "ขอเชิญร่วมการปัจฉิมนักศึกษาฝึกภาคปฏิบัติ 3 (ทดสอบ)",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 6,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "8",
    "DATE_TIME_SAVE": "2022-04-26 11:07:49",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-26",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "3",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "11:03:00",
    "updated_at": "2022-04-28 07:00:54",
    "created_at": "2022-04-26 11:04:56",
    "BOOK_FILE_NAME": "receipt_5.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": null,
    "BOOK_FILE_NAME_2": null,
    "BOOK_FILE_NAME_OLD": null,
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 6,
    "BOOK_NUM_IN": 2,
    "BOOK_NUMBER": "สธ 0832.101/53",
    "BOOK_DATE": "2022-04-28",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "2",
    "BOOK_NAME": "ขอความร่วมมือทุกหน่วยงานรับ-ส่งหนังสือ่านระบบ Files Sharing",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 5,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "8",
    "DATE_TIME_SAVE": "2022-04-28 14:55:12",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-28",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "2",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "14:52:00",
    "updated_at": "2022-04-28 14:55:45",
    "created_at": "2022-04-28 14:54:53",
    "BOOK_FILE_NAME": "receipt_6.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": null,
    "BOOK_FILE_NAME_2": null,
    "BOOK_FILE_NAME_OLD": null,
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 7,
    "BOOK_NUM_IN": 3,
    "BOOK_NUMBER": "สธ 0811/ว148",
    "BOOK_DATE": "2022-04-28",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "ประกาศศูนย์สุขภาพจิตที่ 4",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 5,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "8",
    "DATE_TIME_SAVE": "2022-04-28 14:57:02",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-04-28",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "3",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "14:56:00",
    "updated_at": "2022-04-28 08:41:43",
    "created_at": "2022-04-28 14:57:02",
    "BOOK_FILE_NAME": "receipt_7.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": null,
    "BOOK_FILE_NAME_2": null,
    "BOOK_FILE_NAME_OLD": null,
    "BOOK_LINK": null
  },
  {
    "BOOK_ID": 8,
    "BOOK_NUM_IN": 4,
    "BOOK_NUMBER": "สปสช.6.70/(อ)ว.07577",
    "BOOK_DATE": "2022-05-01",
    "BOOK_URGENT_ID": "1",
    "BOOK_TYPE_ID": "1",
    "BOOK_NAME": "แจ้งโอนเงินค่าบริการทางการแพทย์ค่ารักษาพยาบาลผู้ประกันตนที่เป็นคนพิการ สปส. จำนวน 1,800 บาท",
    "BOOK_DETAIL": null,
    "BOOK_ORG_ID": 7,
    "BOOK_ORG_TO_ID": null,
    "PERSON_SAVE_ID": "8",
    "DATE_TIME_SAVE": "2022-05-03 11:52:57",
    "BOOK_YEAR_ID": "2565",
    "BOOK_SECRET_ID": 1,
    "IMAGE": null,
    "BOOK_DATE_EXPIRE": null,
    "DATE_SAVE": "2022-05-03",
    "BOOK_HAVE_FILE": "True",
    "BOOK_FILE_SIZE": "",
    "BOOK_READ": "False",
    "SEND_LD_HR_NAME": "",
    "SEND_LD_BY_HR_NAME": "",
    "SEND_LD_DETAIL": "",
    "SEND_STATUS": "2",
    "SEND_LD_HR_ID": null,
    "SEND_LD_DATE": null,
    "SEND_LD_DATE_TIME": null,
    "TIME_SAVE": "11:44:00",
    "updated_at": "2022-05-03 15:44:08",
    "created_at": "2022-05-03 11:52:57",
    "BOOK_FILE_NAME": "receipt_8.pdf",
    "BOOK_REFER_NUM_1": null,
    "BOOK_REFER_DATE_1": null,
    "BOOK_REFER_NAME_1": null,
    "BOOK_REFER_NUM_2": null,
    "BOOK_REFER_DATE_2": null,
    "BOOK_REFER_NAME_2": null,
    "BOOK_USE": "true",
    "BOOK_NOTE": null,
    "BOOK_HAVE_FILE_2": null,
    "BOOK_FILE_NAME_2": null,
    "BOOK_FILE_NAME_OLD": null,
    "BOOK_LINK": null
  }
]
```

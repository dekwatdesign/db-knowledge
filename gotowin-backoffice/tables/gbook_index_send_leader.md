# `gbook_index_send_leader`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SEND_LD_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_LD_ID | int | YES |  | NULL |  | อ้างถึงฟิว id ใน book_index |
| SEND_LD_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_BY_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_BY_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_DETAIL | varchar(500) | YES |  |  |  |  |
| SEND_LD_DATE | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME | datetime | YES |  | NULL |  |  |
| SEND_LD_STATUS | varchar(20) | YES |  |  |  | สถานะการส่งผอ.เกษียร |
| TOP_LEADER_AC_ID | int | YES |  | NULL |  |  |
| TOP_LEADER_AC_NAME | varchar(500) | YES |  |  |  |  |
| TOP_LEADER_AC_DATE | date | YES |  | NULL |  |  |
| TOP_LEADER_AC_CMD | varchar(255) | YES |  |  |  |  |
| TOP_LEADER_AC_DATE_TIME | datetime | YES |  | NULL |  |  |
| TOP_LEADER_ORDER_FILE | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SEND_LD_BY_HR_ID_2 | int | YES |  | NULL |  |  |
| SEND_LD_BY_HR_NAME_2 | varchar(500) | YES |  | NULL |  |  |
| SEND_LD_DETAIL_2 | varchar(500) | YES |  | NULL |  |  |
| SEND_LD_DATE_2 | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME_2 | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SEND_LD_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "SEND_LD_ID": 1,
    "BOOK_LD_ID": 1,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 63,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "ลงรับในระบบแล้ว แนบไฟล์ PDF",
    "SEND_LD_DATE": "2022-04-25",
    "SEND_LD_DATE_TIME": "2022-04-25 11:46:37",
    "SEND_LD_STATUS": "ํYES",
    "TOP_LEADER_AC_ID": 203,
    "TOP_LEADER_AC_NAME": null,
    "TOP_LEADER_AC_DATE": "2022-04-26",
    "TOP_LEADER_AC_CMD": "อนุมัติ",
    "TOP_LEADER_AC_DATE_TIME": "2022-04-26 11:50:22",
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-26 11:50:22",
    "created_at": "2022-04-25 11:46:37",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 2,
    "BOOK_LD_ID": 5,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 50,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": null,
    "SEND_LD_DATE": "2022-04-26",
    "SEND_LD_DATE_TIME": "2022-04-26 04:39:05",
    "SEND_LD_STATUS": "ํYES",
    "TOP_LEADER_AC_ID": 203,
    "TOP_LEADER_AC_NAME": null,
    "TOP_LEADER_AC_DATE": "2022-04-28",
    "TOP_LEADER_AC_CMD": "อนุมัติ",
    "TOP_LEADER_AC_DATE_TIME": "2022-04-28 07:00:54",
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-28 07:00:54",
    "created_at": "2022-04-26 04:39:05",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 3,
    "BOOK_LD_ID": 4,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 50,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": null,
    "SEND_LD_DATE": "2022-04-28",
    "SEND_LD_DATE_TIME": "2022-04-28 07:43:13",
    "SEND_LD_STATUS": "ํYES",
    "TOP_LEADER_AC_ID": 203,
    "TOP_LEADER_AC_NAME": null,
    "TOP_LEADER_AC_DATE": "2022-04-28",
    "TOP_LEADER_AC_CMD": "อนุมัติ",
    "TOP_LEADER_AC_DATE_TIME": "2022-04-28 07:44:42",
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-28 07:44:42",
    "created_at": "2022-04-28 07:43:13",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 4,
    "BOOK_LD_ID": 6,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 8,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "กลุ่มงานธุรการขออนุญาตแจ้งเวียนหนังสือ พร้อมทั้งแนบกำหนดการประชุมมาพร้อมนี้",
    "SEND_LD_DATE": "2022-04-28",
    "SEND_LD_DATE_TIME": "2022-04-28 09:02:57",
    "SEND_LD_STATUS": "SEND",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_CMD": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-28 09:02:57",
    "created_at": "2022-04-28 14:55:27",
    "SEND_LD_BY_HR_ID_2": 50,
    "SEND_LD_BY_HR_NAME_2": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL_2": "ทอสอบ ผอ.ลงนามแล้ว เปิดเอกสารจาก.......................",
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 5,
    "BOOK_LD_ID": 7,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 8,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "ศูนย์ข้อมูลข่าวสาร/ประชาสัมพันธ์ทุกหน่วยงาน",
    "SEND_LD_DATE": "2022-04-28",
    "SEND_LD_DATE_TIME": "2022-04-28 14:57:47",
    "SEND_LD_STATUS": "ํYES",
    "TOP_LEADER_AC_ID": 203,
    "TOP_LEADER_AC_NAME": null,
    "TOP_LEADER_AC_DATE": "2022-04-28",
    "TOP_LEADER_AC_CMD": "อนุมัติ(ทดสอบ)",
    "TOP_LEADER_AC_DATE_TIME": "2022-04-28 08:41:55",
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-28 08:41:55",
    "created_at": "2022-04-28 14:57:47",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 6,
    "BOOK_LD_ID": 8,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 11,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "เห็นควรแจ้งกลุ่มงานการเงินฯ(งานประกัน)",
    "SEND_LD_DATE": "2022-05-03",
    "SEND_LD_DATE_TIME": "2022-05-03 15:42:26",
    "SEND_LD_STATUS": "SEND",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_CMD": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-05-03 15:42:26",
    "created_at": "2022-05-03 15:42:26",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  }
]
```

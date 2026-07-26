# `gbook_send_inside_leader`

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
| TOP_LEADER_AC_NAME | varchar(50) | YES |  |  |  |  |
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

## Sample rows (2)

```json
[
  {
    "SEND_LD_ID": 1,
    "BOOK_LD_ID": 1,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 209,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "ทดสอบงาน",
    "SEND_LD_DATE": "2022-01-26",
    "SEND_LD_DATE_TIME": "2022-01-26 10:53:28",
    "SEND_LD_STATUS": "ํYES",
    "TOP_LEADER_AC_ID": 203,
    "TOP_LEADER_AC_NAME": null,
    "TOP_LEADER_AC_DATE": "2022-01-26",
    "TOP_LEADER_AC_CMD": "ทอสอบ แจ้ง งานเลขานุการและสารสนเทศ",
    "TOP_LEADER_AC_DATE_TIME": "2022-01-26 11:00:59",
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-01-26 11:00:59",
    "created_at": "2022-01-26 10:48:02",
    "SEND_LD_BY_HR_ID_2": 50,
    "SEND_LD_BY_HR_NAME_2": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL_2": "ทดสอบ เสนอผู้อำนวยการพิจารณา",
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  },
  {
    "SEND_LD_ID": 2,
    "BOOK_LD_ID": 2,
    "SEND_LD_HR_ID": 203,
    "SEND_LD_HR_NAME": null,
    "SEND_LD_BY_HR_ID": 63,
    "SEND_LD_BY_HR_NAME": "[MASKED_FULLNAME]",
    "SEND_LD_DETAIL": "ทดลองการรับ-ส่งหนังสือ สารบรรณ GTW Backoffice",
    "SEND_LD_DATE": "2022-04-25",
    "SEND_LD_DATE_TIME": "2022-04-25 11:42:44",
    "SEND_LD_STATUS": "SEND",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_CMD": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "TOP_LEADER_ORDER_FILE": null,
    "updated_at": "2022-04-25 11:42:44",
    "created_at": "2022-04-25 11:42:44",
    "SEND_LD_BY_HR_ID_2": null,
    "SEND_LD_BY_HR_NAME_2": null,
    "SEND_LD_DETAIL_2": null,
    "SEND_LD_DATE_2": null,
    "SEND_LD_DATE_TIME_2": null
  }
]
```

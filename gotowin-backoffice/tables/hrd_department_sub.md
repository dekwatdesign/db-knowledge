# `hrd_department_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_DEPARTMENT_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_DEPARTMENT_ID | varchar(11) | YES |  |  |  | รหัสกลุ่มงาน |
| HR_DEPARTMENT_SUB_NAME | varchar(100) | YES |  |  |  | ชื่อฝ่าย/แผนก |
| ACTIVE | enum('True','False') | YES |  | True |  | สถานะ |
| BOOK_NUM | varchar(30) | YES |  |  |  | เลชที่หนังสือ |
| BOOK_HR_ID | varchar(10) | YES |  |  |  | ธุรการฝ่าย หน่วยงาน |
| LEADER_HR_ID | varchar(11) | YES |  |  |  | หัวหน้าฝ่าย/แผนก |
| INVEN_HR_ID | varchar(10) | YES |  |  |  | ผู้รับผิดชอบ |
| INVEN_LOCATION_ID | varchar(10) | YES |  |  |  |  |
| INVEN_ORDER_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_WRITE_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_BUY_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_BUY_POSITION | varchar(100) | YES |  |  |  |  |
| INVEN_TYPE_ID | varchar(10) | YES |  |  |  |  |
| PHONE_IN | varchar(30) | YES |  |  |  | เบอร์โทรภายใน |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_DEPARTMENT_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_DEPARTMENT_SUB_ID": 1,
    "HR_DEPARTMENT_ID": "1",
    "HR_DEPARTMENT_SUB_NAME": "สำนักงานผู้อำนวยการ",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832",
    "BOOK_HR_ID": "50",
    "LEADER_HR_ID": "295",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "123",
    "updated_at": "2025-10-06 03:43:43",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 2,
    "HR_DEPARTMENT_ID": "2",
    "HR_DEPARTMENT_SUB_NAME": "ที่ปรึกษาโรงพยาบาล",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832",
    "BOOK_HR_ID": "50",
    "LEADER_HR_ID": "5",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2025-10-06 03:43:51",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 3,
    "HR_DEPARTMENT_ID": "1",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มภารกิจอำนวยการ",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.1",
    "BOOK_HR_ID": "50",
    "LEADER_HR_ID": "250",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2023-07-14 08:40:50",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 4,
    "HR_DEPARTMENT_ID": "3",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มงานบริหารทั่วไป",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.101",
    "BOOK_HR_ID": "212",
    "LEADER_HR_ID": "250",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2025-12-22 06:26:01",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 5,
    "HR_DEPARTMENT_ID": "3",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มงานทรัพยากรบุคคล",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.102",
    "BOOK_HR_ID": "22",
    "LEADER_HR_ID": "22",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2025-02-03 07:13:57",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 6,
    "HR_DEPARTMENT_ID": "3",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มงานการเงิน บัญชี และประกันสุขภาพ",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.103",
    "BOOK_HR_ID": "125",
    "LEADER_HR_ID": "26",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2022-01-14 08:02:06",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 7,
    "HR_DEPARTMENT_ID": "3",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มงานพัสดุ",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.104",
    "BOOK_HR_ID": "52",
    "LEADER_HR_ID": "292",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2025-12-22 04:17:07",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_ID": 8,
    "HR_DEPARTMENT_ID": "6",
    "HR_DEPARTMENT_SUB_NAME": "กลุ่มงานโภชนาการ",
    "ACTIVE": "True",
    "BOOK_NUM": "สธ 0832.105",
    "BOOK_HR_ID": "46",
    "LEADER_HR_ID": "46",
    "INVEN_HR_ID": "",
    "INVEN_LOCATION_ID": "",
    "INVEN_ORDER_HR_ID": "",
    "INVEN_WRITE_HR_ID": "",
    "INVEN_BUY_HR_ID": "",
    "INVEN_BUY_POSITION": "",
    "INVEN_TYPE_ID": "",
    "PHONE_IN": "",
    "updated_at": "2025-12-22 03:04:08",
    "created_at": null
  }
]
```

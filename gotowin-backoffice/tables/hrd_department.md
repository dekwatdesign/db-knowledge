# `hrd_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_DEPARTMENT_ID | int | NO | PRI | NULL | auto_increment | รหัสกลุ่มงาน |
| HR_DEPARTMENT_NAME | varchar(100) | YES |  |  |  | ชื่อกุล่มงาน |
| BOOK_NUM | varchar(255) | YES |  |  |  | เลขที่หนังสือกลุ่มงาน |
| ACTIVE | enum('True','False') | YES |  | True |  | สถานะ |
| BOOK_HR_ID | varchar(10) | YES |  |  |  | สารบรรณกลุ่มงาน |
| LEADER_HR_ID | varchar(10) | YES |  |  |  | หัวหน้ากลุ่มงาน |
| PHONE_IN | varchar(30) | YES |  |  |  | เบอร์โทรภายใน |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_DEPARTMENT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "HR_DEPARTMENT_ID": 1,
    "HR_DEPARTMENT_NAME": "สำนักงานผู้อำนวยการ",
    "BOOK_NUM": "สธ 0832",
    "ACTIVE": "True",
    "BOOK_HR_ID": "50",
    "LEADER_HR_ID": "295",
    "PHONE_IN": "",
    "updated_at": "2025-10-06 03:43:19",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 2,
    "HR_DEPARTMENT_NAME": "ที่ปรึกษาโรงพยาบาล",
    "BOOK_NUM": "สธ 0832",
    "ACTIVE": "True",
    "BOOK_HR_ID": "50",
    "LEADER_HR_ID": "5",
    "PHONE_IN": "",
    "updated_at": "2025-10-06 03:43:27",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 3,
    "HR_DEPARTMENT_NAME": "กลุ่มภารกิจอำนวยการ",
    "BOOK_NUM": "สธ 0832.1",
    "ACTIVE": "True",
    "BOOK_HR_ID": "8",
    "LEADER_HR_ID": "250",
    "PHONE_IN": "",
    "updated_at": "2023-07-14 08:40:39",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 4,
    "HR_DEPARTMENT_NAME": "กลุ่มภารกิจพัฒนาสู่ความเป็นเลิศ",
    "BOOK_NUM": "สธ 0832.3",
    "ACTIVE": "True",
    "BOOK_HR_ID": "61",
    "LEADER_HR_ID": "57",
    "PHONE_IN": "",
    "updated_at": "2024-12-25 07:13:07",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 5,
    "HR_DEPARTMENT_NAME": "กลุ่มภารกิจสนับสนุนและพัฒนาเครือข่ายบริการ",
    "BOOK_NUM": "สธ 0832.4",
    "ACTIVE": "True",
    "BOOK_HR_ID": "69",
    "LEADER_HR_ID": "131",
    "PHONE_IN": "",
    "updated_at": "2025-11-28 03:48:54",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 6,
    "HR_DEPARTMENT_NAME": "กลุ่มภารกิจบริการจิตเวชและสุขภาพจิต",
    "BOOK_NUM": "สธ 0832.2",
    "ACTIVE": "True",
    "BOOK_HR_ID": "118",
    "LEADER_HR_ID": "53",
    "PHONE_IN": "",
    "updated_at": "2022-04-21 08:23:37",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_ID": 7,
    "HR_DEPARTMENT_NAME": "กลุ่มภารกิจการพยาบาล",
    "BOOK_NUM": "สธ 0832.5",
    "ACTIVE": "True",
    "BOOK_HR_ID": "132",
    "LEADER_HR_ID": "131",
    "PHONE_IN": "",
    "updated_at": "2022-01-14 07:51:40",
    "created_at": null
  }
]
```

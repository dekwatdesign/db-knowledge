# `hrd_department_sub_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_DEPARTMENT_SUB_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_DEPARTMENT_SUB_SUB_NAME | varchar(255) | YES |  |  |  |  |
| BOOK_NUM | varchar(255) | YES |  |  |  |  |
| LEADER_HR_ID | varchar(10) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| HR_DEPARTMENT_SUB_ID | varchar(10) | YES |  |  |  |  |
| DEP_CODE | varchar(10) | YES |  |  |  |  |
| PHONE_IN | varchar(50) | YES |  |  |  | เบอร์โทรภายใน |
| LINE_TOKEN | varchar(100) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_DEPARTMENT_SUB_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 1,
    "HR_DEPARTMENT_SUB_SUB_NAME": "สำนักงานผู้อำนวยการ",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "295",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "1",
    "DEP_CODE": "CEO",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-10-06 03:44:34",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 2,
    "HR_DEPARTMENT_SUB_SUB_NAME": "ที่ปรึกษาโรงพยาบาล",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "5",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "2",
    "DEP_CODE": null,
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-10-06 03:44:42",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 3,
    "HR_DEPARTMENT_SUB_SUB_NAME": "กลุ่มภารกิจอำนวยการ",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "250",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "3",
    "DEP_CODE": null,
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2023-07-14 08:42:47",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 4,
    "HR_DEPARTMENT_SUB_SUB_NAME": "กลุ่มงานบริหารทั่วไป",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "250",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "4",
    "DEP_CODE": "บริหาร",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-12-22 06:26:20",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 5,
    "HR_DEPARTMENT_SUB_SUB_NAME": "งานสารบรรณ",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "212",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "4",
    "DEP_CODE": "สารบรรณ",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-12-22 04:25:34",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_NAME": "งานซักฟอก",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "12",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "4",
    "DEP_CODE": "ซักฟอก",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-12-22 04:24:42",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 8,
    "HR_DEPARTMENT_SUB_SUB_NAME": "งานยานพาหนะ",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "20",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "4",
    "DEP_CODE": "ยานพาหนะ",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2025-12-22 04:26:30",
    "created_at": null
  },
  {
    "HR_DEPARTMENT_SUB_SUB_ID": 9,
    "HR_DEPARTMENT_SUB_SUB_NAME": "กลุ่มงานทรัพยากรบุคคล",
    "BOOK_NUM": "",
    "LEADER_HR_ID": "22",
    "ACTIVE": "True",
    "HR_DEPARTMENT_SUB_ID": "5",
    "DEP_CODE": "HR",
    "PHONE_IN": "",
    "LINE_TOKEN": null,
    "updated_at": "2024-12-25 08:07:56",
    "created_at": null
  }
]
```

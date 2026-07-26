# `vehicle_car_index_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RESERVE_ID | varchar(10) | YES |  |  |  |  |
| HR_PERSON_ID | varchar(10) | YES |  |  |  |  |
| HR_FULLNAME | varchar(200) | YES |  |  |  |  |
| HR_POSITION | varchar(200) | YES |  |  |  |  |
| HR_DEPARTMENT_ID | varchar(10) | YES |  |  |  | เก็บฝ่ายไว้ |
| HR_LEVEL | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | RESERVE_ID | no | 2 |
| ix_index | HR_PERSON_ID | no | 3 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 3,
    "RESERVE_ID": "1",
    "HR_PERSON_ID": "63",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "HR_DEPARTMENT_ID": "4",
    "HR_LEVEL": "3",
    "updated_at": "2022-01-18 14:35:34",
    "created_at": "2022-01-18 14:35:34"
  },
  {
    "ID": 5,
    "RESERVE_ID": "2",
    "HR_PERSON_ID": "63",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "HR_DEPARTMENT_ID": "4",
    "HR_LEVEL": "3",
    "updated_at": "2022-01-18 15:52:56",
    "created_at": "2022-01-18 15:52:56"
  },
  {
    "ID": 6,
    "RESERVE_ID": "3",
    "HR_PERSON_ID": "63",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "HR_DEPARTMENT_ID": "4",
    "HR_LEVEL": "3",
    "updated_at": "2022-01-18 15:54:04",
    "created_at": "2022-01-18 15:54:04"
  },
  {
    "ID": 7,
    "RESERVE_ID": "4",
    "HR_PERSON_ID": "106",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักสังคมสงเคราะห์",
    "HR_DEPARTMENT_ID": "6",
    "HR_LEVEL": "15",
    "updated_at": "2022-01-20 16:31:11",
    "created_at": "2022-01-20 16:31:11"
  },
  {
    "ID": 11,
    "RESERVE_ID": "5",
    "HR_PERSON_ID": "106",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักสังคมสงเคราะห์",
    "HR_DEPARTMENT_ID": "6",
    "HR_LEVEL": "15",
    "updated_at": "2022-01-24 13:45:26",
    "created_at": "2022-01-24 13:45:26"
  },
  {
    "ID": 12,
    "RESERVE_ID": "6",
    "HR_PERSON_ID": "106",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักสังคมสงเคราะห์",
    "HR_DEPARTMENT_ID": "6",
    "HR_LEVEL": "15",
    "updated_at": "2022-01-24 13:46:12",
    "created_at": "2022-01-24 13:46:12"
  },
  {
    "ID": 13,
    "RESERVE_ID": "7",
    "HR_PERSON_ID": "209",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักจัดการงานทั่วไป",
    "HR_DEPARTMENT_ID": "3",
    "HR_LEVEL": "15",
    "updated_at": "2022-01-28 09:18:06",
    "created_at": "2022-01-28 09:18:06"
  },
  {
    "ID": 14,
    "RESERVE_ID": "8",
    "HR_PERSON_ID": "209",
    "HR_FULLNAME": "[MASKED_FULLNAME]",
    "HR_POSITION": "นักจัดการงานทั่วไป",
    "HR_DEPARTMENT_ID": "3",
    "HR_LEVEL": "15",
    "updated_at": "2022-01-28 09:23:39",
    "created_at": "2022-01-28 09:23:39"
  }
]
```

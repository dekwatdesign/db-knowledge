# `salary_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| HR_PERSON_TYPE_ID | varchar(10) | YES |  |  |  |  |
| HR_RECEIVE_TYPE | varchar(11) | YES |  |  |  |  |
| HR_RECEIVE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ACTIVE | enum('TRUE','FALSE') | NO |  | NULL |  |  |

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
    "HR_PERSON_TYPE_ID": "5",
    "HR_RECEIVE_TYPE": "salary",
    "HR_RECEIVE_NAME": "เงินเดือน/ค่าจ้าง",
    "updated_at": "2020-04-27 14:48:55",
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 2,
    "HR_PERSON_TYPE_ID": "5",
    "HR_RECEIVE_TYPE": "salary",
    "HR_RECEIVE_NAME": "เงินประจำตำแหน่ง",
    "updated_at": "2020-04-07 11:08:57",
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 3,
    "HR_PERSON_TYPE_ID": "5",
    "HR_RECEIVE_TYPE": "compen",
    "HR_RECEIVE_NAME": "ค่าตอบแทน - งานประจำ",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 4,
    "HR_PERSON_TYPE_ID": "4",
    "HR_RECEIVE_TYPE": "compen",
    "HR_RECEIVE_NAME": "ค่าตอบแทน - งานเสริมฉุกเฉิน",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 5,
    "HR_PERSON_TYPE_ID": "4",
    "HR_RECEIVE_TYPE": "compen",
    "HR_RECEIVE_NAME": "ค่าตอบแทน - งาน REFER",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 6,
    "HR_PERSON_TYPE_ID": "4",
    "HR_RECEIVE_TYPE": "compen",
    "HR_RECEIVE_NAME": "ค่าตอบแทน - งานตรวจการ",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 8,
    "HR_PERSON_TYPE_ID": "4",
    "HR_RECEIVE_TYPE": "salary",
    "HR_RECEIVE_NAME": "แพทย์สาขาพิเศษ",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  },
  {
    "ID": 10,
    "HR_PERSON_TYPE_ID": "1",
    "HR_RECEIVE_TYPE": "salary",
    "HR_RECEIVE_NAME": "ค่าไม่ทำเวชปฏิบัติ",
    "updated_at": null,
    "created_at": null,
    "ACTIVE": "TRUE"
  }
]
```

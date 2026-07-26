# `salary_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| HR_PERSON_TYPE_ID | varchar(10) | YES |  | NULL |  |  |
| HR_PAY_TYPE | varchar(20) | YES |  | NULL |  |  |
| HR_PAY_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| HR_PAY_CAL | varchar(255) | YES |  | NULL |  |  |
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
    "ID": 3,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "ประกันสังคม",
    "updated_at": "2020-07-13 11:59:53",
    "created_at": null,
    "HR_PAY_CAL": "use",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 4,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "ฌกส.",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 5,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "ธ.ออมสิน",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 6,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "ค่าน้ำ ค่าไฟฟ้า",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 7,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "สระว่ายน้ำ ฟิตเนส ประกันฯ",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 10,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "โครงการจักรยาน",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 11,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "ประกันอุบัติเหตุ",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  },
  {
    "ID": 12,
    "HR_PERSON_TYPE_ID": "05",
    "HR_PAY_TYPE": "salary",
    "HR_PAY_NAME": "กองทุนลุกจ้าง",
    "updated_at": null,
    "created_at": null,
    "HR_PAY_CAL": "notuse",
    "ACTIVE": "TRUE"
  }
]
```

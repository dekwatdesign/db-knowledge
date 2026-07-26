# `gleave_over`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(255) | YES | MUL |  |  |  |
| DAY_LEAVE_OVER | int | YES |  | 0 |  |  |
| DATE_TIME | datetime | YES |  | NULL |  |  |
| OVER_YEAR_ID | varchar(5) | YES |  |  |  |  |
| OLDS | int | NO |  | 0 |  |  |
| DAY_LEAVE_OVER_BEFORE | decimal(10,2) | YES |  | 0.00 |  | วันลาผักผ่อนคงเหลือปีที่แล้ว |
| HR_PERSON_TYPE_ID | varchar(10) | YES |  |  |  | ประเภทบุคลากร ณ ปีนั้น |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| DAY_LEAVE_COLLECT | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_IDENTIFY | PERSON_ID | yes | 1 |
| IX_IDENTIFY | OVER_YEAR_ID | yes | 2 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 405,
    "PERSON_ID": "203",
    "DAY_LEAVE_OVER": 10,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "10.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-04-26 08:28:14",
    "created_at": "2022-01-18 10:34:20",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 404,
    "PERSON_ID": "178",
    "DAY_LEAVE_OVER": 10,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 5,
    "DAY_LEAVE_OVER_BEFORE": "12.50",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-04-26 04:53:59",
    "created_at": "2022-01-18 10:34:10",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 403,
    "PERSON_ID": "126",
    "DAY_LEAVE_OVER": 10,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 9,
    "DAY_LEAVE_OVER_BEFORE": "11.50",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-04-26 07:15:10",
    "created_at": "2022-01-18 10:33:59",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 215,
    "PERSON_ID": "8",
    "DAY_LEAVE_OVER": 10,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "21.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-04-26 08:34:32",
    "created_at": "2022-01-18 09:44:52",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 216,
    "PERSON_ID": "9",
    "DAY_LEAVE_OVER": 10,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "29.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-04-26 06:19:26",
    "created_at": "2022-01-18 09:45:12",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 217,
    "PERSON_ID": "2",
    "DAY_LEAVE_OVER": 0,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "0.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-01-18 09:45:43",
    "created_at": "2022-01-18 09:45:31",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 218,
    "PERSON_ID": "3",
    "DAY_LEAVE_OVER": 0,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "0.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-01-18 09:46:00",
    "created_at": "2022-01-18 09:45:53",
    "DAY_LEAVE_COLLECT": null
  },
  {
    "ID": 219,
    "PERSON_ID": "4",
    "DAY_LEAVE_OVER": 0,
    "DATE_TIME": null,
    "OVER_YEAR_ID": "2565",
    "OLDS": 52,
    "DAY_LEAVE_OVER_BEFORE": "0.00",
    "HR_PERSON_TYPE_ID": "1",
    "updated_at": "2022-01-18 10:04:53",
    "created_at": "2022-01-18 09:46:05",
    "DAY_LEAVE_COLLECT": null
  }
]
```

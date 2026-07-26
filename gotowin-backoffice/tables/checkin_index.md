# `checkin_index`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CHECKIN_ID | int | NO | PRI | NULL | auto_increment |  |
| CHECKIN_PERSON_ID | int | YES |  | NULL |  | ID ผู้ลงเวลา |
| HR_POSITION_ID | int | YES |  | NULL |  | ID ตำแหน่ง |
| HR_DEPARTMENT_SUB_SUB_ID | int | YES |  | NULL |  | ID หน่วยงาน |
| CHEACKIN_DATE | date | YES |  | NULL |  | วันที่ลงเวลา |
| CHEACKIN_TIME | time | YES |  | NULL |  | เวลาที่ลง |
| CHECKIN_TYPE_ID | int | YES |  | NULL |  | ประเภทการลงเวล (เข้า,ออก) |
| OPERATE_JOB_ID | int | YES |  | NULL |  | IDเวร |
| CHECKIN_REMARK | varchar(255) | YES |  | NULL |  | หมายเหตุ |
| IMG | blob | YES |  | NULL |  | รูปภาพ |
| CHECKIN_IP | varchar(50) | YES |  | NULL |  | ไอพีเครื่องที่ลง |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CHECKIN_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CHECKIN_ID": 1,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2021-03-16",
    "CHEACKIN_TIME": "10:48:48",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 1,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.9",
    "updated_at": "2021-03-16 10:38:48",
    "created_at": "2021-03-16 10:38:48"
  },
  {
    "CHECKIN_ID": 2,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2021-03-31",
    "CHEACKIN_TIME": "8:59:43",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 1,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.1",
    "updated_at": "2021-03-31 08:59:25",
    "created_at": "2021-03-31 08:59:25"
  },
  {
    "CHECKIN_ID": 3,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2022-01-17",
    "CHEACKIN_TIME": "8:25:37",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 25,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.9",
    "updated_at": "2022-01-17 08:25:18",
    "created_at": "2022-01-17 08:25:18"
  },
  {
    "CHECKIN_ID": 4,
    "CHECKIN_PERSON_ID": 178,
    "HR_POSITION_ID": 23,
    "HR_DEPARTMENT_SUB_SUB_ID": 50,
    "CHEACKIN_DATE": "2022-01-17",
    "CHEACKIN_TIME": "15:20:21",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 50,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.1",
    "updated_at": "2022-01-17 15:20:02",
    "created_at": "2022-01-17 15:20:02"
  },
  {
    "CHECKIN_ID": 5,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2022-01-17",
    "CHEACKIN_TIME": "17:03:35",
    "CHECKIN_TYPE_ID": 2,
    "OPERATE_JOB_ID": 25,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.9",
    "updated_at": "2022-01-17 17:03:17",
    "created_at": "2022-01-17 17:03:17"
  },
  {
    "CHECKIN_ID": 6,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2022-01-18",
    "CHEACKIN_TIME": "8:28:47",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 25,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.9",
    "updated_at": "2022-01-18 08:28:47",
    "created_at": "2022-01-18 08:28:47"
  },
  {
    "CHECKIN_ID": 7,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2022-01-18",
    "CHEACKIN_TIME": "17:37:36",
    "CHECKIN_TYPE_ID": 2,
    "OPERATE_JOB_ID": 25,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.9",
    "updated_at": "2022-01-18 17:37:17",
    "created_at": "2022-01-18 17:37:17"
  },
  {
    "CHECKIN_ID": 8,
    "CHECKIN_PERSON_ID": 63,
    "HR_POSITION_ID": 6,
    "HR_DEPARTMENT_SUB_SUB_ID": 25,
    "CHEACKIN_DATE": "2022-01-19",
    "CHEACKIN_TIME": "8:29:28",
    "CHECKIN_TYPE_ID": 1,
    "OPERATE_JOB_ID": 25,
    "CHECKIN_REMARK": null,
    "IMG": null,
    "CHECKIN_IP": "192.168.10.1",
    "updated_at": "2022-01-19 08:29:11",
    "created_at": "2022-01-19 08:29:11"
  }
]
```

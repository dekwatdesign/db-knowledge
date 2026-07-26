# `operate_job`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_JOB_ID | int | NO | PRI | NULL | auto_increment |  |
| OPERATE_JOB_NAME | varchar(50) | YES |  | NULL |  |  |
| OPERATE_JOB_TIMEBIGEN | time | YES |  | NULL |  |  |
| OPERATE_JOB_TIMEEND | time | YES |  | NULL |  |  |
| OPERATE_JOB_MONEY | double(20,0) | YES |  | NULL |  |  |
| OPERATE_JOB_TYPE_ID | int | YES |  | NULL |  |  |
| OPERATE_JOB_DETAIL | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| OPERATE_DEPARTMENT_SUB_SUB_ID | int | YES |  | NULL |  |  |
| OPERATE_JOB_COLOR | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATE_JOB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "OPERATE_JOB_ID": 1,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 01:54:00",
    "created_at": "2022-01-17 01:54:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 1,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 2,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 2,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 3,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 01:54:00",
    "created_at": "2022-01-17 01:54:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 3,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 4,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 4,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 5,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 5,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 6,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 6,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 7,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 7,
    "OPERATE_JOB_COLOR": "#FFFF99"
  },
  {
    "OPERATE_JOB_ID": 8,
    "OPERATE_JOB_NAME": "ปฏิบัติงานปกติ",
    "OPERATE_JOB_TIMEBIGEN": "8:30:00",
    "OPERATE_JOB_TIMEEND": "16:30:00",
    "OPERATE_JOB_MONEY": 0.0,
    "OPERATE_JOB_TYPE_ID": 1,
    "OPERATE_JOB_DETAIL": "ปฏิบัติงานปกติ",
    "updated_at": "2022-01-17 02:11:00",
    "created_at": "2022-01-17 02:11:00",
    "OPERATE_DEPARTMENT_SUB_SUB_ID": 8,
    "OPERATE_JOB_COLOR": "#FFFF99"
  }
]
```

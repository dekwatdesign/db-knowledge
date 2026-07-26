# `meetingroom_service_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| STATUS_CODE | varchar(20) | YES |  | NULL |  |  |
| STATUS_NAME | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "STATUS_ID": 1,
    "STATUS_CODE": "SUCCESS",
    "STATUS_NAME": "อนุมัติ"
  },
  {
    "STATUS_ID": 2,
    "STATUS_CODE": "REQUEST",
    "STATUS_NAME": "ร้องขอ"
  },
  {
    "STATUS_ID": 3,
    "STATUS_CODE": "CANCEL",
    "STATUS_NAME": "ยกเลิก"
  },
  {
    "STATUS_ID": 4,
    "STATUS_CODE": "INFORM",
    "STATUS_NAME": "แจ้งยกเลิก"
  },
  {
    "STATUS_ID": 5,
    "STATUS_CODE": "NOTSUCCESS",
    "STATUS_NAME": "ไม่อนุมัติ"
  },
  {
    "STATUS_ID": 6,
    "STATUS_CODE": "LASTAPP",
    "STATUS_NAME": "ผอ.อนุมัติ"
  },
  {
    "STATUS_ID": 7,
    "STATUS_CODE": "NOTLASTAPP",
    "STATUS_NAME": "ผอ.ไม่อนุมัติ"
  }
]
```

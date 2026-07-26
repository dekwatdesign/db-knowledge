# `vehicle_car_request_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | varchar(10) | NO | PRI | NULL |  |  |
| STATUS_NAME | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "STATUS_ID": "CANCEL",
    "STATUS_NAME": "ยกเลิก"
  },
  {
    "STATUS_ID": "LASTAPP",
    "STATUS_NAME": "ผอ.อนุมัติ"
  },
  {
    "STATUS_ID": "NOTLASTAPP",
    "STATUS_NAME": "ผอ.ไม่อนุมัติ"
  },
  {
    "STATUS_ID": "RECERVE",
    "STATUS_NAME": "ร้องขอ"
  },
  {
    "STATUS_ID": "REGROUP",
    "STATUS_NAME": "อนุมัติร่วม"
  },
  {
    "STATUS_ID": "SUCCESS",
    "STATUS_NAME": "อนุมัติ"
  }
]
```

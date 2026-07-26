# `operate_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_STATUS_CODE | varchar(50) | YES |  | NULL |  |  |
| OPERATE_STATUS_NAME | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "OPERATE_STATUS_CODE": "Allow",
    "OPERATE_STATUS_NAME": "ผอ.อนุมัติ"
  },
  {
    "OPERATE_STATUS_CODE": "Approve",
    "OPERATE_STATUS_NAME": "เห็นชอบ"
  },
  {
    "OPERATE_STATUS_CODE": "Cancel",
    "OPERATE_STATUS_NAME": "ยกเลิก"
  },
  {
    "OPERATE_STATUS_CODE": "Disallow",
    "OPERATE_STATUS_NAME": "ไม่อนุมัติ"
  },
  {
    "OPERATE_STATUS_CODE": "Disapprove",
    "OPERATE_STATUS_NAME": "ไม่เห็นชอบ"
  },
  {
    "OPERATE_STATUS_CODE": "Disverify",
    "OPERATE_STATUS_NAME": "ตรวจสอบไม่ผ่าน"
  },
  {
    "OPERATE_STATUS_CODE": "Pending",
    "OPERATE_STATUS_NAME": "ร้องขอ"
  },
  {
    "OPERATE_STATUS_CODE": "Verify",
    "OPERATE_STATUS_NAME": "ตรวจสอบผ่าน"
  }
]
```

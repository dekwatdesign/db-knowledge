# `warehouse_request_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_CODE | varchar(20) | NO | PRI |  |  |  |
| STATUS_NAME | varchar(50) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_CODE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "STATUS_CODE": "Allow",
    "STATUS_NAME": "อนุมัติ"
  },
  {
    "STATUS_CODE": "Approve",
    "STATUS_NAME": "เห็นชอบ"
  },
  {
    "STATUS_CODE": "Cancel",
    "STATUS_NAME": "ยกเลิก"
  },
  {
    "STATUS_CODE": "Disallow",
    "STATUS_NAME": "ไม่อนุมัติ"
  },
  {
    "STATUS_CODE": "Disapprove",
    "STATUS_NAME": "ไม่เห็นชอบ"
  },
  {
    "STATUS_CODE": "Disverify",
    "STATUS_NAME": "ตรวจสอบไม่ผ่าน"
  },
  {
    "STATUS_CODE": "Pending",
    "STATUS_NAME": "รอเห็นชอบ"
  },
  {
    "STATUS_CODE": "Verify",
    "STATUS_NAME": "ตรวจสอบผ่าน"
  }
]
```

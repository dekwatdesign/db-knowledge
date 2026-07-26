# `grecord_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID_STATUS | int | NO | PRI | NULL | auto_increment |  |
| STATUS | varchar(255) | YES |  | NULL |  |  |
| STATUS_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID_STATUS | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "ID_STATUS": 1,
    "STATUS": "APPLY",
    "STATUS_NAME": "ร้องขอ"
  },
  {
    "ID_STATUS": 2,
    "STATUS": "RECEIVE",
    "STATUS_NAME": "รับเรื่อง"
  },
  {
    "ID_STATUS": 3,
    "STATUS": "EDIT",
    "STATUS_NAME": "แก้ไข"
  },
  {
    "ID_STATUS": 4,
    "STATUS": "SUCCESS",
    "STATUS_NAME": "อนุมัติ"
  },
  {
    "ID_STATUS": 5,
    "STATUS": "CANCEL",
    "STATUS_NAME": "ยกเลิก"
  },
  {
    "ID_STATUS": 6,
    "STATUS": "NOTALLOW",
    "STATUS_NAME": "ไม่อนุมัติ"
  }
]
```

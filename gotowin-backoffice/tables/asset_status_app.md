# `asset_status_app`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| STATUS_NAME | varchar(100) | YES |  |  |  |  |
| STATUS | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "STATUS_ID": 1,
    "STATUS_NAME": "ร้องขอ",
    "STATUS": "REQUEST"
  },
  {
    "STATUS_ID": 2,
    "STATUS_NAME": "อนุมัติ",
    "STATUS": "APPROVE"
  },
  {
    "STATUS_ID": 3,
    "STATUS_NAME": "ไม่อนุมัติ",
    "STATUS": "NOTAPPROVE"
  },
  {
    "STATUS_ID": 4,
    "STATUS_NAME": "ยกเลิก",
    "STATUS": "CANCEL"
  }
]
```

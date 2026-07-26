# `gleave_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_CODE | varchar(20) | NO | PRI |  |  |  |
| STATUS_NAME | varchar(50) | YES |  |  |  |  |
| STATUS_RANK | varchar(255) | YES |  | NULL |  |  |

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
    "STATUS_NAME": "ผอ.อนุมัติ",
    "STATUS_RANK": "01"
  },
  {
    "STATUS_CODE": "Appcancel",
    "STATUS_NAME": "เห็นชอบยกเลิก",
    "STATUS_RANK": "09"
  },
  {
    "STATUS_CODE": "Approve",
    "STATUS_NAME": "เห็นชอบ",
    "STATUS_RANK": "03"
  },
  {
    "STATUS_CODE": "ApproveGroup",
    "STATUS_NAME": "หน.กลุ่มเห็นชอบ",
    "STATUS_RANK": "13"
  },
  {
    "STATUS_CODE": "Cancel",
    "STATUS_NAME": "ยกเลิก",
    "STATUS_RANK": "11"
  },
  {
    "STATUS_CODE": "Disallow",
    "STATUS_NAME": "ไม่อนุมัติ",
    "STATUS_RANK": "02"
  },
  {
    "STATUS_CODE": "Disappcancel",
    "STATUS_NAME": "ไม่เห็นชอบยกเลิก",
    "STATUS_RANK": "10"
  },
  {
    "STATUS_CODE": "Disapprove",
    "STATUS_NAME": "ไม่เห็นชอบ",
    "STATUS_RANK": "05"
  }
]
```

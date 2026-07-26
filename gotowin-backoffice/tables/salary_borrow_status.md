# `salary_borrow_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| STATUS_NAME | varchar(100) | YES |  |  |  |  |
| STATUS_NAME_TH | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "STATUS_ID": 1,
    "STATUS_NAME": "REQUEST",
    "STATUS_NAME_TH": "ร้องขอ",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 2,
    "STATUS_NAME": "APP",
    "STATUS_NAME_TH": "เห็นชอบ",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 3,
    "STATUS_NAME": "NOTAPP",
    "STATUS_NAME_TH": "ไม่เห็นชอบ",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 4,
    "STATUS_NAME": "SUCCESS",
    "STATUS_NAME_TH": "อนุมัติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 5,
    "STATUS_NAME": "NOTSUCCESS",
    "STATUS_NAME_TH": "ไม่อนุมัติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 6,
    "STATUS_NAME": "SENDMON",
    "STATUS_NAME_TH": "แจ้งคืนเงิน",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 7,
    "STATUS_NAME": "REMON",
    "STATUS_NAME_TH": "ยืนยันการรับเงิน",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 8,
    "STATUS_NAME": "CANCEL",
    "STATUS_NAME_TH": "ยกเลิก",
    "updated_at": null,
    "created_at": null
  }
]
```

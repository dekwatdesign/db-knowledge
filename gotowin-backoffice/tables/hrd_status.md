# `hrd_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_STATUS_NAME | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_STATUS_ID": 1,
    "HR_STATUS_NAME": "ทำงานปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 2,
    "HR_STATUS_NAME": "ลาศึกษาต่อ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 3,
    "HR_STATUS_NAME": "ช่วยราชการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 4,
    "HR_STATUS_NAME": "พักราชการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 5,
    "HR_STATUS_NAME": "ลาออก",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 6,
    "HR_STATUS_NAME": "ให้ออก",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 7,
    "HR_STATUS_NAME": "ย้าย",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_STATUS_ID": 8,
    "HR_STATUS_NAME": "เกษียณ",
    "updated_at": "2019-10-14 10:18:51",
    "created_at": null
  }
]
```

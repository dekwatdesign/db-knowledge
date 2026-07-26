# `informcom_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| STATUS_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "STATUS_ID": 1,
    "STATUS_NAME": "ใช้งาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 2,
    "STATUS_NAME": "ยกเลิกการใช้งาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 3,
    "STATUS_NAME": "ดำเนินการซ่อม",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 4,
    "STATUS_NAME": "เสียซ่อมไม่ได้",
    "updated_at": null,
    "created_at": null
  },
  {
    "STATUS_ID": 5,
    "STATUS_NAME": "ว่างไม่ได้ใช้งาน",
    "updated_at": null,
    "created_at": null
  }
]
```

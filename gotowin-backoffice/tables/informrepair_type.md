# `informrepair_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COM_REPAIR_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| COM_REPAIR_TYPE_NAME | varchar(100) | YES |  |  |  | ประเภทการซ่อมเพื่อแยกทำรายงาน |
| COM_REPAIR_TYPE_DETAIL | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COM_REPAIR_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "COM_REPAIR_TYPE_ID": 1,
    "COM_REPAIR_TYPE_NAME": "ปัญหา Hardware",
    "COM_REPAIR_TYPE_DETAIL": "-",
    "updated_at": null,
    "created_at": null
  },
  {
    "COM_REPAIR_TYPE_ID": 2,
    "COM_REPAIR_TYPE_NAME": "ปัญหา Software",
    "COM_REPAIR_TYPE_DETAIL": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "COM_REPAIR_TYPE_ID": 3,
    "COM_REPAIR_TYPE_NAME": "ปัญหา Network",
    "COM_REPAIR_TYPE_DETAIL": "",
    "updated_at": null,
    "created_at": null
  }
]
```

# `informrepair_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PRIORITY_ID | int | NO | PRI | NULL | auto_increment |  |
| PRIORITY_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PRIORITY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "PRIORITY_ID": 1,
    "PRIORITY_NAME": "ปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRIORITY_ID": 2,
    "PRIORITY_NAME": "ด่วน",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRIORITY_ID": 3,
    "PRIORITY_NAME": "ด่วนมาก",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRIORITY_ID": 4,
    "PRIORITY_NAME": "ด่วนที่สุด",
    "updated_at": null,
    "created_at": null
  }
]
```

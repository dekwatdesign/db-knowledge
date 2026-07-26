# `grecord_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "RECORD_TYPE_ID": 1,
    "RECORD_TYPE_NAME": "เพื่อประชุมติดตามงาน/รับนโยบาย",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_TYPE_ID": 2,
    "RECORD_TYPE_NAME": "เพื่อประชุมวิชาการ/สัมมนา/ฝีกอบรม",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_TYPE_ID": 3,
    "RECORD_TYPE_NAME": "เพื่อเป็นวิทยากร",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_TYPE_ID": 4,
    "RECORD_TYPE_NAME": "เพื่อนำเสนอผลงาน/จัดนิทรรศการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_TYPE_ID": 5,
    "RECORD_TYPE_NAME": "เพื่อศึกษาดูงาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_TYPE_ID": 6,
    "RECORD_TYPE_NAME": "อื่นๆ",
    "updated_at": null,
    "created_at": null
  }
]
```

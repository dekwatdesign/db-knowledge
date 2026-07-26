# `grecord_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_LEVEL_NAME | varchar(255) | YES |  |  |  |  |
| RECORD_LEVEL_SHORT | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ID": 1,
    "RECORD_LEVEL_NAME": "ผู้บริหารระดับสูง",
    "RECORD_LEVEL_SHORT": "นบส.",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 2,
    "RECORD_LEVEL_NAME": "ผู้บริหารระดับกลาง",
    "RECORD_LEVEL_SHORT": "ผบก.",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 3,
    "RECORD_LEVEL_NAME": "ผู้บริหาระดับต้น",
    "RECORD_LEVEL_SHORT": "ผบต.",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 4,
    "RECORD_LEVEL_NAME": "ไม่ระบุ",
    "RECORD_LEVEL_SHORT": "",
    "updated_at": null,
    "created_at": null
  }
]
```

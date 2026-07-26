# `grecord_capacity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_CAPACITY_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_CAPACITY_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_CAPACITY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "RECORD_CAPACITY_ID": 1,
    "RECORD_CAPACITY_NAME": "ด้านความเชี่ยวชาญในงานอาชีพ1",
    "updated_at": "2019-09-12 11:55:58",
    "created_at": null
  },
  {
    "RECORD_CAPACITY_ID": 2,
    "RECORD_CAPACITY_NAME": "ด้านวิชาการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_CAPACITY_ID": 3,
    "RECORD_CAPACITY_NAME": "ด้านทัศนคติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_CAPACITY_ID": 4,
    "RECORD_CAPACITY_NAME": "ด้านจริยธรรม",
    "updated_at": null,
    "created_at": null
  }
]
```

# `gbook_instant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INSTANT_ID | int | NO | PRI | NULL | auto_increment |  |
| INSTANT_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INSTANT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "INSTANT_ID": 1,
    "INSTANT_NAME": "ปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "INSTANT_ID": 2,
    "INSTANT_NAME": "ด่วน",
    "updated_at": null,
    "created_at": null
  },
  {
    "INSTANT_ID": 3,
    "INSTANT_NAME": "ด่วนมาก",
    "updated_at": null,
    "created_at": null
  },
  {
    "INSTANT_ID": 4,
    "INSTANT_NAME": "ด่วนที่สุด",
    "updated_at": null,
    "created_at": null
  }
]
```

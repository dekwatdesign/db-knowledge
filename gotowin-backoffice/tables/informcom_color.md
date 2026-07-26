# `informcom_color`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COLOR_ID | int | NO | PRI | NULL | auto_increment |  |
| COLOR_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COLOR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "COLOR_ID": 1,
    "COLOR_NAME": "ดำ",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 2,
    "COLOR_NAME": "ขาว",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 3,
    "COLOR_NAME": "ดำ-แดง",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 4,
    "COLOR_NAME": "บอร์นเทา",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 5,
    "COLOR_NAME": "ขาว-เขียว",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 6,
    "COLOR_NAME": "ดำ-บอร์น",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 7,
    "COLOR_NAME": "เทา",
    "updated_at": null,
    "created_at": null
  },
  {
    "COLOR_ID": 8,
    "COLOR_NAME": "บอร์น-ชมพู",
    "updated_at": null,
    "created_at": null
  }
]
```

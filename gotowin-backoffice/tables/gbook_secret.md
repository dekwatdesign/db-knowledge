# `gbook_secret`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_SECRET_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_SECRET_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_SECRET_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "BOOK_SECRET_ID": 1,
    "BOOK_SECRET_NAME": "ปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_SECRET_ID": 2,
    "BOOK_SECRET_NAME": "ลับ",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_SECRET_ID": 3,
    "BOOK_SECRET_NAME": "ลับมาก",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_SECRET_ID": 4,
    "BOOK_SECRET_NAME": "ลับที่สุด",
    "updated_at": null,
    "created_at": null
  }
]
```

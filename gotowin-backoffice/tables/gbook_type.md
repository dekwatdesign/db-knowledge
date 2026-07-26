# `gbook_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_TYPE_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "BOOK_TYPE_ID": 1,
    "BOOK_TYPE_NAME": "หนังสือภายนอก",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 2,
    "BOOK_TYPE_NAME": "หนังสือภายใน",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 3,
    "BOOK_TYPE_NAME": "หนังสือประทับตรา",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 4,
    "BOOK_TYPE_NAME": "หนังสือสั่งการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 5,
    "BOOK_TYPE_NAME": "หนังสือประชาสัมพันธ์",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 6,
    "BOOK_TYPE_NAME": "หนังสือที่เจ้าหน้าที่ทำขึ้นหรือรับไว้เป็นหลักฐานในราชการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 7,
    "BOOK_TYPE_NAME": "หนังสือวิทยุ",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_ID": 8,
    "BOOK_TYPE_NAME": "หนังสือขอประวัติการรักษาพยาบาล",
    "updated_at": null,
    "created_at": null
  }
]
```

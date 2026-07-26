# `gbook_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_STATUS_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "BOOK_STATUS_ID": 1,
    "BOOK_STATUS_NAME": "ลงรับ"
  },
  {
    "BOOK_STATUS_ID": 2,
    "BOOK_STATUS_NAME": "ส่งหน่วยงาน"
  },
  {
    "BOOK_STATUS_ID": 3,
    "BOOK_STATUS_NAME": "ผอ.ลงนาม"
  },
  {
    "BOOK_STATUS_ID": 4,
    "BOOK_STATUS_NAME": "เสนอ ผอ."
  }
]
```

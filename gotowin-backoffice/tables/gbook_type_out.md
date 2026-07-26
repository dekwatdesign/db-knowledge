# `gbook_type_out`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_TYPE_OUT_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_TYPE_OUT_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_TYPE_OUT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "BOOK_TYPE_OUT_ID": 1,
    "BOOK_TYPE_OUT_NAME": "หนังสือภายนอก",
    "updated_at": null,
    "created_at": null
  },
  {
    "BOOK_TYPE_OUT_ID": 2,
    "BOOK_TYPE_OUT_NAME": "หนังสือภายใน",
    "updated_at": null,
    "created_at": null
  }
]
```

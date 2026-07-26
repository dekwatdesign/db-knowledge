# `grecord_doctype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECODE_DOCTYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| RECODE_DOCTYPE_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECODE_DOCTYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "RECODE_DOCTYPE_ID": 1,
    "RECODE_DOCTYPE_NAME": "คู่มือ",
    "updated_at": "2019-05-16 16:28:11",
    "created_at": "2019-05-16 16:28:11"
  },
  {
    "RECODE_DOCTYPE_ID": 2,
    "RECODE_DOCTYPE_NAME": "เอกสารนำเสนอ",
    "updated_at": "2019-05-16 16:28:38",
    "created_at": "2019-05-16 16:28:38"
  }
]
```

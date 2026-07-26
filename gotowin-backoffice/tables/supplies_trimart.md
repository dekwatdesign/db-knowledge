# `supplies_trimart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TRIMART_ID | int | NO | PRI | NULL | auto_increment |  |
| TRIMART_NAME | varchar(255) | YES |  |  |  |  |
| MONTH_BEGIN | varchar(10) | YES |  |  |  |  |
| MONTH_END | varchar(10) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | False |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TRIMART_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "TRIMART_ID": 1,
    "TRIMART_NAME": "ไตรมาสต์ที่ 1",
    "MONTH_BEGIN": "10",
    "MONTH_END": "12",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TRIMART_ID": 2,
    "TRIMART_NAME": "ไตรมาสต์ที่ 2",
    "MONTH_BEGIN": "1",
    "MONTH_END": "3",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TRIMART_ID": 3,
    "TRIMART_NAME": "ไตรมาสต์ที่ 3",
    "MONTH_BEGIN": "4",
    "MONTH_END": "6",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TRIMART_ID": 4,
    "TRIMART_NAME": "ไตรมาสต์ที่ 4",
    "MONTH_BEGIN": "7",
    "MONTH_END": "9",
    "ACTIVE": "True",
    "updated_at": "2019-09-13 09:16:07",
    "created_at": null
  }
]
```

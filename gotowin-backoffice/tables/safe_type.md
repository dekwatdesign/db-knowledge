# `safe_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SAFE_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| SAFE_TYPE_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SAFE_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "SAFE_TYPE_ID": 1,
    "SAFE_TYPE_NAME": "เวรเช้า 08.00-20.00 น.",
    "updated_at": "2019-09-13 12:54:32",
    "created_at": null
  },
  {
    "SAFE_TYPE_ID": 2,
    "SAFE_TYPE_NAME": "เวรบ่าย 20.00-08.00 น.",
    "updated_at": "2019-09-13 12:54:38",
    "created_at": null
  }
]
```

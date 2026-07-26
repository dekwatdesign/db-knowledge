# `supplies_type_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LIST_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| LIST_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LIST_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "LIST_TYPE_ID": 1,
    "LIST_TYPE_NAME": "รายการปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "LIST_TYPE_ID": 2,
    "LIST_TYPE_NAME": "รายการแถม",
    "updated_at": null,
    "created_at": null
  },
  {
    "LIST_TYPE_ID": 5,
    "LIST_TYPE_NAME": "รายการรับบริจาค",
    "updated_at": "2020-09-21 10:06:21",
    "created_at": "2019-09-26 12:20:31"
  }
]
```

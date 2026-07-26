# `supplies_method`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| METHOD_ID | int | NO | PRI | NULL | auto_increment |  |
| METHOD_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | METHOD_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "METHOD_ID": 1,
    "METHOD_NAME": "ซื้อ",
    "updated_at": null,
    "created_at": null
  },
  {
    "METHOD_ID": 2,
    "METHOD_NAME": "จ้างก่อสร้าง",
    "updated_at": null,
    "created_at": null
  },
  {
    "METHOD_ID": 3,
    "METHOD_NAME": "จ้างทำของ/จ้างเหมาบริการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "METHOD_ID": 4,
    "METHOD_NAME": "เช่า",
    "updated_at": null,
    "created_at": null
  },
  {
    "METHOD_ID": 5,
    "METHOD_NAME": "ได้รับบริจาค",
    "updated_at": "2020-09-28 02:18:17",
    "created_at": "2020-09-28 02:18:17"
  }
]
```

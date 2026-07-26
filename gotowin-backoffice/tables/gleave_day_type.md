# `gleave_day_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DAY_TYPE_ID | varchar(5) | NO | PRI |  |  |  |
| DAY_TYPE_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DAY_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "DAY_TYPE_ID": "1",
    "DAY_TYPE_NAME": "เต็มวัน",
    "updated_at": "2020-03-05 02:15:03",
    "created_at": null
  },
  {
    "DAY_TYPE_ID": "2",
    "DAY_TYPE_NAME": "ครึ่งวัน(เช้า)",
    "updated_at": null,
    "created_at": null
  },
  {
    "DAY_TYPE_ID": "3",
    "DAY_TYPE_NAME": "ครึ่งวัน(บ่าย)",
    "updated_at": null,
    "created_at": null
  }
]
```

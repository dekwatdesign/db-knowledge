# `meetingroom_food_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FOOD_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| FOOD_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FOOD_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "FOOD_TYPE_ID": 1,
    "FOOD_TYPE_NAME": "อาหารกลางวัน",
    "updated_at": "2020-03-20 03:38:49",
    "created_at": null
  },
  {
    "FOOD_TYPE_ID": 2,
    "FOOD_TYPE_NAME": "อาหารว่าง",
    "updated_at": "2019-09-12 12:00:38",
    "created_at": null
  },
  {
    "FOOD_TYPE_ID": 6,
    "FOOD_TYPE_NAME": "ไม่มีเลี้ยงอาหาร",
    "updated_at": "2022-01-20 10:08:51",
    "created_at": "2022-01-20 10:08:51"
  }
]
```

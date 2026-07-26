# `operate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| OPERATE_TYPE_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| OPERATE_TYPE_UNIT_OT | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATE_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "OPERATE_TYPE_ID": 1,
    "OPERATE_TYPE_NAME": "ปกติ",
    "updated_at": null,
    "created_at": null,
    "OPERATE_TYPE_UNIT_OT": "0"
  },
  {
    "OPERATE_TYPE_ID": 2,
    "OPERATE_TYPE_NAME": "ล่วงเวลา (OT)",
    "updated_at": "2020-03-20 03:39:28",
    "created_at": null,
    "OPERATE_TYPE_UNIT_OT": "1"
  },
  {
    "OPERATE_TYPE_ID": 5,
    "OPERATE_TYPE_NAME": "On call 1",
    "updated_at": "2019-06-17 05:37:15",
    "created_at": "2019-06-17 05:17:43",
    "OPERATE_TYPE_UNIT_OT": "0.5"
  },
  {
    "OPERATE_TYPE_ID": 6,
    "OPERATE_TYPE_NAME": "On call 2",
    "updated_at": "2019-06-18 02:49:43",
    "created_at": "2019-06-17 05:37:09",
    "OPERATE_TYPE_UNIT_OT": "0.25"
  },
  {
    "OPERATE_TYPE_ID": 7,
    "OPERATE_TYPE_NAME": "เวรเช้า",
    "updated_at": "2022-05-09 03:01:15",
    "created_at": "2022-05-09 03:01:15",
    "OPERATE_TYPE_UNIT_OT": "0"
  },
  {
    "OPERATE_TYPE_ID": 8,
    "OPERATE_TYPE_NAME": "เวรบ่าย",
    "updated_at": "2022-05-09 03:01:31",
    "created_at": "2022-05-09 03:01:31",
    "OPERATE_TYPE_UNIT_OT": "0"
  },
  {
    "OPERATE_TYPE_ID": 9,
    "OPERATE_TYPE_NAME": "เวรดึก",
    "updated_at": "2022-05-09 03:01:45",
    "created_at": "2022-05-09 03:01:45",
    "OPERATE_TYPE_UNIT_OT": "0"
  }
]
```

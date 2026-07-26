# `vehicle_car_appoint_locate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| APPOINT_LOCATE_ID | int | NO | PRI | NULL | auto_increment |  |
| APPOINT_LOCATE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | APPOINT_LOCATE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "APPOINT_LOCATE_ID": 1,
    "APPOINT_LOCATE_NAME": "หน้าอาคารอำนวยการฯ",
    "updated_at": "2020-03-20 03:42:50",
    "created_at": "2020-03-20 03:42:50"
  },
  {
    "APPOINT_LOCATE_ID": 2,
    "APPOINT_LOCATE_NAME": "หน้าร้านสวัสดิการ",
    "updated_at": "2020-03-20 03:43:03",
    "created_at": "2020-03-20 03:43:03"
  },
  {
    "APPOINT_LOCATE_ID": 3,
    "APPOINT_LOCATE_NAME": "หน้าอาคารนันทนการ",
    "updated_at": "2020-03-20 03:43:27",
    "created_at": "2020-03-20 03:43:27"
  }
]
```

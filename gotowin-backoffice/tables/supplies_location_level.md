# `supplies_location_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LOCATION_LEVEL_ID | int | NO | PRI | NULL | auto_increment |  |
| LOCATION_LEVEL_NAME | varchar(255) | YES |  |  |  |  |
| LOCATION_ID | varchar(10) | YES |  |  |  | อ้างถึงตึกไหน |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LOCATION_LEVEL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LOCATION_LEVEL_ID": 1,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยใน ชั้น 1",
    "LOCATION_ID": "2",
    "updated_at": "2022-06-23 09:17:59",
    "created_at": "2021-11-24 14:07:40"
  },
  {
    "LOCATION_LEVEL_ID": 2,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้น 1",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:16:13",
    "created_at": "2022-06-23 09:16:13"
  },
  {
    "LOCATION_LEVEL_ID": 3,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้น 2",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:16:24",
    "created_at": "2022-06-23 09:16:24"
  },
  {
    "LOCATION_LEVEL_ID": 4,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้น 3",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:16:29",
    "created_at": "2022-06-23 09:16:29"
  },
  {
    "LOCATION_LEVEL_ID": 5,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้น 4",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:16:36",
    "created_at": "2022-06-23 09:16:36"
  },
  {
    "LOCATION_LEVEL_ID": 6,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้นใต้ดิน",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:16:51",
    "created_at": "2022-06-23 09:16:51"
  },
  {
    "LOCATION_LEVEL_ID": 7,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยนอกและอำนวยการ ชั้นดาดฟ้า",
    "LOCATION_ID": "1",
    "updated_at": "2022-06-23 09:17:06",
    "created_at": "2022-06-23 09:17:06"
  },
  {
    "LOCATION_LEVEL_ID": 8,
    "LOCATION_LEVEL_NAME": "อาคารผู้ป่วยใน ชั้น 2",
    "LOCATION_ID": "2",
    "updated_at": "2022-06-23 09:18:05",
    "created_at": "2022-06-23 09:18:05"
  }
]
```

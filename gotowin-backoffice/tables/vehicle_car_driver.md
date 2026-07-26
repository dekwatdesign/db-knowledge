# `vehicle_car_driver`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| DRIVER_POSITION | varchar(255) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| DRIVER_ID | int | NO | PRI | NULL | auto_increment |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DRIVER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "PERSON_ID": "17",
    "DRIVER_POSITION": "พนักงานบริการ",
    "ACTIVE": "True",
    "DRIVER_ID": 1,
    "updated_at": "2022-05-19 07:01:37",
    "created_at": "2020-08-04 08:39:30"
  },
  {
    "PERSON_ID": "19",
    "DRIVER_POSITION": "พนักงานประจำตึก",
    "ACTIVE": "True",
    "DRIVER_ID": 3,
    "updated_at": "2022-05-19 07:01:37",
    "created_at": "2020-09-16 04:57:46"
  },
  {
    "PERSON_ID": "20",
    "DRIVER_POSITION": "พนักงานบริการ",
    "ACTIVE": "False",
    "DRIVER_ID": 4,
    "updated_at": "2026-04-07 00:48:05",
    "created_at": "2020-09-16 04:57:56"
  },
  {
    "PERSON_ID": "304",
    "DRIVER_POSITION": "พนักงานขับรถยนต์",
    "ACTIVE": "True",
    "DRIVER_ID": 8,
    "updated_at": "2026-04-07 00:48:03",
    "created_at": "2026-04-07 00:47:48"
  },
  {
    "PERSON_ID": "11",
    "DRIVER_POSITION": "นักจัดการงานทั่วไป",
    "ACTIVE": "False",
    "DRIVER_ID": 6,
    "updated_at": "2026-04-07 00:48:06",
    "created_at": "2022-05-18 10:23:44"
  },
  {
    "PERSON_ID": "303",
    "DRIVER_POSITION": "พนักงานขับรถยนต์",
    "ACTIVE": "True",
    "DRIVER_ID": 9,
    "updated_at": "2026-04-07 00:48:03",
    "created_at": "2026-04-07 00:47:59"
  }
]
```

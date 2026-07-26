# `vehicle_car_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_STATUS_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "CAR_STATUS_ID": 1,
    "CAR_STATUS_NAME": "ใช้งานปกติ",
    "updated_at": "2020-09-30 02:00:56",
    "created_at": null
  },
  {
    "CAR_STATUS_ID": 2,
    "CAR_STATUS_NAME": "อยู่ระหว่างซ่อมบำรุง",
    "updated_at": "2020-09-30 02:01:09",
    "created_at": null
  },
  {
    "CAR_STATUS_ID": 3,
    "CAR_STATUS_NAME": "รอจำหน่าย",
    "updated_at": "2020-09-30 02:03:19",
    "created_at": null
  },
  {
    "CAR_STATUS_ID": 4,
    "CAR_STATUS_NAME": "จำหน่ายแล้ว",
    "updated_at": "2020-09-30 02:01:50",
    "created_at": "2020-09-30 02:01:50"
  }
]
```

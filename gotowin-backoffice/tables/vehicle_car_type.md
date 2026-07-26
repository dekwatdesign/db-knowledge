# `vehicle_car_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "CAR_TYPE_ID": 2,
    "CAR_TYPE_NAME": "รถยนต์กระบะ",
    "updated_at": "2022-01-13 10:32:25",
    "created_at": null
  },
  {
    "CAR_TYPE_ID": 3,
    "CAR_TYPE_NAME": "รถตู้",
    "updated_at": "2022-01-13 10:30:25",
    "created_at": null
  },
  {
    "CAR_TYPE_ID": 4,
    "CAR_TYPE_NAME": "รถพยาบาล",
    "updated_at": "2022-01-13 10:30:41",
    "created_at": null
  },
  {
    "CAR_TYPE_ID": 1,
    "CAR_TYPE_NAME": "รถยนต์ส่วนบุคคล",
    "updated_at": "2022-01-13 10:32:10",
    "created_at": null
  }
]
```

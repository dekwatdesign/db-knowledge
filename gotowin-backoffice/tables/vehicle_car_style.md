# `vehicle_car_style`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_STYLE_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_STYLE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_STYLE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "CAR_STYLE_ID": 1,
    "CAR_STYLE_NAME": "รถพยาบาล (Ambulance)",
    "updated_at": "2020-08-04 08:34:33",
    "created_at": null
  },
  {
    "CAR_STYLE_ID": 2,
    "CAR_STYLE_NAME": "รถตู้ 4 ประตู 10 ที่นั่ง",
    "updated_at": "2020-08-04 08:36:12",
    "created_at": null
  },
  {
    "CAR_STYLE_ID": 3,
    "CAR_STYLE_NAME": "รถยนต์ 4 ประตู",
    "updated_at": "2022-01-13 10:33:10",
    "created_at": null
  },
  {
    "CAR_STYLE_ID": 10,
    "CAR_STYLE_NAME": "รถกระบะ 4 ประตู",
    "updated_at": "2022-01-13 10:33:28",
    "created_at": "2022-01-13 10:33:28"
  }
]
```

# `vehicle_car_function`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_FUNCTION_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| CAR_FUNCTION_NAME | varchar(255) | YES |  | NULL |  |  |
| CAR_FUNCTION_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_FUNCTION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "CAR_FUNCTION_ID": 1,
    "CAR_FUNCTION_NAME": "ใบขออนุญาตใช้รถยนต์ส่วนกลาง/รถรับรอง/รถรับรองประจำจังหวัด/รถอารักขา",
    "CAR_FUNCTION_STATUS": "False",
    "updated_at": "2022-01-18 16:30:45",
    "created_at": "2021-07-29 18:59:55"
  },
  {
    "CAR_FUNCTION_ID": 2,
    "CAR_FUNCTION_NAME": "ใบขออนุญาตใช้รถยนต์ส่วนกลาง",
    "CAR_FUNCTION_STATUS": "True",
    "updated_at": "2022-02-23 17:48:15",
    "created_at": "2021-07-29 19:04:04"
  },
  {
    "CAR_FUNCTION_ID": 3,
    "CAR_FUNCTION_NAME": "ใบขอใช้รถยนต์ส่วนกลางโรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "CAR_FUNCTION_STATUS": "False",
    "updated_at": "2022-02-22 11:24:00",
    "created_at": "2022-02-22 11:13:24"
  },
  {
    "CAR_FUNCTION_ID": 4,
    "CAR_FUNCTION_NAME": "ใบขออนุญาตใช้รถยนต์ส่วนกลางโรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "CAR_FUNCTION_STATUS": "False",
    "updated_at": "2022-02-23 17:48:14",
    "created_at": "2022-02-22 11:24:17"
  }
]
```

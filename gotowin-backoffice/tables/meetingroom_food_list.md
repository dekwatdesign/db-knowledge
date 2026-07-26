# `meetingroom_food_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| SERVICE_ID | int | YES |  | NULL |  |  |
| FOOD_ID | varchar(10) | YES |  |  |  |  |
| TOTAL | int | YES |  | NULL |  |  |
| FOOD_PRICE | decimal(10,2) | YES |  | NULL |  |  |
| FOOD_UNIT | varchar(100) | YES |  |  |  |  |
| FOOD_TYPE_ID | varchar(10) | YES |  |  |  |  |
| FOOD_TIME_ID | varchar(10) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "SERVICE_ID": 2,
    "FOOD_ID": "1",
    "TOTAL": 25,
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "1",
    "updated_at": "2019-10-29 15:24:00",
    "created_at": "2019-10-29 15:24:00"
  },
  {
    "ID": 2,
    "SERVICE_ID": 2,
    "FOOD_ID": "3",
    "TOTAL": 25,
    "FOOD_PRICE": "80.00",
    "FOOD_UNIT": "จาน",
    "FOOD_TYPE_ID": "",
    "FOOD_TIME_ID": "2",
    "updated_at": "2019-10-29 15:24:00",
    "created_at": "2019-10-29 15:24:00"
  },
  {
    "ID": 3,
    "SERVICE_ID": 2,
    "FOOD_ID": "5",
    "TOTAL": 25,
    "FOOD_PRICE": "10.00",
    "FOOD_UNIT": "ขวด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "2",
    "updated_at": "2019-10-29 15:24:00",
    "created_at": "2019-10-29 15:24:00"
  },
  {
    "ID": 4,
    "SERVICE_ID": 3,
    "FOOD_ID": "1",
    "TOTAL": 20,
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "1",
    "updated_at": "2019-10-29 15:40:53",
    "created_at": "2019-10-29 15:40:53"
  },
  {
    "ID": 5,
    "SERVICE_ID": 3,
    "FOOD_ID": "5",
    "TOTAL": 20,
    "FOOD_PRICE": "10.00",
    "FOOD_UNIT": "ขวด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "1",
    "updated_at": "2019-10-29 15:40:53",
    "created_at": "2019-10-29 15:40:53"
  },
  {
    "ID": 6,
    "SERVICE_ID": 9,
    "FOOD_ID": "2",
    "TOTAL": 10,
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "5",
    "updated_at": "2022-01-17 08:41:28",
    "created_at": "2022-01-17 08:41:28"
  },
  {
    "ID": 7,
    "SERVICE_ID": 15,
    "FOOD_ID": "2",
    "TOTAL": 0,
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "5",
    "updated_at": "2022-01-19 08:13:27",
    "created_at": "2022-01-19 08:13:27"
  },
  {
    "ID": 8,
    "SERVICE_ID": 15,
    "FOOD_ID": "5",
    "TOTAL": 0,
    "FOOD_PRICE": "10.00",
    "FOOD_UNIT": "ขวด",
    "FOOD_TYPE_ID": "1",
    "FOOD_TIME_ID": "5",
    "updated_at": "2022-01-19 08:13:27",
    "created_at": "2022-01-19 08:13:27"
  }
]
```

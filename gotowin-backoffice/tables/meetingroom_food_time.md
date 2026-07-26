# `meetingroom_food_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FOOD_TIME_ID | int | NO | PRI | NULL | auto_increment |  |
| FOOD_TIME_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FOOD_TIME_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "FOOD_TIME_ID": 1,
    "FOOD_TIME_NAME": "เช้า"
  },
  {
    "FOOD_TIME_ID": 2,
    "FOOD_TIME_NAME": "เที่ยง"
  },
  {
    "FOOD_TIME_ID": 3,
    "FOOD_TIME_NAME": "เย็น"
  },
  {
    "FOOD_TIME_ID": 4,
    "FOOD_TIME_NAME": "เบรคเช้า"
  },
  {
    "FOOD_TIME_ID": 5,
    "FOOD_TIME_NAME": "เบรคบ่าย"
  }
]
```

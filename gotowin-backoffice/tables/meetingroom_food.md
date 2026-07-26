# `meetingroom_food`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FOOD_ID | int | NO | PRI | NULL | auto_increment |  |
| FOOD_NAME | varchar(100) | YES |  |  |  |  |
| FOOD_PRICE | decimal(10,2) | YES |  | NULL |  |  |
| FOOD_UNIT | varchar(50) | YES |  |  |  |  |
| FOOD_TYPE_ID | varchar(20) | YES |  |  |  |  |
| IMG | blob | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FOOD_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "FOOD_ID": 1,
    "FOOD_NAME": "อาหารว่าง เช้า",
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "FOOD_ID": 6,
    "FOOD_NAME": "น้ำเปล่า (ถ้วย)",
    "FOOD_PRICE": "3.00",
    "FOOD_UNIT": "ถ้วย",
    "FOOD_TYPE_ID": "2",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": "2019-05-27 19:32:13",
    "created_at": null
  },
  {
    "FOOD_ID": 2,
    "FOOD_NAME": "อาหารว่าง บ่าย",
    "FOOD_PRICE": "25.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "1",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "FOOD_ID": 3,
    "FOOD_NAME": "อาหารกลางวัน (กับข้าว 2 อย่าง ผลไม้ 1 อย่าง)",
    "FOOD_PRICE": "80.00",
    "FOOD_UNIT": "จาน",
    "FOOD_TYPE_ID": "",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "FOOD_ID": 4,
    "FOOD_NAME": "อาหารจานเดียว",
    "FOOD_PRICE": "50.00",
    "FOOD_UNIT": "จาน",
    "FOOD_TYPE_ID": null,
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": "2019-05-27 17:41:49",
    "created_at": null
  },
  {
    "FOOD_ID": 5,
    "FOOD_NAME": "น้ำเปล่า (ขวด)",
    "FOOD_PRICE": "10.00",
    "FOOD_UNIT": "ขวด",
    "FOOD_TYPE_ID": "1",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": "2019-05-27 19:32:20",
    "created_at": null
  },
  {
    "FOOD_ID": 41,
    "FOOD_NAME": "ไม่มีเลี้ยงอาหาร",
    "FOOD_PRICE": "0.00",
    "FOOD_UNIT": "ชุด",
    "FOOD_TYPE_ID": "6",
    "IMG": null,
    "ACTIVE": "True",
    "updated_at": "2022-01-20 10:09:29",
    "created_at": "2022-01-20 10:08:32"
  }
]
```

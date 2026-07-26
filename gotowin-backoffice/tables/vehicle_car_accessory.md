# `vehicle_car_accessory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ACCESSORY_ID | int | NO | PRI | NULL | auto_increment |  |
| ACCESSORY_NAME | varchar(150) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ACCESSORY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ACCESSORY_ID": 1,
    "ACCESSORY_NAME": "กล้องบันทึกภาพเคลื่อนไหว",
    "updated_at": "2020-08-04 08:40:26",
    "created_at": "2020-08-04 08:40:26"
  }
]
```

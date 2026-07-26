# `vehicle_car_refer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REFER_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| REFER_TYPE_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REFER_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "REFER_TYPE_ID": 1,
    "REFER_TYPE_NAME": "REFER"
  },
  {
    "REFER_TYPE_ID": 2,
    "REFER_TYPE_NAME": "EMS"
  },
  {
    "REFER_TYPE_ID": 3,
    "REFER_TYPE_NAME": "รับ-ส่ง [ไม่ฉุกเฉิน]"
  }
]
```

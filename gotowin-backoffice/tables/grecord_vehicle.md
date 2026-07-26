# `grecord_vehicle`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_VEHICLE_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_VEHICLE_NAME | varchar(50) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_VEHICLE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "RECORD_VEHICLE_ID": 1,
    "RECORD_VEHICLE_NAME": "รถประจำทาง"
  },
  {
    "RECORD_VEHICLE_ID": 2,
    "RECORD_VEHICLE_NAME": "รถยนต์ส่วนตัว"
  },
  {
    "RECORD_VEHICLE_ID": 3,
    "RECORD_VEHICLE_NAME": "รถราชการ"
  },
  {
    "RECORD_VEHICLE_ID": 4,
    "RECORD_VEHICLE_NAME": "เครื่องบิน"
  },
  {
    "RECORD_VEHICLE_ID": 5,
    "RECORD_VEHICLE_NAME": "รถไฟ"
  },
  {
    "RECORD_VEHICLE_ID": 6,
    "RECORD_VEHICLE_NAME": "เรือ"
  },
  {
    "RECORD_VEHICLE_ID": 7,
    "RECORD_VEHICLE_NAME": "อื่นๆ"
  },
  {
    "RECORD_VEHICLE_ID": 8,
    "RECORD_VEHICLE_NAME": "รถจ้างเหมา"
  }
]
```

# `vehicle_car_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| EQUIPMENT_ID | int | NO | PRI | NULL | auto_increment |  |
| EQUIPMENT_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | EQUIPMENT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "EQUIPMENT_ID": 1,
    "EQUIPMENT_NAME": "ชุดคนป่วย",
    "updated_at": null,
    "created_at": null
  },
  {
    "EQUIPMENT_ID": 2,
    "EQUIPMENT_NAME": "ไม้เท้า",
    "updated_at": null,
    "created_at": null
  },
  {
    "EQUIPMENT_ID": 3,
    "EQUIPMENT_NAME": "อุปกรณ์ดาม",
    "updated_at": null,
    "created_at": null
  }
]
```

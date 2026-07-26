# `vehicle_car_power`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_POWER_ID_NAME | varchar(100) | YES |  |  |  |  |
| CAR_POWER_NAME | varchar(100) | YES |  |  |  |  |
| CAR_POWER_ID | int | NO | PRI | NULL | auto_increment |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_POWER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CAR_POWER_ID_NAME": "BB2",
    "CAR_POWER_NAME": "น้ำมันดีเซลหมุนเร็วธรรมดา B2",
    "CAR_POWER_ID": 1,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "BB5",
    "CAR_POWER_NAME": "น้ำมันดีเซลหมุนเร็ว B5",
    "CAR_POWER_ID": 2,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "E20",
    "CAR_POWER_NAME": "แก็ซโซฮอล์ E20",
    "CAR_POWER_ID": 3,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "E85",
    "CAR_POWER_NAME": "แก็ซโซฮอล์ E85",
    "CAR_POWER_ID": 4,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "E91",
    "CAR_POWER_NAME": "แก็ซโซฮอล์ E91",
    "CAR_POWER_ID": 5,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "O20",
    "CAR_POWER_NAME": "เบนซินออกเทน 20",
    "CAR_POWER_ID": 6,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "O91",
    "CAR_POWER_NAME": "เบนซินออกเทน 91",
    "CAR_POWER_ID": 7,
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_POWER_ID_NAME": "S20",
    "CAR_POWER_NAME": "แก็ซโซฮอล์ S20",
    "CAR_POWER_ID": 8,
    "updated_at": null,
    "created_at": null
  }
]
```

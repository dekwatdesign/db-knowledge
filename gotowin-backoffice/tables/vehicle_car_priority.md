# `vehicle_car_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PRIORITY_ID | varchar(10) | NO | PRI |  |  |  |
| PRIORITY_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PRIORITY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "PRIORITY_ID": "1",
    "PRIORITY_NAME": "ปกติ"
  },
  {
    "PRIORITY_ID": "2",
    "PRIORITY_NAME": "ด่วน"
  },
  {
    "PRIORITY_ID": "3",
    "PRIORITY_NAME": "ด่วนมาก"
  },
  {
    "PRIORITY_ID": "4",
    "PRIORITY_NAME": "ด่วนที่สุด"
  }
]
```

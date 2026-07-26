# `emp_vehicle`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_vehicle_id | int(11) | NO | PRI | 0 |  |  |
| emp_vehicle_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_vehicle_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_vehicle_id": 1,
    "emp_vehicle_name": "รถไฟ"
  },
  {
    "emp_vehicle_id": 2,
    "emp_vehicle_name": "รถลาง"
  },
  {
    "emp_vehicle_id": 3,
    "emp_vehicle_name": "รถ(ไฟ)ไฟฟ้า"
  },
  {
    "emp_vehicle_id": 4,
    "emp_vehicle_name": "รถยนต์"
  },
  {
    "emp_vehicle_id": 5,
    "emp_vehicle_name": "รถโดยสาร"
  },
  {
    "emp_vehicle_id": 6,
    "emp_vehicle_name": "รถตู้"
  },
  {
    "emp_vehicle_id": 7,
    "emp_vehicle_name": "รถบรรทุก"
  },
  {
    "emp_vehicle_id": 8,
    "emp_vehicle_name": "เรือ"
  }
]
```

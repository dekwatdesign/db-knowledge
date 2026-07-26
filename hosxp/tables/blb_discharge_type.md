# `blb_discharge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_discharge_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_discharge_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_discharge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "blb_discharge_type_id": 1,
    "blb_discharge_type_name": "หมดอายุ"
  },
  {
    "blb_discharge_type_id": 2,
    "blb_discharge_type_name": "ติดเชื้อ"
  },
  {
    "blb_discharge_type_id": 3,
    "blb_discharge_type_name": "ไม่สมบูรณ์"
  }
]
```

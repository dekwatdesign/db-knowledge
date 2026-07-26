# `durable_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_unit_id | int(11) | NO | PRI | 0 |  |  |
| durable_unit_name | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "durable_unit_id": 1,
    "durable_unit_name": "ชิ้น"
  },
  {
    "durable_unit_id": 2,
    "durable_unit_name": "อัน"
  },
  {
    "durable_unit_id": 3,
    "durable_unit_name": "เส้น"
  },
  {
    "durable_unit_id": 4,
    "durable_unit_name": "เครื่อง"
  },
  {
    "durable_unit_id": 5,
    "durable_unit_name": "แผ่น"
  },
  {
    "durable_unit_id": 6,
    "durable_unit_name": "กล่อง"
  },
  {
    "durable_unit_id": 7,
    "durable_unit_name": "เม็ด"
  },
  {
    "durable_unit_id": 8,
    "durable_unit_name": "แพ็ค"
  }
]
```

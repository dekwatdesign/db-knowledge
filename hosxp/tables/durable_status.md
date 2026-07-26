# `durable_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_status_id | int(11) | NO | PRI | 0 |  |  |
| durable_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "durable_status_id": 1,
    "durable_status_name": "ใช้งาน"
  },
  {
    "durable_status_id": 2,
    "durable_status_name": "ส่งซ่อม"
  },
  {
    "durable_status_id": 3,
    "durable_status_name": "ชำรุด"
  },
  {
    "durable_status_id": 4,
    "durable_status_name": "ส่งบำรุงรักษา"
  },
  {
    "durable_status_id": 5,
    "durable_status_name": "ยกเลิกการใช้งาน"
  },
  {
    "durable_status_id": 6,
    "durable_status_name": "จำหน่าย"
  }
]
```

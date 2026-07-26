# `inv_durable_good_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_status_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "inv_durable_good_status_id": 1,
    "inv_durable_good_status_name": "ใช้งาน"
  },
  {
    "inv_durable_good_status_id": 2,
    "inv_durable_good_status_name": "ส่งซ่อม"
  },
  {
    "inv_durable_good_status_id": 3,
    "inv_durable_good_status_name": "ชำรุด"
  },
  {
    "inv_durable_good_status_id": 4,
    "inv_durable_good_status_name": "ส่งบำรุงรักษา"
  },
  {
    "inv_durable_good_status_id": 5,
    "inv_durable_good_status_name": "ยกเลิกการใช้งาน"
  }
]
```

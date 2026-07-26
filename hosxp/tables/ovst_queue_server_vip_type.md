# `ovst_queue_server_vip_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vip_id | int(11) | NO | PRI | 0 |  |  |
| vip_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vip_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "vip_id": 1,
    "vip_name": "ชั่วคราว"
  },
  {
    "vip_id": 2,
    "vip_name": "6 เดือน"
  },
  {
    "vip_id": 3,
    "vip_name": "1 ปี"
  },
  {
    "vip_id": 4,
    "vip_name": "2 ปี"
  },
  {
    "vip_id": 5,
    "vip_name": "3 ปี"
  },
  {
    "vip_id": 6,
    "vip_name": "4 ปี"
  },
  {
    "vip_id": 7,
    "vip_name": "5 ปี"
  }
]
```

# `blb_stock_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_stock_status_id | int(11) | NO | PRI | 0 |  |  |
| blb_stock_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_stock_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "blb_stock_status_id": 1,
    "blb_stock_status_name": "รับเข้าคลัง"
  },
  {
    "blb_stock_status_id": 2,
    "blb_stock_status_name": "จ่ายออก"
  },
  {
    "blb_stock_status_id": 3,
    "blb_stock_status_name": "คืน"
  },
  {
    "blb_stock_status_id": 4,
    "blb_stock_status_name": "จำหน่าย"
  }
]
```

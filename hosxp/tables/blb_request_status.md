# `blb_request_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_status_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_request_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "blb_request_status_id": 1,
    "blb_request_status_name": "รอรับใบขอเลือด"
  },
  {
    "blb_request_status_id": 2,
    "blb_request_status_name": "รับใบขอเลือดแล้ว"
  },
  {
    "blb_request_status_id": 3,
    "blb_request_status_name": "Cross Matching"
  },
  {
    "blb_request_status_id": 4,
    "blb_request_status_name": "รอรับเลือด"
  },
  {
    "blb_request_status_id": 5,
    "blb_request_status_name": "จ่ายครบ"
  },
  {
    "blb_request_status_id": 6,
    "blb_request_status_name": "จ่ายบางส่วน"
  },
  {
    "blb_request_status_id": 99,
    "blb_request_status_name": "ยกเลิก"
  }
]
```

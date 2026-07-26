# `edoc_send_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_send_status_id | int(11) | NO | PRI | 0 |  |  |
| edoc_send_status_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_send_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "edoc_send_status_id": 1,
    "edoc_send_status_name": "ยังไม่เปิดอ่าน"
  },
  {
    "edoc_send_status_id": 2,
    "edoc_send_status_name": "เปิดอ่านแล้ว"
  },
  {
    "edoc_send_status_id": 3,
    "edoc_send_status_name": "ลงรับแล้ว"
  },
  {
    "edoc_send_status_id": 4,
    "edoc_send_status_name": "ปฎิเสธการลงรับ"
  }
]
```

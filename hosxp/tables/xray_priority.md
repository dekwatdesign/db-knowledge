# `xray_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_priority_id | int(11) | NO | PRI | 0 |  |  |
| priority_name | varchar(200) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | priority_name | no | 1 |
| PRIMARY | xray_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "xray_priority_id": 1,
    "priority_name": "ปกติ",
    "hos_guid": null
  },
  {
    "xray_priority_id": 2,
    "priority_name": "ขอ Film ด่วนไม่ต้องรายงานผล",
    "hos_guid": null
  },
  {
    "xray_priority_id": 3,
    "priority_name": "ขอผลด่วน",
    "hos_guid": null
  },
  {
    "xray_priority_id": 4,
    "priority_name": "ขอผลด่วนพร้อม Film",
    "hos_guid": null
  }
]
```

# `edoc_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_status_id | int(11) | NO | PRI | 0 |  |  |
| edoc_status_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_status_name | edoc_status_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "edoc_status_id": 1,
    "edoc_status_name": "รอดำเนินการ",
    "hos_guid": null
  },
  {
    "edoc_status_id": 2,
    "edoc_status_name": "ดำเงินการแล้ว",
    "hos_guid": null
  },
  {
    "edoc_status_id": 3,
    "edoc_status_name": "ทราบ",
    "hos_guid": null
  },
  {
    "edoc_status_id": 4,
    "edoc_status_name": "ปิดงานแล้ว",
    "hos_guid": null
  },
  {
    "edoc_status_id": 5,
    "edoc_status_name": "ยกเลิก",
    "hos_guid": null
  }
]
```

# `labor_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labor_status_id | int(11) | NO | PRI | 0 |  |  |
| labor_status_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | labor_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "labor_status_id": 1,
    "labor_status_name": "ยังไม่คลอด",
    "hos_guid": null
  },
  {
    "labor_status_id": 2,
    "labor_status_name": "คลอดแล้ว",
    "hos_guid": null
  },
  {
    "labor_status_id": 3,
    "labor_status_name": "แท้ง",
    "hos_guid": null
  },
  {
    "labor_status_id": 4,
    "labor_status_name": "ติดตามไม่ได้/ไม่ทราบ",
    "hos_guid": null
  }
]
```

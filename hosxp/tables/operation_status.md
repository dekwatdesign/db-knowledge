# `operation_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| status_id | int(11) | NO | PRI | 0 |  |  |
| status_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| is_visible | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | status_id | yes | 1 |
| status_name | status_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "status_id": 1,
    "status_name": "รอผ่าตัด",
    "hos_guid": null,
    "is_visible": null
  },
  {
    "status_id": 2,
    "status_name": "กำลังผ่าตัด",
    "hos_guid": null,
    "is_visible": null
  },
  {
    "status_id": 3,
    "status_name": "ผ่าตัดเสร็จแล้ว",
    "hos_guid": null,
    "is_visible": null
  }
]
```

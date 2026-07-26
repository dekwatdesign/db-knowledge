# `xray_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_status_id | int(11) | NO | PRI | 0 |  |  |
| xray_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xray_status_name | xray_status_name | yes | 1 |
| PRIMARY | xray_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "xray_status_id": 1,
    "xray_status_name": "รอล้างฟิลม์",
    "hos_guid": "{C1D2015C-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_status_id": 2,
    "xray_status_name": "รออ่านฟิลม์",
    "hos_guid": "{C1D20364-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_status_id": 3,
    "xray_status_name": "ทำรายการเสร็จแล้ว",
    "hos_guid": "{C1D20454-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_status_id": 4,
    "xray_status_name": "รายการถูกยกเลิก",
    "hos_guid": "{C1D20544-F61E-11DE-BFF4-00215E472B30}"
  }
]
```

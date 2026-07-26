# `lab_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| lab_count | int(11) | YES |  | NULL |  |  |
| report_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lab_order_flag | int(11) | YES |  | NULL |  |  |
| read_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "540000788",
    "lab_count": 4,
    "report_count": 3,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "540001138",
    "lab_count": 1,
    "report_count": 1,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "540001155",
    "lab_count": 3,
    "report_count": 1,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "541006132700",
    "lab_count": 0,
    "report_count": 0,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "541010060109",
    "lab_count": 3,
    "report_count": 2,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "541012060005",
    "lab_count": 2,
    "report_count": 2,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "541012060033",
    "lab_count": 3,
    "report_count": 3,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  },
  {
    "vn": "541014060002",
    "lab_count": 2,
    "report_count": 2,
    "hos_guid": null,
    "lab_order_flag": null,
    "read_status": null
  }
]
```

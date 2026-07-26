# `opd_dep_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_dep_queue_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| queue_datetime | datetime | YES | MUL | NULL |  |  |
| accept_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| tx_status | char(1) | YES |  | NULL |  |  |
| from_depcode | char(3) | YES |  | NULL |  |  |
| check_in | char(1) | YES |  | NULL |  |  |
| day_queue_no | int(11) | YES |  | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode_date | depcode | no | 1 |
| ix_depcode_date | queue_datetime | no | 2 |
| ix_dep_tx | depcode | no | 1 |
| ix_dep_tx | tx_status | no | 2 |
| ix_d_t_s | depcode | no | 1 |
| ix_d_t_s | tx_status | no | 2 |
| ix_d_t_s | vn | no | 3 |
| ix_queue_datetime | queue_datetime | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_depcode | vn | no | 1 |
| ix_vn_depcode | depcode | no | 2 |
| ix_vn_depcode_index | depcode | yes | 1 |
| ix_vn_depcode_index | vn | yes | 2 |
| PRIMARY | opd_dep_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_dep_queue_id": 1,
    "vn": "661220112115",
    "depcode": "",
    "queue_datetime": "2023-12-20 11:23:04",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "008",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 2,
    "vn": "670209103004",
    "depcode": "999",
    "queue_datetime": "2024-02-09 11:13:52",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "008",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 3,
    "vn": "670327140026",
    "depcode": "999",
    "queue_datetime": "2024-03-27 17:41:10",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "008",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 4,
    "vn": "670327092030",
    "depcode": "999",
    "queue_datetime": "2024-03-28 10:59:35",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "008",
    "check_in": "N",
    "day_queue_no": 2,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 5,
    "vn": "670104113008",
    "depcode": "999",
    "queue_datetime": "2024-03-28 13:57:04",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "008",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 6,
    "vn": "671001083000",
    "depcode": "047",
    "queue_datetime": "2024-10-01 09:04:30",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 7,
    "vn": "671002071336",
    "depcode": "030",
    "queue_datetime": "2024-10-02 11:27:37",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  },
  {
    "opd_dep_queue_id": 8,
    "vn": "671003083026",
    "depcode": "021",
    "queue_datetime": "2024-10-03 09:03:17",
    "accept_datetime": null,
    "finish_datetime": null,
    "tx_status": "W",
    "from_depcode": "",
    "check_in": "N",
    "day_queue_no": 1,
    "item_no": null
  }
]
```

# `ovst_home_rx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| home_rx_status_id | int(11) | YES |  | NULL |  |  |
| rx_label_status | char(1) | YES |  | NULL |  |  |
| prepare_datetime | datetime | YES |  | NULL |  |  |
| prepare_staff | varchar(25) | YES |  | NULL |  |  |
| ems_tracking_used | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_home_rxstatus_id | vn | no | 1 |
| ix_vn_home_rxstatus_id | home_rx_status_id | no | 2 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "650725083052",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083056",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083042",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083044",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083046",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083054",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083040",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  },
  {
    "vn": "650725083020",
    "home_rx_status_id": 1,
    "rx_label_status": null,
    "prepare_datetime": null,
    "prepare_staff": null,
    "ems_tracking_used": null
  }
]
```

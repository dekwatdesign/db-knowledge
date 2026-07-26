# `ovst_rx_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_rx_queue_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| rx_queue_date | date | YES | MUL | NULL |  |  |
| rx_queue_time | time | YES |  | NULL |  |  |
| rx_queue_no | int(11) | YES | MUL | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| stock_department_queue_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| rx_queue_group_id | int(11) | YES |  | NULL |  |  |
| queue_complete | char(1) | YES |  | NULL |  |  |
| queue_call_datetime | datetime | YES |  | NULL |  |  |
| rx_queue_staff | varchar(50) | YES |  | NULL |  |  |
| rx_queue_count_no | int(11) | YES |  | NULL |  |  |
| medication_item_count | int(11) | YES |  | NULL |  |  |
| call_complete | char(1) | YES |  | NULL |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |
| opd_qs_slot_id | int(11) | YES |  | NULL |  |  |
| call_computer | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_date_group_location | opd_qs_location_id | no | 1 |
| ix_date_group_location | rx_queue_date | no | 2 |
| ix_date_group_location | rx_queue_group_id | no | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_queue_date_id | rx_queue_date | no | 1 |
| ix_queue_date_id | rx_queue_no | no | 2 |
| ix_queue_date_id | rx_queue_group_id | no | 3 |
| ix_queue_date_id_index | rx_queue_date | no | 1 |
| ix_queue_date_id_index | rx_queue_group_id | no | 2 |
| ix_queue_date_id_index | rx_queue_no | no | 3 |
| ix_queue_date_no | rx_queue_date | no | 1 |
| ix_queue_date_no | rx_queue_no | no | 2 |
| ix_queue_no | rx_queue_no | no | 1 |
| ix_vdate | rx_queue_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_rx_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_rx_queue_id": 1,
    "vn": "550206085646",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:12:43",
    "rx_queue_no": 1,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 2,
    "vn": "550206083010",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:19:45",
    "rx_queue_no": 2,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 3,
    "vn": "550206083009",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:20:39",
    "rx_queue_no": 3,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 4,
    "vn": "550206083002",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:22:02",
    "rx_queue_no": 4,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 5,
    "vn": "550206083007",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:28:25",
    "rx_queue_no": 5,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 6,
    "vn": "550206083012",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:36:38",
    "rx_queue_no": 6,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 7,
    "vn": "550206091010",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "9:57:45",
    "rx_queue_no": 7,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  },
  {
    "ovst_rx_queue_id": 8,
    "vn": "550206093013",
    "rx_queue_date": "2012-02-06",
    "rx_queue_time": "10:10:20",
    "rx_queue_no": 8,
    "stock_department_id": 0,
    "stock_department_queue_no": 0,
    "hos_guid": null,
    "rx_queue_group_id": null,
    "queue_complete": null,
    "queue_call_datetime": null,
    "rx_queue_staff": null,
    "rx_queue_count_no": null,
    "medication_item_count": null,
    "call_complete": null,
    "opd_qs_location_id": null,
    "opd_qs_slot_id": null,
    "call_computer": null
  }
]
```

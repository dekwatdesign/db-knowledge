# `rx_queue_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_group_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_group_name | varchar(200) | YES | UNI | NULL |  |  |
| min_med_qty | int(11) | YES |  | NULL |  |  |
| max_med_qty | int(11) | YES |  | NULL |  |  |
| start_queue_no | int(11) | YES |  | NULL |  |  |
| qs_slot_prefix | char(1) | YES |  | NULL |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_location_id | opd_qs_location_id | no | 1 |
| ix_rx_queue_group_name | rx_queue_group_name | yes | 1 |
| PRIMARY | rx_queue_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "rx_queue_group_id": 1,
    "rx_queue_group_name": "Group 1",
    "min_med_qty": 0,
    "max_med_qty": 0,
    "start_queue_no": 0,
    "qs_slot_prefix": null,
    "opd_qs_location_id": null
  },
  {
    "rx_queue_group_id": 2,
    "rx_queue_group_name": "Group 2",
    "min_med_qty": 2,
    "max_med_qty": 4,
    "start_queue_no": 500,
    "qs_slot_prefix": null,
    "opd_qs_location_id": null
  },
  {
    "rx_queue_group_id": 3,
    "rx_queue_group_name": "Group 3",
    "min_med_qty": 5,
    "max_med_qty": 999,
    "start_queue_no": 1000,
    "qs_slot_prefix": null,
    "opd_qs_location_id": null
  }
]
```

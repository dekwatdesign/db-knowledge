# `opd_queue_slot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_slot_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_slot_name | varchar(200) | YES | MUL | NULL |  |  |
| opd_queue_slot_start_time | time | YES |  | NULL |  |  |
| opd_queue_slot_finish_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | opd_queue_slot_name | no | 1 |
| PRIMARY | opd_queue_slot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "opd_queue_slot_id": 1,
    "opd_queue_slot_name": "เวลา 08.00 - 08.59",
    "opd_queue_slot_start_time": "8:00:00",
    "opd_queue_slot_finish_time": "8:59:59"
  },
  {
    "opd_queue_slot_id": 2,
    "opd_queue_slot_name": "เวลา 09.00 - 09.59",
    "opd_queue_slot_start_time": "9:00:00",
    "opd_queue_slot_finish_time": "9:59:59"
  },
  {
    "opd_queue_slot_id": 3,
    "opd_queue_slot_name": "เวลา 10.00 - 10.59",
    "opd_queue_slot_start_time": "10:00:00",
    "opd_queue_slot_finish_time": "10:59:59"
  }
]
```

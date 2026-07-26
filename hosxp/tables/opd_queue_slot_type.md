# `opd_queue_slot_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_slot_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_slot_type_name | varchar(200) | YES | UNI | NULL |  |  |
| time_minute | int(11) | YES |  | NULL |  |  |
| queue_priority_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_queue_slot_type_name | opd_queue_slot_type_name | yes | 1 |
| PRIMARY | opd_queue_slot_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "opd_queue_slot_type_id": 1,
    "opd_queue_slot_type_name": "ผู้ป่วย Walkin",
    "time_minute": 10,
    "queue_priority_id": 3
  },
  {
    "opd_queue_slot_type_id": 2,
    "opd_queue_slot_type_name": "ผู้ป่วยนัดหมาย",
    "time_minute": 10,
    "queue_priority_id": 2
  },
  {
    "opd_queue_slot_type_id": 3,
    "opd_queue_slot_type_name": "ผู้ป่วยนัด Online",
    "time_minute": 10,
    "queue_priority_id": 1
  }
]
```

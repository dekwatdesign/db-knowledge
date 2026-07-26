# `ipd_nurse_note_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_note_time_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_note_time_name | varchar(100) | YES | UNI | NULL |  |  |
| time_min | time | YES |  | NULL |  |  |
| time_max | time | YES |  | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_note_time_name | ipd_nurse_note_time_name | yes | 1 |
| PRIMARY | ipd_nurse_note_time_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "ipd_nurse_note_time_id": 1,
    "ipd_nurse_note_time_name": "2",
    "time_min": "0:00:01",
    "time_max": "6:00:00",
    "ipd_nurse_shift_id": null
  },
  {
    "ipd_nurse_note_time_id": 2,
    "ipd_nurse_note_time_name": "6",
    "time_min": "6:00:01",
    "time_max": "10:00:00",
    "ipd_nurse_shift_id": null
  },
  {
    "ipd_nurse_note_time_id": 3,
    "ipd_nurse_note_time_name": "10",
    "time_min": "10:00:01",
    "time_max": "14:00:00",
    "ipd_nurse_shift_id": null
  },
  {
    "ipd_nurse_note_time_id": 4,
    "ipd_nurse_note_time_name": "14",
    "time_min": "14:00:01",
    "time_max": "18:00:00",
    "ipd_nurse_shift_id": null
  },
  {
    "ipd_nurse_note_time_id": 5,
    "ipd_nurse_note_time_name": "18",
    "time_min": "18:00:01",
    "time_max": "22:00:00",
    "ipd_nurse_shift_id": null
  },
  {
    "ipd_nurse_note_time_id": 6,
    "ipd_nurse_note_time_name": "22",
    "time_min": "22:00:01",
    "time_max": "23:59:59",
    "ipd_nurse_shift_id": null
  }
]
```

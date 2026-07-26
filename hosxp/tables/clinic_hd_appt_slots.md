# `clinic_hd_appt_slots`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_appt_slots_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_appt_slots_name | varchar(30) | YES |  | NULL |  |  |
| clinic_hd_appt_slots_start | time | YES |  | NULL |  |  |
| clinic_hd_appt_slots_end | time | YES |  | NULL |  |  |
| clinic_hd_appt_slots_seq | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_slots_seq | clinic_hd_appt_slots_seq | no | 1 |
| PRIMARY | clinic_hd_appt_slots_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "clinic_hd_appt_slots_id": 1,
    "clinic_hd_appt_slots_name": "เวลา: 06:00 - 10:00",
    "clinic_hd_appt_slots_start": "6:00:00",
    "clinic_hd_appt_slots_end": "10:00:00",
    "clinic_hd_appt_slots_seq": 1
  },
  {
    "clinic_hd_appt_slots_id": 2,
    "clinic_hd_appt_slots_name": "เวลา: 10:30 - 14:30",
    "clinic_hd_appt_slots_start": "10:30:00",
    "clinic_hd_appt_slots_end": "14:30:00",
    "clinic_hd_appt_slots_seq": 2
  },
  {
    "clinic_hd_appt_slots_id": 3,
    "clinic_hd_appt_slots_name": "เวลา: 15:00 - 19:00",
    "clinic_hd_appt_slots_start": "15:00:00",
    "clinic_hd_appt_slots_end": "19:00:00",
    "clinic_hd_appt_slots_seq": 3
  }
]
```

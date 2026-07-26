# `moph_appointment_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_appointment_slot_id | int(11) | NO | PRI | 0 |  |  |
| appointment_date | date | YES | MUL | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| department_name | varchar(150) | YES |  | NULL |  |  |
| room_id | int(11) | YES |  | NULL |  |  |
| room_name | varchar(200) | YES |  | NULL |  |  |
| time_start | time | YES |  | NULL |  |  |
| time_finish | time | YES |  | NULL |  |  |
| queue_no | varchar(20) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| person_name | varchar(200) | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| appointment_type_id | int(11) | YES |  | NULL |  |  |
| appointment_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_appointment_date | appointment_date | no | 1 |
| ix_appointment_date_id | appointment_date | no | 1 |
| ix_appointment_date_id | hospital_appointment_slot_id | no | 2 |
| PRIMARY | hospital_appointment_slot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hospital_appointment_slot_id": 77296,
    "appointment_date": "2023-12-28",
    "department_id": 781,
    "department_name": "จิตเวช",
    "room_id": 586,
    "room_name": "ห้องตรวจ Online",
    "time_start": "8:30:00",
    "time_finish": "9:30:00",
    "queue_no": "A001",
    "cid": "1xxxxxxxxxxxx",
    "person_name": "[MASKED_FULLNAME]",
    "confirm_datetime": "2023-12-26 08:39:01",
    "appointment_type_id": 1,
    "appointment_type_name": "Online"
  }
]
```

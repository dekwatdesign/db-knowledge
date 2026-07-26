# `lab_blood_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_blood_queue_id | int(11) | NO | PRI | 0 |  |  |
| lab_blood_queue_date | date | YES |  | NULL |  |  |
| lab_blood_queue_time | time | YES |  | NULL |  |  |
| lab_blood_queue_no | int(11) | YES |  | NULL |  |  |
| lab_blood_queue_complete | char(1) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| call_status | char(1) | YES |  | NULL |  |  |
| call_slot_number | varchar(10) | YES |  | NULL |  |  |
| call_first_datetime | datetime | YES |  | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| lab_blood_queue_type_id | int(11) | YES |  | NULL |  |  |
| lab_blood_queue_ref | varchar(10) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| staff_generate | varchar(50) | YES |  | NULL |  |  |
| staff_called | varchar(50) | YES |  | NULL |  |  |
| lab_blood_queue_create_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_blood_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

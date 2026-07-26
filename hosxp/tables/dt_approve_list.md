# `dt_approve_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_approve_list_id | int(11) | NO | PRI | 0 |  |  |
| dt_approve_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| dt_doctor_code | varchar(15) | YES |  | NULL |  |  |
| dt_approve_send_datetime | datetime | YES |  | NULL |  |  |
| instr_doctor_code | varchar(15) | YES |  | NULL |  |  |
| dt_approve_status_id | int(11) | YES |  | NULL |  |  |
| dt_approve_note_text | text | YES |  | NULL |  |  |
| detail_text | text | YES |  | NULL |  |  |
| instr_approve_note_text | text | YES |  | NULL |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_time | timestamp | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| dt_clinic_unit_id | int(11) | YES |  | NULL |  |  |
| dt_start_time_tx_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| dt_approve_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_approve_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

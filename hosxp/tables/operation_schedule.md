# `operation_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| parentid | int(11) | YES |  | NULL |  |  |
| start_date | datetime | YES |  | NULL |  |  |
| finish_date | datetime | YES |  | NULL |  |  |
| options | int(11) | YES |  | NULL |  |  |
| caption | varchar(250) | YES |  | NULL |  |  |
| recurrence_index | int(11) | YES |  | NULL |  |  |
| recurrence_info | blob | YES |  | NULL |  |  |
| resource_id | int(11) | YES |  | NULL |  |  |
| location | varchar(250) | YES |  | NULL |  |  |
| message | longtext | YES |  | NULL |  |  |
| state | int(11) | YES |  | NULL |  |  |
| label_color | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| task_complete | int(11) | YES |  | NULL |  |  |
| task_index | int(11) | YES |  | NULL |  |  |
| task_links | blob | YES |  | NULL |  |  |
| task_status | int(11) | YES |  | NULL |  |  |
| reminder_date | datetime | YES |  | NULL |  |  |
| reminder_minutes_beforestart | int(11) | YES |  | NULL |  |  |
| reminder_resources_data | blob | YES |  | NULL |  |  |
| event_type | int(11) | YES |  | NULL |  |  |
| actual_start | int(11) | YES |  | NULL |  |  |
| actual_finish | int(11) | YES |  | NULL |  |  |
| patient_name | varchar(150) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| operation_name | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| last_modified | datetime | YES |  | NULL |  |  |
| staff_modified | varchar(25) | YES |  | NULL |  |  |
| sync_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `edoc_send_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_send_history_id | int(11) | NO | PRI | 0 |  |  |
| edoc_send_history_datetime | datetime | YES |  | NULL |  |  |
| edoc_send_history_reason | varchar(200) | YES |  | NULL |  |  |
| edoc_send_id | int(11) | YES |  | NULL |  |  |
| edoc_send_date | date | YES |  | NULL |  |  |
| edoc_send_time | date | YES |  | NULL |  |  |
| edoc_send_type_id | int(11) | YES |  | NULL |  |  |
| edoc_send_to_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_send_from_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_send_staff | varchar(20) | YES |  | NULL |  |  |
| edoc_send_updatetime | datetime | YES |  | NULL |  |  |
| edoc_send_status_id | int(11) | YES |  | NULL |  |  |
| edoc_send_department_id | int(11) | YES |  | NULL |  |  |
| edoc_id | int(11) | YES |  | NULL |  |  |
| edoc_send_note | text | YES |  | NULL |  |  |
| edoc_send_comment | text | YES |  | NULL |  |  |
| edoc_send_comment_secret | char(1) | YES |  | NULL |  |  |
| edoc_send_open_datetime | datetime | YES |  | NULL |  |  |
| edoc_send_history_emp_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_send_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

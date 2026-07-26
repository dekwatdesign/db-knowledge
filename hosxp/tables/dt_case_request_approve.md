# `dt_case_request_approve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_approve_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_approve_date | date | YES |  | NULL |  |  |
| dt_case_request_approve_time | time | YES |  | NULL |  |  |
| dt_case_request_approve_doctor | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_case_req_approve_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_approve_note | varchar(250) | YES |  | NULL |  |  |
| dental_approve_status_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_approve_status_id | dental_approve_status_id | no | 1 |
| ix_dt_case_request_id | dt_case_request_id | no | 1 |
| ix_dt_case_req_approve_type_id | dt_case_req_approve_type_id | no | 1 |
| PRIMARY | dt_case_request_approve_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

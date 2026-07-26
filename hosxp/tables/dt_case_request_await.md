# `dt_case_request_await`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_await_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_await_date | date | YES |  | NULL |  |  |
| dt_case_request_await_time | time | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| oapp_await_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| dt_case_request_await_finish | char(1) | YES |  | NULL |  |  |
| await_qty | int(11) | YES |  | NULL |  |  |
| await_disp_qty | int(11) | YES |  | NULL |  |  |
| await_note | varchar(250) | YES |  | NULL |  |  |
| dt_case_request_clinic_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_work_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_await_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_await_tooth | int(11) | YES |  | NULL |  |  |
| dt_odiag_sum_plan_id | int(11) | YES |  | NULL |  |  |
| dt_case_req_tooth_type_id | int(11) | YES |  | NULL |  |  |
| dt_case_req_queue_type_id | int(11) | YES |  | NULL |  |  |
| doctor_sender | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_await_type_id | dt_case_request_await_type_id | no | 1 |
| ix_dt_case_request_clinic_id | dt_case_request_clinic_id | no | 1 |
| ix_dt_case_request_work_type_id | dt_case_request_work_type_id | no | 1 |
| ix_oapp_await_id | oapp_await_id | no | 1 |
| PRIMARY | dt_case_request_await_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

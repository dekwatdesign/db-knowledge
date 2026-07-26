# `dt_case_request_disp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_disp_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_disp_date | date | YES |  | NULL |  |  |
| dt_case_request_disp_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| dt_case_request_disp_type_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_case_request_list_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_case_request_await_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_work_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_disp_finish | char(1) | YES |  | NULL |  |  |
| dt_case_request_disp_note | varchar(255) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_clinic_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_transfer | char(1) | YES |  | NULL |  |  |
| transfer_accept_doctor | varchar(6) | YES |  | NULL |  |  |
| transfer_date | date | YES | MUL | NULL |  |  |
| transfer_time | time | YES |  | NULL |  |  |
| disp_doctor | varchar(6) | YES |  | NULL |  |  |
| transfer_approve_doctor | varchar(6) | YES |  | NULL |  |  |
| after_receive_case_note | varchar(255) | YES |  | NULL |  |  |
| request_disp_finish_note | varchar(255) | YES |  | NULL |  |  |
| request_disp_finish_date | date | YES |  | NULL |  |  |
| request_disp_finish_time | time | YES |  | NULL |  |  |
| request_disp_finish_doctor | varchar(50) | YES |  | NULL |  |  |
| request_disp_receive | char(1) | YES |  | NULL |  |  |
| request_disp_receive_date | datetime | YES |  | NULL |  |  |
| request_disp_owner_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_await_id | dt_case_request_await_id | no | 1 |
| ix_dt_case_request_clinic_id | dt_case_request_clinic_id | no | 1 |
| ix_dt_case_request_disp_type_id | dt_case_request_disp_type_id | no | 1 |
| ix_dt_case_request_list_id | dt_case_request_list_id | no | 1 |
| ix_dt_case_request_work_type_id | dt_case_request_work_type_id | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| ix_transfer_date | transfer_date | no | 1 |
| PRIMARY | dt_case_request_disp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

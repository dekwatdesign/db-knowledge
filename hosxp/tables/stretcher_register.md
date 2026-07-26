# `stretcher_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_register_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_register_date | date | YES | MUL | NULL |  |  |
| stretcher_register_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| from_depcode | varchar(3) | YES | MUL | NULL |  |  |
| from_note | varchar(255) | YES |  | NULL |  |  |
| send_depcode | char(3) | YES | MUL | NULL |  |  |
| send_note | varchar(255) | YES |  | NULL |  |  |
| stretcher_register_send_time | time | YES |  | NULL |  |  |
| stretcher_register_return_time | time | YES |  | NULL |  |  |
| stretcher_register_apm_date | date | YES |  | NULL |  |  |
| stretcher_register_apm_time | time | YES |  | NULL |  |  |
| stretcher_work_status_note | varchar(255) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| stretcher_register_staff | int(11) | YES |  | NULL |  |  |
| stretcher_register_officer | int(11) | YES |  | NULL |  |  |
| stretcher_register_apm_chk | char(1) | YES |  | NULL |  |  |
| stretcher_type_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_o2tube_type_id | int(11) | YES |  | NULL |  |  |
| stretcher_service_id | int(11) | YES |  | NULL |  |  |
| stretcher_work_status_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_priority_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_emergency_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_team_list_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_work_result_id | int(11) | YES |  | NULL |  |  |
| stretcher_work_result_detail | varchar(255) | YES |  | NULL |  |  |
| stretcher_register_hn_chk | char(1) | YES |  | NULL |  |  |
| stretcher_register_accept_date | date | YES | MUL | NULL |  |  |
| stretcher_register_accept_time | time | YES |  | NULL |  |  |
| doctor_request | varchar(7) | YES |  | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| stretcher_return_status_note | varchar(250) | YES |  | NULL |  |  |
| stretcher_return_status_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_cancel_status_note | varchar(255) | YES |  | NULL |  |  |
| stretcher_cancel_status_id | int(11) | YES |  | NULL |  |  |
| stretcher_partner_code | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_register_accept_date | stretcher_register_accept_date | no | 1 |
| ix_idx_stretcher_register_an | an | no | 1 |
| ix_idx_stretcher_register_date | stretcher_register_date | no | 1 |
| ix_idx_stretcher_register_emergency | stretcher_emergency_id | no | 1 |
| ix_idx_stretcher_register_from | from_depcode | no | 1 |
| ix_idx_stretcher_register_hn | hn | no | 1 |
| ix_idx_stretcher_register_priority | stretcher_priority_id | no | 1 |
| ix_idx_stretcher_register_return_status | stretcher_return_status_id | no | 1 |
| ix_idx_stretcher_register_send | send_depcode | no | 1 |
| ix_idx_stretcher_register_team | stretcher_team_list_id | no | 1 |
| ix_idx_stretcher_register_type | stretcher_type_id | no | 1 |
| ix_idx_stretcher_register_vn | vn | no | 1 |
| ix_idx_stretcher_register_work_status | stretcher_work_status_id | no | 1 |
| PRIMARY | stretcher_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

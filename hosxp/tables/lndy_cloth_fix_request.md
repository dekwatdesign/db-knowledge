# `lndy_cloth_fix_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_fix_request_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_fix_request_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_request_staff | varchar(40) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| lndy_cloth_fix_status_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_accept_char | char(1) | YES |  | NULL |  |  |
| lndy_fix_request_employee | varchar(6) | YES |  | NULL |  |  |
| doctor_warehouse_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_f_req_wh_date_ap | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_req_wh_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_fix_request_status | char(2) | YES |  | NULL |  |  |
| lndy_cloth_fix_request_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_fix_request_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_fix_request_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_fix_request_note | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_fix_request_apove | char(1) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_status | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_req_c_date | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_req_c_note | varchar(200) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_f_req_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_f_req_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_request_no | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_send_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_fstatus_id | lndy_cloth_fix_status_id | no | 1 |
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| ix_Reflndy_cloth_department50 | lndy_cloth_department_id | no | 1 |
| PRIMARY | lndy_cloth_fix_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

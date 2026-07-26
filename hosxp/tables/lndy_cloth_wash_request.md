# `lndy_cloth_wash_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_request_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_request_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_request_note | text | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_request_apove | char(1) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_status | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_w_req_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_w_req_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_request_no | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_wash_send_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_equipment_name | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_type | varchar(2) | YES |  | NULL |  |  |
| doctor_warehouse_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_w_req_wh_date_ap | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_req_wh_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_status | char(2) | YES |  | NULL |  |  |
| lndy_cloth_wash_r_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_wash_r_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_w_req_rec_apove | char(10) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| doctor_receive_code | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_equipment_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_req_rec_date | date | YES |  | NULL |  |  |
| lndy_cloth_wash_request_exp | date | YES |  | NULL |  |  |
| lndy_cloth_wash_request_lot | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_request | char(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_req_want_date | date | YES |  | NULL |  |  |
| supply_prepare_staff | varchar(50) | YES |  | NULL |  |  |
| supply_recheck_staff | varchar(50) | YES |  | NULL |  |  |
| supply_steam_staff | varchar(50) | YES |  | NULL |  |  |
| supply_steam_round | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_equipment_id | lndy_cloth_equipment_id | no | 1 |
| ix_lndy_cloth_wash_send_id | lndy_cloth_wash_send_id | no | 1 |
| ix_Reflndy_cloth_department17 | lndy_cloth_department_id | no | 1 |
| ix_Reflndy_cloth_warehouse18 | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_wash_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

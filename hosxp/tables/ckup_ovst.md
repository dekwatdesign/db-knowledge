# `ckup_ovst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_ovst_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| patient_hn | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| pttype | char(3) | YES |  | NULL |  |  |
| ckup_service_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_visit_status_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_list | varchar(255) | YES |  | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| ckup_proj_id | int(11) | YES | MUL | NULL |  |  |
| ckup_report_result_date | date | YES |  | NULL |  |  |
| ckup_result | varchar(150) | YES |  | NULL |  |  |
| ckup_result_recommend | text | YES |  | NULL |  |  |
| ckup_package_lab | char(1) | YES |  | NULL |  |  |
| ckup_package_xray | char(1) | YES |  | NULL |  |  |
| ckup_lab_result | char(1) | YES |  | NULL |  |  |
| ckup_xray_result | char(1) | YES |  | NULL |  |  |
| ckup_lab_note | varchar(250) | YES |  | NULL |  |  |
| ckup_xray_note | varchar(250) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| xray_order_number | int(11) | YES |  | NULL |  |  |
| lab_order_number_list | varchar(250) | YES |  | NULL |  |  |
| xray_xn_list | varchar(250) | YES |  | NULL |  |  |
| ckup_ovst_doctor | varchar(6) | YES |  | NULL |  |  |
| ckup_patient_comp_id | int(11) | YES |  | NULL |  |  |
| ckup_ovst_doctor_pe | varchar(6) | YES |  | NULL |  |  |
| digital_cert | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| ix_ckup_proj_id | ckup_proj_id | no | 1 |
| ix_ckup_service_type_id | ckup_service_type_id | no | 1 |
| ix_ckup_visit_status_type_id | ckup_visit_status_type_id | no | 1 |
| PRIMARY | ckup_ovst_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

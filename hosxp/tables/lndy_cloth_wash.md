# `lndy_cloth_wash`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_wash_approve_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_wash_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_wash_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_request_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_note | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_wash_type_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_company_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_status | char(2) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_wash_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_no | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_wash_round_out_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_total | int(11) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_w_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_w_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_equipment_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_equipment_id | lndy_cloth_equipment_id | no | 1 |
| ix_Reflndy_cloth_warehouse21 | lndy_cloth_warehouse_id | no | 1 |
| ix_Reflndy_cloth_wash_company33 | lndy_cloth_wash_company_id | no | 1 |
| ix_Reflndy_cloth_wash_round_out23 | lndy_cloth_wash_round_out_id | no | 1 |
| ix_Reflndy_cloth_wash_type22 | lndy_cloth_wash_type_id | no | 1 |
| PRIMARY | lndy_cloth_wash_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

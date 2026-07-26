# `lndy_cloth_wash_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_return_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_return_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_cancel | char(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_return_note | text | YES |  | NULL |  |  |
| lndy_cloth_wash_request_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_no | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| doctor_code_rec | char(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_r_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_wash_re_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_wash_r_c_note | varchar(200) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_wash_return_date_ap | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| ix_Reflndy_cloth_wash_request47 | lndy_cloth_wash_request_id | no | 1 |
| PRIMARY | lndy_cloth_wash_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

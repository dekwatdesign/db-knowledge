# `lndy_cloth_fix`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_fix_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_fix_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_fix_approve_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_fix_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_fix_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_fix_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_fix_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_request_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_note | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_no | varchar(8) | YES |  | NULL |  |  |
| lndy_cloth_fix_status | varchar(2) | YES |  | NULL |  |  |
| lndy_cloth_fix_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_fix_c_note | varchar(10) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth_warehouse38 | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_fix_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `lndy_cloth_expose`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_expose_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_expose_name | char(100) | YES |  | NULL |  |  |
| lndy_cloth_expose_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_expose_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_expose_approve_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_expose_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_expose_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_expose_note | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_expose_no | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_expose_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_expose_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_expose_c_name | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_expose_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_expose_c_date | date | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth_warehouse43 | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_expose_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

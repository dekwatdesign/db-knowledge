# `lndy_cloth_ward_expose`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_ward_expose_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_ward_expose_no | varchar(20) | YES |  | NULL |  |  |
| lndy_cloth_ward_expose_c | char(10) | YES |  | NULL |  |  |
| lndy_cloth_ward_e_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_ward_e_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_ward_expose_apove | char(2) | YES |  | NULL |  |  |
| lndy_cloth_ward_expose_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_ward_expose_name | varchar(100) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_ward_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_ward_last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth_department58 | lndy_cloth_department_id | no | 1 |
| PRIMARY | lndy_cloth_ward_expose_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `lndy_cloth_deliver`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_deliver_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_deliver_name | char(200) | YES |  | NULL |  |  |
| depcode | char(10) | YES |  | NULL |  |  |
| lndy_cloth_deliver_no | varchar(70) | YES |  | NULL |  |  |
| lndy_cloth_deliver_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_deliver_complete | char(20) | YES |  | NULL |  |  |
| lndy_cloth_deliver_user_id | varchar(20) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_deliver_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_delive_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_deliver_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_deliver_cancel | char(10) | YES |  | NULL |  |  |
| lndy_cloth_deliver_c_name | varchar(80) | YES |  | NULL |  |  |
| lndy_cloth_deliver_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_deliver_c_date | date | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_deliver_user_id | lndy_cloth_deliver_user_id | no | 1 |
| ix_Reflndy_cloth_warehouse7 | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_deliver_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

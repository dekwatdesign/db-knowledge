# `lndy_cloth_fix_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_fix_receive_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_fix_receive_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_fix_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_fix_receive_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_fix_receive_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_fix_receive_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_fix_receive_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_receive_note | varchar(50) | YES |  | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_rec_date_approv | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_rec_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_fix_no | varchar(6) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_fix_rec_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_fix_rec_c_note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| ix_Reflndy_cloth_fix40 | lndy_cloth_fix_id | no | 1 |
| PRIMARY | lndy_cloth_fix_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

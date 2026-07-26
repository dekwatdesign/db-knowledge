# `lndy_cloth_wash_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_receive_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_receive_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_cancel | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_amount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_note | text | YES |  | NULL |  |  |
| lndy_cloth_wash_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_aprove | char(2) | YES |  | NULL |  |  |
| lndy_cloth_wash_receive_no | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_w_rec_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_w_rec_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_round_in_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_r_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_wash_r_c_note | varchar(200) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth_wash30 | lndy_cloth_wash_id | no | 1 |
| ix_Reflndy_cloth_wash_round_in36 | lndy_cloth_wash_round_in_id | no | 1 |
| PRIMARY | lndy_cloth_wash_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

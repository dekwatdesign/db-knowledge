# `doctor_order_print_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_order_print_code | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| doctor_order_print_date_time | datetime | YES | MUL | NULL |  |  |
| patient_name | varchar(150) | YES |  | NULL |  |  |
| drug_name | varchar(150) | YES |  | NULL |  |  |
| qty_name | varchar(150) | YES |  | NULL |  |  |
| line1 | varchar(150) | YES |  | NULL |  |  |
| line2 | varchar(150) | YES |  | NULL |  |  |
| line3 | varchar(150) | YES |  | NULL |  |  |
| line4 | varchar(150) | YES |  | NULL |  |  |
| shortlist | varchar(150) | YES |  | NULL |  |  |
| print_status | char(1) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| print_server | varchar(50) | YES | MUL | NULL |  |  |
| item_price | double(15,3) | YES |  | NULL |  |  |
| qty_int | int(11) | YES |  | NULL |  |  |
| patient_age | varchar(30) | YES |  | NULL |  |  |
| patient_pttype_name | varchar(100) | YES |  | NULL |  |  |
| patient_address | varchar(200) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| diagnosis_name | varchar(250) | YES |  | NULL |  |  |
| patient_type | varchar(20) | YES |  | NULL |  |  |
| print_date | date | YES |  | NULL |  |  |
| print_time | time | YES |  | NULL |  |  |
| ward_name | varchar(150) | YES |  | NULL |  |  |
| bed_no | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| print_mode | tinyint(4) | YES |  | NULL |  |  |
| rx_queue | int(11) | YES | MUL | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |
| dep_name | varchar(50) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| line5 | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES |  | NULL |  |  |
| plan_begindate | date | YES |  | NULL |  |  |
| plan_enddate | date | YES |  | NULL |  |  |
| doph_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_order_print_date_time | doctor_order_print_date_time | no | 1 |
| ix_dophid | doph_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_print_server | print_server | no | 1 |
| ix_print_status | print_status | no | 1 |
| ix_rx_queue | rx_queue | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | doctor_order_print_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
